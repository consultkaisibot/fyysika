// Lisastseen elektrivälja õpetaja videole: „Joonis töölehele“ (liidetakse vana video lõppu enne lõpukaarti)
async function clickPreview(a, wx, wy){
  // maailmapunkt (m) → eelvaate pildi koht ekraanil
  const [x, y] = await a.js(([wx, wy]) => {
    const fr = __fe.exportFrame(__fe.xo), r = document.getElementById('xprev').getBoundingClientRect();
    return [r.left + (fr.ox + wx*fr.ppm)/fr.Wc*r.width, r.top + (fr.oy - wy*fr.ppm)/fr.Hc*r.height];
  }, [wx, wy]);
  await a.moveTo(x, y, 0.8); await a.wait(0.15);
  await a.page.mouse.click(x, y); await a.ring();
}
module.exports = {sim:'elektrivali', clips:'toolehele_clips.json', hideHint:false, scenes:[
  {name:'töölehele ja märgid', speech:'ev_x1', caption:'„Joonis töölehele“: vali ülesande tüüp, siis „Ülesanne“ või „Lahendus“.', run:async a => {
    await a.wait(0.5);
    await a.click('#xopen');
    await a.wait(0.8);
    await a.choose('#xtype', 'signs');
    await a.wait(1.6);
    await a.click('#xpresets [data-p=sol]');
    await a.wait(1.2);
  }},
  {name:'väljatugevus', speech:'ev_x2', caption:'Väljatugevus: punkt P klõpsuga eelvaatel; lahendusel vektorid mõõtkavas.', tail:1.4, run:async a => {
    await a.choose('#xtype', 'vec');
    await a.wait(0.8);
    await clickPreview(a, -0.5, 1);
    await a.wait(1.0);
    await a.click('#xpresets [data-p=sol]');
    await a.wait(1.2);
    await a.moveTo(205, 598, 0.9);                      // osutab mõõtkavale joonise all
    await a.wait(1.0);
  }},
  {name:'sulge', caption:'', min:0.8, run:async a => {
    await a.click('#xclose', {move:0.5});
  }},
  {name:'lõpp', caption:'', min:3, run:async a => {
    await a.card('Kõik simulatsioonid', '', 'kaisi.ee/fyysika');
    await a.wait(3);
  }}
]};
