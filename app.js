const substances=[["Mák setý", "Papaver somniferum", "mak-sety-v9.png", ["léčivo", "psychoaktivní"], "morfin, kodein", "silná bolest a další přesně indikované použití opioidů", "riziko závislosti a závažného útlumu při nevhodném užívání"], ["Konopí", "Cannabis sativa", "konopi-v9.png", ["léčivo", "psychoaktivní"], "THC, CBD", "léčebné použití u vybraných indikací", "THC může ovlivňovat pozornost, vnímání a vést k problematickému užívání"], ["Rulík zlomocný", "Atropa belladonna", "rulik-zlomocny-v9.png", ["léčivo", "toxické"], "atropin, skopolamin", "atropin má významné využití v medicíně", "rostlina je silně toxická"], ["Náprstník", "Digitalis spp.", "naprstnik-v9.png", ["léčivo", "toxické"], "srdeční glykosidy", "některé látky se používají v kardiologii", "úzké terapeutické rozmezí a vysoká toxicita"], ["Tis červený", "Taxus baccata", "tis-cerveny-v9.png", ["léčivo", "toxické"], "taxany", "z látek spojených s tisem vznikla protinádorová léčiva", "většina částí rostliny je toxická"], ["Vrba", "Salix spp.", "vrba-v9.png", ["léčivo"], "salicyláty", "historický základ pro vývoj moderních salicylátových léčiv", "i běžná léčiva mají kontraindikace"], ["Chininovník", "Cinchona spp.", "chininovnik-v9.png", ["léčivo"], "chinin", "význam v léčbě malárie", "může mít závažné nežádoucí účinky"], ["Koka", "Erythroxylum coca", "koka-v9.png", ["psychoaktivní"], "kokainové alkaloidy", "historické omezené lokálně anestetické použití", "vysoký potenciál zneužití a závislosti"], ["Psilocybinové houby", "různé druhy", "psilocybinove-houby-v9.png", ["psychoaktivní", "výzkum"], "psilocybin", "probíhá klinický výzkum možného využití v psychiatrii", "výzkumné použití není totéž jako samovolné užívání"], ["Peyotl", "Lophophora williamsii", "peyotl-v9.png", ["psychoaktivní"], "meskalin", "především historické a kulturní užívání", "výrazné změny vnímání a psychiky"], ["Durman obecný", "Datura stramonium", "durman-obecny-v9.png", ["toxické", "psychoaktivní"], "tropanové alkaloidy", "příbuzné alkaloidy mají medicínský význam", "silně toxická rostlina, intoxikace může vyvolat delirium"], ["Tabák", "Nicotiana tabacum", "tabak-v9.png", ["psychoaktivní"], "nikotin", "nikotin se používá i v substituční léčbě", "nikotin je vysoce návykový"], ["Kávovník", "Coffea spp.", "kavovnik-v9.png", ["psychoaktivní"], "kofein", "má několik medicínských využití", "vyšší příjem může zhoršovat spánek a úzkost"], ["Kratom", "Mitragyna speciosa", "kratom-v9.png", ["psychoaktivní"], "mitragynin", "není běžným standardním léčivem", "může vést k nežádoucím účinkům a závislosti"], ["Kurkuma", "Curcuma longa", "kurkuma-v9.png", ["výzkum"], "kurkuminoidy", "zkoumá se řada biologických účinků", "doplněk stravy není totéž co schválené léčivo"], ["Třezalka tečkovaná", "Hypericum perforatum", "trezalka-teckovana-v9.png", ["léčivo"], "hypericin, hyperforin", "některé přípravky se používají u mírných depresivních potíží", "může významně ovlivňovat účinek jiných léčiv"]];
const myths=[{"q": "Přírodní látka je automaticky bezpečnější než syntetická.", "a": false, "e": "Přírodní látky mohou být léčivé, toxické i smrtelně nebezpečné."}, {"q": "Látka používaná v medicíně může mít zároveň potenciál ke zneužití.", "a": true, "e": "Medicínské využití a riziko zneužití se nevylučují."}, {"q": "Jedovatá rostlina nemůže být zdrojem léčiva.", "a": false, "e": "Řada toxických rostlin obsahuje látky využitelné v přesně kontrolované léčbě."}, {"q": "Psychoaktivní látka ovlivňuje centrální nervovou soustavu.", "a": true, "e": "Může měnit náladu, vnímání, myšlení nebo chování."}, {"q": "Klinický výzkum látky znamená, že její běžné užívání je bezpečné.", "a": false, "e": "Klinické studie probíhají za přesných podmínek a s odborným dohledem."}, {"q": "Některé léky na předpis mohou vést k závislosti.", "a": true, "e": "Některé skupiny léčiv mají návykový potenciál."}, {"q": "Bylinný přípravek nemůže mít interakce s léky.", "a": false, "e": "Některé byliny mohou výrazně měnit účinek jiných léčiv."}, {"q": "Nikotin je psychoaktivní látka.", "a": true, "e": "Působí na nervový systém a má vysoký návykový potenciál."}, {"q": "Kofein není psychoaktivní, protože je legální.", "a": false, "e": "Kofein je stimulant působící na centrální nervovou soustavu."}, {"q": "Toxicita závisí mimo jiné na dávce a okolnostech expozice.", "a": true, "e": "Dávka, cesta expozice a zdravotní stav ovlivňují riziko."}, {"q": "Staletá tradice užívání automaticky prokazuje bezpečnost.", "a": false, "e": "Tradice nenahrazuje moderní hodnocení účinnosti a bezpečnosti."}, {"q": "Jedna rostlina může obsahovat více biologicky aktivních látek.", "a": true, "e": "Rostliny běžně obsahují směsi mnoha chemických látek."}, {"q": "Příspěvek na sociální síti je spolehlivý, pokud má hodně sdílení.", "a": false, "e": "Popularita není důkaz odborné správnosti."}, {"q": "Léčebné použití může být omezené na konkrétní diagnózy a podmínky.", "a": true, "e": "Schválené použití bývá přesně vymezené."}, {"q": "Rostlinný produkt a izolovaná účinná látka jsou vždy totéž.", "a": false, "e": "Mohou se zásadně lišit složením a koncentrací."}, {"q": "Závislost může mít biologickou, psychickou i sociální složku.", "a": true, "e": "Jde o komplexní problém ovlivňující více oblastí života."}, {"q": "Účinná prevence stojí jen na strašení.", "a": false, "e": "Prevence zahrnuje znalosti, dovednosti, vztahy a rozhodování."}, {"q": "Se závislostí lze kontaktovat odbornou linku pomoci.", "a": true, "e": "Existují odborné služby pro uživatele i jejich blízké."}, {"q": "Schválené léčivo má kontrolované složení a kvalitu.", "a": true, "e": "Standardizace je zásadní součást léčiv."}, {"q": "Přírodní původ sám neříká, zda je látka léčivá, toxická nebo návyková.", "a": true, "e": "Bezpečnost se hodnotí podle konkrétní látky a kontextu."}];
const scenarios=[{"q": "Kamarád říká: „Je to z přírody, takže je to bezpečné.“", "opts": ["Souhlasit", "Ověřit účinky a rizika v odborném zdroji", "Rozhodnout se podle spolužáků"], "c": 1, "e": "Původ látky sám neříká, zda je bezpečná."}, {"q": "Video tvrdí, že psychoaktivní látka „léčí skoro všechno“.", "opts": ["Věřit počtu lajků", "Ověřit, zda jde o schválenou léčbu nebo výzkum", "Sdílet bez ověření"], "c": 1, "e": "Popularita není důkaz odborné správnosti."}, {"q": "Spolužák má obavu z rizikového užívání u kamaráda.", "opts": ["Nechat být", "Podpořit kontakt s důvěryhodným dospělým nebo odborníkem", "Hledat dávkovací návody"], "c": 1, "e": "Bezpečnější je odborná pomoc."}, {"q": "Někdo ti nabízí neznámou pilulku s tím, že je „z lékárny“.", "opts": ["Vzít si ji", "Odmítnout neznámý přípravek", "Rozdělit ji s kamarádem"], "c": 1, "e": "Lék určený jinému člověku nemusí být bezpečný pro tebe."}, {"q": "Kamarád je po kombinaci látek velmi zmatený.", "opts": ["Nechat ho samotného", "Zajistit dohled a při vážných příznacích volat 155/112", "Dát mu další látku"], "c": 1, "e": "Kombinace látek mohou být nepředvídatelné."}, {"q": "Někdo se chlubí vysokou tolerancí.", "opts": ["Je tedy chráněný", "Může to být známka přizpůsobení organismu a zvýšeného rizika", "Závislost už nehrozí"], "c": 1, "e": "Tolerance není ochrana."}, {"q": "Dozvíš se, že jedovatá rostlina je zdrojem léčiva.", "opts": ["Vyzkoušet ji doma", "Chápat, že léčba vyžaduje přesné zpracování a kontrolu", "Usoudit, že jedovatost je mýtus"], "c": 1, "e": "Samotná rostlina nemusí být bezpečná."}, {"q": "Kamarád chce vysadit lék podle internetového fóra.", "opts": ["Doporučit konzultaci s lékařem či lékárníkem", "Vysadit okamžitě", "Najít náhodné video"], "c": 0, "e": "Změny léčby je vhodné konzultovat s odborníkem."}, {"q": "Někdo tvrdí, že bylinky se s léky „nehádají“.", "opts": ["Věřit tomu", "Ověřit možné interakce", "Kombinovat libovolně"], "c": 1, "e": "Byliny mohou ovlivnit účinek léčiv."}, {"q": "Ve skupině koluje screenshot s údajným bezpečným množstvím látky.", "opts": ["Použít ho jako návod", "Nespoléhat na neověřený údaj", "Přepočítat ho pro spolužáky"], "c": 1, "e": "Neověřené dávkovací rady mohou být nebezpečné."}, {"q": "Kamarád se stydí zavolat na linku pomoci.", "opts": ["Říct, že je jen pro těžké případy", "Vysvětlit, že pomoc může být anonymní a i pro blízké", "Ať to řeší sám"], "c": 1, "e": "Pomoc lze vyhledat včas."}, {"q": "Lék byl předepsán rodiči.", "opts": ["Mohu ho použít také", "Předpis pro jiného neznamená vhodnost pro mě", "Stačí změnit dávku podle pocitu"], "c": 1, "e": "Léčba je individuální."}, {"q": "Dva odborné zdroje si odporují.", "opts": ["Vybrat ten příjemnější", "Porovnat autora, datum, instituci a důkazy", "Použít první výsledek"], "c": 1, "e": "Kritické hodnocení zdrojů je základ."}, {"q": "Někdo po užití látky ztrácí vědomí.", "opts": ["Čekat", "Volat 155/112", "Dát kávu a odejít"], "c": 1, "e": "Bezvědomí je akutní stav."}, {"q": "Spolužák chce do prezentace dát přesný návod výroby drogy.", "opts": ["Nechat ho", "Zaměřit se na účinky, rizika, prevenci a pomoc", "Doplnit zdroje surovin"], "c": 1, "e": "Preventivní materiál nemá usnadňovat rizikové jednání."}, {"q": "Někdo označí člověka se závislostí za „slabého“.", "opts": ["Souhlasit", "Vnímat závislost jako komplexní problém a podporovat pomoc", "Zesměšnit ho"], "c": 1, "e": "Stigma může bránit vyhledání pomoci."}, {"q": "Kamarád chce „přírodní stimulant“ na učení.", "opts": ["Přírodní je bezpečné", "Neznámé látky nejsou bezpečná strategie zvládání zkoušky", "Čím více, tím lépe"], "c": 1, "e": "Vhodnější jsou bezpečné strategie jako spánek a plánování."}, {"q": "Někdo tvrdí, že legální látky nejsou psychoaktivní.", "opts": ["Souhlasit", "Vysvětlit, že legálnost a psychoaktivní účinek jsou různé věci", "Záleží na značce"], "c": 1, "e": "Právní status neurčuje účinek na nervovou soustavu."}, {"q": "Najdeš článek o nové léčbě.", "opts": ["Napsat, že určitě funguje", "Uvést, zda jde o výzkum, klinické zkoušení nebo schválenou léčbu", "Vybrat jen pozitivní výsledky"], "c": 1, "e": "Je důležité rozlišovat úroveň důkazů."}, {"q": "Blízký člověk chce pomoc, ale bojí se odsouzení.", "opts": ["Naslouchat a nabídnout odborný kontakt", "Vyhrožovat", "Sdílet jeho problém veřejně"], "c": 0, "e": "Neodsuzující přístup podporuje vyhledání pomoci."}];
const quizData=[{"q": "Co je psychoaktivní látka?", "opts": ["Látka ovlivňující CNS a psychické funkce", "Jakákoli jedovatá rostlina", "Pouze nelegální droga", "Pouze lék na předpis"], "c": 0}, {"q": "Může být látka léčivem a nést riziko závislosti?", "opts": ["Ano", "Ne", "Jen rostlinná", "Jen syntetická"], "c": 0}, {"q": "Co je důležité pro posouzení rizika?", "opts": ["Dávka, cesta použití, účinek a zdravotní stav", "Barva obalu", "Počet lajků", "Přírodní původ"], "c": 0}, {"q": "Je klinický výzkum totéž co schválená léčba?", "opts": ["Ano", "Ne", "Vždy po první studii", "Jen u rostlin"], "c": 1}, {"q": "Co je cílem prevence?", "opts": ["Strašit", "Podporovat informované rozhodování", "Zamlčet rizika", "Ukazovat návody"], "c": 1}, {"q": "Která dvojice ukazuje jedovatou rostlinu a léčivou látku?", "opts": ["Rulík – atropin", "Jablko – voda", "Pšenice – škrob", "Mrkev – vláknina"], "c": 0}, {"q": "Co platí o slovu „přírodní“?", "opts": ["Samo neurčuje bezpečnost", "Znamená netoxické", "Znamená nenávykové", "Znamená vhodné pro děti"], "c": 0}, {"q": "Co je tolerance?", "opts": ["Přizpůsobení organismu účinku", "Alergie", "Právní povolení", "Úplná ochrana"], "c": 0}, {"q": "Co dělat při podezření na těžkou intoxikaci?", "opts": ["Volat 155/112", "Čekat bez dohledu", "Podat další látku", "Situaci skrýt"], "c": 0}, {"q": "Proč mohou byliny interagovat s léky?", "opts": ["Mohou ovlivnit jejich účinek", "Vždy ruší účinek", "Neobsahují účinné látky", "Jsou všechny zakázané"], "c": 0}, {"q": "Co je spojeno s mákem?", "opts": ["Morfin", "Atropin", "Kofein", "Chinin"], "c": 0}, {"q": "Co je spojeno s kávovníkem?", "opts": ["Kofein", "Digoxin", "Nikotin", "Psilocybin"], "c": 0}, {"q": "Co je spojeno s rulíkem?", "opts": ["Atropin", "Morfin", "Kofein", "Chinin"], "c": 0}, {"q": "Který zdroj je vhodnější?", "opts": ["Oficiální odborný portál", "Anonymní komentář", "Reklamní video bez autora", "Řetězová zpráva"], "c": 0}, {"q": "Co znamená standardizované léčivo?", "opts": ["Kontrolované složení a kvalita", "Vždy bez nežádoucích účinků", "Přírodní původ", "Užívání bez pravidel"], "c": 0}, {"q": "Co platí o závislosti?", "opts": ["Může mít biologickou, psychickou i sociální složku", "Je jen otázkou vůle", "Týká se jen nelegálních drog", "Nemůže vzniknout u léků"], "c": 0}, {"q": "K čemu slouží Národní linka pro odvykání?", "opts": ["K odborné podpoře při závislostech", "K prodeji léčiv", "K povolování drog", "K hodnocení škol"], "c": 0}, {"q": "Co má preventivní materiál vynechat?", "opts": ["Návody k výrobě a dávkování", "Kontakty na pomoc", "Mýty a fakta", "Důvěryhodné zdroje"], "c": 0}, {"q": "Proč rozlišovat tradici a moderní medicínu?", "opts": ["Liší se standardizací, důkazy a kontrolou", "Tradice je vždy bezpečnější", "Moderní medicína nepoužívá přírodní látky", "Tradiční látky nemají účinky"], "c": 0}, {"q": "Který závěr je nejpřesnější?", "opts": ["Původ látky sám neurčuje léčivost, toxicitu ani návykovost", "Vše přírodní je bezpečné", "Vše syntetické je nebezpečné", "Vše léčivé je nenávykové"], "c": 0}];
function show(id){document.querySelectorAll('.panel').forEach(x=>x.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo({top:document.querySelector('main').offsetTop-8,behavior:'smooth'})}
function cards(){document.getElementById('cards').innerHTML=substances.map((s,i)=>`<div class="card" onclick="openC(${i})"><div class="art"><img src="${s[2]}" alt="${s[0]} – AI botanická ilustrace" loading="lazy"></div><h3>${s[0]}</h3><em>${s[1]}</em><p>${s[3].map(t=>`<span class="tag">${t}</span>`).join('')}</p></div>`).join('')}
function openC(i){let s=substances[i];document.getElementById('modalC').innerHTML=`<div class="modalArt"><img src="${s[2]}" alt="${s[0]} – AI botanická ilustrace"></div><h2>${s[0]}</h2><em>${s[1]}</em><div class="info"><div><b>Účinné látky</b><br>${s[4]}</div><div><b>Medicínské využití</b><br>${s[5]}</div><div><b>Rizika</b><br>${s[6]}</div><div><b>Zařazení</b><br>${s[3].join(', ')}</div></div>`;document.getElementById('modal').classList.remove('hide')}
function closeM(e,f=false){if(f||e.target.id==='modal')document.getElementById('modal').classList.add('hide')}
let mi=0,ma=false;
function loadM(){
  ma=false;
  const m=myths[mi];
  document.getElementById('mp').textContent=`Tvrzení ${mi+1} z ${myths.length}`;
  document.getElementById('mq').textContent=m.q;
  document.getElementById('mf').textContent='';
  document.getElementById('mn').classList.add('hide');
  document.getElementById('mb').style.width=(mi/myths.length*100)+'%';
}
function ansMyth(v){
  if(ma)return;
  ma=true;
  const m=myths[mi];
  document.getElementById('mf').textContent=(v===m.a?'✓ Správně. ':'✗ Tentokrát ne. ')+m.e;
  document.getElementById('mn').classList.remove('hide');
}
function nextMyth(){mi=(mi+1)%myths.length;loadM()}
let si=0,sa=false,scenarioTimer=null,scenarioPrepared=null;

function prepareScenario(){
  const s=scenarios[si];
  const entries=s.opts.map((text,i)=>({text,correct:i===s.c}));
  for(let i=entries.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [entries[i],entries[j]]=[entries[j],entries[i]];
  }
  scenarioPrepared={q:s.q,opts:entries,e:s.e};
}

function loadS(){
  sa=false;
  if(scenarioTimer){clearTimeout(scenarioTimer);scenarioTimer=null;}
  prepareScenario();

  document.getElementById('sb').style.width=(si/scenarios.length*100)+'%';
  const L=['A','B','C','D'];
  document.getElementById('scenario').innerHTML=
    `<p class="counter">Situace ${si+1} z ${scenarios.length}</p>
     <h3>${scenarioPrepared.q}</h3>
     ${scenarioPrepared.opts.map((o,i)=>`<button class="optionBtn scenarioOption" onclick="ansS(${i},this)"><span class="optionLetter">${L[i]}</span>${o.text}</button>`).join('')}
     <p id="sf" class="feedback"></p>`;
}

function ansS(i,btn){
  if(sa)return;
  sa=true;

  const chosen=scenarioPrepared.opts[i];
  document.querySelectorAll('.scenarioOption').forEach(b=>b.disabled=true);
  btn.classList.add(chosen.correct?'selectedCorrect':'selectedWrong');

  document.getElementById('sf').textContent=
    (chosen.correct?'✓ Dobrá volba. ':'✗ Bezpečnější je jiná možnost. ')+scenarioPrepared.e;

  scenarioTimer=setTimeout(()=>{
    si=(si+1)%scenarios.length;
    loadS();
  },1800);
}

let qi=0,score=0,quizMistakes=[];let quizOrder=[],quizPrepared=false;

function prepareQuiz(){
  quizOrder=quizData.map((q,idx)=>{
    const entries=q.opts.map((text,i)=>({text,correct:i===q.c}));
    for(let i=entries.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [entries[i],entries[j]]=[entries[j],entries[i]];
    }
    return {q:q.q,opts:entries,orig:idx};
  });
  quizPrepared=true;
}

function loadQ(){
  if(!quizPrepared)prepareQuiz();
  document.getElementById('qb').style.width=(Math.min(qi,quizOrder.length)/quizOrder.length*100)+'%';

  if(qi>=quizOrder.length){
    let resultHtml='';

    if(score===quizOrder.length){
      resultHtml=`<div class="perfectScore">
        <div class="trophy">🏆</div>
        <h3>Plný počet! ${score} / ${quizOrder.length}</h3>
        <p>Výborně! Zvládl/a jsi celý kvíz bez jediné chyby.</p>
      </div>`;
    }else{
      let t=score>=17?'Výborně – máš velmi dobrý přehled.':
            score>=13?'Velmi dobrý základ.':
            score>=9?'Dobrý začátek, několik témat si ještě projdi.':
            'Projdi si atlas a sekci Mýtus × fakt a zkus kvíz znovu.';

      const review = quizMistakes.length ? `
        <div class="mistakeReview">
          <h3>Co bylo špatně?</h3>
          ${quizMistakes.map((m,i)=>`
            <div class="mistakeItem">
              <div class="mistakeNo">${m.number}</div>
              <div>
                <p class="mistakeLabel">Otázka č. ${m.number}</p>
                <p class="mistakeQuestion"><strong>${m.question}</strong></p>
                <p><span class="bad">Tvoje odpověď:</span> ${m.chosen}</p>
                <p><span class="good">Správná odpověď:</span> ${m.correct}</p>
              </div>
            </div>
          `).join('')}
        </div>` : '';

      resultHtml=`<h3>Výsledek: ${score} / ${quizOrder.length}</h3><p>${t}</p>${review}`;
    }

    document.getElementById('quiz').innerHTML=
      resultHtml+`<button class="nextBtn" onclick="restart()">Zopakovat kvíz</button>`;
    return;
  }

  const q=quizOrder[qi];
  const L=['A','B','C','D'];

  document.getElementById('quiz').innerHTML=
    `<p class="counter">Otázka ${qi+1} z ${quizOrder.length}</p>
     <h3>${q.q}</h3>
     ${q.opts.map((o,i)=>`<button class="optionBtn" onclick="ansQ(${i})"><span class="optionLetter">${L[i]}</span>${o.text}</button>`).join('')}`;
}

function ansQ(i){
  const q=quizOrder[qi];
  const chosen=q.opts[i];

  if(chosen.correct){
    score++;
  }else{
    const correct=q.opts.find(o=>o.correct);
    quizMistakes.push({
      number: qi + 1,
      question:q.q,
      chosen:chosen.text,
      correct:correct ? correct.text : ''
    });
  }

  qi++;
  loadQ();
}

function restart(){
  qi=0;
  score=0;
  quizMistakes=[];
  quizPrepared=false;
  prepareQuiz();
  loadQ();
}cards();loadM();loadS();loadQ();
function openSources(){
  document.getElementById('sourcesModal').classList.remove('hide');
  document.body.style.overflow='hidden';
}
function closeSources(e,force=false){
  if(force || e.target.id==='sourcesModal'){
    document.getElementById('sourcesModal').classList.add('hide');
    document.body.style.overflow='';
  }
}
