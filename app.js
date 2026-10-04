
const substances = [
  {name:"Mák setý", latin:"Papaver somniferum", icon:"🌱", tags:["léčivo","riziko závislosti"],
   text:"Některé látky získané z máku, například morfin a kodein, mají významné medicínské využití. Opioidy ale mohou při nevhodném užívání vést k závislosti a závažným zdravotním rizikům."},
  {name:"Konopí", latin:"Cannabis sativa", icon:"🍃", tags:["psychoaktivní","medicínské využití"],
   text:"Konopí obsahuje více účinných látek. THC má psychoaktivní účinky, zatímco další kanabinoidy mají odlišné vlastnosti. Léčebné použití je třeba odlišovat od rekreačního užívání."},
  {name:"Rulík zlomocný", latin:"Atropa belladonna", icon:"🫐", tags:["toxické","léčivo"],
   text:"Rulík je silně jedovatá rostlina. Některé jeho alkaloidy, například atropin, mají přitom významné využití v medicíně."},
  {name:"Náprstník", latin:"Digitalis spp.", icon:"🌸", tags:["toxické","léčivo"],
   text:"Náprstníky obsahují srdeční glykosidy. Některé látky odvozené z těchto rostlin se používají v medicíně, ale samotná rostlina může být nebezpečně toxická."},
  {name:"Tis červený", latin:"Taxus baccata", icon:"🌲", tags:["toxické","onkologie"],
   text:"Tis je jedovatý. Z příbuzných druhů a jejich látek byly vyvinuty taxany, významná protinádorová léčiva."},
  {name:"Vrba", latin:"Salix spp.", icon:"🌿", tags:["historie léčiv"],
   text:"Vrby obsahují salicyláty. Historické poznatky o jejich účincích přispěly k vývoji moderních léčiv proti bolesti, horečce a zánětu."},
  {name:"Psilocybinové houby", latin:"různé druhy", icon:"🍄", tags:["psychoaktivní","výzkum"],
   text:"Psilocybin je psychoaktivní látka. V některých zemích probíhá klinický výzkum jejího možného využití v psychiatrii. Výzkumné použití nelze zaměňovat za bezpečné samovolné užívání."},
  {name:"Koka", latin:"Erythroxylum coca", icon:"🌿", tags:["psychoaktivní","historie medicíny"],
   text:"Listy koky mají dlouhou historii tradičního používání. Kokain je silně působící stimulant a má vysoký potenciál ke zneužití; zároveň má historii medicínského použití jako lokální anestetikum."}
];

const myths = [
  {q:"Když je látka přírodního původu, je automaticky bezpečnější než syntetická.", a:false,
   e:"Mýtus. Přírodní látky mohou být léčivé, toxické i smrtelně nebezpečné."},
  {q:"Látka používaná v medicíně může mít zároveň potenciál ke zneužití.", a:true,
   e:"Fakt. Medicínské využití a riziko zneužití se nevylučují."},
  {q:"Jedovatá rostlina nemůže být zdrojem léčiva.", a:false,
   e:"Mýtus. Některé toxické rostliny obsahují látky, které se v přesně kontrolovaných podmínkách používají v medicíně."},
  {q:"Psychoaktivní látka ovlivňuje činnost centrální nervové soustavy.", a:true,
   e:"Fakt. Psychoaktivní látky mohou měnit náladu, vnímání, myšlení nebo chování."},
  {q:"To, že se určitá látka zkoumá v klinické studii, znamená, že je její běžné užívání bezpečné.", a:false,
   e:"Mýtus. Klinický výzkum probíhá za přesných podmínek, s výběrem pacientů a odborným dohledem."}
];

const scenarios = [
  {q:"Kamarád tvrdí: „Je to z přírody, takže se toho nemusíš bát.“ Co je nejlepší reakce?",
   opts:["Souhlasit – přírodní věci jsou bezpečné.","Ověřit si účinky a rizika z důvěryhodného odborného zdroje.","Rozhodnout se podle toho, co říká většina spolužáků."],
   correct:1, e:"Správně. Původ látky sám o sobě nevypovídá o její bezpečnosti."},
  {q:"Na sociální síti vidíš video, které tvrdí, že určitá psychoaktivní látka „léčí skoro všechno“. Co uděláš?",
   opts:["Budu tomu věřit, pokud má video hodně lajků.","Najdu odborné zdroje a ověřím, zda jde o schválené použití nebo pouze výzkum.","Pošlu video dál bez komentáře."],
   correct:1, e:"Správně. Popularita příspěvku není důkaz odborné správnosti."},
  {q:"Spolužák má obavy, že někdo v jeho okolí začal látku užívat rizikově. Co je vhodné?",
   opts:["Nechat to být, protože to není jeho věc.","Podpořit ho, aby situaci řešil s důvěryhodným dospělým nebo odborníkem.","Zjistit si na internetu, jakou dávku daný člověk asi bere."],
   correct:1, e:"Správně. U rizikového užívání je vhodné hledat bezpečnou odbornou pomoc."}
];

