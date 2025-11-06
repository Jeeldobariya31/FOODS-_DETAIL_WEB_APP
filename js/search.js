
$(function(){
  async function fetchJSON(u){ const r=await fetch(u); if(!r.ok) throw 0; return await r.json(); }
  let DATA=[];
  async function bootstrap(){
    try{
      const d=await fetchJSON('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      DATA=(d.meals||[]).map(m=>({id:m.idMeal,title:m.strMeal,image:m.strMealThumb,category:m.strCategory||'',area:m.strArea||'',source:'api'}));
    }catch(e){ DATA=[]; }
    try{
      const s=await (await fetch('../data/recipes.json')).json();
      DATA=DATA.concat((s.items||[]).map(r=>({...r,source:'static'})));
    }catch(e){}
  }
  function render(list){
    const $w=$('#search-results').empty();
    if(!list.length){ $w.append('<p class="text-muted">No results.</p>'); return; }
    list.slice(0,60).forEach(r=>{
      const href='recipe-detail.html?'+new URLSearchParams({id:r.id||'',src:r.source||'static',title:r.title,cat:r.category||''}).toString();
      $w.append(`<a class="fc-card text-dark" href="${href}">
        <img src="${r.image||'../images/ph1.jpg'}" alt="${r.title}">
        <div class="body"><div class="badge">${r.category||''}</div><h5 class="mt-2 mb-1">${r.title}</h5><div class="text-muted small">${r.area||''}</div></div>
      </a>`);
    });
  }
  $('#global-search-input').on('input', function(){
    const q=$(this).val().toLowerCase().trim();
    if(!q){ $('#search-results').empty(); return; }
    const hit=DATA.filter(r=>(r.title||'').toLowerCase().includes(q)||(r.category||'').toLowerCase().includes(q)||(r.area||'').toLowerCase().includes(q));
    render(hit);
  });
  bootstrap();
});
