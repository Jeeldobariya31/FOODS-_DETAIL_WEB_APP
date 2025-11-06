
$(function(){
  const $slides=$('.carousel-wrap .slide'), $dots=$('.carousel-wrap .dots');
  for(let i=0;i<$slides.length;i++) $dots.append('<div class="dot"></div>');
  const $dot=$('.dot'); let idx=0;
  function show(i){ idx=(i+$slides.length)%$slides.length; $slides.removeClass('active').eq(idx).addClass('active'); $dot.removeClass('active').eq(idx).addClass('active'); }
  $dot.on('click', function(){ show($(this).index()); });
  setInterval(()=>show(idx+1), 4500); show(0);

  FC.fetch.loadHybrid('Popular Recipes').then(list=>{
    const $w=$('#home-popular');
    list.slice(0,8).forEach(r=>{
      const href='recipe-detail.html?'+new URLSearchParams({id:r.id||'',src:r.source||'static',title:r.title,cat:'Popular Recipes'}).toString();
      $w.append(`<a class="fc-card text-dark" href="${href}">
        <img src="${r.image||""}" alt="${r.title}">
        <div class="body"><div class="badge">${r.category||''}</div><h5 class="mt-2 mb-1">${r.title}</h5></div>
      </a>`);
    });
  });
});