const quiz = [
  {q:"Co nejlépe vystihuje pojem psychoaktivní látka?", opts:["Látka ovlivňující CNS a psychické funkce","Jakákoli jedovatá rostlina","Pouze nelegální droga"], c:0},
  {q:"Může být stejná látka léčivem a zároveň nést riziko závislosti?", opts:["Ano","Ne"], c:0},
  {q:"Co je důležitější pro posouzení rizika látky než samotné označení „přírodní“?", opts:["Dávka, způsob použití a účinek","Barva rostliny","Popularita na sociálních sítích"], c:0},
  {q:"Je klinický výzkum totéž jako běžně schválená léčba?", opts:["Ano","Ne"], c:1},
  {q:"Co je vhodným cílem prevence?", opts:["Strašit bez vysvětlení","Podporovat informované a bezpečné rozhodování","Zamlčet rizika"], c:1}
];

function showSection(id){
  document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({top:document.querySelector('main').offsetTop-10,behavior:'smooth'});
}
function renderCards(){
  const box=document.getElementById('cards');
  box.innerHTML=substances.map((s,i)=>`
    <article class="card" onclick="openCard(${i})">
      <div style="font-size:2rem">${s.icon}</div>
      <h3>${s.name}</h3><p class="muted"><em>${s.latin}</em></p>
      <div>${s.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    </article>`).join('');
}
function openCard(i){
  const s=substances[i];
  document.getElementById('modal-content').innerHTML=`
    <div style="font-size:3rem">${s.icon}</div><h2>${s.name}</h2>
    <p class="muted"><em>${s.latin}</em></p><p>${s.text}</p>
    <p><strong>V další verzi:</strong> vlastní fotografie, hlavní účinné látky, medicínské využití, rizika a citované zdroje.</p>`;
  document.getElementById('modal').classList.remove('hidden');
}
function closeModal(e,force=false){
  if(force || e.target.id==='modal') document.getElementById('modal').classList.add('hidden');
}

let mi=0;
function loadMyth(){
  document.getElementById('myth-progress').textContent=`Otázka ${mi+1} z ${myths.length}`;
  document.getElementById('myth-text').textContent=myths[mi].q;
  document.getElementById('myth-feedback').textContent='';
  document.getElementById('myth-next').classList.add('hidden');
}
function answerMyth(v){
  const m=myths[mi];
  document.getElementById('myth-feedback').textContent=(v===m.a?'✓ Správně. ':'✗ Tentokrát ne. ')+m.e;
  document.getElementById('myth-next').classList.remove('hidden');
}
function nextMyth(){mi=(mi+1)%myths.length;loadMyth();}

let si=0;
function renderScenario(){
  const s=scenarios[si], box=document.getElementById('scenario-box');
  box.innerHTML=`<p class="muted">Situace ${si+1} z ${scenarios.length}</p><h3>${s.q}</h3>`+
    s.opts.map((o,i)=>`<button class="option" onclick="answerScenario(${i})">${o}</button>`).join('')+
    `<p id="sc-feedback" class="feedback"></p><button id="sc-next" class="primary hidden" onclick="nextScenario()">Další situace</button>`;
}
function answerScenario(i){
  const s=scenarios[si];
  document.getElementById('sc-feedback').textContent=(i===s.correct?'✓ ':'✗ ')+s.e;
  document.getElementById('sc-next').classList.remove('hidden');
}
function nextScenario(){si=(si+1)%scenarios.length;renderScenario();}

let qi=0, score=0;
function renderQuiz(){
  const box=document.getElementById('quiz-box');
  if(qi>=quiz.length){
    box.innerHTML=`<p class="score">Výsledek: ${score} / ${quiz.length}</p>
      <p>${score>=4?'Výborně. Umíš dobře rozlišovat mezi původem látky, jejím využitím a rizikem.':score>=2?'Dobrý základ. Některé pojmy si ještě projdi.':'Zkus si projít karty a sekci Mýtus × fakt a pak kvíz zopakuj.'}</p>
      <button class="primary" onclick="restartQuiz()">Zopakovat kvíz</button>`;
    return;
  }
  const q=quiz[qi];
  box.innerHTML=`<p class="muted">Otázka ${qi+1} z ${quiz.length}</p><h3>${q.q}</h3>`+
    q.opts.map((o,i)=>`<button class="option" onclick="answerQuiz(${i})">${o}</button>`).join('');
}
function answerQuiz(i){if(i===quiz[qi].c)score++; qi++; renderQuiz();}
function restartQuiz(){qi=0;score=0;renderQuiz();}

renderCards(); loadMyth(); renderScenario(); renderQuiz();
