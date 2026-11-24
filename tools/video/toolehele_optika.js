// Lisastseen optika õpetaja videole: „Joonis töölehele“ (liidetakse vana video lõppu enne lõpukaarti)
module.exports = {sim:'optika', clips:'toolehele_clips.json', hideHint:false, scenes:[
  {name:'töölehele avamine', speech:'op_x1', caption:'„Joonis töölehele“: ülesande joonisel on kiired ja kujutis peidus.', run:async a => {
    await a.wait(0.5);
    await a.click('#xopen');
    await a.wait(1.2);
    await a.moveTo(520, 330, 0.8);                      // osutab eelvaatele
    await a.wait(1.5);
  }},
  {name:'lahendus ja allalaadimine', speech:'op_x2', caption:'Lahendusel on kiired ja kujutis. Allalaaditud pilt (300 dpi) läheb Wordi mõõtkavas.', tail:1.2, run:async a => {
    await a.click('#xpresets [data-p=sol]');
    await a.wait(1.6);
    await a.choose('#xmm', '2');
    await a.wait(1.0);
    await a.click('#xdown');
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
