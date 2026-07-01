// ============================================================
// WORLD CODEX — RENDERING ENGINE
// Reads from CODEX in data.js and builds the UI dynamically.
// You should not need to edit this file — edit data.js only.
// ============================================================

(function () {
  'use strict';

  let activeSection = null;
  let activeTab = null;

  // ── Init ──────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', () => {
    buildNav();
    showSection(CODEX.nav[0].id);
  });

  // ── Navigation ────────────────────────────────────────────
  function buildNav() {
    const container = q('#nav-btns');
    CODEX.nav.forEach(item => {
      const btn = el('button', { class: 'nav-btn', 'data-id': item.id });
      btn.textContent = item.label;
      btn.addEventListener('click', () => showSection(item.id));
      container.appendChild(btn);
    });
  }

  function showSection(sectionId) {
    activeSection = sectionId;
    qAll('.nav-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.id === sectionId));

    const section = CODEX.sections[sectionId];
    const subBar = q('#subtabs-bar');
    subBar.innerHTML = '';

    if (section.tabs && section.tabs.length > 0) {
      section.tabs.forEach(tab => {
        const btn = el('button', { class: 'tab-btn', 'data-id': tab.id });
        btn.textContent = tab.label;
        btn.addEventListener('click', () => showTab(sectionId, tab.id));
        subBar.appendChild(btn);
      });
      showTab(sectionId, section.tabs[0].id);
    } else {
      showTab(sectionId, 'main');
    }
  }

  function showTab(sectionId, tabId) {
    activeTab = tabId;
    qAll('.tab-btn').forEach(b =>
      b.classList.toggle('active', b.dataset.id === tabId));

    const section = CODEX.sections[sectionId];
    const blocks = (section.content && section.content[tabId]) || [];
    const area = q('#content-area');
    area.innerHTML = '';
    blocks.forEach(block => {
      const node = renderBlock(block);
      if (node) area.appendChild(node);
    });
  }

  // ── Block Router ──────────────────────────────────────────
  function renderBlock(block) {
    const map = {
      info:    renderInfo,
      callout: renderCallout,
      h2:      renderH2,
      p:       renderP,
      note:    renderNote,
      cards:   renderCards,
      table:   renderTable,
      pills:   renderPills,
      btns:    renderBtns,
      xrows:   renderXrows,
      rules:   renderRules,
    };
    return map[block.type] ? map[block.type](block) : null;
  }

  // ── Info Box ──────────────────────────────────────────────
  function renderInfo(b) {
    const d = el('div', { class: 'info-box' });
    if (b.color) d.style.borderLeftColor = b.color;
    const p = el('p');
    p.innerHTML = b.text;
    d.appendChild(p);
    return d;
  }

  // ── Callout ───────────────────────────────────────────────
  function renderCallout(b) {
    const d = el('div', { class: 'callout-box' });
    if (b.color) d.style.borderColor = b.color;
    const p = el('p', { class: 'callout-text' });
    p.innerHTML = b.text;
    d.appendChild(p);
    return d;
  }

  // ── H2 ────────────────────────────────────────────────────
  function renderH2(b) {
    const h = el('h2', { class: 'section-h2' });
    h.textContent = b.text;
    if (b.color) h.style.color = b.color;
    return h;
  }

  // ── Paragraph ─────────────────────────────────────────────
  function renderP(b) {
    const p = el('p', { class: 'body-p' });
    p.innerHTML = b.text;
    return p;
  }

  // ── Note ──────────────────────────────────────────────────
  function renderNote(b) {
    const p = el('p', { class: 'note-text' });
    p.innerHTML = b.text;
    return p;
  }

  // ── Cards ─────────────────────────────────────────────────
  function renderCards(b) {
    const grid = el('div', { class: 'cards-grid cols-' + (b.cols || 3) });

    b.items.forEach(item => {
      const card = el('div', { class: 'card' + (item.expand ? ' expandable' : '') });
      const accent = item.color || '#818cf8';

      // Header
      const hdr = el('div', { class: 'card-header' });
      hdr.style.background = rgba(accent, 0.22);
      hdr.style.borderBottom = '2px solid ' + rgba(accent, 0.6);

      const nameEl = el('span', { class: 'card-name' });
      nameEl.textContent = item.name;
      hdr.appendChild(nameEl);

      if (item.badge) {
        const badge = el('span', { class: 'card-badge' });
        badge.textContent = item.badge;
        badge.style.color = item.badgeColor || accent;
        badge.style.borderColor = item.badgeColor || accent;
        hdr.appendChild(badge);
      }

      if (item.expand) {
        const icon = el('span', { class: 'card-expand-icon' });
        icon.textContent = '▼';
        hdr.appendChild(icon);
      }

      card.appendChild(hdr);

      // Body
      const body = el('div', { class: 'card-body' });

      if (item.system) {
        const sysCols = { magic:'#818cf8', ki:'#f97316', spirit:'#34d399', dual:'#e879f9', world:'#38bdf8' };
        const sc = sysCols[item.system] || accent;
        const pill = el('span', { class: 'system-pill' });
        pill.textContent = item.system.toUpperCase();
        pill.style.background = rgba(sc, 0.15);
        pill.style.color = sc;
        body.appendChild(pill);
      }

      if (item.color_label) {
        const pill = el('span', { class: 'system-pill' });
        pill.textContent = item.color_label;
        pill.style.background = rgba(accent, 0.15);
        pill.style.color = accent;
        body.appendChild(pill);
      }

      const lines = Array.isArray(item.lines) ? item.lines : (item.lines ? [item.lines] : []);
      lines.forEach(line => {
        const p = el('p', { class: 'card-desc' });
        p.innerHTML = line;
        body.appendChild(p);
      });

      if (item.tags && item.tags.length) {
        const tagWrap = el('div', { class: 'card-tags' });
        item.tags.forEach(t => {
          const tag = el('span', { class: 'card-tag' });
          tag.textContent = t;
          tagWrap.appendChild(tag);
        });
        body.appendChild(tagWrap);
      }

      card.appendChild(body);

      // Expand panel
      if (item.expand) {
        const exp = buildExpandPanel(item.expand);
        card.appendChild(exp);

        hdr.addEventListener('click', () => toggleExpand(exp, hdr.querySelector('.card-expand-icon')));
        body.addEventListener('click', () => toggleExpand(exp, hdr.querySelector('.card-expand-icon')));
      }

      grid.appendChild(card);
    });

    return grid;
  }

  // ── Table ─────────────────────────────────────────────────
  function renderTable(b) {
    const wrap = el('div', { class: 'table-wrapper' });
    let html = '<table class="codex-table">';

    if (b.headers) {
      html += '<thead><tr>' +
        b.headers.map(h => '<th>' + h + '</th>').join('') +
        '</tr></thead>';
    }

    html += '<tbody>';
    b.rows.forEach(row => {
      const cells = row.cells || row;
      const color = row.color || '';
      html += '<tr>';
      cells.forEach((cell, i) => {
        const extra = (i === 0 && color)
          ? ' class="rank-cell" style="color:' + color + '"'
          : '';
        html += '<td' + extra + '>' + cell + '</td>';
      });
      html += '</tr>';
    });

    html += '</tbody></table>';
    wrap.innerHTML = html;
    return wrap;
  }

  // ── Pills ─────────────────────────────────────────────────
  function renderPills(b) {
    const wrap = el('div', { class: 'pills-block' });

    if (b.label) {
      const lbl = el('div', { class: 'pills-label' });
      lbl.textContent = b.label;
      wrap.appendChild(lbl);
    }

    const cont = el('div', { class: 'pills-container' });
    b.items.forEach(item => {
      const pill = el('span', { class: 'pill' });
      if (typeof item === 'string') {
        pill.textContent = item;
      } else {
        pill.textContent = item.label;
        if (item.color) {
          pill.style.background = rgba(item.color, 0.15);
          pill.style.color = item.color;
          pill.style.borderColor = rgba(item.color, 0.4);
        }
      }
      cont.appendChild(pill);
    });

    wrap.appendChild(cont);
    return wrap;
  }

  // ── Button Reveal ─────────────────────────────────────────
  function renderBtns(b) {
    const wrap = el('div', { class: 'btns-reveal-block' });
    const grid = el('div', { class: 'reveal-btn-grid' });
    const detail = el('div', { class: 'reveal-detail hidden' });
    let activeBtn = null;

    b.items.forEach(item => {
      const accent = item.color || '#818cf8';
      const btn = el('button', { class: 'reveal-btn' });
      btn.textContent = item.label;
      btn.style.color = accent;
      btn.style.borderColor = accent;

      btn.addEventListener('click', () => {
        if (activeBtn === btn && !detail.classList.contains('hidden')) {
          detail.classList.add('hidden');
          btn.classList.remove('active');
          activeBtn = null;
          return;
        }
        if (activeBtn) activeBtn.classList.remove('active');
        activeBtn = btn;
        btn.classList.add('active');
        detail.classList.remove('hidden');
        detail.innerHTML = '';

        const d = item.detail;

        const titleEl = el('h3', { class: 'detail-title' });
        titleEl.textContent = d.name || item.label;
        titleEl.style.color = accent;
        detail.appendChild(titleEl);

        if (d.rows) {
          const rowsWrap = el('div', { class: 'detail-rows' });
          d.rows.forEach(row => {
            const rowEl = el('div', { class: 'detail-row' });
            const lbl = el('span', { class: 'detail-label' });
            lbl.textContent = row.label;
            const val = el('span', { class: 'detail-value' });
            val.innerHTML = row.value;
            rowEl.appendChild(lbl);
            rowEl.appendChild(val);
            rowsWrap.appendChild(rowEl);
          });
          detail.appendChild(rowsWrap);
        }

        if (d.text) {
          const t = el('p', { class: 'expand-text' });
          t.innerHTML = d.text;
          detail.appendChild(t);
        }

        if (d.blocks) {
          d.blocks.forEach(block => {
            const node = renderBlock(block);
            if (node) detail.appendChild(node);
          });
        }

        if (d.pills) {
          detail.appendChild(renderPills(d.pills));
        }
      });

      grid.appendChild(btn);
    });

    wrap.appendChild(grid);
    wrap.appendChild(detail);
    return wrap;
  }

  // ── Expandable Rows ───────────────────────────────────────
  function renderXrows(b) {
    const wrap = el('div', { class: 'xrows-block' });

    b.items.forEach(item => {
      const row = el('div', { class: 'xrow' + (item.expand ? ' expandable' : '') });
      const main = el('div', { class: 'xrow-main' });

      const left = el('span', { class: 'xrow-left' });
      left.textContent = item.left;
      if (item.leftColor) left.style.color = item.leftColor;

      const sep = el('span', { class: 'xrow-sep' });
      sep.textContent = '/';

      const right = el('span', { class: 'xrow-right' });
      right.textContent = item.right;
      if (item.rightColor) right.style.color = item.rightColor;

      main.appendChild(left);
      main.appendChild(sep);
      main.appendChild(right);

      if (item.expand) {
        const icon = el('span', { class: 'xrow-icon' });
        icon.textContent = '▼';
        main.appendChild(icon);
      }

      row.appendChild(main);

      if (item.expand) {
        const exp = buildExpandPanel(item.expand);
        row.appendChild(exp);
        main.addEventListener('click', () =>
          toggleExpand(exp, main.querySelector('.xrow-icon')));
      }

      wrap.appendChild(row);
    });

    return wrap;
  }

  // ── Numbered Rules ────────────────────────────────────────
  function renderRules(b) {
    const wrap = el('div', { class: 'rules-block' });
    b.items.forEach((text, i) => {
      const item = el('div', { class: 'rule-item' });
      const num = el('span', { class: 'rule-num' });
      num.textContent = String(i + 1);
      const t = el('span', { class: 'rule-text' });
      t.innerHTML = text;
      item.appendChild(num);
      item.appendChild(t);
      wrap.appendChild(item);
    });
    return wrap;
  }

  // ── Shared: Expand Panel Builder ──────────────────────────
  function buildExpandPanel(expand) {
    const exp = el('div', { class: 'card-expand hidden' });

    if (expand.rows) {
      expand.rows.forEach(row => {
        const rowEl = el('div', { class: 'expand-row' });
        const lbl = el('span', { class: 'expand-label' });
        lbl.textContent = row.label;
        const val = el('span', { class: 'expand-value' });
        val.innerHTML = row.value;
        rowEl.appendChild(lbl);
        rowEl.appendChild(val);
        exp.appendChild(rowEl);
      });
    }

    if (expand.text) {
      const t = el('p', { class: 'expand-text' });
      t.innerHTML = expand.text;
      exp.appendChild(t);
    }

    return exp;
  }

  function toggleExpand(panel, icon) {
    panel.classList.toggle('hidden');
    if (icon) icon.textContent = panel.classList.contains('hidden') ? '▼' : '▲';
  }

  // ── DOM Helpers ───────────────────────────────────────────
  function el(tag, attrs) {
    const e = document.createElement(tag);
    if (attrs) Object.entries(attrs).forEach(([k, v]) => e.setAttribute(k, v));
    return e;
  }

  function q(sel) { return document.querySelector(sel); }
  function qAll(sel) { return document.querySelectorAll(sel); }

  function rgba(hex, alpha) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    const r = parseInt(hex.slice(0,2), 16);
    const g = parseInt(hex.slice(2,4), 16);
    const b = parseInt(hex.slice(4,6), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
  }

})();
