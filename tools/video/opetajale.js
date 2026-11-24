// Video õpetajale: kuidas simulatsiooni tunnis kasutada
module.exports = {scenes:[
  {name:'pealkiri', speech:'t0', min:5.2, run:async a => {
    await a.card('Magnetväli ja jõujooned', 'Kuidas simulatsiooni tunnis kasutada', 'kaisi.ee/fyysika/magnetvali');
    await a.wait(5.2); await a.card(null);
  }},
  {name:'pööramine', speech:'t1', caption:'Vaate pööramine: lohista hiire või sõrmega. Suum: hiire ratas või kaks sõrme.', run:async a => {
    await a.wait(0.6);
    await a.dragScreen(980, 610, 1180, 600, 2.2);
    await a.dragScreen(1180, 600, 1010, 640, 1.6);
    await a.moveTo(900, 560, 0.5);
    await a.wheel(-60, 6); await a.wait(0.4); await a.wheel(60, 6);
  }},
  {name:'vaated', speech:'t2', caption:'Valmis vaated: 3D, pealt, eest ja küljelt.', run:async a => {
    await a.click('#segView button[data-v="top"]');
    await a.wait(2.8);
    await a.click('#segView button[data-v="3d"]');
  }},
  {name:'kompass', speech:'t3', caption:'„Lisa kompass“ ja klõps pinnal. Sinine nõelaots (N) näitab välja suunda.', run:async a => {
    await a.click('#segTool button[data-v="compass"]');
    await a.clickWorld([-3, 0, 6.5]);
    await a.wait(0.4);
    await a.clickWorld([9, 0, 4]);
    await a.wait(0.4);
    await a.clickWorld([3, 0, -6.5]);
  }},
  {name:'ruudustik', speech:'t4', caption:'„Kompassid ruudustikku“ katab pinna kompassidega.', run:async a => {
    await a.click('#btnGrid');
    await a.wait(1.5);
  }},
  {name:'mõõtmine', speech:'t5', caption:'Kursor pinnal: sinine nool näitab välja suunda, kõrval on B väärtus.', run:async a => {
    await a.click('#btnClear');
    await a.click('#segTool button[data-v="rotate"]');
    await a.hoverWorld([7.5, 0, 0], 1.0); await a.wait(0.8);
    await a.hoverWorld([7, 0, 3.5], 1.2); await a.wait(0.8);
    await a.hoverWorld([0, 0, 4.5], 1.4); await a.wait(0.8);
    await a.hoverWorld([-7, 0, 3], 1.2);
  }},
  {name:'ruumiliselt', speech:'t6', caption:'Jõujooned ühel pinnal või ruumiliselt.', run:async a => {
    await a.click('#segL3 button[data-v="1"]');
    await a.wait(2.6);
    await a.click('#segL3 button[data-v="0"]');
  }},
  {name:'kaks magnetit', speech:'t7', caption:'Kaks magnetit: vali poolused, lohista magnetit – jõud arvutatakse kohe.', run:async a => {
    await a.click('#scenes button[data-s="mag2"]');
    await a.wait(0.5);
    await a.click('#segM2 button[data-v="nn"]');
    await a.wait(0.5);
    await a.dragWorld([7, 0.5, 0], [7.5, 0.5, 6], 2.2);
    await a.dragWorld([7.5, 0.5, 6], [6.5, 0.5, 0.3], 1.6);
  }},
  {name:'kaks juhet', speech:'t8', caption:'Kaks juhet: lohista juhet, muuda voolude suunda.', run:async a => {
    await a.click('#scenes button[data-s="wires2"]');
    await a.dragWorld([3, 3, 0], [5, 3, -3], 1.6);
    await a.click('#segD2 button[data-v="-1"]');
  }},
  {name:'solenoid', speech:'t9', caption:'Voolutugevus, voolu suund ja solenoidil keerdude arv.', run:async a => {
    await a.click('#scenes button[data-s="sol"]');
    await a.slider('#rNs', 30, 1.4);
    await a.wait(0.4);
    await a.click('#segDS button[data-v="-1"]');
  }},
  {name:'juhe magnetväljas', speech:'t10', caption:'Vooluga juhe magnetväljas: voolu suuna muutmisel kaldub juhe teisele poole.', tail:1.6, run:async a => {
    await a.click('#scenes button[data-s="force"]');
    await a.wait(2.6);
    await a.click('#segDF button[data-v="-1"]');
    await a.wait(2.5);
  }},
  {name:'ringmagnet', speech:'t13', caption:'Juhe ringmagneti väljas: lohista, keera, tõsta või pane püsti. Heledad nooled: jõud juhtme eri osadele.', tail:1.2, run:async a => {
    await a.click('#scenes button[data-s="ringmag"]');
    await a.wait(0.6);
    await a.dragWorld([4.5, 1.2, 0], [4.5, 1.2, 3], 1.6);
    await a.slider('#rRa', 60, 1.0);
    await a.wait(0.4);
    await a.click('#segRo button[data-v="v"]');
    await a.wait(1.0);
  }},
  {name:'laetud osake', speech:'t11', caption:'Laetud osake: osake, kiirus, B ja lennusuuna nurk.', run:async a => {
    await a.click('#scenes button[data-s="charge"]');
    await a.wait(1.6);
    await a.slider('#rCa', 60, 1.2);
    await a.wait(1.2);
    await a.click('#segPt button[data-v="e"]');
    await a.wait(1.0);
  }},
  {name:'mullikamber', speech:'t12', caption:'Energiakadu: rada keerdub sissepoole nagu mullikambris.', tail:2.5, run:async a => {
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
