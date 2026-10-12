# Project guidance

Read docs/RELAUNCH-BRIEFING.md before changing school facts. Keep original media/document URLs byte-for-byte intact. Never invent people, deadlines, events, gallery image URLs or a confirmed decision. Preserve explicit source dates and editorial conflicts.

Keep content in content/ and shared rendering in src/. Node 22+, no production package dependencies. Run npm run build, npm run check and npm test after substantive changes. Run browser-qa.mjs with optional Playwright when layout or client interaction changes.

No secrets in Git. No public website deployment without the user's explicit instruction. The repository workflow builds and tests; it does not deploy. Keep actual QA evidence separate from proposed checks and never claim WCAG conformance or image clearance without verification.
