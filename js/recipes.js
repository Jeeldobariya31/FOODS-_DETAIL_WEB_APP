
$(async function(){
  const title=$('.page-title').first().text().trim()||document.title;
  const list=await FC.fetch.loadHybrid(title);
  const $wrap=$('#dynamic-cards, #recipes-grid').empty();
  if(!list.length){ $wrap.append('<p class="text-muted">No recipes found.</p>'); return; }
  list.forEach(r=>{
    const href='recipe-detail.html?'+new URLSearchParams({id:r.id||'',src:r.source||'static',title:r.title,cat:title}).toString();
    $wrap.append(`<a class="fc-card text-dark" href="${href}">
      <img src="${r.image||'../images/ph1.jpg'}" alt="${r.title}">
      <div class="body"><div class="badge">${r.category||''}</div><h5 class="mt-2 mb-1">${r.title}</h5></div>
    </a>`);
  });
});
