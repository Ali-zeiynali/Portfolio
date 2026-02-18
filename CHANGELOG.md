# Changelog

## 2026-02-18
- Replaced project `link`/`image` fields with an `images` gallery array in localized project data and populated each project with static sample images
- Redesigned Projects cards to be click-to-open and show only each project's main image in the list view
- Added an interactive project gallery modal with close controls, overlay-dismiss behavior, thumbnail selection, and next/previous navigation buttons
- Improved language-switch typography so Persian script (including `فا`) always renders with `Baloo Bhaijaan 2`, and ensured navigation labels follow Persian font styling in FA mode
- Stabilized English timeline date/arrow layout without affecting Persian timeline alignment, and refined light-theme timeline date color and typography

## 2026-02-17
- Added full bilingual content support (English/Persian) with centralized translation data in `src/content/translations.ts`
- Implemented language toggle and RTL/LTR switching support with dedicated UI behavior and styling updates
- Rebranded profile identity to Ali Zeiynali in hero and footer text
- Updated expertise focus from React-centric messaging to Python backend + Vue frontend including revised DevOps scope and experience ranges
- Removed the contact form and replaced it with a clean email-only contact block
- Refreshed visuals with modern glass-card styling improved navigation bar appearance and polished section presentation

## 2026-02-17 (visual refinement)
- Redesigned the top navigation into a floating glassmorphism bar with cleaner spacing stronger blur and modern shadow depth
- Reworked card surfaces shadows hover interactions and section spacing across expertise projects timeline and contact for a cleaner modern UI
- Fixed Persian Career History layout by forcing a stable one-column timeline mode with corrected date positioning in RTL mode
- Refined Persian copy by removing trailing dot punctuation and improving spacing around English technology words

## 2026-02-17 (rtl and mobile polish)
- Fixed Persian top navigation stability by preserving desktop nav item order and preventing label wrapping for Career History and other menu links
- Removed horizontal page overflow by enforcing global `overflow-x: hidden` and correcting RTL timeline content offsets
- Restyled the mobile side drawer to match dark/light theme aesthetics with improved surface, spacing, and localized menu title
- Added Google Font `Baloo Bhaijaan 2` and enabled automatic Persian font application through `html[lang='fa']`
- Centered the Contact section card content for better visual balance
- Increased theme switch control size and replaced Persian language switch label with `فا`
- Updated dynamic document title to `Ali Zeiynali` (English) and `علی زینلی` (Persian)
- Added localized copyright text at the end of the page footer


## 2026-02-17 (identity cleanup and rtl hardening)
- Replaced legacy profile links and homepage references with `alizeiynali` links across hero, footer, project links, and package metadata
- Hardened Persian layout behavior by removing global `document.dir` mutation and limiting RTL direction to content sections only
- Prevented Persian top-bar regressions by keeping navigation actions in stable LTR flow while preserving section-level RTL text alignment
- Upgraded the contact card visuals with a sharper gradient frame, stronger depth, and improved interactive email badge styling


## 2026-02-17 (timeline and bilingual project data refinement)
- Kept Career History timeline layout identical in Persian and English by removing language-based timeline layout switching
- Added dedicated bilingual project source file at `src/content/projects.ts` and rendered project cards from localized data
- Updated Projects section component to read titles, descriptions, links, and images from centralized localized content
- Widened the Contact card container for a more horizontal visual layout
- Normalized English title casing to `Ali Zeiynali` for document title display
