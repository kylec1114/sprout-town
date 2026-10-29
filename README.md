# 苔苔與硃砂 — 第一盞燈

Single-player Three.js first-chapter prototype. 苔苔: professional shirker, food seeker, eager to clock off. 硃砂: calm, dry humour, watches 苔苔 perform. Character geometry approximates the supplied raccoon and butter-bread fox illustrations; no original image files are committed.

## Play locally
Node 22+: `npm install`, then `npm run dev`. `npm run build` creates dist with bundled Three.js; no runtime CDN or external audio needed. WASD/arrows move, Shift runs, drag orbits camera, E interacts. Touch controls included. Inspect streetlamp, listen at cabinet, connect blue-green-gold wires, repair lamp, speak to 硃砂. Ending unlocks a replay button.

## Android
Push to main triggers Android debug APK workflow; Actions can consume billed minutes depending on your account. Successful run uploads sprout-town-debug-apk artifact (7-day retention). Extract ZIP for app-debug.apk. This is a debug-signed testing build, not a Play Store release. If Actions or workflow-write permission is disabled, building requires repository settings/credentials to be adjusted. APK does not exist until build succeeds. Build and device playtest have not yet been verified.

## Audio and scope
Procedural original looping melody, warm harmony after repair, filtered rain noise, footsteps, UI and puzzle sounds. Separate music/effects volume and mute. No voice acting or final recorded soundtrack. Stylized procedural models, exterior-only street, no camera-wall collision, no permanent save or multiplayer. Six worlds/100 levels remain a roadmap, NOT implemented content. Dependencies are fixed versions, but a dependency lockfile and production security/update review are still needed.
