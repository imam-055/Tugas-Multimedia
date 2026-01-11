// Animasi muncul untuk section tentang
const tentangSection = document.querySelector('.tentang');
const tentangImgs = tentangSection.querySelectorAll('img');
const tentangPs = tentangSection.querySelectorAll('p');

const observerTentang = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      tentangSection.classList.add('active');

      tentangImgs.forEach((img,i)=>{
        setTimeout(()=>{ img.classList.add('active'); }, i*200);
      });

      tentangPs.forEach((p,i)=>{
        setTimeout(()=>{ p.classList.add('active'); }, i*200);
      });
    } else {
      tentangSection.classList.remove('active');
      tentangImgs.forEach(img=>img.classList.remove('active'));
      tentangPs.forEach(p=>p.classList.remove('active'));
    }
  });
},{threshold:0.3});

observerTentang.observe(tentangSection);
