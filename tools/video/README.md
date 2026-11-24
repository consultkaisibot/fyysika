# Videojuhendite tegemine

Mootor `engine.js` filmib simulatsiooni Playwrightiga (Chromium) kaader-kaadrilt: lehele süstitakse virtuaalne kell (`performance.now` ja `requestAnimationFrame` asendatud), kursor, tiitrid, esiletõst ja pealkirjakaardid on lehe peal kiht. Pilt kodeeritakse ffmpeg-iga (1920×1080, 30 fps, H.264), kõneklipid pannakse iga stseeni algusesse (+0,4 s).

Praegu on siin magnetvälja stsenaariumid (`opetajale.js`, `opilasele.js`) ja kõnetekstid (`magnetvali_clips.json`). Stsenaarium võib anda oma lehe ja kõnetekstide faili (`sim: 'optika'`, `clips: '…json'`, `hideHint: false` jätab lehe vihjeteksti alles); vaikimisi magnetväli.

**Lisastseenid „Joonis töölehele“** (23.11.2026): `toolehele_optika.js` ja `toolehele_elektrivali.js`, kõne `toolehele_clips.json` (op_x1, op_x2, ev_x1, ev_x2). Need liideti optika ja elektrivälja vana õpetaja video lõppu: vana video lõigati enne valget lõpukaarti (optika 53,333 s, elektriväli 65,0 s, kõne lõpeb ≥ 0,7 s varem), uue osa heli võimendati vana kõnega samale tasemele (optika +2,3 dB, elektriväli +1,7 dB, piiraja 0,89) ja kõik kodeeriti uuesti (crf 24, SSIM vana osaga 0,996 / 0,994):

```
ffmpeg -i vana.mp4 -i uus.mp4 -filter_complex "[0:v]trim=0:LÕIGE,setpts=PTS-STARTPTS[v0];[0:a]atrim=0:LÕIGE,asetpts=PTS-STARTPTS[a0];[1:v]setpts=PTS-STARTPTS[v1];[1:a]aresample=48000,volume=XdB,alimiter=limit=0.89:level=false,asetpts=PTS-STARTPTS[a1];[v0][a0][v1][a1]concat=n=2:v=1:a=1[v][a]" -map "[v]" -map "[a]" -c:v libx264 -preset veryfast -crf 24 -pix_fmt yuv420p -r 30 -c:a aac -b:a 128k -ac 1 -ar 48000 -movflags +faststart opetajale.mp4
```

Ülejäänud 7 simulatsiooni vanade videote stsenaariume pole alles.

1. Kõne: Neurokõne (TartuNLP, kõneleja Mari). Klipid `<id>.wav` kausta `tools/video/clips/` (repos neid ei hoita). Claude'i pilvest API-le ei pääse – klipid tehakse Claude'i rakenduse sisseehitatud brauseris lehel neurokone.ee (fetch API-le, kokku zip, allalaadimine), zip tõstetakse kausta `Dokumendid\Neurokõne` (Kaia arvutis OneDrive: `OneDrive\Ülejäänud kataloogid\Dokumendid\Neurokõne`), mis ühendatakse sessiooniga („Add folder“). Allalaadimiste kausta ühendamist loakontroll ei luba.
2. `node engine.js opetajale.js ../../magnetvali/video/opetajale.mp4` (Playwrighti tee on mootoris `/opt/npm-tools/node_modules/playwright`).
3. Stseeni pikkus = max(toimingud, kõne + 0,9 s); logi `<väljund>.log.json` näitab stseenide algusi ja kõne lõppe.
4. Eelvaatepilt: `ffmpeg -ss 3 -i opetajale.mp4 -frames:v 1 -vf scale=960:540 opetajale.jpg`.

**Vana aadress videotest eemaldatud** (24.11.2026): kõigi 18 video tiitri- ja lõpukaartidelt kustutati rida `vanakrt.github.io/…` (ka üleminekukaadritest; URL-i tähed täideti ümbritsevaga, heli kopeeriti muutmata, video crf 24). `opetajale.jpg` eelvaated tehti uuesti. Stsenaariumides on nüüd `kaisi.ee/fyysika`, nii et uutes videotes on õige aadress.
