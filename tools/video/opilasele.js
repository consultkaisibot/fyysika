// Video õpilasele: füüsika selgitus
const zoom = async (a, to, sec) => {
  const from = await a.js(() => __mv.cam.size), n = Math.round(sec*30);
  for (let i = 1; i <= n; i++){ const t = i/n, e = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2)/2; await a.js(v => { __mv.cam.size = v; __mv.draw(); }, from + (to - from)*e); await a.wait(1/30); }
};
module.exports = {scenes:[
  {name:'pealkiri', speech:'s0', min:5, run:async a => {
    await a.card('Magnetväli ja jõujooned', 'Kuidas magnetvälja kujutatakse ja millal tekib jõud?', '');
    await a.wait(5); await a.js(() => { __mv.compasses.magnet.length = 0; __mv.setView('top'); });
    await a.card(null);
  }},
  {name:'jooned väljas', speech:'s1', caption:'Väljaspool magnetit lähevad jõujooned põhjapoolusest (N) lõunapoolusesse (S).', run:async a => {
    await a.moveTo(1000, 650, 0.3, false);
    await a.wait(1.2);
    // kursor näitab ühte jõujoont N-ist S-i
    for (const P of [[5.3, 0, -0.8], [5, 0, -4.5], [0, 0, -6.6], [-5, 0, -4.5], [-5.3, 0, -0.8]]){ const [x, y] = await a.world(P); await a.moveTo(x, y, 0.9, false); }
  }},
  {name:'jooned sees', speech:'s2', caption:'Magneti sees lähevad jõujooned S-st N-i: jõujooned on kinnised.', run:async a => {
    await a.moveTo(1150, 660, 0.4, false);
    await zoom(a, 13, 1.6);
    await a.wait(2.4);
    await zoom(a, 29, 1.4);
  }},
  {name:'kompassid', speech:'s3', caption:'Kompassinõela N-ots pöördub mööda jõujooni. Tihedamad jõujooned – tugevam väli.', run:async a => {
    await a.click('#btnGrid');
    await a.wait(1.5);
  }},
  {name:'kaks magnetit', speech:'s4', caption:'Erinimelised poolused tõmbuvad, samanimelised tõukuvad.', run:async a => {
    await a.click('#scenes button[data-s="mag2"]');
    await a.js(() => { __mv.compasses.mag2.length = 0; __mv.compasses.mag2.push([0, 0, 0], [0, 0, 3.5], [0, 0, -3.5]); __mv.setView('top'); });
    await a.wait(2.4);
    await a.click('#segM2 button[data-v="nn"]');
    await a.wait(1.2);
    await a.hoverWorld([0, 0, 0], 0.8);
  }},
  {name:'sirge juhe', speech:'s5', caption:'Vooluga juhtme ümber on jõujooned ringjooned.', run:async a => {
    await a.click('#scenes button[data-s="wire"]');
    await a.moveTo(1150, 660, 0.5, false);
    await a.wait(1);
  }},
  {name:'parema käe reegel', speech:'s6', caption:'Parema käe reegel: pöial voolu suunas – sõrmed näitavad jõujoonte suunda.', run:async a => {
    await a.wait(3.5);
    await a.click('#segDW button[data-v="-1"]');
    await a.wait(1.5);
    await a.click('#segDW button[data-v="1"]');
  }},
  {name:'kaugus', speech:'s7', caption:'B = μ₀I / (2πr): 5 A korral 2 cm kaugusel 50 µT, 4 cm kaugusel 25 µT.', run:async a => {
    await a.click('#segView button[data-v="top"]');
    await a.js(() => { __mv.compasses.wire.length = 0; });
    await a.hoverWorld([2, 0, 0], 1.2);
    await a.wait(3.5);
    await a.hoverWorld([4, 0, 0], 1.2);
    await a.wait(2);
  }},
  {name:'solenoid', speech:'s8', caption:'Solenoidi sees on väli peaaegu homogeenne – solenoid käitub nagu pulkmagnet.', run:async a => {
    await a.click('#scenes button[data-s="sol"]');
    await a.js(() => __mv.setView('top'));
    await a.moveTo(1150, 660, 0.5, false);
  }},
  {name:'kaks juhet', speech:'s9', caption:'Samas suunas voolud: juhtmed tõmbuvad. Vastassuunas voolud: tõukuvad.', run:async a => {
    await a.click('#scenes button[data-s="wires2"]');
    await a.wait(3);
    await a.click('#segD2 button[data-v="-1"]');
  }},
  {name:'Ampère', speech:'s10', caption:'Homogeenses väljas F = B·I·L. U-magneti väli ulatub poolustest välja: F = 10,5 mN, juhe kaldub 11,5°.', run:async a => {
    await a.click('#scenes button[data-s="force"]');
    await a.moveTo(1150, 670, 0.5, false);
    await a.wait(3);
    await a.scrollTo('#readout');
    await a.highlight('#readout', true);
    await a.wait(4);
    await a.highlight('#readout', false);
  }},
  {name:'vasaku käe reegel', speech:'s11', caption:'Vasaku käe reegel: jõujooned peopessa, sõrmed voolu suunas – pöial näitab jõudu.', tail:1.6, run:async a => {
    await a.click('#segDF button[data-v="-1"]');
    await a.moveTo(1150, 670, 0.5, false);
    await a.wait(3);
  }},
  {name:'ringmagnet', speech:'s15', caption:'Ringmagneti väli ei ole homogeenne: juhtme osadele mõjub erinev jõud; jõumoment telje suhtes – elektrimootori põhimõte.', tail:1.2, run:async a => {
    await a.click('#scenes button[data-s="ringmag"]');
    await a.moveTo(1150, 670, 0.5, false);
    await a.wait(3);
    await a.dragWorld([4.5, 1.2, 0], [4.5, 1.2, 3.5], 2);
    await a.moveTo(1150, 670, 0.5, false);
  }},
  {name:'Lorentz', speech:'s12', caption:'Lorentzi jõud F = |q|vB on risti kiirusega → osake liigub ringjoonel, r = mv/(|q|B).', run:async a => {
    await a.click('#scenes button[data-s="charge"]');
    await a.moveTo(1150, 670, 0.5, false);
    await a.wait(2);
  }},
  {name:'spiraal', speech:'s13', caption:'Kui osake lendab välja suhtes viltu, liigub ta mööda spiraali.', tail:2, run:async a => {
    await a.slider('#rCa', 60, 1.2);
    await a.moveTo(1150, 670, 0.5, false);
    await a.wait(3.5);
  }},
  {name:'mullikamber', speech:'s14', caption:'Energiakadu: raadius väheneb, rada keerdub sissepoole (mullikambri jälg).', tail:3, run:async a => {
    await a.slider('#rCa', 90, 0.8);
    await a.click('#segView button[data-v="top"]');
    await a.slider('#rCl', 25, 1.0);
    await a.moveTo(1150, 670, 0.5, false);
    await a.wait(9.5);
  }},
  {name:'lõpp', caption:'', min:3, run:async a => {
    await a.card('Kõik simulatsioonid', '', 'kaisi.ee/fyysika');
    await a.wait(3);
  }}
]};
