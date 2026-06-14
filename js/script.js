/* ===========================================================
   SRI HARI INDUSTRIES — BEHAVIOUR / LOGIC
   Reads content from js/data.js (loaded before this file).
   Edit content in data.js, not here.
   =========================================================== */
/* ---- Back to top ---- */
(function(){var b=document.getElementById('toTop');if(!b)return;
  addEventListener('scroll',function(){b.classList.toggle('show',scrollY>500);},{passive:true});
  b.addEventListener('click',function(){scrollTo({top:0,behavior:'smooth'});});
})();

/* ---- Product detail modal (shared) ---- */
const modal=document.getElementById('modal');
const mBox=document.getElementById('mBox'),mImgEl=document.getElementById('mImg');
function showModal(){modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function setImg(src,alt){mImgEl.style.display='';mImgEl.onerror=function(){this.style.display='none';};mImgEl.src=src||'';mImgEl.alt=alt||'';}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
modal.addEventListener('click',e=>{if(e.target.hasAttribute('data-close'))closeModal();});
addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

const PRODUCTS=[];
PCATS.forEach(g=>g.items.forEach(it=>PRODUCTS.push({
 name:it[0],img:"images/products/"+it[1]+".jpg?v=2",
 desc:it[2]||(it[0]+" — "+g.tag),
 short:it[2]||(g.tag.charAt(0).toUpperCase()+g.tag.slice(1)),
 feat:it[3]||g.feats,specs:it[4]||null,cat:g.cat})));
function openProd(i){const p=PRODUCTS[i];if(!p)return;
 mBox.classList.add('modal--product');
 setImg(p.img,p.name);
 document.getElementById('mIco').textContent='';
 document.getElementById('mTag').textContent=p.cat;
 document.getElementById('mTitle').textContent=p.name;
 document.getElementById('mDesc').textContent=p.desc;
 const sp=document.getElementById('mSpecs');
 sp.innerHTML=(p.specs||[]).map(s=>'<div><span>'+s[0]+'</span><b>'+s[1]+'</b></div>').join('');
 sp.style.display=(p.specs&&p.specs.length)?'grid':'none';
 document.getElementById('mList').innerHTML=(p.feat||[]).map(f=>'<li>'+f+'</li>').join('');
 document.getElementById('mCta').style.display='flex';
 document.getElementById('mWa').href='https://wa.me/'+SITE.whatsapp+'?text='+encodeURIComponent('Hi, I am interested in the '+p.name+'. Please share details & a quote.');
 showModal();}
/* Map each category to the global indices of its products */
const CATPRODS=PCATS.map(()=>[]);
PRODUCTS.forEach((p,i)=>{const gi=PCATS.findIndex(g=>g.cat===p.cat);if(gi>-1)CATPRODS[gi].push(i);});

const pcatalog=document.getElementById('pcatalog');
const pempty=document.getElementById('pempty');
const pmodal=document.getElementById('pmodal');

function prodCardHTML(p,i){return(
 '<button class="pcard" data-p="'+i+'" aria-label="'+p.name+'">'+
  '<div class="pcard__media">'+
   '<div class="pcard__ph"><svg class="ic"><use href="#i-image"/></svg><span>Photo coming soon</span></div>'+
   '<img src="'+p.img+'" alt="'+p.name+'" loading="lazy" onerror="this.remove()"/>'+
   '<div class="pcard__cap"><h3>'+p.name+'</h3><span class="pcard__btn">View Details →</span></div>'+
  '</div>'+
 '</button>');}

if(pcatalog){
 /* 6 featured products (one per type, varied) — image shown directly on each card */
 const featNames=['Bulk Cooking Range','Chappathi Making Machine','Wet Grinder','Work Table','Bain-Marie Counter','Cold Room'];
 const FEATURED=featNames.map(n=>PRODUCTS.findIndex(p=>p.name===n)).filter(i=>i>=0);
 pcatalog.innerHTML=FEATURED.map(i=>prodCardHTML(PRODUCTS[i],i)).join('');
 if(pempty)pempty.classList.remove('show');

 /* ---------- Product popup: full catalogue + detail ---------- */
 const pmBox=pmodal.querySelector('.pmodal__box');
 const pmList=document.getElementById('pmList'),pmDetail=document.getElementById('pmDetail');
 const pmGrid=document.getElementById('pmGrid');
 let pmFrom='';   /* '' = opened from featured card · 'catalogue' = opened from full catalogue */
 pmList.style.display='none';
 function pmOpen(){pmodal.classList.add('open');pmodal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
 function pmClose(){pmodal.classList.remove('open');pmodal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
 function showCatalogue(){
  pmFrom='catalogue';
  pmDetail.style.display='none';pmList.style.display='';
  document.getElementById('pmIco').setAttribute('href','#i-pot');
  document.getElementById('pmTitle').textContent='Full Product Catalogue';
  document.getElementById('pmSub').textContent='All '+PRODUCTS.length+' models across '+PCATS.length+' categories — tap any product for details.';
  let h='';
  PCATS.forEach((g,gi)=>{const ico=(CATMETA[g.cat]||{}).ico||'i-pot';
   h+='<h4 class="pmcat-h"><svg class="ic"><use href="#'+ico+'"/></svg>'+g.cat+'</h4>';
   CATPRODS[gi].forEach(i=>{const p=PRODUCTS[i];
    h+='<button class="pmtile" data-p="'+i+'" aria-label="'+p.name+'">'+
     '<div class="pmtile__media"><div class="pmtile__ph"><svg class="ic"><use href="#i-image"/></svg></div>'+
     '<img src="'+p.img+'" alt="'+p.name+'" loading="lazy" onerror="this.remove()"/></div>'+
     '<h4>'+p.name+'</h4></button>';});});
  pmGrid.innerHTML=h;pmBox.scrollTop=0;
 }
 function showDetail(i,from){
  const p=PRODUCTS[i];if(!p)return;
  pmFrom=from||'';
  pmList.style.display='none';pmDetail.style.display='';
  document.getElementById('pmBackLabel').textContent=(pmFrom==='catalogue')?'Back to Catalogue':'Back';
  const img=document.getElementById('pmdImg'),imgWrap=document.getElementById('pmdImgWrap');
  const zoomBadge=imgWrap.querySelector('.pmdetail__zoom');
  img.onload=function(){this.style.display='';zoomBadge.style.display='';imgWrap.style.cursor='zoom-in';};
  img.onerror=function(){this.style.display='none';zoomBadge.style.display='none';imgWrap.style.cursor='default';};
  img.src=p.img;img.alt=p.name;
  document.getElementById('pmdTag').textContent=p.cat;
  document.getElementById('pmdTitle').textContent=p.name;
  document.getElementById('pmdDesc').textContent=p.desc;
  const sp=document.getElementById('pmdSpecs');
  sp.innerHTML=(p.specs||[]).map(s=>'<div><span>'+s[0]+'</span><b>'+s[1]+'</b></div>').join('');
  sp.style.display=(p.specs&&p.specs.length)?'grid':'none';
  document.getElementById('pmdFeat').innerHTML=(p.feat||[]).map(f=>'<li>'+f+'</li>').join('');
  document.getElementById('pmdWa').href='https://wa.me/'+SITE.whatsapp+'?text='+encodeURIComponent('Hi, I am interested in the '+p.name+'. Please share details & a quote.');
  pmBox.scrollTop=0;
 }
 pcatalog.addEventListener('click',e=>{const pc=e.target.closest('.pcard[data-p]');if(pc){showDetail(+pc.dataset.p,'');pmOpen();}});
 const catBtn=document.getElementById('catBtn');
 if(catBtn)catBtn.addEventListener('click',()=>{showCatalogue();pmOpen();});
 pmGrid.addEventListener('click',e=>{const t=e.target.closest('.pmtile[data-p]');if(t){showDetail(+t.dataset.p,'catalogue');}});
 document.getElementById('pmBack').addEventListener('click',()=>{if(pmFrom==='catalogue'){showCatalogue();}else{pmClose();}});
 pmodal.addEventListener('click',e=>{if(e.target.hasAttribute('data-pclose'))pmClose();});
 /* ---- Click product image to zoom (lightbox) ---- */
 const pzoom=document.getElementById('pzoom'),pzoomImg=document.getElementById('pzoomImg');
 const pmdImgWrap=document.getElementById('pmdImgWrap');
 function openZoom(){const im=document.getElementById('pmdImg');if(!im||im.style.display==='none'||!im.getAttribute('src'))return;pzoomImg.src=im.src;pzoomImg.alt=im.alt;pzoom.classList.add('open');pzoom.setAttribute('aria-hidden','false');}
 function closeZoom(){pzoom.classList.remove('open');pzoom.setAttribute('aria-hidden','true');}
 if(pmdImgWrap)pmdImgWrap.addEventListener('click',openZoom);
 if(pzoom)pzoom.addEventListener('click',e=>{if(e.target!==pzoomImg)closeZoom();});
 const pzc=document.getElementById('pzoomClose');if(pzc)pzc.addEventListener('click',closeZoom);
 addEventListener('keydown',e=>{if(e.key==='Escape'){if(pzoom&&pzoom.classList.contains('open')){closeZoom();}else{pmClose();}}});
}

const imodal=document.getElementById('imodal');
function openInd(i){const d=INDUSTRIES[i];if(!d)return;
 document.getElementById('iIco').setAttribute('href','#'+d.icon);
 document.getElementById('iTitle').textContent=d.title;
 document.getElementById('iDesc').textContent=d.desc;
 document.getElementById('iList').innerHTML=d.items.map(x=>'<li>'+x+'</li>').join('');
 document.getElementById('iWa').href='https://wa.me/'+SITE.whatsapp+'?text='+encodeURIComponent('Hi, I need commercial kitchen equipment for '+d.title+'. Please share details & a quote.');
 imodal.classList.add('open');imodal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';}
function closeInd(){imodal.classList.remove('open');imodal.setAttribute('aria-hidden','true');document.body.style.overflow='';}
imodal.addEventListener('click',e=>{if(e.target.hasAttribute('data-iclose'))closeInd();});
addEventListener('keydown',e=>{if(e.key==='Escape')closeInd();});
document.querySelectorAll('#industries .wcard').forEach((card,i)=>{
 const more=document.createElement('span');more.className='wcard__more';more.textContent='View equipment →';
 card.appendChild(more);
 card.setAttribute('role','button');card.setAttribute('tabindex','0');
 card.addEventListener('click',()=>openInd(i));
 card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openInd(i);}});
});

/* ---- Hero auto-slideshow ---- */
const slides=[...document.querySelectorAll('.slide')];
const dotsBox=document.getElementById('dots');
let cur=0,timer;
slides.forEach((_,i)=>{const b=document.createElement('b');if(i===0)b.className='on';b.onclick=()=>go(i);dotsBox.appendChild(b);});
const dots=[...dotsBox.children];
function go(n){slides[cur].classList.remove('active');dots[cur].classList.remove('on');cur=(n+slides.length)%slides.length;slides[cur].classList.add('active');dots[cur].classList.add('on');restart();}
function next(){go(cur+1);}
function restart(){clearInterval(timer);timer=setInterval(next,5000);}
restart();

/* ---- Scroll reveal ---- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(i%3)*90+'ms';io.observe(el)});

/* ---- Counters ---- */
const fmt=n=>n.toLocaleString('en-IN');
function runCount(el){const to=+el.dataset.to,dur=1500,t0=performance.now();(function step(now){const p=Math.min((now-t0)/dur,1),e=1-Math.pow(1-p,3);el.textContent=fmt(Math.round(to*e));if(p<1)requestAnimationFrame(step);})(t0);}
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){runCount(e.target);cio.unobserve(e.target);}}),{threshold:.6});
document.querySelectorAll('.count').forEach(el=>cio.observe(el));

/* ---- Sticky nav shadow ---- */
const nav=document.getElementById('nav');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>10));

/* ---- Hamburger ---- */
const burger=document.getElementById('burger'),menu=document.getElementById('menu');
burger&&burger.addEventListener('click',()=>{const open=burger.classList.toggle('x');menu.classList.toggle('open');burger.setAttribute('aria-expanded',open);});
menu&&menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{burger.classList.remove('x');menu.classList.remove('open');burger.setAttribute('aria-expanded','false');}));
