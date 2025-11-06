
$(async function(){
  const p=new URLSearchParams(location.search);
  const params={id:p.get('id'),src:p.get('src'),title:p.get('title'),cat:p.get('cat')};
  const d=await FC.fetch.loadDetail(params);
  if(!d){ $('.detail-hero').replaceWith('<p class="text-muted">Recipe not found.</p>'); return; }
  $('#rec-title').text(d.title||'');
  $('#rec-img').attr('src', d.image||'../images/ph1.jpg').attr('alt', d.title||'Recipe');
  $('#rec-cat').text(d.category||'—'); $('#rec-area').text(d.area||'—');
  $('#rec-inst').text(d.instructions||'');
  const $ings=$('#rec-ings').empty(); (d.ingredients||[]).forEach(x=>$ings.append('<li>'+x+'</li>'));
  const $tags=$('#rec-tags').empty(); (d.tags||[]).forEach(t=>$tags.append('<span class="tag me-1">'+t+'</span>'));
  $('#crumb-title').text(d.title||'Recipe');
  $('#crumb-cat').text(params.cat||'All').attr('href', (params.cat? encodeURIComponent(params.cat)+'.html':'recipes.html'));
  $('#back-link').attr('href', (params.cat? encodeURIComponent(params.cat)+'.html':'recipes.html'));
});
