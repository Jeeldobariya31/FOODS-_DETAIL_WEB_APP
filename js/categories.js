
$(async function(){
  const $wrap=$('#cat-list'); async function fetchJSON(u){ const r=await fetch(u); if(!r.ok) throw 0; return await r.json(); }
  let cats=[]; try{ const d=await fetchJSON('https://www.themealdb.com/api/json/v1/1/list.php?c=list'); cats=(d.meals||[]).map(m=>m.strCategory);}catch(e){ cats=['Beef','Chicken','Dessert','Pasta','Seafood','Vegetarian','Breakfast','Vegan','Pork','Lamb','Goat','Side','Starter']; }
  cats.sort().forEach(c=>{ const filenameMap = {
    'Beef': 'Beef.html',
    'Breakfast': 'Breakfast & Brunch Recipes.html',
    'Chicken': 'Chicken.html',
    'Dessert': 'Dessert Recipes.html',
    'Lamb': 'Lamb.html',
    'Pasta': 'Pasta.html',
    'Pork': 'Pork.html',
    'Seafood': 'Seafood.html',
    'Vegan': 'Vegan Recipes.html',
    'Vegetarian': 'Vegetarian.html'
};
const filename = filenameMap[c] || 'recipes.html'; // Fallback to recipes.html if not found
$wrap.append(`<a class="fc-card text-dark" href="../html/${filename}"><div class="body"><h6 class="m-0">${c}</h6></div></a>`); });
});
