const C=window.ASTRO_CONFIG||{};
document.querySelectorAll('.play-link').forEach(a=>a.href=C.playStore||'#');
document.querySelectorAll('[data-logo]').forEach(i=>i.src=C.logo||'');
const track=document.getElementById('screenTrack');
(C.screenshots||[]).forEach((src,i)=>{const a=document.createElement('a');a.href=src;a.target='_blank';a.rel='noopener';a.innerHTML=`<span>${String(i+1).padStart(2,'0')}</span><img src="${src}" alt="AstroNeeti app screenshot ${i+1}" loading="lazy">`;track.appendChild(a)});
document.getElementById('year').textContent=new Date().getFullYear();
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.transform=`translate(${e.clientX-140}px,${e.clientY-140}px)`});
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.feature,.progress-list>div,.manifest,.screen-track>a').forEach(e=>observer.observe(e));
