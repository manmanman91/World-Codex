============================================================
WORLD CODEX — README
============================================================

HOW TO OPEN
-----------
Double-click index.html in any modern browser.
No server, no internet, no build step required.
Works in Chrome, Firefox, Edge, Safari.

On mobile: open the file in your browser app.
On iOS: use Files app → share to Safari.


FILE STRUCTURE
--------------
codex/
  index.html   — HTML shell (do not edit)
  style.css    — All visual styles (do not edit unless
                 you want to restyle the app)
  app.js       — Rendering engine (do not edit)
  data.js      — ALL world content (edit this freely)
  README.txt   — This file


HOW TO EDIT CONTENT
-------------------
Open data.js in any text editor (VS Code, Notepad, etc).

All content lives in the CODEX object. Each section
has a comment header explaining its structure.

The top of data.js lists all supported "block types."


ADDING A NEW CARD
-----------------
Find the section you want to edit. Locate the
{ type: 'cards', items: [...] } block. Copy an
existing item object and paste it, then edit the fields:

  {
    name: 'My New Card',
    color: '#818cf8',       // header color
    badge: 'Rare',          // optional badge text
    badgeColor: '#818cf8',  // badge color
    system: 'magic',        // optional system tag
    lines: ['Line 1', 'Line 2'],   // body text
    tags: ['Tag A', 'Tag B'],      // small pills
    expand: {                      // remove if not expandable
      rows: [
        { label: 'Field',  value: 'Value text here' },
      ]
    }
  }


ADDING A NEW TABLE ROW
----------------------
Find the { type: 'table', rows: [...] } block.
Copy an existing row and paste it:

  { cells: ['Column 1', 'Column 2', 'Column 3'],
    color: '#818cf8' }

The color value tints the first cell of that row.


ADDING A NEW SECTION
--------------------
1. Add a nav entry in CODEX.nav:
   { id: 'my_section', label: 'My Section' }

2. Add a section in CODEX.sections:
   my_section: {
     title: 'My Section',
     tabs: null,         // or [ {id, label}, ... ]
     content: {
       main: [           // or use tab ids as keys
         { type: 'info', text: 'Hello world.' },
       ]
     }
   }


COLOR REFERENCE
---------------
Magic system:    #818cf8  (purple)
Ki system:       #f97316  (orange)
Spirit system:   #34d399  (green)
Dual awakened:   #e879f9  (pink)
World / blue:    #38bdf8  (blue)

Rarity colors:
  Uncommon:   #9b91c4
  Rare:       #818cf8
  Very Rare:  #f59e0b
  Legendary:  #f87171


BLOCK TYPE QUICK REFERENCE
---------------------------
info       — highlighted left-bordered info box
             { type:'info', text:'...', color:'#hex' }

callout    — centered italic emphasis box
             { type:'callout', text:'...', color:'#hex' }

h2         — subheading
             { type:'h2', text:'...', color?:'#hex' }

p          — body paragraph (HTML allowed)
             { type:'p', text:'...' }

note       — italic dim note
             { type:'note', text:'...' }

cards      — expandable card grid
             { type:'cards', cols:2|3|4, items:[...] }

table      — data table with hover
             { type:'table', headers:[...], rows:[...] }

pills      — tag pills list
             { type:'pills', label?:'...', items:[...] }

btns       — buttons that reveal a detail card
             { type:'btns', items:[{label, color, detail}] }

xrows      — expandable left/right rows (Sin/Virtue style)
             { type:'xrows', items:[{left, right, expand}] }

rules      — large numbered rule list
             { type:'rules', items:['Rule text', ...] }

============================================================
