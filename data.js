// ============================================================
// WORLD CODEX — DATA FILE
// This is the only file you need to edit to change content.
// See README.txt for full editing instructions.
// ============================================================
// BLOCK TYPES: info | callout | h2 | p | note | cards | table
//              pills | btns | xrows | rules
// ============================================================

const CODEX = {

  // Nav order — keep id values, edit label text freely
  nav: [
    { id: 'physiology', label: 'Physiology'    },
    { id: 'awakening',  label: 'Awakening'     },
    { id: 'magic',      label: 'Magic System'  },
    { id: 'ki',         label: 'Ki System'     },
    { id: 'spirit',     label: 'Spirits'       },
    { id: 'dual',       label: 'Dual Awakened' },
    { id: 'mechanics',  label: 'Mechanics'     },
    { id: 'domains',    label: 'Domains'       },
    { id: 'world',      label: 'World'         },
    { id: 'pacts',      label: 'Pacts'         },
    { id: 'arcadia',    label: 'Arcadia'       },
    { id: 'vampires',   label: 'Vampires'      },
    { id: 'ashfall',    label: 'Ashfall'       },
    { id: 'materials',  label: 'Materials'     },
    { id: 'lore',       label: 'Lore'          },
    { id: 'beastbound', label: 'Beastbound'    },
  ],

  sections: {

    // ===========================================================
    // SECTION 1 — PHYSIOLOGY
    // Add organs: copy an item in the cards array.
    // Fields: name, color, system ('magic'|'ki'), badge?,
    //   lines (array), expand.rows (array of {label, value})
    // ===========================================================
    physiology: {
      title: 'Physiology',
      tabs: null,
      content: {
        main: [
          { type: 'info', color: '#818cf8', text: 'Five core organs govern the two power systems. Click any card to reveal damage types and full descriptions.' },
          {
            type: 'cards', cols: 2,
            items: [
              {
                name: 'Mana Hall', color: '#818cf8', system: 'magic',
                lines: ['Stores all raw mana.', 'Physical size at birth determines talent ceiling.'],
                expand: { rows: [
                  { label: 'System',   value: 'Magic' },
                  { label: 'Damage',   value: 'Pathway Scorch' },
                  { label: 'Function', value: 'Stores raw mana. Size fixed at birth — determines the caster\'s permanent maximum talent cap. Cannot be enlarged after birth.' },
                ]}
              },
              {
                name: 'Mana Pathways', color: '#818cf8', system: 'magic',
                lines: ['Veins for mana flow.', 'Width and flow rate determine casting speed and power.'],
                expand: { rows: [
                  { label: 'System',   value: 'Magic' },
                  { label: 'Damage',   value: 'Pathway Scorch' },
                  { label: 'Function', value: 'Network of mana veins throughout the body. Width and flow rate govern casting speed and raw power output. Can be widened slowly over years of cultivation.' },
                ]}
              },
              {
                name: 'Ki Core', color: '#f97316', system: 'ki',
                lines: ['Dense center in the lower dantian.', 'Stores refined ki / life energy.', 'Grows via breath arts and body tempering.'],
                expand: { rows: [
                  { label: 'System',   value: 'Ki' },
                  { label: 'Damage',   value: 'Meridian Damage' },
                  { label: 'Location', value: 'Lower dantian — below the navel, center of the body.' },
                  { label: 'Function', value: 'Dense reservoir of refined ki and life energy. Expanded through breath cultivation and body tempering. Growth is slow but permanent.' },
                ]}
              },
              {
                name: 'Meridian Channels', color: '#f97316', system: 'ki',
                lines: ['Network for ki circulation.', 'Governs body enhancement.', 'Blockage = Meridian Damage.'],
                expand: { rows: [
                  { label: 'System',   value: 'Ki' },
                  { label: 'Damage',   value: 'Meridian Damage' },
                  { label: 'Function', value: 'Channel network carrying ki through the body. Controls physical enhancement and technique output. Blockage or rupture causes Meridian Damage.' },
                ]}
              },
              {
                name: 'Tenketsu Points', color: '#f97316', system: 'ki',
                lines: ['361 nodes where ki can be expelled.', 'Closed by default — open via training.', 'Opening all 361 costs −36.1% max ki pool.'],
                expand: { rows: [
                  { label: 'System',   value: 'Ki' },
                  { label: 'Damage',   value: 'Tenketsu Scorch' },
                  { label: 'Count',    value: '361 nodes distributed across the body' },
                  { label: 'Default',  value: 'Closed — ki only reinforces the body internally' },
                  { label: 'When Open', value: 'Ki expelled as constructs: clones, elemental shaping, puppet strings, chakra strings' },
                  { label: 'Cost',     value: 'Opening 1 tenketsu permanently costs 0.1% max ki pool. All 361 open = −36.1% total pool.' },
                  { label: 'Counters', value: 'Pressure point arts. Cold Iron needles pin shut for 1 hour.' },
                ]}
              },
            ]
          }
        ]
      }
    },

    // ===========================================================
    // SECTION 2 — AWAKENING
    // Edit types, age table, testing info, regional bias table,
    // and racial leans cards freely.
    // ===========================================================
    awakening: {
      title: 'Awakening',
      tabs: null,
      content: {
        main: [
          { type: 'h2', text: 'Awakening Types' },
          {
            type: 'cards', cols: 3,
            items: [
              {
                name: 'Single Awakening', color: '#818cf8',
                badge: '99%+',
                lines: ['Triggers Mana Hall OR Ki Core — never both.', 'The other system stays permanently dormant.'],
              },
              {
                name: 'Dual Awakening', color: '#e879f9',
                badge: '<0.01%',
                lines: ['Both Mana Hall and Ki Core activate.', '50% slower growth in both until True Core / Master stage.', 'Synergy unlocks after that threshold.'],
              },
              {
                name: 'Failed Awakening', color: '#4a4570',
                badge: 'Majority',
                lines: ['Both systems remain permanently shut.', 'No magic. No ki. Majority of the global population.'],
              },
            ]
          },
          { type: 'h2', text: 'Age Risk at Awakening' },
          {
            type: 'table',
            headers: ['Age Range', 'Tier', 'Effect'],
            rows: [
              { cells: ['Age 6–8', 'Genius Tier', 'Highest possible ceiling'], color: '#34d399' },
              { cells: ['Age 9–11', 'Standard', 'Normal potential'], color: '#818cf8' },
              { cells: ['Age 12–14', 'Late', '−30% lower potential ceiling'], color: '#f97316' },
            ]
          },
          { type: 'h2', text: 'Testing' },
          { type: 'info', color: '#38bdf8', text: 'Affinity Testing Crystals are used worldwide. Touch the crystal — it glows the color of your affinities. Roughly 5% false-negative rate. Standard testing occurs at age 6.' },
          { type: 'h2', text: 'Regional Awakening Bias' },
          {
            type: 'table',
            headers: ['Region', 'Magic %', 'Ki %', 'Dual %'],
            rows: [
              { cells: ['Orinthia (West)', '80%', '19%', '1%'], color: '#818cf8' },
              { cells: ['Qinzhou (East)', '19%', '80%', '1%'], color: '#f97316' },
              { cells: ['North', '40%', '60%', 'Rare'], color: '#38bdf8' },
              { cells: ['South', '70%', '30%', 'Rare'], color: '#34d399' },
              { cells: ['Miraj', '50%', '50%', 'Rare'], color: '#f59e0b' },
              { cells: ['Frontier', 'Random', 'Random', 'Random'], color: '#fbbf24' },
            ]
          },
          { type: 'h2', text: 'Racial Leans — tap cards to see notes' },
          {
            type: 'cards', cols: 3,
            items: [
              { name: 'Humans', color: '#9b91c4', lines: ['50% Magic / 50% Ki', 'Baseline — no lean.'],
                expand: { rows: [{ label: 'Note', value: 'Adaptable. No unified lean. Regional environment tends to shift the ratio over generations.' }]}},
              { name: 'Elves', color: '#818cf8', lines: ['95% Magic / 5% Ki', 'Magically dominant.'],
                expand: { rows: [{ label: 'Note', value: 'Spirit magic, healing, and longevity are deeply culturally tied to magic use. Ki elves exist but are rare and often outcast.' }]}},
              { name: 'Dwarves', color: '#f97316', lines: ['30% Magic / 70% Ki', 'Ki-dominant.'],
                expand: { rows: [{ label: 'Note', value: 'Forge-culture prizes physical cultivation and runic channeling over raw mana use. Magic dwarves exist and often become master rune scribes.' }]}},
              { name: 'Beastkin', color: '#f97316', lines: ['10% Magic / 90% Ki', 'Heavily ki-leaning.'],
                expand: { rows: [{ label: 'Note', value: 'Instinctual ki users. Body tempering starts at childhood. The rare magic-awakened beastkin often join mage institutions.' }]}},
              { name: 'Merfolk', color: '#38bdf8', lines: ['99% Magic / 1% Ki', 'Almost pure magic.'],
                expand: { rows: [{ label: 'Note', value: 'Underwater pressure and water affinity are nearly universal. A ki-awakened merfolk is considered a mythic anomaly.' }]}},
              { name: 'Giants', color: '#a78bfa', lines: ['15% Magic / 85% Ki', 'Ki-dominant.'],
                expand: { rows: [{ label: 'Note', value: 'Ancient power tradition built on raw physical cultivation. Giants who awaken magic are typically revered as seers or shamans.' }]}},
              { name: 'Vampires', color: '#f472b6', lines: ['90% Magic / 10% Ki', 'Blood-to-mana 2:1.', 'Tri-Blooded common.'],
                expand: { rows: [{ label: 'Note', value: 'Blood converts to mana at 2:1 efficiency — most efficient conversion of any race. Tri-Blooded trait is 3× more common in vampires than any other race.' }]}},
              { name: 'Dragonkin', color: '#ef4444', lines: ['Offspring of pure dragons.', 'Powerful but rare and isolated.'],
                expand: { rows: [{ label: 'Note', value: 'Inherit a fragment of draconic power. Affinities highly variable based on parent dragon\'s element. Often hold single strong innate affinity.' }]}},
              { name: 'Dragons', color: '#dc2626', lines: ['Apex beings.', 'May make pacts with mortals.'],
                expand: { rows: [{ label: 'Note', value: 'Not subject to awakening — born with full draconic power. May grant pacts. Cannot be bound. Each dragon is a unique entity.' }]}},
              { name: 'Angels', color: '#fde68a', lines: ['Heaven-born power.', 'May descend and make pacts.'],
                expand: { rows: [{ label: 'Note', value: 'Do not awaken in the mortal sense. Power is intrinsic to their nature. Descend only with heavenly permission or in exceptional circumstances.' }]}},
              { name: 'Demons', color: '#f87171', lines: ['Hell-born power.', 'May cross into the mortal world.'],
                expand: { rows: [{ label: 'Note', value: 'Vary wildly in power and motivation. Some seek contractors, others seek freedom. All carry a trace of their Sin lord\'s nature.' }]}},
              { name: 'Spirits', color: '#34d399', lines: ['Spirit Realm power.', 'Appear near sacred sites.'],
                expand: { rows: [{ label: 'Note', value: 'Do not originate in the mortal world. Manifest where leylines concentrate or where nature is undisturbed for centuries.' }]}},
            ]
          }
        ]
      }
    },

    // ===========================================================
    // SECTION 3 — MAGIC SYSTEM
    // Sub-tabs: Elements, Ranks, Casting, Schools
    // ===========================================================
    magic: {
      title: 'Magic System',
      tabs: [
        { id: 'elements', label: 'Elements' },
        { id: 'ranks',    label: 'Ranks'    },
        { id: 'casting',  label: 'Casting'  },
        { id: 'schools',  label: 'Schools'  },
      ],
      content: {
        elements: [
          {
            type: 'cards', cols: 3,
            items: [
              { name: 'Fire', color: '#ef4444', badge: 'vs Water',
                lines: ['Combustion, heat, explosive force.'],
                expand: { rows: [{ label: 'Opposite', value: 'Water — costs 10× mana if not innate (or 3× with Prism)' }, { label: 'Derivative', value: 'Fire + Earth = Magma' }]}},
              { name: 'Water', color: '#38bdf8', badge: 'vs Fire',
                lines: ['Flow, ice, blood manipulation, pressure.', 'NO innate healing.'],
                expand: { rows: [{ label: 'Opposite', value: 'Fire — costs 10× mana if not innate (or 3× with Prism)' }, { label: 'Derivative', value: 'Water + Wind = Ice / Storm' }, { label: 'Note', value: 'Water affinity grants no innate healing ability — that is a separate School.' }]}},
              { name: 'Wind', color: '#a3e635', badge: 'vs Earth',
                lines: ['Speed, cutting, flight, sound manipulation.'],
                expand: { rows: [{ label: 'Opposite', value: 'Earth — costs 10× mana if not innate (or 3× with Prism)' }, { label: 'Derivative', value: 'Water + Wind = Ice / Storm' }]}},
              { name: 'Earth', color: '#92400e', badge: 'vs Wind',
                lines: ['Defense, metal, gravity, terrain shaping.'],
                expand: { rows: [{ label: 'Opposite', value: 'Wind — costs 10× mana if not innate (or 3× with Prism)' }, { label: 'Derivative', value: 'Fire + Earth = Magma' }]}},
              { name: 'Light', color: '#fde68a', badge: 'vs Dark',
                lines: ['Hard-light constructs, rays, flash-blind, radiant burn, purification.'],
                expand: { rows: [{ label: 'Opposite', value: 'Dark — costs 10× mana if not innate (or 3× with Prism)' }]}},
              { name: 'Dark', color: '#7c3aed', badge: 'vs Light',
                lines: ['Shadow blades, entropy drain, void zones, curse catalyst.'],
                expand: { rows: [{ label: 'Opposite', value: 'Light — costs 10× mana if not innate (or 3× with Prism)' }]}},
            ]
          },
          { type: 'h2', text: 'Elemental Rules' },
          {
            type: 'cards', cols: 1,
            items: [
              { name: 'Opposition Rule', color: '#ef4444',
                lines: ['Casting an opposite element costs 10× mana if it is not innate.'] },
              { name: 'Prism Rule', color: '#e879f9',
                lines: ['3+ affinities including opposites drops the penalty to 3× cost.', '2+ affinities = Prism Affinity.'] },
              { name: 'Combination Law', color: '#818cf8',
                lines: ['2+ affinities unlock derivative magic: Fire+Earth=Magma, Water+Wind=Ice/Storm.'] },
            ]
          },
          { type: 'h2', text: 'Affinity Distribution' },
          {
            type: 'table',
            headers: ['Distribution', 'Rarity', 'Notes'],
            rows: [
              { cells: ['Single Affinity', '70%', 'Standard mage'], color: '#818cf8' },
              { cells: ['Dual Affinity (Prism)', '25%', 'Derivative magic unlocked'], color: '#e879f9' },
              { cells: ['Triple (3-element Prism)', '4.9%', 'Strong versatility'], color: '#f59e0b' },
              { cells: ['Quad (True Prodigy)', '0.1%', 'Recorded in history only'], color: '#ef4444' },
              { cells: ['5+ Affinities', 'Impossible naturally', 'Requires blessing / pact / relic'], color: '#f87171' },
            ]
          },
        ],
        ranks: [
          { type: 'info', color: '#818cf8', text: 'Rank Gate enforced: cannot learn or cast above current stage. Each rank unlocks a new tier of spell complexity.' },
          {
            type: 'table',
            headers: ['Rank', 'Stage', 'Spell Tier', 'Power', 'Example Spells'],
            rows: [
              { cells: ['1', 'Awakened Stage', 'Spark Spell', 'Trivial', 'Spark flame, breeze, drip water'], color: '#818cf8' },
              { cells: ['2', 'Adept Stage', 'Combat Spell', 'Light', 'Fireball, stone wall, wind blade'], color: '#818cf8' },
              { cells: ['3', 'Expert Stage', 'War Spell', 'Heavy', 'Flame lance, earth fort, lightning bolt'], color: '#a78bfa' },
              { cells: ['4', 'Master Stage', 'Siege Spell', 'Extreme', 'Firestorm, teleport squad, raise 30m wall'], color: '#f59e0b' },
              { cells: ['5', 'Archmage Stage', 'Disaster Spell', 'Extreme + External', 'Change weather, summon meteor'], color: '#f97316' },
              { cells: ['6', 'Grand Archmage', 'Calamity Spell', 'Beyond Mortal Hall', 'Regional drought, sink an island'], color: '#ef4444' },
              { cells: ['7', 'Sovereign Archon', 'Law Spell', 'Transcendent', '"No death in this city" / "Time rewind 10s"'], color: '#f87171' },
            ]
          },
        ],
        casting: [
          { type: 'h2', text: 'Casting Methods' },
          {
            type: 'cards', cols: 3,
            items: [
              { name: 'Incantation Casting', color: '#818cf8',
                lines: ['Cast time: 3–10 seconds.', '+40% power, +30% efficiency.', 'Most used for War Spell and above.'],
                expand: { rows: [
                  { label: 'Speed',  value: '3–10 seconds' },
                  { label: 'Bonus',  value: '+40% power, +30% efficiency' },
                  { label: 'Use',    value: 'Standard for War Spell+. Requires spoken incantation.' },
                ]}},
              { name: 'Quick Casting', color: '#34d399',
                lines: ['Cast time: under 1 second.', 'Base power, base efficiency.', 'Standard for Spark / Combat spells. No incantation needed.'],
                expand: { rows: [
                  { label: 'Speed',  value: 'Under 1 second' },
                  { label: 'Bonus',  value: 'None — base power and cost' },
                  { label: 'Use',    value: 'Default for Spark and Combat tier. No spoken words or gesture required.' },
                ]}},
              { name: 'Silent Casting', color: '#7c3aed',
                lines: ['Covert — no sound or movement.', '−20% power, −20% efficiency.', 'Master Stage+: no penalty.'],
                expand: { rows: [
                  { label: 'Speed',  value: 'Same as Quick Casting' },
                  { label: 'Penalty', value: '−20% power, −20% efficiency (Master+ removes penalty)' },
                  { label: 'Use',    value: 'Stealth combat, assassination, infiltration. No visible tell.' },
                ]}},
            ]
          },
        ],
        schools: [
          { type: 'info', color: '#818cf8', text: 'Schools are specialized branches of magic study. A mage\'s school determines technique focus, not affinity. Multiple schools can be learned.' },
          {
            type: 'pills',
            items: [
              'Spirit', 'Rune', 'Alchemy', 'Curse', 'Sealing / Binding',
              'Divination', 'Holy', 'Blood', 'Spatial', 'Time',
              'Soulfire', 'Gravity', 'Mirror', 'Dream', 'Metal',
              'Storm', 'Bone', 'Star', 'Decay / Entropy', 'Void',
              'Beast King', 'Oath', 'Resonance', 'Plague',
              'Illusion Master', 'Eclipse', 'Spirit Sovereign',
            ]
          },
        ],
      }
    },

    // ===========================================================
    // SECTION 4 — KI SYSTEM
    // Sub-tabs: Realms, Execution, Chakra, Gates, Tenketsu, Sage
    // ===========================================================
    ki: {
      title: 'Ki System',
      tabs: [
        { id: 'realms',    label: 'Realms & Arts' },
        { id: 'execution', label: 'Execution'      },
        { id: 'chakra',    label: 'Chakra & Natures'},
        { id: 'gates',     label: 'Eight Gates'    },
        { id: 'tenketsu',  label: 'Tenketsu'       },
        { id: 'sage',      label: 'Sage Mode'      },
      ],
      content: {
        realms: [
          { type: 'info', color: '#f97316', text: 'Rank Gate enforced: cannot learn or execute above current realm. Each realm unlocks a new tier of art complexity.' },
          {
            type: 'table',
            headers: ['Rank', 'Realm', 'Art Tier', 'Power', 'Example Arts'],
            rows: [
              { cells: ['1', 'Awakened Realm', 'Pulse Art', 'Trivial', 'Reinforce punch, 10s sprint, night vision'], color: '#f97316' },
              { cells: ['2', 'Refined Realm', 'Flow Art', 'Light', 'Iron skin, leap 20m, shatter stone'], color: '#f97316' },
              { cells: ['3', 'Tempered Realm', 'Surge Art', 'Heavy', 'Faster than eyes, blade wind, steel body'], color: '#f59e0b' },
              { cells: ['4', 'True Core Realm', 'Manifest Art', 'Extreme', 'Afterimage clones, ki blade, walk on air'], color: '#ef4444' },
              { cells: ['5', 'Grandmaster Realm', 'Domain Art', 'Extreme + External', '100m pressure aura, suppress magic'], color: '#f87171' },
              { cells: ['6', 'Saint Realm', 'Edict Art', 'Beyond Mortal Core', 'Mountain-split strike, body reform, live 500yr'], color: '#dc2626' },
              { cells: ['7', 'Heaven-Opening Realm', 'Law Art', 'Transcendent', '"I cannot be cut" / "Step crosses 10 miles"'], color: '#b91c1c' },
            ]
          },
          { type: 'h2', text: 'Art Scrolls' },
          { type: 'info', color: '#f97316', text: 'Ki equivalent of Spell Tomes. Written in Fleshscript on preserved skin. 3× slower to learn than direct tutelage. 10% mislearn chance = Meridian Damage. Forbidden Scrolls: Arcadia Archive holds Law Art scrolls — reading below Edict Stage = instant Pathway Scorch + Meridian Damage.' },
        ],
        execution: [
          { type: 'h2', text: 'Execution Methods' },
          {
            type: 'cards', cols: 3,
            items: [
              { name: 'Form Casting', color: '#f97316',
                lines: ['Cast time: 2–5 second kata.', '+40% power, +30% efficiency.', 'Standard for Surge Art and above. Physical kata required.'],
                expand: { rows: [
                  { label: 'Speed',  value: '2–5 second physical kata' },
                  { label: 'Bonus',  value: '+40% power, +30% efficiency' },
                  { label: 'Use',    value: 'Standard for Surge Art+. Requires visible body motion — readable by opponents.' },
                ]}},
              { name: 'Flash Casting', color: '#34d399',
                lines: ['Under 1 second.', 'Base power, base efficiency.', 'Standard in duels. No form required.'],
                expand: { rows: [
                  { label: 'Speed',  value: 'Under 1 second' },
                  { label: 'Bonus',  value: 'None — base power and cost' },
                  { label: 'Use',    value: 'Default duel standard. No external tell. Instant release.' },
                ]}},
              { name: 'Still Casting', color: '#7c3aed',
                lines: ['Covert — internal only.', '−20% power, −20% efficiency.', 'True Core+: no penalty.'],
                expand: { rows: [
                  { label: 'Speed',  value: 'Same as Flash Casting' },
                  { label: 'Penalty', value: '−20% power, −20% efficiency (True Core+ removes penalty)' },
                  { label: 'Use',    value: 'No external movement. Undetectable by sight. True Core+ can use without penalty.' },
                ]}},
            ]
          },
        ],
        chakra: [
          { type: 'info', color: '#f97316', text: 'Chakra techniques are ki circulated through both Mana Pathways and Meridians in specific patterns. Costs ki, not mana. Nullstone does NOT block chakra. Cold Iron does.' },
          { type: 'h2', text: 'Basic Natures — 1 month training per nature with matching mana crystal. Most practitioners learn 1–2.' },
          {
            type: 'pills',
            items: [
              { label: 'Fire Nature',      color: '#ef4444' },
              { label: 'Water Nature',     color: '#38bdf8' },
              { label: 'Wind Nature',      color: '#a3e635' },
              { label: 'Earth Nature',     color: '#92400e' },
              { label: 'Lightning Nature', color: '#fde68a' },
            ]
          },
          { type: 'h2', text: 'Advanced Natures — requires Master Stage minimum' },
          {
            type: 'table',
            headers: ['Nature', 'Components', 'Req'],
            rows: [
              { cells: ['Ice',  'Water + Wind',          'Master Stage'], color: '#38bdf8' },
              { cells: ['Lava', 'Fire + Earth',          'Master Stage'], color: '#ef4444' },
              { cells: ['Wood', 'Water + Earth + Yang',  'Master Stage'], color: '#34d399' },
            ]
          },
          { type: 'h2', text: 'Chakra Control Training' },
          {
            type: 'table',
            headers: ['Exercise', 'Stage Req', 'Method', 'Unlocks'],
            rows: [
              { cells: ['Tree Walking',      'Flow Stage',   'Run ki to feet to stick to surfaces',              'Surface Adherence'], color: '#34d399' },
              { cells: ['Water Walking',     'Surge Stage',  'Emit ki from tenketsu to repel water surface',     'Still Casting while in motion'], color: '#38bdf8' },
              { cells: ['Leaf Concentration','Master Stage', 'Stick leaf to forehead with precise ki',           'Sigil Casting without drawing'], color: '#f59e0b' },
              { cells: ['Chakra Strings',    'True Core+',   'Tenketsu expel ki threads',                        'Puppetry / weapon control / Borrowed Casting to ally'], color: '#e879f9' },
            ]
          },
        ],
        gates: [
          { type: 'info', color: '#f97316', text: 'Eight Gates are voluntary limiters in the Meridians. Opening them floods ki past safe levels. Gate 3+ causes Meridian Damage on close. Oathslate can forbid Gate 8 in military contracts.' },
          {
            type: 'table',
            headers: ['Gate', 'Name', 'Location', 'Effect', 'Cost', 'Min Stage'],
            rows: [
              { cells: ['1', 'Gate of Opening',  'Brain',         'Flash Casting −50% cost / 1hr fatigue',                    '1hr fatigue',                   'Flow'],    color: '#34d399' },
              { cells: ['2', 'Gate of Rest',     'Brain',         'Stamina regen 5×',                                          'Muscles tear — 1 day rest',     'Flow'],    color: '#34d399' },
              { cells: ['3', 'Gate of Life',     'Spinal cord',   'Skin red — +1 Stage strength/speed',                       'Meridian Damage = Combat Spell', 'Surge'],   color: '#f59e0b' },
              { cells: ['4', 'Gate of Pain',     'Spinal cord',   'Ignore pain — visible ki aura',                            '−20% max ki pool for 1 week',   'Surge'],   color: '#f59e0b' },
              { cells: ['5', 'Gate of Limit',    'Abdomen',       '+2 Stages movement — air ignites around user',             'Hair white — 50% chance cripple limb', 'Manifest'], color: '#f97316' },
              { cells: ['6', 'Gate of View',     'Stomach',       'Punch = shockwave — Void Steps free',                      'Internal bleeding',             'Manifest'], color: '#f97316' },
              { cells: ['7', 'Gate of Wonder',   'Below stomach', 'Aura = Domain Art pressure — blue steam',                  'Bones crack — 1 month recovery','Domain'],  color: '#ef4444' },
              { cells: ['8', 'Gate of Death',    'Heart',         '+5 Stages — 5min — Law Art tier stats',                    'See survival outcomes below',   'Edict'],   color: '#dc2626' },
            ]
          },
          { type: 'h2', text: 'Gate of Death — Survival Outcomes' },
          {
            type: 'table',
            headers: ['Host Type', 'Survival?', 'Aftermath'],
            rows: [
              { cells: ['Normal person',           'Death',   'Timer ends = death. No revival. No blessing saves you.'], color: '#ef4444' },
              { cells: ['Temperance Blessing',     'Survive', '−99% max ki pool permanent. All Gates locked forever. −90% remaining lifespan.'], color: '#f59e0b' },
              { cells: ['Ascended',                'Survive', '−80% max ki permanent. Cindered state: −50% all physical stats permanent. Gates 1–7 locked.'], color: '#f97316' },
              { cells: ['Ascended + Temperance',   'Survive', '−50% max ki permanent. Gate 8 locked forever. 1 year coma after use.'], color: '#34d399' },
            ]
          },
        ],
        tenketsu: [
          { type: 'h2', text: 'Tenketsu Points' },
          {
            type: 'cards', cols: 2,
            items: [
              { name: 'Default State (Closed)', color: '#4a4570',
                lines: ['Ki only reinforces the body internally.', 'No external ki constructs possible.'] },
              { name: 'Open State', color: '#f97316',
                lines: ['Ki leaves the body as constructs.', 'Enables: clones, elemental shaping, puppet strings, chakra strings.'] },
              { name: 'Cost to Open', color: '#ef4444',
                lines: ['Opening 1 tenketsu permanently costs 0.1% max ki pool.', 'All 361 open = −36.1% total pool.'] },
              { name: 'Forced Shut (Tenketsu Scorch)', color: '#f97316',
                lines: ['−10% ki output per 36 tenketsu closed.', 'Recovery: 1 week per 36 closed, or healing art.'] },
              { name: 'Counters', color: '#38bdf8',
                lines: ['Still Casting + pressure point arts.', 'Cold Iron needles: pin shut for 1 hour.'] },
            ]
          },
        ],
        sage: [
          { type: 'h2', text: 'Sage Mode' },
          { type: 'info', color: '#34d399', text: 'Requires an active Land Pact with a Land Bound Spirit.' },
          {
            type: 'table',
            headers: ['Property', 'Detail'],
            rows: [
              { cells: ['Method',   'Enter Still Casting — open tenketsu — spirit floods world-ki into the user for 10 minutes'], color: '#34d399' },
              { cells: ['Effect',   '+2 Stages — sensory range 10 miles — all physical stats up — ki Arts gain land element'], color: '#34d399' },
              { cells: ['Risk',     'Move during spirit intake = Petrify = Meridian Damage ×3. Corrupted land = madness.'], color: '#ef4444' },
              { cells: ['Cooldown', 'Land spirit recharges: 1 week'], color: '#f97316' },
            ]
          },
        ],
      }
    },

    // ===========================================================
    // SECTION 5 — SPIRIT SYSTEM
    // Sub-tabs: Types, Pact Rules, Tiers, Evolution
    // ===========================================================
    spirit: {
      title: 'Spirit System',
      tabs: [
        { id: 'types',     label: 'Types'      },
        { id: 'pact_rules',label: 'Pact Rules' },
        { id: 'tiers',     label: 'Tiers'      },
        { id: 'evolution', label: 'Evolution'  },
      ],
      content: {
        types: [
          {
            type: 'cards', cols: 2,
            items: [
              { name: 'Elemental Spirits', color: '#818cf8', color_label: 'Magic Lean',
                lines: ['Fire / Water / Wind / Earth / Light / Dark / Lightning / Ice / Metal / Space etc.'],
                expand: { rows: [{ label: 'Lean', value: 'Magic' }, { label: 'Note', value: 'Most numerous spirit type. Each element has its own hierarchy from Lesser to Sovereign.' }]}},
              { name: 'Beast Spirits', color: '#f97316', color_label: 'Ki Lean',
                lines: ['Tiger / Dragon / Phoenix / Turtle / Wolf — boost Ki techniques.'],
                expand: { rows: [{ label: 'Lean', value: 'Ki' }, { label: 'Note', value: 'Bond with ki users. Boost physical cultivation and ki arts rather than spells.' }]}},
              { name: 'Ancestor Spirits', color: '#a78bfa', color_label: 'Either Lean',
                lines: ['Dead masters who teach arts or spells.', 'Honor-based bond.'],
                expand: { rows: [{ label: 'Lean', value: 'Either' }, { label: 'Note', value: 'Inherited through bloodlines or formed at a master\'s death. Can teach what they knew in life. Cannot learn new things.' }]}},
              { name: 'Weapon Spirits', color: '#f59e0b', color_label: 'Either Lean',
                lines: ['Born in legendary blades or armor.', 'Self-repair. Manifests as art or spell.'],
                expand: { rows: [{ label: 'Lean', value: 'Either' }, { label: 'Note', value: 'Require use in battle to grow. A weapon spirit that is never drawn weakens over time.' }]}},
              { name: 'Concept Spirits', color: '#e879f9', color_label: 'Either Lean',
                lines: ['"Sword" / "Mountain" / "Silence" — grant technique-like boosts.', 'Very rare.'],
                expand: { rows: [{ label: 'Lean', value: 'Either' }, { label: 'Note', value: 'Born from abstract concepts becoming aware. Extremely rare. Bonds are unusual and often transform the contractor\'s fighting style.' }]}},
              { name: 'Eastern Ki Spirits', color: '#f97316', color_label: 'Ki Lean',
                lines: ['Breath Wisps / Iron Koi / Storm Tigers / Moon Rabbits.'],
                expand: { rows: [{ label: 'Lean', value: 'Ki' }, { label: 'Note', value: 'Unique to Qinzhou and neighboring regions. Tied to cultivation tradition rather than elemental nature.' }]}},
            ]
          },
        ],
        pact_rules: [
          { type: 'h2', text: 'What Each Party Gets' },
          {
            type: 'cards', cols: 2,
            items: [
              { name: 'Spirit Gets', color: '#34d399',
                lines: ['Experience and growth.', 'Mana or ki energy (tithe).', 'Evolution chance.'] },
              { name: 'User Gets', color: '#818cf8',
                lines: ['+20–50% power boost.', '−20–50% cost on matching element.', 'Autonomous spirit action.', 'Sensory link to spirit.'] },
            ]
          },
          { type: 'h2', text: 'Pact Rules' },
          {
            type: 'cards', cols: 1,
            items: [
              { name: 'Mutual Benefit Only', color: '#34d399',
                lines: ['No dominance pacts. No backlash on breaking unless betrayal occurred.'] },
              { name: 'No Greater Forms', color: '#ef4444',
                lines: ['A Water spirit will NOT grant blood magic. Pact is bound to the spirit\'s own nature.'] },
              { name: 'Multiple Spirits', color: '#a78bfa',
                lines: ['Rare to hold multiple. Discord occurs if opposites are held.', 'Charity blessing negates discord.'] },
              { name: 'Royal Limit', color: '#f59e0b',
                lines: ['Maximum 1 Royal spirit per person. Royal spirits are jealous — holding others causes conflict.'] },
              { name: 'Hollowed Risk', color: '#dc2626',
                lines: ['Each pact tithes a % of pool. Total tithe reaching 100% = Hollowed — you become an NPC for spirits.'] },
            ]
          },
          { type: 'h2', text: 'Pact Tiers & Costs' },
          {
            type: 'table',
            headers: ['Tier', 'Pool Tithe', 'Communion', 'Presence', 'Max Held'],
            rows: [
              { cells: ['Minor',    '3%',  'Whispers — 1 Combat Spell/day',     'Faint whispers',         '3–5'], color: '#34d399' },
              { cells: ['True',     '8%',  '1hr/week communion required',       'Occasional dreams',      '2–3'], color: '#818cf8' },
              { cells: ['Noble',    '15%', 'Spirit votes on decisions',         'Daily presence',         '1–2, jealous'], color: '#a78bfa' },
              { cells: ['Earl',     '20%', 'Manifests 1hr/day physically',      'Mood bleed',             '1 only'], color: '#f59e0b' },
              { cells: ['Royal',    '30%', 'Co-inhabits — sees memories',       'Identity echoes',        '1 only, no others'], color: '#ef4444' },
              { cells: ['Sovereign','50%', 'Shares body control in crisis',     'Sense loss if angered',  '1 only, legendary'], color: '#dc2626' },
            ]
          },
          { type: 'note', text: 'Unity Form (Royal/Sovereign only): after decades of trust + a life-death moment. 5 min max — +1 Stage — 3 days exhaustion. Permanent fusion = myth (1 per 10,000 years).' },
        ],
        tiers: [
          {
            type: 'table',
            headers: ['Tier', 'Appearance', 'Power Boost', 'Cost Reduction', 'Rarity'],
            rows: [
              { cells: ['Lesser',    'Flicker / wisp',               '+20–30%', '−20–30%', 'Common'], color: '#34d399' },
              { cells: ['Noble',     'Human silhouette — 5m weather','+40–60%', '−40–50%', 'Rare — 1 per region'], color: '#818cf8' },
              { cells: ['Royal',     '50m elemental weather',        '+80–120%','−60–70%', '1–3 per element globally'], color: '#f59e0b' },
              { cells: ['Sovereign', 'Does not pact — blessings only','—',      '—',       'Born from Spirit Realm'], color: '#ef4444' },
            ]
          },
        ],
        evolution: [
          {
            type: 'table',
            headers: ['Transition', 'Standard Path', 'Accelerated Path'],
            rows: [
              { cells: ['Lesser → Noble',     '300–500 years of pacts',                      '1 lifelong pact with a genius / Prism user'], color: '#34d399' },
              { cells: ['Noble → Royal',      '1,000+ years of pacts',                       'A world-changing event with contractor'], color: '#818cf8' },
              { cells: ['Royal → Sovereign',  'Never via pact',                              'Sovereigns are born from the Spirit Realm itself — no upgrade path'], color: '#ef4444' },
            ]
          },
        ],
      }
    },

    // ===========================================================
    // SECTION 6 — DUAL AWAKENED
    // No sub-tabs. Edit blocks directly.
    // ===========================================================
    dual: {
      title: 'Dual Awakened',
      tabs: null,
      content: {
        main: [
          { type: 'info', color: '#e879f9', text: 'Less than 0.01% of the population. Both Mana Hall and Ki Core are active. Growth is split across both systems. Synergy only unlocks after True Core / Master stage.' },
          { type: 'h2', text: 'Growth Penalty' },
          {
            type: 'cards', cols: 2,
            items: [
              { name: 'Before Threshold', color: '#ef4444',
                lines: ['50% slower growth in both systems.', 'Both Mana Hall and Ki Core grow at half rate.', 'Applies until True Core (Ki) AND Master Stage (Magic) are both reached.'] },
              { name: 'After Threshold', color: '#34d399',
                lines: ['Synergy unlocks — growth accelerates.', 'Systems begin feeding each other.', 'Peak potential exceeds any single-system user at same stage.'] },
            ]
          },
          { type: 'h2', text: 'Combat Conflict' },
          { type: 'info', color: '#ef4444', text: 'Cannot use Incantation Casting + Form Casting simultaneously. Exception: Temperance blessing, OR Saint+ / Grandmaster+ level control.' },
          { type: 'h2', text: 'Allowed Casting Combos' },
          {
            type: 'table',
            headers: ['Combo', 'Cost', 'Notes'],
            rows: [
              { cells: ['Quick + Flash',   '2× resource cost',   'Both instant-cast methods. No restriction on simultaneous use.'], color: '#818cf8' },
              { cells: ['Silent + Still',  '2× resource cost',   'Both covert methods. Can be combined for fully undetectable dual output.'], color: '#a78bfa' },
            ]
          },
          { type: 'h2', text: 'Synergy Arts (True Core / Master+ Only)' },
          {
            type: 'pills',
            items: [
              { label: 'Spellblade',     color: '#e879f9' },
              { label: 'Ki-Mana Armor',  color: '#e879f9' },
              { label: 'Domain Fusion',  color: '#e879f9' },
            ]
          },
          { type: 'h2', text: 'Peak Cap' },
          { type: 'info', color: '#e879f9', text: 'Heaven-Opening Realm / Sovereign Archon Stage = strongest mortal tier. Only 2–3 individuals in recorded history reached this as dual-awakened.' },
        ]
      }
    },

    // ===========================================================
    // SECTION 7 — MECHANICS
    // Sub-tabs: Damage, Anti-Magic/Ki, Learning, Items
    // ===========================================================
    mechanics: {
      title: 'Mechanics',
      tabs: [
        { id: 'damage',    label: 'Damage States'    },
        { id: 'antimagic', label: 'Anti-Magic / Ki'  },
        { id: 'learning',  label: 'Learning'         },
        { id: 'items',     label: 'Items'            },
      ],
      content: {
        damage: [
          {
            type: 'cards', cols: 2,
            items: [
              {
                name: 'Pathway Scorch', color: '#818cf8', badge: 'Magic Damage',
                lines: ['Magic overdraw / Light vs Duskwalker / excess Fleshscript.'],
                expand: { rows: [
                  { label: 'Causes',   value: 'Magic overdraw, Light magic vs Duskwalker, holding too many Fleshscripts' },
                  { label: 'Adept/Expert Natural', value: '~1 month' },
                  { label: 'Adept/Expert + Aetherium', value: '~10 days' },
                  { label: 'Master Natural', value: '~6 months' },
                  { label: 'Master + Aetherium', value: '~2 months' },
                  { label: 'Grandmaster Natural', value: '~2 years' },
                  { label: 'Grandmaster + Aetherium', value: '~8 months' },
                  { label: 'Archmage+', value: 'Permanent 80% loss. Worldroot + Saint healer = 5yr for 20% recovery.' },
                ]}
              },
              {
                name: 'Meridian Damage', color: '#f97316', badge: 'Ki Damage',
                lines: ['Ki overdraw / breaking Form mid-Edict Art / opening Gate 3+.', '−50% max ki. Random Art 50% fail for 1 month.'],
                expand: { rows: [
                  { label: 'Causes',      value: 'Ki overdraw, breaking Form Casting mid-Edict Art, opening Gate 3+' },
                  { label: 'Adept/Refined', value: '~1 month recovery' },
                  { label: 'Expert/Tempered', value: '~6 months recovery' },
                  { label: 'Grandmaster+', value: 'Death or permanently crippled — 90% rate' },
                ]}
              },
              {
                name: 'Oathbacklash', color: '#ef4444', badge: 'Breach Damage',
                lines: ['Breaking an Oathslate contract.'],
                expand: { rows: [
                  { label: 'Mechanical', value: 'Pathway Scorch + Meridian Damage simultaneously. −80% both pools for 1 month.' },
                  { label: 'Social',     value: 'Permanent Oathbreaker brand. Future Oathslates crack at your touch.' },
                  { label: 'Clean Break', value: 'Law Spell "I deny this oath" — costs caster 10 years of lifespan.' },
                ]}
              },
              {
                name: 'Script Fever', color: '#a78bfa', badge: 'Overload',
                lines: ['Holding 4+ active Fleshscripts simultaneously.', '−5% max pool per extra script. Permanent.'],
                expand: { rows: [
                  { label: 'Trigger',  value: '4 or more active Fleshscripts at once' },
                  { label: 'Effect',   value: '−5% max pool per extra script above 3. Permanent stat loss.' },
                  { label: 'Removal',  value: 'Scripts can be removed surgically — but the stat loss remains.' },
                ]}
              },
              {
                name: 'Tenketsu Scorch', color: '#f97316', badge: 'Ki Node Damage',
                lines: ['Tenketsu forced shut externally.', '−10% ki output per 36 tenketsu closed.'],
                expand: { rows: [
                  { label: 'Trigger',   value: 'Tenketsu forced shut — Cold Iron needles, pressure point arts' },
                  { label: 'Effect',    value: '−10% ki output per 36 nodes closed' },
                  { label: 'Recovery',  value: '1 week per 36 closed, or a healing art' },
                ]}
              },
              {
                name: 'Resonance Cascade', color: '#e879f9', badge: 'Prism Risk',
                lines: ['5% chance when a Prism user combines 3+ elements at once.', 'Elements fuse into new derivative permanently — uncontrolled.'],
                expand: { rows: [
                  { label: 'Trigger',  value: '5% chance on 3+ element simultaneous use by Prism mage' },
                  { label: 'Effect',   value: 'Elements permanently fuse into a new derivative. Cannot be controlled or predicted.' },
                ]}
              },
              {
                name: 'Leyline Boost', color: '#34d399', badge: 'Passive Bonus',
                lines: ['Standing on a leyline: all spells/arts −30% cost.', 'Royal spirit on leyline: War/Siege spells cast for free.'],
                expand: { rows: [
                  { label: 'Condition', value: 'User physically standing on a leyline' },
                  { label: 'Effect',    value: 'All spells and arts cost 30% less. Royal spirit on same leyline = War/Siege cost = 0.' },
                ]}
              },
            ]
          },
        ],
        antimagic: [
          {
            type: 'cards', cols: 2,
            items: [
              {
                name: 'Nullstone', color: '#818cf8', badge: 'Rare',
                lines: ['Complete mana/ki block.', 'Dead zone: 1–10m radius.', 'Cancels Cold Iron\'s −80% drain (must choose — cannot do both).', 'Pure brute force to escape.'],
                expand: { rows: [
                  { label: 'Effect',   value: 'Complete mana and ki suppression in radius. No casting, no arts.' },
                  { label: 'Source',   value: 'Miraj desert cores, leyline scars' },
                  { label: 'Counter',  value: 'Pure physical brute force only — no magic countermeasure works.' },
                  { label: 'Conflict', value: 'Cancels Cold Iron\'s drain effect. Must choose one or the other.' },
                ]}
              },
              {
                name: 'Cold Iron', color: '#9b91c4', badge: 'Uncommon',
                lines: ['−80% mana/ki flow. Very durable.', 'Burns spirits and beasts on contact.', 'Inside Nullstone field = just durable metal.'],
                expand: { rows: [
                  { label: 'Effect',           value: '−80% mana/ki flow while worn or in contact.' },
                  { label: 'Spirit/Beast',      value: 'Burns on contact. Damages spirit pacts.' },
                  { label: 'Worn 1hr',          value: '−85% current pool, −5% max pool. Fighting at ~10% power.' },
                  { label: 'Worn 10hr',         value: '−80% current, −50% max pool. Cantrip-only ability.' },
                  { label: 'Recovery',          value: 'Remove + 1 day rest = 100% recovery. No permanent damage.' },
                  { label: 'Inside Nullstone', value: 'Functions as ordinary durable metal only.' },
                  { label: 'Counter',           value: 'Saint Realm / Grand Archmage brute force.' },
                ]}
              },
            ]
          },
        ],
        learning: [
          { type: 'h2', text: 'Learning Methods' },
          {
            type: 'table',
            headers: ['Method', 'Speed', 'Notes'],
            rows: [
              { cells: ['Tutelage', 'Fastest', 'Direct from master. 1–6 months for Combat / Flow tier.'], color: '#34d399' },
              { cells: ['Spell Tomes / Art Scrolls', '3× slower', '10% mislearn chance = Pathway Scorch or Meridian Damage.'], color: '#818cf8' },
              { cells: ['Observation', 'Varies', 'Quick / Flash tier only. −30% power until mastered. Eye Pact = instant mastery.'], color: '#a78bfa' },
              { cells: ['Spirit Teaching', '5× faster', 'Only the spirit\'s own element. Fastest possible method for that element.'], color: '#34d399' },
            ]
          },
          { type: 'note', text: 'Rank Gate enforced: cannot learn or cast above current stage regardless of how the technique was acquired.' },
          { type: 'h2', text: 'Creating Techniques & Spells' },
          {
            type: 'table',
            headers: ['Tier', 'Time', 'Notes'],
            rows: [
              { cells: ['Spark / Pulse',     'Weeks',    'Requires elements/aspects involved to be innate.'], color: '#818cf8' },
              { cells: ['Combat / Flow',     'Months',   '100+ test casts minimum. High mislearn risk.'], color: '#818cf8' },
              { cells: ['War / Surge',       'Years',    'Often requires a master\'s guidance.'], color: '#f59e0b' },
              { cells: ['Siege / Manifest+', 'Lifetime', 'Team effort. Most are not completed in a single lifetime.'], color: '#ef4444' },
            ]
          },
          {
            type: 'pills', label: 'Creation Methods',
            items: ['Derivative fusion', 'Principle derivation', 'Spirit co-creation', 'Inspiration / trauma']
          },
        ],
        items: [
          {
            type: 'cards', cols: 2,
            items: [
              { name: 'Mundane Foci / Staves / Robes', color: '#4a4570',
                lines: ['Preference only — no mechanical boost.', 'A master mage with no staff casts identically to one with a staff.'] },
              { name: 'Artifacts & Relics', color: '#f59e0b',
                lines: ['Can grant: −30% cost / Auto-Silent Casting / unique techniques.', 'Tracked by factions. Fought over.', 'Relic pacts possible — relic can become a pact partner.'] },
            ]
          },
        ],
      }
    },

    // ===========================================================
    // SECTION 8 — DOMAINS & TERRITORIES
    // Sub-tabs: Shared, Mana Domain, Ki Territory, Counters, Examples
    // ===========================================================
    domains: {
      title: 'Domains & Territories',
      tabs: [
        { id: 'shared',   label: 'Shared Rules'   },
        { id: 'mana',     label: 'Mana Domain'    },
        { id: 'ki_terr',  label: 'Ki Territory'   },
        { id: 'counters', label: 'Counters'       },
        { id: 'examples', label: 'Examples'       },
      ],
      content: {
        shared: [
          { type: 'info', color: '#e879f9', text: 'Domain Expansion (Mana) and Territory Expansion (Ki) are reality-marble techniques at the same power tier — different axes, not competing systems.' },
          {
            type: 'table',
            headers: ['Rule', 'Detail'],
            rows: [
              { cells: ['Stage Req',   'Archmage / Domain Realm minimum. Sovereign Archon / Edict Realm for Open Barrier.'] },
              { cells: ['Signature',   '1 War Spell / Surge Art used 1,000+ times imprints as the field law.'] },
              { cells: ['Casting',     'Incantation 5–15s. Can move but −20% barrier HP and +2s cast time. Standing still = max stability. Quick/Silent impossible.'] },
              { cells: ['Cost',        '80–90% max mana/ki upfront. Fail = Pathway Scorch ×2 + 1 week coma.'] },
              { cells: ['Cooldown',    'Cannot cast above Combat Spell / Flow Art for 1hr after. Mana Hall / Meridians are frayed.'] },
              { cells: ['Barrier',     '50–100m radius. HP = 0.5× your max pool. Forms instantly from your pressure.'] },
              { cells: ['Duration',    'Archmage/Domain = 45s. Grand Archmage = 2min. Sovereign Archon/Edict = 4min.'] },
              { cells: ['Clash',       'Overlapping fields: stronger pool + stage wins. Loser takes Pathway Scorch + 1hr silence.'] },
              { cells: ['Open Barrier','Sovereign Archon / Edict only. 300m radius. No barrier. No sure-hit. 95% cost. Cannot be dispelled from outside.'] },
            ]
          },
          { type: 'h2', text: 'Special Cases' },
          {
            type: 'table',
            headers: ['Case', 'Detail'],
            rows: [
              { cells: ['Domain Fusion (Dual Awakened)', 'Imprint 1 spell + 1 art combined. Cost = 100% mana + 100% ki. Cast time 10s. Can move while casting.'], color: '#e879f9' },
              { cells: ['Beast Unity',                   'Unity state allows use of Beast\'s domain/territory 1/day. Counts as your field use.'], color: '#f97316' },
            ]
          },
        ],
        mana: [
          {
            type: 'cards', cols: 1,
            items: [
              { name: 'Sure-Hit', color: '#818cf8',
                lines: ['Signature spell auto-targets all entities inside the field.', 'Still costs mana per hit — not free.'] },
              { name: 'Power Buff', color: '#818cf8',
                lines: ['+50% power and +30% efficiency to all spells matching the domain\'s element.'] },
              { name: 'Land Pact Bonus', color: '#34d399',
                lines: ['Casting in bonded land: +25% barrier HP, +30 seconds duration.'] },
            ]
          },
        ],
        ki_terr: [
          {
            type: 'cards', cols: 1,
            items: [
              { name: 'Sure-Hit (Ki)', color: '#f97316',
                lines: ['Physical laws altered. Signature art effects cannot miss in melee range.', 'Enemy physics penalized inside field.', 'Note: cannot auto-cast Lightning Bolt — but CAN make "you cannot dodge my fist" true.'] },
              { name: 'Power Buff', color: '#f97316',
                lines: ['+50% power and +30% efficiency to matching arts.', 'Domain Realm aura suppresses magic inside the territory.'] },
            ]
          },
          { type: 'h2', text: 'Territory Effect Examples' },
          {
            type: 'table',
            headers: ['Territory Name', 'Effect'],
            rows: [
              { cells: ['Mountain Root Territory', 'Gravity ×5 for enemies. Normal for caster.'], color: '#f97316' },
              { cells: ['Endless Sky Territory',   'Caster flies freely. Enemies grounded. Fall damage sure-hits.'], color: '#818cf8' },
            ]
          },
        ],
        counters: [
          {
            type: 'table',
            headers: ['Counter', 'Who', 'Effect'],
            rows: [
              { cells: ['External Break',          'Anyone', '3× Calamity Spell / Siege Art within 10s shatters barrier. Caster takes Pathway Scorch.'], color: '#ef4444' },
              { cells: ['Simple Domain',           'Flow Stage+', 'Emit ki to neutralize sure-hit for 5s. Costs 20% ki per 5s.'], color: '#f97316' },
              { cells: ['Law Spell "No law here"', 'Sovereign Archon only', 'Cancels the field entirely. Costs caster 5 years lifespan.'], color: '#818cf8' },
              { cells: ['Escape Window',           'Anyone', 'Exit barrier within 2s after chant ends. Void Steps / Wind flight work during this window.'], color: '#34d399' },
              { cells: ['Cold Iron',               'Anyone', 'Prevents casting if worn. Does NOT stop an already-active field.'], color: '#9b91c4' },
            ]
          },
        ],
        examples: [
          {
            type: 'cards', cols: 1,
            items: [
              {
                name: 'Coffin of Searing Sky', color: '#f97316', badge: 'Mana Domain',
                lines: ['Signature: Flame Lance. Fire Archmage.'],
                expand: { rows: [
                  { label: 'Type',    value: 'Mana Domain' },
                  { label: 'Sig Art', value: 'Flame Lance (used 1,000+)' },
                  { label: 'Effect',  value: 'All fire spells sure-hit. Air ignites inside field. Non-Fire resistance −50%. 80m barrier.' },
                ]}
              },
              {
                name: 'Hall of Unbroken Kata', color: '#818cf8', badge: 'Ki Territory',
                lines: ['Signature: Mountain Root. Domain Realm Grandmaster.'],
                expand: { rows: [
                  { label: 'Type',    value: 'Ki Territory' },
                  { label: 'Sig Art', value: 'Mountain Root (used 1,000+)' },
                  { label: 'Effect',  value: 'Gravity ×5 for enemies. Caster immune. Melee cannot miss within 10m. 90m barrier.' },
                ]}
              },
              {
                name: 'Red Sky Prison', color: '#e879f9', badge: 'Domain Fusion',
                lines: ['Signature: Flame Lance + Mountain Root. Dual Awakened Sovereign Archon / Edict.'],
                expand: { rows: [
                  { label: 'Type',     value: 'Domain Fusion (Dual Awakened)' },
                  { label: 'Sig Arts', value: 'Flame Lance + Mountain Root' },
                  { label: 'Effect',   value: 'Lava sure-hit burn + ×5 gravity crush. Cost: 100% mana + 100% ki. 10s moving cast.' },
                ]}
              },
            ]
          },
        ],
      }
    },


    // ===========================================================
    // SECTION 9 — WORLD
    // Sub-tabs: Regions, Races, Bloodlines, Economy, Extras
    // ===========================================================
    world: {
      title: 'World',
      tabs: [
        { id: 'regions',    label: 'Regions'    },
        { id: 'races',      label: 'Races'      },
        { id: 'bloodlines', label: 'Bloodlines' },
        { id: 'economy',    label: 'Economy'    },
        { id: 'extras',     label: 'Extras'     },
      ],
      content: {
        regions: [
          { type: 'info', color: '#38bdf8', text: 'Click a region button to reveal its detail card.' },
          {
            type: 'btns',
            items: [
              {
                label: 'Qinzhou (East)', color: '#f97316',
                detail: {
                  name: 'Qinzhou — Eastern Cultivation Civilization',
                  rows: [
                    { label: 'Theme',        value: 'Cultivation civilization' },
                    { label: 'Major Powers', value: 'Orthodox Alliance, Unorthodox Alliance, Demonic Sect, Eastern Imperial Family, Eastern Religion, Hao Sect' },
                    { label: 'Sect Hierarchy', value: 'Sect masters > Grand elders > Elders > Hall masters > Inner disciples > Outer disciples > Trainees / servants / attached followers' },
                    { label: 'Core Logic',   value: 'Extreme peak power but fragmented. Hao Sect = top intel and covert ops. Sects and clans can recruit each other. Politically unstable — not constantly at war.' },
                  ]
                }
              },
              {
                label: 'Orinthia (West)', color: '#818cf8',
                detail: {
                  name: 'Orinthia — Feudal-Knightly Civilization',
                  rows: [
                    { label: 'Theme',        value: 'Feudal-knightly civilization' },
                    { label: 'Major Powers', value: 'King & royal court, Holy City, Great Noble Houses, Knight Orders, Mage Institutions, Merchant Guilds, The Veiled Order' },
                    { label: 'Military',     value: 'Royal knight order, Holy knight order, Noble house knight orders, Magic knights, Battle mages, Paladin orders, Crusader units' },
                    { label: 'Core Logic',   value: 'Strong in logistics, organization, and combined arms. Holy City has the largest single knight order. Noble houses combined field more knight power. Veiled Order handles espionage and counterintelligence.' },
                  ]
                }
              },
              {
                label: 'North', color: '#38bdf8',
                detail: {
                  name: 'The North — Arctic Survival Against Monsters',
                  rows: [
                    { label: 'Theme',      value: 'Arctic survival against monsters' },
                    { label: 'Factions',   value: 'Frostwarden Holds, Order of the Black Lantern, Icebound Clans, Sealing Orders, Forge-City Councils, Monster Hunter Leagues' },
                    { label: 'Key Cities', value: 'Rimegate, Hearthwall, Northwatch Bastion, Skeldhollow' },
                    { label: 'Core Logic', value: 'Survives through fortification, discipline, and monster-hunting. Sealing and containment matter as much as offensive warfare.' },
                  ]
                }
              },
              {
                label: 'South', color: '#34d399',
                detail: {
                  name: 'The South — Ancient Mystical Nature-Heavy',
                  rows: [
                    { label: 'Theme',      value: 'Ancient mystical nature-heavy' },
                    { label: 'Factions',   value: 'Verdant Courts, Rootwardens, Sun Priests, Temple City-States, Coastal and Island Powers' },
                    { label: 'Core Logic', value: 'Elven kingdom centered on the World Tree. Elven throne is matriarchal — females only. Holds old magic and spirit traditions as sacred sovereignty.' },
                  ]
                }
              },
              {
                label: 'Frontier', color: '#fbbf24',
                detail: {
                  name: 'The Frontier — Neutral Belt',
                  rows: [
                    { label: 'Theme',     value: 'Neutral belt between Qinzhou and Orinthia' },
                    { label: 'Contents',  value: 'Ruins, Relics, Black markets, Dungeon belts, Mercenaries, Border forts, Monster zones' },
                    { label: 'Purpose',   value: 'Acts as the world\'s pressure valve and trade corridor. No controlling power.' },
                  ]
                }
              },
              {
                label: 'Kingdom of Miraj', color: '#f59e0b',
                detail: {
                  name: 'Kingdom of Miraj — Desert Kingdom',
                  rows: [
                    { label: 'Theme',      value: 'Desert kingdom' },
                    { label: 'Powers',     value: 'King, Nobles, Oasis cities, Caravan routes, Desert knight orders' },
                    { label: 'Power Base', value: 'Trade, water control, relic routes, desert survival mastery' },
                  ]
                }
              },
            ]
          },
        ],
        races: [
          { type: 'info', color: '#38bdf8', text: 'Click a race button to reveal its stat card.' },
          {
            type: 'btns',
            items: [
              { label: 'Humans',    color: '#9b91c4', detail: { name: 'Humans', rows: [{ label: 'Affinity', value: '50% Magic / 50% Ki' }, { label: 'Kingdom', value: 'No unified kingdom — Qinzhou / Orinthia / Miraj' }, { label: 'Trait', value: 'Adaptable but fragmented. Most numerous race.' }] } },
              { label: 'Elves',     color: '#818cf8', detail: { name: 'Elves',  rows: [{ label: 'Affinity', value: '95% Magic / 5% Ki' }, { label: 'Kingdom', value: 'True kingdom — female throne only' }, { label: 'Trait', value: 'Spirit magic, healing, longevity. World Tree homeland.' }] } },
              { label: 'Dwarves',   color: '#f97316', detail: { name: 'Dwarves', rows: [{ label: 'Affinity', value: '30% Magic / 70% Ki' }, { label: 'Kingdom', value: 'Mountain kingdom — forge-cities' }, { label: 'Trait', value: 'Rune-craft, siege engineering, body cultivation.' }] } },
              { label: 'Merfolk',   color: '#38bdf8', detail: { name: 'Merfolk', rows: [{ label: 'Affinity', value: '99% Magic / 1% Ki' }, { label: 'Kingdom', value: 'Sea kingdom — currents, reefs, underwater cities' }, { label: 'Trait', value: 'Near-universal magic affinity. Deep-sea domain.' }] } },
              { label: 'Giants',    color: '#a78bfa', detail: { name: 'Giants',  rows: [{ label: 'Affinity', value: '15% Magic / 85% Ki' }, { label: 'Kingdom', value: 'Own kingdom — ancient and isolated' }, { label: 'Trait', value: 'Raw strength, ancient power, massive ki reserves.' }] } },
              { label: 'Beastkin',  color: '#f97316', detail: { name: 'Beastkin', rows: [{ label: 'Affinity', value: '10% Magic / 90% Ki' }, { label: 'Kingdom', value: 'Tribes / packs / clans — seasonal confederations' }, { label: 'Trait', value: 'Instinctual ki users. Flexible but decentralized.' }] } },
              { label: 'Vampires',  color: '#f472b6', detail: { name: 'Vampires', rows: [{ label: 'Affinity', value: '90% Magic / 10% Ki' }, { label: 'Kingdom', value: 'Hidden cities or kingdoms — not publicly known' }, { label: 'Trait', value: 'Blood to mana at 2:1 ratio. Tri-Blooded common.' }] } },
              { label: 'Dragonkin', color: '#ef4444', detail: { name: 'Dragonkin', rows: [{ label: 'Affinity', value: 'Inherited from dragon parent — highly variable' }, { label: 'Kingdom', value: 'None — rare and isolated' }, { label: 'Trait', value: 'Fragment of draconic power. Often one strong innate element.' }] } },
              { label: 'Dragons',   color: '#dc2626', detail: { name: 'Dragons',  rows: [{ label: 'Affinity', value: 'Apex — not subject to awakening' }, { label: 'Kingdom', value: 'No kingdom — solitary apex beings' }, { label: 'Trait', value: 'Born with full draconic power. May make pacts with mortals.' }] } },
              { label: 'Angels',    color: '#fde68a', detail: { name: 'Angels',   rows: [{ label: 'Affinity', value: 'Heaven-born — intrinsic power' }, { label: 'Kingdom', value: '7 Heavens — each ruled by one Virtue' }, { label: 'Trait', value: 'May descend and make pacts. Require heavenly permission.' }] } },
              { label: 'Demons',    color: '#f87171', detail: { name: 'Demons',   rows: [{ label: 'Affinity', value: 'Hell-born — intrinsic power' }, { label: 'Kingdom', value: '7 Hells — each ruled by one Sin' }, { label: 'Trait', value: 'May cross into the mortal world. Carry trace of their Sin lord.' }] } },
              { label: 'Spirits',   color: '#34d399', detail: { name: 'Spirits',  rows: [{ label: 'Affinity', value: 'Spirit Realm — elemental or concept' }, { label: 'Kingdom', value: 'Spirit Realm — appear near sacred sites' }, { label: 'Trait', value: 'Manifest where leylines concentrate or nature is undisturbed.' }] } },
            ]
          },
        ],
        bloodlines: [
          { type: 'info', color: '#a78bfa', text: 'All bloodline bonuses are minor (+10% flavor). Not crippling. Tri-Blooded = pick any 2 traits at half value (+5% / −2.5%).' },
          {
            type: 'table',
            headers: ['Bloodline', 'Bonus', 'Penalty'],
            rows: [
              { cells: ['North Frostborn',        '+10% Ice/Earth resist, +5% Ice/Earth affinity', '−5% Fire affinity'], color: '#38bdf8' },
              { cells: ['South Sunblessed',       '+10% Light/Fire affinity, +5% Light/Fire resist', '−5% Dark/Water affinity'], color: '#34d399' },
              { cells: ['Qinzhou Spirit-Touched', '+1 Spirit Pact slot, +10% spirit communication', '−5% Beast affinity'], color: '#f97316' },
              { cells: ['Orinthia Beastblood',    '+10% Beast Ki affinity, +5% physical strength', '−5% Wind affinity'], color: '#818cf8' },
              { cells: ['Miraj Sandwalker',       'Ignore desert heat/sandstorms, +10% Earth affinity', '−5% Water affinity'], color: '#f59e0b' },
              { cells: ['Arcadia Skyborn',        '+10% Wind/Lightning affinity, +5% reaction speed', '−5% Earth affinity'], color: '#a78bfa' },
              { cells: ['Frontier Scarred',       '+20% pain tolerance, +10% backlash resistance', '−5% healing speed'], color: '#fbbf24' },
              { cells: ['Tri-Blooded',            'Pick 2 traits at +5% each', '−2.5% each penalty'], color: '#f472b6' },
            ]
          },
        ],
        economy: [
          { type: 'h2', text: 'Currency' },
          {
            type: 'table',
            headers: ['Denomination', 'Conversion'],
            rows: [
              { cells: ['1 Gold',   '= 20 Silver = 400 Bronze = 4,000 Copper'], color: '#fde68a' },
              { cells: ['Peasant wage', '2–5 Bronze/day'], color: '#9b91c4' },
            ]
          },
          { type: 'h2', text: 'Mercenary Rates' },
          {
            type: 'table',
            headers: ['Tier', 'Base Rate', 'Hazard'],
            rows: [
              { cells: ['Awakened / Pulse',        '2–5 Silver/day',    '+50% vs monsters'], color: '#818cf8' },
              { cells: ['Adept / Flow',             '1–3 Gold/day',      '+100% vs War Spell tier'], color: '#818cf8' },
              { cells: ['Expert / Surge',           '5–15 Gold/day',     'Double if outnumbered'], color: '#a78bfa' },
              { cells: ['Master / Manifest',        '50–200 Gold/day',   'Triple for Siege/Calamity foes'], color: '#f59e0b' },
              { cells: ['Archmage / Grandmaster',   'Negotiated (kingdom budget)', '—'], color: '#ef4444' },
              { cells: ['Dual Awakened',            '×5 base rate',      '×2 hazard multiplier on top'], color: '#e879f9' },
            ]
          },
          { type: 'h2', text: 'Oathslate Contracts' },
          { type: 'info', color: '#f59e0b', text: 'Written pact = unbreakable until the slate is physically destroyed. Break = Oathbacklash (−80% both pools 1 month) + permanent Oathbreaker brand. Clean break = Law Spell "I deny this oath" (costs caster 10 years lifespan). Used for: banks, merchant houses, marriage bonds, mage guild charters, Nine Coins contracts.' },
        ],
        extras: [
          {
            type: 'cards', cols: 2,
            items: [
              {
                name: 'Dark Elves', color: '#7c3aed',
                lines: ['Banished from World Tree.', 'Gain +20% Dark/Earth affinity, +10% Earth resistance.', 'Lifespan: 400–600 years.', 'Found underground, Frontier, South.'],
                expand: { rows: [
                  { label: 'Origin',    value: 'Banished from the World Tree — lose plant-based ki/magic as a result.' },
                  { label: 'Gain',      value: '+20% Dark/Earth affinity, +10% Earth resistance' },
                  { label: 'Common',    value: 'Crossbow users, Shadow Magic mages, and ki practitioners' },
                ]}
              },
              {
                name: 'Duskwalkers', color: '#4a4570',
                lines: ['Child of Shadowling + Dark spirit + human/elf.', 'Skin grey/black — absorbs light.', 'Daylight: −20% all stats. Night: +30% Silent/Sigil Casting, shadow step 5m (once/min).'],
                expand: { rows: [
                  { label: 'Day Penalty', value: '−20% all stats in daylight' },
                  { label: 'Night Bonus', value: '+30% Silent and Sigil Casting, shadow step 5m once/min' },
                  { label: 'Counter: Light', value: 'Shadow Burn = Pathway Scorch' },
                  { label: 'Counter: Holy',  value: 'Rooted for 10 seconds' },
                ]}
              },
              {
                name: 'Ascension', color: '#fde68a',
                lines: ['Reach Sovereign Archon / Heaven-Opening Realm, then break mortal limit in a life-death moment.', '1 per 100,000 years globally.'],
                expand: { rows: [
                  { label: 'Req',          value: 'Sovereign Archon / Heaven-Opening Realm + genuine life-death breakthrough moment' },
                  { label: 'Changes',      value: 'Lifespan ×5–10. New baseline = old peak. Growth cap removed. Nullstone does not suppress. Cold Iron drains 50% not 80%.' },
                  { label: 'Limit',        value: 'One time only — cannot ascend twice.' },
                  { label: 'Drawbacks',    value: 'None mechanical. Can still die. Still need food, sleep, air.' },
                  { label: 'Immortality',  value: 'NOT granted by ascension alone. Practically impossible for humans.' },
                ]}
              },
            ]
          },
        ],
      }
    },

    // ===========================================================
    // SECTION 10 — PACTS
    // Sub-tabs: Heaven & Hell, Sin vs Virtue, Blessings,
    //           Dragon Blessings, Pact Types, Eye & Soul
    // ===========================================================
    pacts: {
      title: 'Pacts',
      tabs: [
        { id: 'heaven',   label: 'Heaven & Hell'     },
        { id: 'sins',     label: 'Sin vs Virtue'     },
        { id: 'blessings',label: 'Blessings'         },
        { id: 'dragon',   label: 'Dragon Blessings'  },
        { id: 'types',    label: 'Pact Types'        },
        { id: 'eye_soul', label: 'Eye & Soul Pacts'  },
      ],
      content: {
        heaven: [
          { type: 'info', color: '#fde68a', text: 'Heaven is split into 7 Heavens, each ruled by one Virtue. Hell is split into 7 Hells, each ruled by one deadly Sin. A transcendent being can maintain only ONE active contractor at a time. Motivation: interest, favor, curiosity, mutual benefit. No dominion pacts.' },
          {
            type: 'cards', cols: 2,
            items: [
              { name: '7 Virtues', color: '#fde68a',
                lines: ['Humility • Charity • Chastity', 'Kindness • Temperance • Patience • Diligence'] },
              { name: '7 Sins', color: '#ef4444',
                lines: ['Pride • Greed • Lust', 'Envy • Gluttony • Wrath • Sloth'] },
            ]
          },
        ],
        sins: [
          { type: 'info', color: '#e879f9', text: 'Tap any row to reveal the pact gifts for both the Sin and the opposing Virtue.' },
          {
            type: 'xrows',
            items: [
              {
                left: 'Pride (Sin)', leftColor: '#ef4444',
                right: 'Humility (Virtue)', rightColor: '#34d399',
                expand: { rows: [
                  { label: 'Sin Theme',      value: 'Dominance, presence, command' },
                  { label: 'Sin Gift',       value: 'Command presence — dominance aura' },
                  { label: 'Virtue Theme',   value: 'Concealment, reduced notice, anti-ego' },
                  { label: 'Virtue Gift',    value: 'Concealment, anti-ego effects' },
                ]}
              },
              {
                left: 'Greed (Sin)', leftColor: '#ef4444',
                right: 'Charity (Virtue)', rightColor: '#34d399',
                expand: { rows: [
                  { label: 'Sin Theme',    value: 'Accumulation, binding, claiming' },
                  { label: 'Sin Gift',     value: 'Accumulation, binding, claiming power' },
                  { label: 'Virtue Theme', value: 'Sharing power, healing, protection' },
                  { label: 'Virtue Gift',  value: 'Share power, heal, protect' },
                ]}
              },
              {
                left: 'Lust (Sin)', leftColor: '#ef4444',
                right: 'Chastity (Virtue)', rightColor: '#34d399',
                expand: { rows: [
                  { label: 'Sin Theme',    value: 'Charm, allure, vitality, obsession' },
                  { label: 'Sin Gift',     value: 'Charm, emotional pull, vitality' },
                  { label: 'Virtue Theme', value: 'Purity, resistance to corruption' },
                  { label: 'Virtue Gift',  value: 'Purity, corruption resistance' },
                ]}
              },
              {
                left: 'Envy (Sin)', leftColor: '#ef4444',
                right: 'Kindness (Virtue)', rightColor: '#34d399',
                expand: { rows: [
                  { label: 'Sin Theme',    value: 'Mimicry, adaptation, undermining' },
                  { label: 'Sin Gift',     value: 'Mimicry, adaptation, copying' },
                  { label: 'Virtue Theme', value: 'Calming, soothing, stabilization' },
                  { label: 'Virtue Gift',  value: 'Calm, soothe, stabilize' },
                ]}
              },
              {
                left: 'Gluttony (Sin)', leftColor: '#ef4444',
                right: 'Temperance (Virtue)', rightColor: '#34d399',
                expand: { rows: [
                  { label: 'Sin Theme',    value: 'Absorption, devouring, power theft' },
                  { label: 'Sin Gift',     value: 'Absorb powers and make them your own' },
                  { label: 'Virtue Theme', value: 'Balance, regulation, mixed power control' },
                  { label: 'Virtue Gift',  value: 'Balance, regulate, control mixed power' },
                ]}
              },
              {
                left: 'Wrath (Sin)', leftColor: '#ef4444',
                right: 'Patience (Virtue)', rightColor: '#34d399',
                expand: { rows: [
                  { label: 'Sin Theme',    value: 'Hellfire, explosive destruction, escalation' },
                  { label: 'Sin Gift',     value: 'Hellfire, destructive force, battle escalation' },
                  { label: 'Virtue Theme', value: 'Endurance, scaling strength over time' },
                  { label: 'Virtue Gift',  value: 'Endurance, scaling strength' },
                ]}
              },
              {
                left: 'Sloth (Sin)', leftColor: '#ef4444',
                right: 'Diligence (Virtue)', rightColor: '#34d399',
                expand: { rows: [
                  { label: 'Sin Theme',    value: 'Conservation, stasis, oppressive efficiency' },
                  { label: 'Sin Gift',     value: 'Conservation, stasis, oppressive efficiency' },
                  { label: 'Virtue Theme', value: 'Mastery, consistency, rapid improvement' },
                  { label: 'Virtue Gift',  value: 'Mastery, consistency, rapid improvement' },
                ]}
              },
            ]
          },
        ],
        blessings: [
          {
            type: 'cards', cols: 2,
            items: [
              {
                name: 'Gluttony Blessing', color: '#f87171', badge: 'Demon Prince',
                lines: ['On killing blow vs mage/ki user: steal 1 Spell/Art they knew.'],
                expand: { rows: [
                  { label: 'Source', value: 'Demon Prince of Consumption' },
                  { label: 'Effect', value: 'On killing blow vs mage or ki user — steal 1 technique they knew.' },
                  { label: 'Limit',  value: 'Hold 3 stolen abilities max. Steal 4th = must erase 1 of previous 3 forever.' },
                  { label: 'Cost',   value: 'Stolen abilities cost 2× mana/ki. Uses your talent tier, not the original caster\'s.' },
                  { label: 'Tell',   value: 'Eyes flash the victim\'s element when ability is used. Divination reveals theft mark.' },
                ]}
              },
              { name: 'Temperance Blessing', color: '#34d399',
                lines: ['Dual Awakened growth penalty removed permanently.'],
                expand: { rows: [{ label: 'Effect', value: 'Removes the 50% growth penalty from Dual Awakening — permanently. Growth proceeds at normal single-path rate in both systems simultaneously.' }]}},
              { name: 'Unbowed', color: '#fde68a',
                lines: ['Magical compulsion, fear, and charm effects fail permanently.'],
                expand: { rows: [{ label: 'Effect', value: 'All mind-affecting magic (compulsion, fear, charm) automatically fails against the user. Permanent. No cost.' }]}},
              { name: 'Scribe\'s Hand', color: '#818cf8',
                lines: ['Learn and teach at 5× speed permanently.'],
                expand: { rows: [{ label: 'Effect', value: 'All learning and teaching occurs at 5× normal rate. Includes spell tomes, art scrolls, tutelage, and self-discovery. Permanent.' }]}},
              { name: 'Bridge', color: '#e879f9',
                lines: ['Link 3 people for life — share pools + senses 10min/day.', 'Member dies = Pathway Scorch + 1mo coma for survivors.'],
                expand: { rows: [
                  { label: 'Effect',    value: 'Three people linked for life. Can share mana/ki pools and sensory input for 10min/day.' },
                  { label: 'Death',     value: 'Member dies = Pathway Scorch + 1 month coma for all survivors.' },
                  { label: 'Re-link',   value: 'Can re-link after 1 year to a new third person.' },
                ]}},
              { name: 'Years', color: '#a78bfa',
                lines: ['Age 90% slower permanently. Disease immunity.'],
                expand: { rows: [{ label: 'Effect', value: 'Biological aging slowed to 10% of normal rate. Permanent immunity to all diseases including magical plagues.' }]}},
              { name: 'Verdant Heart', color: '#34d399',
                lines: ['Plants obey permanently. Healing 10× in 100m radius.'],
                expand: { rows: [
                  { label: 'Effect',  value: 'All plants within range respond to mental commands. Healing techniques, potions, and arts are 10× more effective within 100m of user.' },
                ]}},
            ]
          },
        ],
        dragon: [
          { type: 'info', color: '#ef4444', text: '1 Dragon Blessing per person maximum. Permanent. 1 dragon per element — each grants an Affinity Surge and a unique Draconic Art.' },
          {
            type: 'table',
            headers: ['Dragon', 'Surge', 'Draconic Art', 'Tell'],
            rows: [
              { cells: ['Fire Dragon',      '+50% Fire dmg, −50% Fire taken',              'Dragon\'s Breath 1/day — War Spell fire cone, no cast time',   'Slit pupils, skin warm'], color: '#ef4444' },
              { cells: ['Water Dragon',     'Breathe water, Water −30%, ignore pressure',   'Tidal Claim 1/day — command 100m water 1min',                 'Veins blue when wet, always damp'], color: '#38bdf8' },
              { cells: ['Wind Dragon',      'Void Steps free, Wind +40% speed',             'Storm Wing 1/hr — flight 1min at 2× run speed',               'Hair always moves, voice carries'], color: '#a3e635' },
              { cells: ['Earth Dragon',     'Cannot be moved below Edict/Law, Earth +40% def','Mountain Root 1/day — immovable 30s, shockwave after',    'Stone-skin texture, heavy steps'], color: '#92400e' },
              { cells: ['Light Dragon',     'Ignore darkness/illusion/invisible, Light ignores resists', 'Sunbrand 1/day — melee = Siege Spell vs Dark/undead', 'Faint shadow in full dark, eyes glow dim'], color: '#fde68a' },
              { cells: ['Dark Dragon',      'Daylight −20% not −40%, Dark +50% at night',   'Nightfall 1/day — 100m magical darkness 1min, you see normally','No shadow, cold touch'], color: '#7c3aed' },
              { cells: ['Lightning Dragon', 'Reaction +1 tier, lightning chains 2 extra targets','Bolt Step 1/hr — 50m lightning teleport, passes barriers', 'Hair static, ozone when angry'], color: '#fde68a' },
              { cells: ['Ice Dragon',       'Immune mundane cold, ice freezes liquids 10m',  'Winter\'s Claim 1/day — 50m lethal cold 30s, you immune',     'Breath always fogs, frost on held items'], color: '#38bdf8' },
              { cells: ['Metal Dragon',     'Bend non-relic metal at touch, metal −20%',     'Iron Body 1/day — skin = steel 1min, +80% blunt/pierce resist','Blood silver, metal sticks to skin'], color: '#9b91c4' },
              { cells: ['Space Dragon',     'Fold-Silk holds 2× for you, Space +50% range',  'Step Through 1/day — teleport 1 mile to known place',         'Depth perception off, objects look wrong distance'], color: '#a78bfa' },
            ]
          },
        ],
        types: [
          {
            type: 'cards', cols: 2,
            items: [
              { name: 'Beast Pacts', color: '#f97316', color_label: 'Animal / Spirit-Animal',
                lines: ['Primal bonds with animal or spirit-animal entities.'],
                tags: ['Transformation traits', 'Tracking', 'Feral instincts', 'Pack-links', 'Bonded mounts'] },
              { name: 'Elemental Pacts', color: '#818cf8', color_label: 'Fire / Frost / Storm / Earth',
                lines: ['Full elemental mastery through elemental entity bonds.'],
                tags: ['Full elemental control', 'Advanced affinity'] },
              { name: 'Relic Pacts', color: '#fbbf24', color_label: 'Ancient Weapons / Artifacts',
                lines: ['Ancient weapons or artifacts that choose a bearer.'],
                tags: ['Legendary techniques', 'Relic awakening', 'Memory inheritance'] },
              { name: 'Knowledge Pacts', color: '#38bdf8', color_label: 'Archives / Memory Entities',
                lines: ['Bonds with archives, memory entities, sages, or star-records.'],
                tags: ['Rapid learning', 'Hidden history', 'Strategy', 'Pattern recognition'] },
              { name: 'Land Pacts', color: '#34d399', color_label: 'Land Bound Spirits',
                lines: ['10% pool tithe. Defend territory in exchange for power.'],
                tags: ['+1 Stage power within 10 miles', 'Sense hostile intent', 'Cast through terrain', 'Break = Oathbreaker brand'] },
              { name: 'Relic Item Pacts', color: '#fbbf24', color_label: 'Artifact Bond',
                lines: ['Example: Wraithweave suit = 5% tithe, Auto-Silent Casting.'],
                tags: ['Break = relic hunts you'] },
            ]
          },
        ],
        eye_soul: [
          { type: 'h2', text: 'Eye Pacts' },
          { type: 'info', color: '#818cf8', text: 'Hereditary bloodline pacts. Passed genetically through a bloodline. Only one person per generation normally awakens. Multiple different bloodlines can exist simultaneously.' },
          {
            type: 'pills', label: 'Possible Eye Powers',
            items: ['Command eyes', 'Truth-seeing eyes', 'Future-sight eyes', 'Time-linked eyes', 'Copy eyes', 'Soul eyes', 'Space eyes', 'Judgment eyes', 'Elemental eyes']
          },
          { type: 'h2', text: 'Soul Pacts' },
          {
            type: 'cards', cols: 2,
            items: [
              { name: 'Soul Pact Sources', color: '#a78bfa',
                lines: ['Ancestors', 'Guardian spirits', 'Saintly remnants', 'Deathless souls', 'Other soul-aligned intelligences'] },
              { name: 'Soul Pact Gifts', color: '#a78bfa',
                tags: ['Soul armor', 'Spirit sight', 'Soul healing', 'Ancestral memory', 'Possession resistance', 'Spirit projection', 'Soul pressure', 'Resonance with sacred sites and relics'] },
            ]
          },
        ],
      }
    },

    // ===========================================================
    // SECTION 11 — ARCADIA
    // Sub-tabs: Overview, Colleges, Houses, Organizations, Landmarks
    // ===========================================================
    arcadia: {
      title: 'Arcadia',
      tabs: [
        { id: 'overview', label: 'Overview'      },
        { id: 'colleges', label: 'Colleges'      },
        { id: 'houses',   label: 'Houses'        },
        { id: 'orgs',     label: 'Organizations' },
        { id: 'marks',    label: 'Landmarks'     },
      ],
      content: {
        overview: [
          { type: 'info', color: '#a78bfa', text: 'World\'s only neutral academy city. Outside any regional political control. Neutral ground for all regions and races. Purpose: education, research, diplomacy, guild operations.' },
          { type: 'h2', text: 'College Leadership Hierarchy' },
          { type: 'p', text: 'Dean &rsaquo; Vice Dean &rsaquo; Senior Professors &rsaquo; Professors &rsaquo; Lecturers / Instructors &rsaquo; Exam Masters &rsaquo; Field Supervisors' },
        ],
        colleges: [
          {
            type: 'cards', cols: 2,
            items: [
              { name: 'College of the Blade',  color: '#f97316', lines: ['Combat, weapons, martial skill.'] },
              { name: 'College of the Arcane', color: '#818cf8', lines: ['Magic theory, spell research, elemental mastery.'] },
              { name: 'College of the Spirit', color: '#34d399', lines: ['Spirit pacts, sacred arts, ancestral magic.'] },
              { name: 'College of the Veil',   color: '#4a4570', lines: ['Espionage, covert arts, infiltration.'] },
              { name: 'College of the Forge',  color: '#f59e0b', lines: ['Artifice, rune-craft, engineering.'] },
              { name: 'College of the World',  color: '#38bdf8', lines: ['Politics, history, diplomacy, trade.'] },
              {
                name: 'College of the Ki', color: '#f97316',
                lines: ['Internal force, body cultivation.'],
                tags: ['Breath Arts', 'Meridian Flow', 'Iron Body Arts', 'Swift Step Arts', 'Pressure Arts', 'Endurance Arts', 'Ki Weapon Arts', 'Life Flow Arts']
              },
            ]
          },
        ],
        houses: [
          {
            type: 'table',
            headers: ['House', 'Identity', 'Rivals'],
            rows: [
              { cells: ['House Aster',  'Balanced, prestigious, competitive',        'Veyr, Thorne'], color: '#a78bfa' },
              { cells: ['House Lumen',  'Scholarly, healing, diplomatic',             'Sable'], color: '#fde68a' },
              { cells: ['House Veyr',   'Aggressive, tactical, ambitious',            'Aster, Thorne'], color: '#ef4444' },
              { cells: ['House Sable',  'Secretive, clever, information-minded',      'Lumen'], color: '#6b7280' },
              { cells: ['House Solace', 'Cooperative, stable, socially skilled',      'Thorne'], color: '#34d399' },
              { cells: ['House Thorne', 'Proud, stubborn, disciplined',               'Aster, Veyr, Solace'], color: '#f97316' },
            ]
          },
        ],
        orgs: [
          {
            type: 'pills',
            items: [
              'Student Council', 'Duel Society', 'Expedition Club', 'Research Circle',
              'Relic Study Society', 'Spirit Study Association', 'Forge Club', 'Veil Club',
              'World Forum Society', 'Monster Field Group',
            ]
          },
        ],
        marks: [
          {
            type: 'pills',
            items: [
              'Grand Arcadia Academy', 'The Grand Gate', 'The Hall of Concord', 'The Hall of Founders',
              'The Archive Spire', 'The Collegium Towers', 'The Hall of Practical Arts', 'The Research Annexes',
              'The Trial Arena', 'The Field Grounds', 'The Labyrinth Grounds', 'The Sky Bridges',
              'Adventurer Guild Headquarters', 'The Contract Hall', 'The Mission Board Plaza', 'The Civic Exchange',
              'Residential Commons', 'The Market of Many Realms', 'The Relic Ward', 'The Diplomatic Forum',
              'The Hall of Graduation', 'The Monument Circle', 'The Watchtower of Scholars',
            ]
          },
        ],
      }
    },

    // ===========================================================
    // SECTION 12 — VAMPIRES
    // No sub-tabs. Edit blocks directly.
    // ===========================================================
    vampires: {
      title: 'Vampires',
      tabs: null,
      content: {
        main: [
          { type: 'info', color: '#f472b6', text: 'Rare and secretive — more common than angels, demons, or pure dragons, but not publicly visible. Hidden cities or kingdoms. Magic awakening 90% / Ki 10%. Blood converts to mana at 2:1 ratio. Tri-Blooded extremely common.' },
          { type: 'h2', text: 'Hierarchy' },
          {
            type: 'cards', cols: 3,
            items: [
              { name: 'Progenitors', color: '#f87171', badge: 'Apex',
                lines: ['Oldest. Rarest. Strongest bloodlines.', 'The apex of vampire society.'] },
              { name: 'Pure Bloods', color: '#f472b6', badge: 'Noble',
                lines: ['Noble descendants of progenitors.'] },
              { name: 'Regular Vampires', color: '#4a4570', badge: 'Common',
                lines: ['Turned vampires, mixed lines, lesser branches.'] },
            ]
          },
          { type: 'h2', text: 'Progenitor Houses' },
          {
            type: 'pills',
            items: [
              { label: 'House Nocthyr',  color: '#f87171' },
              { label: 'House Velcora',  color: '#f87171' },
              { label: 'House Dravane',  color: '#f87171' },
              { label: 'House Veyrath',  color: '#f87171' },
              { label: 'House Morlune',  color: '#f87171' },
              { label: 'House Sanguivar',color: '#f87171' },
            ]
          },
          { type: 'h2', text: 'Pure Blood Lines' },
          {
            type: 'pills',
            items: [
              { label: 'Blackthorn Line',  color: '#f472b6' },
              { label: 'Crimson Veil Line',color: '#f472b6' },
              { label: 'Nightrose Line',   color: '#f472b6' },
              { label: 'Silver Fang Line', color: '#f472b6' },
              { label: 'Pale Court Line',  color: '#f472b6' },
              { label: 'Velvet Dusk Line', color: '#f472b6' },
              { label: 'Roseblood Line',   color: '#f472b6' },
              { label: 'Moonfang Line',    color: '#f472b6' },
              { label: 'Thornblood Line',  color: '#f472b6' },
              { label: 'Duskwreath Line',  color: '#f472b6' },
            ]
          },
          { type: 'h2', text: 'Regular Houses' },
          {
            type: 'pills',
            items: [
              'House Vael', 'House Corven', 'House Drev', 'House Sorn', 'House Rhyss',
              'House Thale', 'House Velin', 'House Marrow', 'House Kyrn', 'House Neris',
            ]
          },
        ]
      }
    },

    // ===========================================================
    // SECTION 13 — ASHFALL
    // Sub-tabs: Overview, Districts, Rules
    // ===========================================================
    ashfall: {
      title: 'Ashfall',
      tabs: [
        { id: 'overview',   label: 'Overview'   },
        { id: 'districts',  label: 'Districts'  },
        { id: 'rules',      label: 'Rules'      },
      ],
      content: {
        overview: [
          { type: 'callout', color: '#dc2626', text: '"Crime is law. Power makes rules. Everything has a price."' },
          { type: 'info', color: '#7c3aed', text: 'Located at a contested border between the North and the Frontier, built in a dead leyline scar. Law Spells cost 10× mana with −90% duration (10s max) — impractical, not impossible.' },
          { type: 'h2', text: 'The Nine Coins' },
          { type: 'p', text: '9 crime lords hold power. Assassination = promotion: kill 1 Coin and 2 more rise. Oathslate binds succession. The only way to break the Nine Coins structure is to destroy Ashfall itself.' },
        ],
        districts: [
          {
            type: 'cards', cols: 2,
            items: [
              {
                name: '1 — The Underbelly', color: '#7c3aed',
                lines: ['Black market heart of Ashfall.'],
                tags: ['Slave pens', 'Forbidden tomes', 'Relic auctions', 'Nullstone smuggling', 'Cold Iron weapon forges'],
              },
              {
                name: '2 — Gilded Maw', color: '#f59e0b',
                lines: ['Massive casino-hub and gambling district.', 'Neutral ground by necessity.'],
                tags: ['Dice halls', 'Fight pits', 'Card dens', 'Beast races', '20+ rival houses run tables'],
              },
              {
                name: '3 — Crimson Circle', color: '#dc2626',
                lines: ['Colosseum complex with three sub-arenas.'],
                expand: { rows: [
                  { label: 'Blood Pits',   value: 'No-rules death matches — prisoners, debtors, monsters' },
                  { label: 'Glory Rings',  value: 'Sanctioned duels for rank, contracts, artifacts. Cold Iron cages = pure skill.' },
                  { label: 'Beast Yards', value: 'Ki user vs captured monsters. Beast Spirit tamers common.' },
                ]}
              },
              {
                name: '4 — Gutter Boroughs', color: '#4a4570',
                lines: ['Slums — 80% of city population.'],
                tags: ['Assassins', 'Thieves', 'Body harvesters', 'Illegal Spirit Pact brokers'],
              },
              {
                name: '5 — Free Docks', color: '#38bdf8',
                lines: ['Airship and smuggling port.'],
                tags: ['Stolen Arcadia tomes', 'Black-market sect drugs', 'Miraj nullstone dust'],
              },
            ]
          },
        ],
        rules: [
          {
            type: 'rules',
            items: [
              'No official guards. Hire your own protection or go without.',
              'Debts paid in blood, mana, years, or family. Debt brokers use Oath Magic to enforce collection.',
              'Nullstone shackles legal. Cold Iron legal. Dead leyline: Law Spells cost 10× mana, duration −90% (10s max). Impractical — not impossible.',
              'If you are strong enough to take it, it is yours. Strength is the only recognized legal framework.',
            ]
          },
        ],
      }
    },

    // ===========================================================
    // SECTION 14 — MATERIALS
    // 8 sub-tabs. Each material card: tap to reveal Uses.
    // Rarity colors: Uncommon #9b91c4 / Rare #818cf8 /
    //   Very Rare #f59e0b / Legendary #f87171
    // ===========================================================
    materials: {
      title: 'Materials',
      tabs: [
        { id: 'antimagic', label: 'Anti-Magic/Ki'    },
        { id: 'forging',   label: 'Forging'          },
        { id: 'crystals',  label: 'Crystals'         },
        { id: 'ki_mats',   label: 'Ki Materials'     },
        { id: 'artifact',  label: 'Artifact / Relic' },
        { id: 'utility',   label: 'Utility & Covert' },
        { id: 'resist',    label: 'Resist Materials' },
        { id: 'subspace',  label: 'Subspace'         },
      ],
      content: {
        antimagic: [
          { type: 'info', color: '#9b91c4', text: 'All anti-magic/ki materials are found globally. Ashfall is a trade hub, not the source. Tap any card to reveal uses.' },
          {
            type: 'cards', cols: 2,
            items: [
              {
                name: 'Cold Iron', color: '#9b91c4', badge: 'Uncommon', badgeColor: '#9b91c4',
                lines: ['−80% mana/ki flow. Very durable.', 'Burns spirits and beasts on contact.', 'Inside Nullstone field = just durable metal.'],
                tags: ['Source: North deep mines / Dwarven forge-hardened'],
                expand: { rows: [
                  { label: 'Uses',     value: 'Shackles, anti-mage blades, Sealing Order weapons, Glory Ring cages' },
                  { label: 'Counters', value: 'Saint Realm / Grand Archmage brute force only' },
                ]}
              },
              {
                name: 'Nullstone', color: '#818cf8', badge: 'Rare', badgeColor: '#818cf8',
                lines: ['Complete mana/ki block. Dead zone 1–10m radius.', 'Cancels Cold Iron −80% drain (must choose one or the other).', 'Pure brute force to escape.'],
                tags: ['Source: Miraj desert cores / leyline scars'],
                expand: { rows: [
                  { label: 'Uses',     value: 'Prison cells, anti-magic bombs, smuggling containers, Underbelly trade' },
                  { label: 'Counters', value: 'Pure brute force only' },
                ]}
              },
            ]
          },
        ],
        forging: [
          { type: 'info', color: '#f59e0b', text: 'Tap any card to reveal uses.' },
          {
            type: 'cards', cols: 2,
            items: [
              {
                name: 'Aetherium', color: '#818cf8', badge: 'Rare', badgeColor: '#818cf8',
                lines: ['+40% mana efficiency. Pathways heal 3× faster.', 'Burns out after ~1,000 spells — crumbles to dust. Non-renewable.'],
                tags: ['Source: Arcadia Sky Islands — high altitude only'],
                expand: { rows: [
                  { label: 'Uses',     value: 'Mage staff cores, Sovereign Archon robes, Archive vault locks' },
                  { label: 'Counters', value: 'Nullstone, Cold Iron, Decay Magic' },
                ]}
              },
              {
                name: 'Dreadiron', color: '#9b91c4', badge: 'Uncommon', badgeColor: '#9b91c4',
                lines: ['Cuts mana constructs. Non-magical edge stays sharp 100 years.'],
                tags: ['Source: North meteorites quenched in Dark Magic'],
                expand: { rows: [
                  { label: 'Uses',     value: 'Anti-mage greatswords, Sealing Order executioner blades' },
                  { label: 'Counters', value: 'Holy Magic rusts it. Light spells chip it.' },
                ]}
              },
              {
                name: 'Sunsilver', color: '#818cf8', badge: 'Rare', badgeColor: '#818cf8',
                lines: ['Stores Light Magic. Blade glows.', 'Burns undead and Dark users on contact.'],
                tags: ['Source: Miraj mirror-deserts — solstice sun only'],
                expand: { rows: [
                  { label: 'Uses',     value: 'Templar swords, vampire-hunting arrows, South elf spears' },
                  { label: 'Counters', value: 'Dark Magic corrodes. Nullstone drains charge.' },
                ]}
              },
              {
                name: 'Gravethread', color: '#f59e0b', badge: 'Very Rare', badgeColor: '#f59e0b',
                lines: ['Flexible, durable as Cold Iron wire. Mana conductive.', 'Self-repairing. +15% efficiency for channeled spells/arts.'],
                tags: ['Source: Subterranean shroud moths — 1 nest/century per site'],
                expand: { rows: [
                  { label: 'Uses',     value: 'Archmage/Grandmaster battle robes, Spellblade gloves, ki wraps, bow strings, relic binding, high-end Spell Tomes' },
                  { label: 'Counters', value: 'Law Spells sustained, Calamity Spell Fire+Dark combo melts permanently' },
                ]}
              },
              {
                name: 'Kingshield Oak', color: '#f59e0b', badge: 'Very Rare', badgeColor: '#f59e0b',
                lines: ['Wood as hard as Cold Iron. Regrows if planted.', '1 tree per century.'],
                tags: ['Source: Old war sites'],
                expand: { rows: [
                  { label: 'Uses',     value: 'Sovereign Archon tower shields, fortress gates' },
                  { label: 'Counters', value: 'Fire + Decay Magic only' },
                ]}
              },
            ]
          },
        ],
        crystals: [
          { type: 'info', color: '#818cf8', text: 'Attunement rule: only 1 crystal per person — a 2nd crystal = 50% chance both shatter. Bonus: mages 100% effect / pure ki users 30% / dual users or blessed 70%. All shatter if struck by Cold Iron.' },
          {
            type: 'cards', cols: 2,
            items: [
              { name: 'Voltcrystal',   color: '#818cf8', badge: 'Rare', badgeColor: '#818cf8',
                lines: ['+60% Lightning Spell power.', 'Shatter = 20m radius War Spell burst. 1 per decade globally.'],
                tags: ['Source: Sky Islands — struck 1,000+ times'],
                expand: { rows: [{ label: 'Uses', value: 'Lightning weapons, staves, arrowheads' }, { label: 'Counters', value: 'Earth grounds. Cold Iron shorts. Water destabilizes.' }]}},
              { name: 'Cinderheart',   color: '#ef4444', badge: 'Rare', badgeColor: '#818cf8',
                lines: ['+60% Fire Spell power. Blade stays red-hot.', 'Shatter = 15m fireball + molten shrapnel.'],
                tags: ['Source: Volcanic battlefields 500yr+ old / dead leyline calderas'],
                expand: { rows: [{ label: 'Uses', value: 'Fire weapons, siege ammo' }, { label: 'Counters', value: 'Water/Ice quenches. Cold Iron smothers. Sand buries.' }]}},
              { name: 'Seaglass Core', color: '#38bdf8', badge: 'Rare', badgeColor: '#818cf8',
                lines: ['+60% Water Magic. Creates water from air.', 'Shatter = 30m pressure burst. 1 per century.'],
                tags: ['Source: South ocean trenches 10km deep — Merfolk guarded'],
                expand: { rows: [{ label: 'Uses', value: 'Water whips, tridents, foci, healing pools, Spellblade styles' }, { label: 'Counters', value: 'Fire evaporates. Lightning destabilizes. Drought weakens.' }]}},
              { name: 'Rimeheart',     color: '#38bdf8', badge: 'Rare', badgeColor: '#818cf8',
                lines: ['+60% Ice Magic. Area 5m drops 40°C.', 'Shatter = 20m flash-freeze. 1 per 50 years.'],
                tags: ['Source: North glacier hearts — permafrost 1,000yr+ deep'],
                expand: { rows: [{ label: 'Uses', value: 'Ice spears, frost blades, staves' }, { label: 'Counters', value: 'Fire melts. Earth insulates. Saltwater resists.' }]}},
              { name: 'Galeheart',     color: '#a3e635', badge: 'Rare', badgeColor: '#818cf8',
                lines: ['+60% Wind Magic. Passively lightens wielder. Silent movement.', 'Shatter = 25m razor wind burst. 1 per decade.'],
                tags: ['Source: Eye of century storms — tornado cores, forms mid-air'],
                expand: { rows: [{ label: 'Uses', value: 'Wind blades, bows, assassin tools, airship cores' }, { label: 'Counters', value: 'Earth blocks. Heavy armor resists. Enclosed spaces dampen.' }]}},
              { name: 'Terracore',     color: '#92400e', badge: 'Rare', badgeColor: '#818cf8',
                lines: ['+60% Earth Magic. Wielder +300% weight at will. Unbreakable stance.', 'Shatter = 15m quake. 1 per century.'],
                tags: ['Source: Deep tectonic fault lines during quakes'],
                expand: { rows: [{ label: 'Uses', value: 'Earth hammers, shields, golem cores, fortress foundations' }, { label: 'Counters', value: 'Wind erodes. Water turns to mud. Lightning shatters.' }]}},
              { name: 'Dawnglass',     color: '#fde68a', badge: 'Rare', badgeColor: '#818cf8',
                lines: ['+60% Light Magic. Purges Dark Magic on contact. Burns undead.', 'Shatter = 20m blinding flash + holy fire. 1 per 25 years.'],
                tags: ['Source: Miraj mirror-deserts at dawn of solstice'],
                expand: { rows: [{ label: 'Uses', value: 'Templar weapons, purification staves, anti-undead bombs' }, { label: 'Counters', value: 'Dark clouds it. Nullstone drains. Underground weakens.' }]}},
              { name: 'Duskstone',     color: '#7c3aed', badge: 'Rare', badgeColor: '#818cf8',
                lines: ['+60% Dark Magic. Drains light/heat in 3m. Silences sound.', 'Shatter = 20m darkness + decay pulse. 1 per 25 years.'],
                tags: ['Source: Sites of mass executions at midnight / shadow marshes'],
                expand: { rows: [{ label: 'Uses', value: 'Assassin blades, curse staves, void bombs' }, { label: 'Counters', value: 'Light purges. Holy shatters. Fire burns.' }]}},
            ]
          },
        ],
        ki_mats: [
          { type: 'info', color: '#f97316', text: 'Only 1 ki ore/crystal attunes per person. 2× Skyforged = unstable. Mixing with mana crystal = 50% shatter risk.' },
          {
            type: 'cards', cols: 2,
            items: [
              {
                name: 'Skyforged Steel', color: '#9b91c4', badge: 'Uncommon', badgeColor: '#9b91c4',
                lines: ['60% weight of steel, 120% durability.', '+40% ki output, −20% technique cost.', 'Hard as Dreadiron when ki-infused. Overcharge = 24hr dull period.'],
                tags: ['Source: Sky Island meteorites — forged at high altitude only'],
                expand: { rows: [
                  { label: 'Uses',     value: 'Ki blades, spear heads, light plate, Spellblade foci. Preferred for Saint+ needing speed and flow.' },
                  { label: 'Counters', value: 'Cold Iron drains flow bonus. Nullstone makes it mundane. Sustained Decay rusts it.' },
                ]}
              },
              {
                name: 'Lifesilk', color: '#818cf8', badge: 'Rare', badgeColor: '#818cf8',
                lines: ['Weaves like silk. Tensile strength of Cold Iron wire.', '+40% ki efficiency. Self-mending (cut thread re-knits in 5min).', 'Full suit weighs 2kg. Conducts ki — does not store. Cannot block fatal blows.'],
                tags: ['Source: Ki moths in ancient dojos — 1 nest per 80 years'],
                expand: { rows: [
                  { label: 'Uses',     value: 'Light armor underlayers, ki wraps, bowstrings, wire weapons, relic binding, meridian acupuncture needles' },
                  { label: 'Counters', value: 'Law Spells sever. Fire+Dark melts. Calamity Spell burns out conductivity.' },
                ]}
              },
            ]
          },
        ],
        artifact: [
          {
            type: 'cards', cols: 2,
            items: [
              {
                name: 'Starstone', color: '#f59e0b', badge: 'Very Rare', badgeColor: '#f59e0b',
                lines: ['+40% to all magic/ki. 1/day Combat Spell starfire beam.', 'Kept in total darkness 1 month = charges 1 use of Starless Night (Combat Spell darkness field).', '3–5 fall per century globally.'],
                tags: ['Source: Mountaintops during meteor showers'],
                expand: { rows: [
                  { label: 'Uses',     value: 'Archmage astrolabes, Eclipse Magic foci, South elf crowns, navigation relics, subterranean tactics' },
                  { label: 'Counters', value: 'Daylight = inert. Decay Magic clouds permanently. Nullstone blocks starlight.' },
                ]}
              },
              {
                name: 'Leyglass', color: '#f59e0b', badge: 'Very Rare', badgeColor: '#f59e0b',
                lines: ['Stores raw leyline mana. 1 shard = 1 Combat Spell free.', '20% chance to shatter on use = mana backlash.'],
                tags: ['Source: Forms where leylines erupt violently'],
                expand: { rows: [
                  { label: 'Uses',     value: 'Adept/Expert emergency battery, trap components, Arcadia Spire cores' },
                  { label: 'Counters', value: 'Cold Iron grounds it. Dropping = small detonation.' },
                ]}
              },
              {
                name: 'Spirit Iron', color: '#f87171', badge: 'Legendary', badgeColor: '#f87171',
                lines: ['Can harm spirits directly. Binds Noble+ spirits on contact.'],
                tags: ['Source: Forged in Spirit Realm by Royal spirits — traded for favors'],
                expand: { rows: [
                  { label: 'Uses',     value: 'Spirit hunters, Veiled Order, Qinzhou exorcist blades' },
                  { label: 'Counters', value: 'Charity blessing frees bound spirit. Sovereign spirits shatter it by touch. Royal spirits break it after 10min contact.' },
                ]}
              },
              {
                name: 'Worldroot Amber', color: '#f87171', badge: 'Legendary', badgeColor: '#f87171',
                lines: ['Regrows anything placed inside: limbs, Mana Hall, Meridians.', 'Heals up to Expert/Master stage damage.', 'Archmage+ damage: 10× Amber + 1 year submersion.', 'Sovereign/Heaven-Opening damage = incurable.'],
                tags: ['Source: World Tree sap fossilized over 10,000 years'],
                expand: { rows: [
                  { label: 'Uses',     value: 'South elf healing relics, cures Pathway Scorch / Meridian Damage up to Master stage' },
                  { label: 'Counters', value: 'Fire + Dark combo melts permanently' },
                ]}
              },
            ]
          },
        ],
        utility: [
          {
            type: 'cards', cols: 2,
            items: [
              {
                name: 'Whispering Lead', color: '#9b91c4', badge: 'Uncommon', badgeColor: '#9b91c4',
                lines: ['Blocks Divination and Scrying.', 'Whispers secrets of past owners.'],
                tags: ['Source: Frontier cursed mines'],
                expand: { rows: [
                  { label: 'Uses',     value: 'Anti-spy vaults, deal rooms, assassin masks' },
                  { label: 'Counters', value: 'Holy Magic silences whispers. Sound Magic shatters.' },
                ]}
              },
              {
                name: 'Oathslate', color: '#818cf8', badge: 'Rare', badgeColor: '#818cf8',
                lines: ['Written pact = unbreakable until slate is physically destroyed.'],
                tags: ['Source: North oath-mountains'],
                expand: { rows: [
                  { label: 'Uses',     value: 'Nine Coins contracts, marriage bonds, mage guild charters' },
                  { label: 'Counters', value: 'Law Spell "I deny this oath" — costs 10 years lifespan' },
                ]}
              },
              {
                name: 'Wraithweave', color: '#818cf8', badge: 'Rare', badgeColor: '#818cf8',
                lines: ['Cloth + Dark Magic. Passively bends light.', '+Silent Casting, −20% presence.'],
                tags: ['Source: South shadow marshes — made by Dark sects'],
                expand: { rows: [
                  { label: 'Uses',     value: 'Assassin suits, Veiled Order robes' },
                  { label: 'Counters', value: 'Light Magic reveals. Cold Iron pins it.' },
                ]}
              },
            ]
          },
        ],
        resist: [
          {
            type: 'cards', cols: 2,
            items: [
              { name: 'Drowned Oak',    color: '#9b91c4', badge: 'Uncommon', badgeColor: '#9b91c4',
                lines: ['+20% Water/Dark resist.'], tags: ['Source: 100yr sunken ships'],
                expand: { rows: [{ label: 'Uses', value: 'Armor, shields' }, { label: 'Counters', value: 'Fire burns fast. Sinks in fresh water.' }]}},
              { name: 'Sun-Slate',      color: '#9b91c4', badge: 'Uncommon', badgeColor: '#9b91c4',
                lines: ['+30% Fire/Light resist.'], tags: ['Source: Miraj desert 100yr bake'],
                expand: { rows: [{ label: 'Uses', value: 'Armor inserts, temple stone' }, { label: 'Counters', value: 'Brittle to Cold Iron.' }]}},
              { name: 'Galeheart Wood', color: '#9b91c4', badge: 'Uncommon', badgeColor: '#9b91c4',
                lines: ['+30% Wind/Lightning resist.'], tags: ['Source: Arcadian cliff trees'],
                expand: { rows: [{ label: 'Uses', value: 'Armor, bows' }, { label: 'Counters', value: 'Ignites easily.' }]}},
              { name: 'Still-Lead',     color: '#9b91c4', badge: 'Uncommon', badgeColor: '#9b91c4',
                lines: ['+10% resist all mana. Heavy. Toxic. Nullstone-lite.'], tags: ['Source: Various mines'],
                expand: { rows: [{ label: 'Uses', value: 'Vault lining, shields' }, { label: 'Counters', value: 'Weight limits mobility.' }]}},
              { name: 'Frostiron',      color: '#9b91c4', badge: 'Uncommon', badgeColor: '#9b91c4',
                lines: ['+40% Ice resist. −20% Fire resist.', 'Best for Frostborn bloodline.'], tags: ['Source: North ore'],
                expand: { rows: [{ label: 'Uses', value: 'North armor, cold-region gear' }, { label: 'Counters', value: 'Fire weakness is significant.' }]}},
            ]
          },
        ],
        subspace: [
          { type: 'info', color: '#a78bfa', text: 'Pouches do NOT stack. Fold-Silk inside Fold-Silk = both unravel. Nullstone cancels access to all subspace storage.' },
          {
            type: 'cards', cols: 2,
            items: [
              { name: 'Fold-Silk',       color: '#9b91c4', badge: 'Uncommon', badgeColor: '#9b91c4',
                lines: ['1m² = 2m² interior. 1ft³ volume. ~50 gold pouch.'],
                tags: ['Source: Crafted base subspace material'],
                expand: { rows: [{ label: 'Uses', value: 'Storage pouches, bags' }, { label: 'Counters', value: 'Overstuff = Astral tear, contents lost. No stacking. Nullstone cancels access.' }]}},
              { name: 'Vault-Weave',     color: '#818cf8', badge: 'Rare', badgeColor: '#818cf8',
                lines: ['Fold-Silk + Gravethread + Master Rune.', '1m² = 10m². 5ft³. Holds heavy weight. ~500 gold.'],
                tags: ['Source: Master Rune crafted'],
                expand: { rows: [{ label: 'Uses', value: 'Heavy storage, expedition bags' }, { label: 'Counters', value: 'Cold Iron cut = collapse, contents eject safely.' }]}},
              { name: 'Pocket-Seam',     color: '#f59e0b', badge: 'Very Rare', badgeColor: '#f59e0b',
                lines: ['Keyed to owner\'s blood. Others open = appears empty.', 'Theft = Glyph triggers Combat Spell. ~2,000+ gold.'],
                tags: ['Source: Archmage craft'],
                expand: { rows: [{ label: 'Uses', value: 'Secure personal storage, assassin caches' }, { label: 'Counters', value: 'Owner\'s death breaks seal.' }]}},
              { name: 'Worldhold Cloth', color: '#f87171', badge: 'Legendary', badgeColor: '#f87171',
                lines: ['Cloak = 20×20ft room interior.', 'Requires 5% mana tithe from owner.', 'Owner death = room persists 100 years, then dumps contents.'],
                tags: ['Source: Sovereign Archon + Space Sovereign spirit co-creation'],
                expand: { rows: [{ label: 'Uses', value: 'Mobile command center, high-value storage' }, { label: 'Counters', value: '5% mana tithe ongoing. Cannot be counterfeited.' }]}},
            ]
          },
        ],
      }
    },

    // ===========================================================
    // SECTION 15 — LORE & SYSTEMS
    // Sub-tabs: Culture, Clarifications, Alchemy, Runes, Summoning
    // ===========================================================
    lore: {
      title: 'Lore & Systems',
      tabs: [
        { id: 'culture',  label: 'Combat Culture'  },
        { id: 'clarity',  label: 'Clarifications'  },
        { id: 'alchemy',  label: 'Alchemy'         },
        { id: 'runes',    label: 'Runes'           },
        { id: 'summon',   label: 'Summoning'       },
      ],
      content: {
        culture: [
          { type: 'note', text: 'Dual users are ~1 in 10,000 born with capacity, ~1 in 100,000 advance both past Expert/Master. Natural attunement = talent + preference. Not everyone creates original arts — some create, some refine, some master existing work.' },
          {
            type: 'cards', cols: 2,
            items: [
              { name: 'Orinthia (West)', color: '#818cf8',
                lines: ['Mana focus, but knights train blade + mana equally.', 'Staff / sword / wand all common — no stigma.'] },
              { name: 'Qinzhou (East)', color: '#f97316',
                lines: ['Martial sects dominate. Sword / spear / polearm + ki is standard.', 'Mana users fewer. Staff is fine — just rare.'] },
              { name: 'South Elves', color: '#34d399',
                lines: ['Bow-mage is the standard fighting style.', 'Ki users present but minority. Grace over force.'] },
              { name: 'North', color: '#38bdf8',
                lines: ['Axe / hammer + frost magic, or pure ki.', 'Dual users distrusted: "no loyalty to one path."'] },
              { name: 'Frontier', color: '#fbbf24',
                lines: ['Whatever works. Spellblade mercenaries common but burn out young.'] },
              { name: 'Miraj', color: '#f59e0b',
                lines: ['Curved blades + sun magic, or pure ki.', 'Staff = priest caste. Respected.'] },
              { name: 'Arcadia', color: '#a78bfa',
                lines: ['Teaches all paths without caste judgment.', 'Talent only — no regional bias.'] },
            ]
          },
        ],
        clarity: [
          {
            type: 'cards', cols: 1,
            items: [
              { name: 'War Spell vs War Art', color: '#818cf8',
                lines: ['War Spell: 300m radius, 10min cast, terrain warped 100yr. Role: siege and bombardment.', 'War Art: 50m radius, 30s charge, precision. Role: anti-army and bunker busting.', 'Different roles — both needed. Neither replaces the other.'] },
              { name: 'Sovereign Archon vs Heaven-Opening', color: '#e879f9',
                lines: ['Base split: 45/55 — terrain, prep, matchup decide actual odds.', 'Stage = potential, not guarantee.', 'Examples: Sovereign vs H-O Water in volcano = Archon 70/30. Same in ocean = Heaven-Opening 80/20. Same element open field = 50/50 — first mistake loses.', 'Legends exist because they beat the odds.'] },
              { name: 'Cold Iron Poisoning', color: '#9b91c4',
                lines: ['No permanent loss while worn.', '1hr worn: −85% current, −5% max pool. Fighting at ~10% power.', '10hr worn: −80% current, −50% max pool. Cantrip only.', 'Remove + 1 day rest = 100% recovery. No permanent crippling.', 'Jails work — mages are not mass-crippled by imprisonment.'] },
              { name: 'Techniques & Spells', color: '#34d399',
                lines: ['Core principles are finite — applications are infinite.', 'Not everyone creates. Some create originals, some refine inherited ones, some only master existing arts.', 'Two Masters can both reach Grandmaster — one inventing, one perfecting.'] },
            ]
          },
        ],
        alchemy: [
          { type: 'info', color: '#34d399', text: 'Brew mana/ki into consumables. Equivalent exchange enforced by World Laws placed by The Arbiter Entity. Violation = Alchemical Backlash — brewer pays with their body. Most die trying.' },
          { type: 'h2', text: 'World Laws of Alchemy' },
          {
            type: 'pills',
            items: ['No creation from nothing', 'No permanent ascension (elixirs cap at +5%)', 'No life creation (can heal — not resurrect)', 'No law-breaking potions']
          },
          { type: 'h2', text: 'Alchemy Tiers' },
          {
            type: 'table',
            headers: ['Tier', 'Equiv Power', 'Effect', 'Brew Time', 'Key Materials'],
            rows: [
              { cells: ['Salves',       'Cantrip',        'Heal cuts, stop bleeding',                                            '1hr',    'Herbs'], color: '#34d399' },
              { cells: ['Potions',      'Combat Spell',   '+50% str/speed/regen 10min. Overdose 3/day = backlash.',              '1hr',    'Leyglass dust + beast core'], color: '#818cf8' },
              { cells: ['Elixirs',      'War Spell',      'Permanent +5% stat OR cure 1 incurable.',                            '1 week', 'Ki crystal + Archmage blood + 1yr life'], color: '#f59e0b' },
              { cells: ['Grand Elixirs','Archmage',       'Mimic 1 War Spell/Art for 1min.',                                    '1 month','Voltcrystal shard + 10yr life'], color: '#ef4444' },
            ]
          },
          { type: 'note', text: 'Not a combat class. Requires lab + time + materials. Cannot quick-brew in combat.' },
        ],
        runes: [
          { type: 'info', color: '#f59e0b', text: 'Write mana/ki into matter — effect triggers on condition. No Law Runes exist. Takes time — no quick-cast. Destroy rune = destroy effect. Dispel works. Nullstone blocks.' },
          {
            type: 'table',
            headers: ['Tier', 'Req', 'Type', 'Example', 'Craft Time'],
            rows: [
              { cells: ['Wards',       'Adept',          'Passive defense',    '"Deny Fire" on door = −50% Fire Spells',              '1 day'], color: '#818cf8' },
              { cells: ['Glyphs',      'Master',         'Single-use offense', '"Explode" on sword = Combat Spell on hit',            '1 week'], color: '#f59e0b' },
              { cells: ['Arrays',      'Grandmaster+ team','Large-scale',      'Teleport circles, flying ship cores, city barriers',  'Months to years'], color: '#ef4444' },
              { cells: ['Master Runes','Archmage',       'Complex repeatable', '"Teleport 1 mile" or "Nullstone Field 10m" — 10 uses','1 month'], color: '#dc2626' },
            ]
          },
          { type: 'note', text: 'Best materials: Cold Iron (100yr) / Gravethread or Lifesilk (cloth) / Sunsilver (Light only). Users: Arcadia Rune Scribes, North Dwarven Runesmiths, Frontier trap makers.' },
        ],
        summon: [
          { type: 'info', color: '#a78bfa', text: 'Rental — not creation. No Law Summon. Summoned entities are not loyal — need Oathslate contract or they turn. Nullstone = no summoning. Cold Iron weakens link. Best managed: 1–3 per fight.' },
          {
            type: 'table',
            headers: ['Type', 'Req', 'Duration / Method', 'Risk'],
            rows: [
              { cells: ['Spirit Summon',    'Combat Spell',  'Call Minor–True spirit for 1 fight. Spirit can refuse — 1hr ritual.', 'Death = banished 100yr, spirit hates you'], color: '#34d399' },
              { cells: ['Beast Summon',     'Ki Art',        'Call tamed beast from Beast Realm. Needs prior bond. Beast can die for real.', 'Beast permanently dead if killed'], color: '#f97316' },
              { cells: ['Elemental Summon', 'War Spell',     'Call elemental — needs crystal as beacon. 10min. Rampages if binder dies.', 'Rampage if binder dies'], color: '#818cf8' },
            ]
          },
          {
            type: 'pills', label: 'Known Summoner Groups',
            items: ['East Spirit Callers', 'South Beast Tamers', 'Arcadia Elementalists', 'Frontier (disposable summons)']
          },
        ],
      }
    },

    // ===========================================================
    // SECTION 16 — BEASTBOUND
    // Sub-tabs: Overview, The Nine Beasts, Calamity Shroud,
    //           Politics & Counters
    // ===========================================================
    beastbound: {
      title: 'Beastbound',
      tabs: [
        { id: 'overview', label: 'Overview'          },
        { id: 'beasts',   label: 'The Nine Beasts'   },
        { id: 'shroud',   label: 'Calamity Shroud'   },
        { id: 'politics', label: 'Politics & Counters'},
      ],
      content: {
        overview: [
          { type: 'info', color: '#f97316', text: 'Nine Sovereign-tier Calamity Spirits sealed into human bloodlines at birth. Soul Bound — inherited, spread globally. One per major region per the Treaty of Nine.' },
          { type: 'h2', text: 'Binding Rules' },
          {
            type: 'table',
            headers: ['Rule', 'Detail'],
            rows: [
              { cells: ['Sealed',      'At birth via Fleshscript + Oathslate + Land Pact ritual.'] },
              { cells: ['Permanent',   'Cannot be removed, stolen, or transferred except by death.'] },
              { cells: ['On Death',    'Chosen Heir ritual: 90% success to kin newborn. Forced Rebirth: 10% = nearest compatible newborn within 100 miles.'] },
              { cells: ['Tithe',       '5% pool passive. Active draw scales 5–20% pool/min based on Shroud Version.'] },
              { cells: ['No Twins',    'Only 1 Beast per soul. Twin birth = Beast picks one. Other becomes Hollow = −50% lifespan.'] },
            ]
          },
          { type: 'h2', text: 'Interactions' },
          {
            type: 'table',
            headers: ['Interaction', 'Rule'],
            rows: [
              { cells: ['Ascension',      'Beastbound can ascend. Beast does not get stronger — host baseline rises.'], color: '#fde68a' },
              { cells: ['Blessings',      'Stack with Beastbound. Pure Dragon Fire + Kurama = legal.'], color: '#34d399' },
              { cells: ['Dual Awakened',  'Possible. Odds = 1 per 1 million years.'], color: '#e879f9' },
              { cells: ['Immortality',    'Beast does not grant immortality. Host ages normally.'], color: '#9b91c4' },
            ]
          },
        ],
        beasts: [
          {
            type: 'cards', cols: 3,
            items: [
              { name: '1 — Shukaku', color: '#f59e0b', badge: 'One Tail',
                lines: ['Element: Wind / Sand', 'Region: Miraj deserts'],
                expand: { rows: [{ label: 'Ability', value: 'Absolute sand control. Defense specialist. Madness risk if host doesn\'t sleep — Shukaku oppresses sleep to maintain control.' }]}},
              { name: '2 — Matatabi', color: '#ef4444', badge: 'Two Tails',
                lines: ['Element: Fire', 'Region: North volcanic fields'],
                expand: { rows: [{ label: 'Ability', value: 'Blue fire that clings like oil. Burns through most Fire resistances. Cat-like movement enhancement.' }]}},
              { name: '3 — Isobu', color: '#38bdf8', badge: 'Three Tails',
                lines: ['Element: Water', 'Region: Orinthia coasts'],
                expand: { rows: [{ label: 'Ability', value: 'Armored shell — mist and illusion generation. Isobu is introverted and grudging — hardest pact to earn.' }]}},
              { name: '4 — Son Goku', color: '#f97316', badge: 'Four Tails',
                lines: ['Element: Earth / Lava', 'Region: Qinzhou mountains'],
                expand: { rows: [{ label: 'Ability', value: 'Lava release, powerful taijutsu boost. Proud and hot-tempered — responds to earned respect, not submission.' }]}},
              { name: '5 — Kokuo', color: '#38bdf8', badge: 'Five Tails',
                lines: ['Element: Steam', 'Region: Frontier geysers'],
                expand: { rows: [{ label: 'Ability', value: 'Steam pressure for speed and power. Gentle and refined — easiest to form a pact with among the tailed beasts.' }]}},
              { name: '6 — Saiken', color: '#34d399', badge: 'Six Tails',
                lines: ['Element: Acid', 'Region: South marshes'],
                expand: { rows: [{ label: 'Ability', value: 'Acid slime offense and defense. Host healing at Surge Art level in V1 Shroud. Cheerful and cooperative.' }]}},
              { name: '7 — Chomei', color: '#a3e635', badge: 'Seven Tails',
                lines: ['Element: Wind / Bug', 'Region: Arcadia forests'],
                expand: { rows: [{ label: 'Ability', value: 'Flight, wing scales for defense, blinding powder. Optimistic and easy to get along with.' }]}},
              { name: '8 — Gyuki', color: '#818cf8', badge: 'Eight Tails',
                lines: ['Element: Water / Ink', 'Region: Orinthia island chain'],
                expand: { rows: [{ label: 'Ability', value: 'Ink seals. 8 limbs enabling 8× Flash Arts simultaneously. Laid-back but fiercely protective of its host.' }]}},
              { name: '9 — Kurama', color: '#ef4444', badge: 'Nine Tails',
                lines: ['Element: Fire / Malice', 'Region: Disputed — last seen Frontier'],
                expand: { rows: [
                  { label: 'Ability',  value: 'Raw ki amplification. Senses malice in others. The most powerful of the Nine.' },
                  { label: 'Status',   value: 'Location disputed. Most powerful — most dangerous. Several factions actively searching.' },
                ]}},
            ]
          },
        ],
        shroud: [
          { type: 'note', text: 'Tail Count Limit: a 1-Tail host cannot access 9-Tail V2 Shroud. Host stage + trust + tail count all gate access.' },
          {
            type: 'table',
            headers: ['Version', 'Stage Req', 'Tails', 'Effect', 'Cost/min', 'Risk'],
            rows: [
              { cells: ['V1 Shroud',     'Adept / Flow',           '1 tail',    '+1 Stage stats — wounds heal at Surge Art level',                              '5% pool/min',  'Emotions bleed — lose control at 50% hp'], color: '#f97316' },
              { cells: ['V2 Shroud',     'Expert / Surge',         '2–4 tails', 'Bone armor — +2 Stages — claws = Combat Spell damage',                        '10% pool/min', 'Skin peels — 1hr coma after'], color: '#ef4444' },
              { cells: ['Partial Beast', 'Master / Manifest',      '5–7 tails', 'Manifest body part — Edict Art tier',                                         '15% pool/min', 'Beast speaks — dispel = Meridian Damage'], color: '#dc2626' },
              { cells: ['Full Beast',    'Grand Archmage / Domain','8–9 tails', 'Become the Beast — Calamity Spell tier',                                      '20% pool/min', 'If host dies — Beast rampages 100 years'], color: '#b91c1c' },
              { cells: ['Unity',         'Saint / Edict + deep trust','All tails','Host + Beast sync — Law Art tier — 30min/day max',                           '30% pool/min', '3 days exhaustion after use'], color: '#fde68a' },
            ]
          },
        ],
        politics: [
          { type: 'h2', text: 'Treaty of Nine' },
          {
            type: 'cards', cols: 1,
            items: [
              { name: 'Treaty Rules', color: '#38bdf8',
                lines: [
                  'No hunting other nations\' Beastbound.',
                  'No using 2 Beasts in the same war.',
                  'Break = other 8 nations retaliate.',
                  'Each Beast tied to a regional clan (example: Miraj\'s Sabaku clan hold Shukaku — clan = nobility + hostages).',
                  'Arcadia runs Beast Census — tracks hosts, seal status, leaks, mediates disputes.',
                ]
              },
            ]
          },
          { type: 'h2', text: 'Counters' },
          {
            type: 'table',
            headers: ['Counter', 'Effect'],
            rows: [
              { cells: ['Cold Iron chains',        'Suppress to V1 Shroud maximum.'], color: '#9b91c4' },
              { cells: ['Nullstone field',         'Cannot draw Beast ki. Existing cloak remains active.'], color: '#818cf8' },
              { cells: ['Law Spell "Be still"',   '10s forced shutdown. Costs caster 5 years lifespan.'], color: '#fde68a' },
              { cells: ['Beast vs Beast',         'More tails wins in direct clash.'], color: '#f97316' },
            ]
          },
        ],
      }
    },

  } // end sections
}; // end CODEX

