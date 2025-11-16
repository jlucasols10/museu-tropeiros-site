// Carousel simples
(function(){
  const track = document.querySelector('#mainCarousel .carousel-track');
  const slides = [...track.children];
  let idx = 0;
  const show = i => track.style.transform = `translateX(-${i*100}%)`;
  document.getElementById('nextBtn').addEventListener('click', ()=>{idx=(idx+1)%slides.length;show(idx)});
  document.getElementById('prevBtn').addEventListener('click', ()=>{idx=(idx-1+slides.length)%slides.length;show(idx)});
  // auto play
  setInterval(()=>{idx=(idx+1)%slides.length;show(idx)},6000);
})();

// Lightbox para galeria
(function(){
  const lightbox = document.createElement('div');lightbox.className='lightbox';document.body.appendChild(lightbox);
  const img = document.createElement('img');lightbox.appendChild(img);
  lightbox.addEventListener('click', ()=>lightbox.classList.remove('open'));
  document.querySelectorAll('.galeria img').forEach(i=>i.addEventListener('click', e=>{
    const full = e.target.getAttribute('data-src') || e.target.src;
    img.src = full;
    lightbox.classList.add('open');
  }));
})();

// Lazy-load simples para thumbs -> full
(function(){
  const imgs = document.querySelectorAll('.galeria img');
  imgs.forEach(im=>{
    const full = im.getAttribute('data-src');
    if(full){
      im.addEventListener('mouseover', ()=>{im.src = full});
      im.addEventListener('touchstart', ()=>{im.src = full});
    }
  })
})();
