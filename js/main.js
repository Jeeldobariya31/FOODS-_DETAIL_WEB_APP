window.FC = window.FC || {};
(function () {
  async function fetchJSON(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error("HTTP " + r.status);
    return await r.json();
  }
  async function loadStatic() {
    try {
      const r = await fetch("../data/recipes.json");
      return await r.json();
    } catch (e) {
      return { items: [] };
    }
  }
  function mergeUnique(a, b) {
    const seen = new Set(),
      out = [];
    for (const r of [...a, ...b]) {
      const k =
        (r.id ? "id:" + r.id : "") + "|" + (r.title || "").toLowerCase();
      if (seen.has(k)) continue;
      seen.add(k);
      out.push(r);
    }
    return out;
  }
  async function mealByCategory(c) {
    try {
      const d = await fetchJSON(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" +
          encodeURIComponent(c)
      );
      return (d.meals || []).map((m) => ({
        id: m.idMeal,
        title: m.strMeal,
        image: m.strMealThumb,
        category: c,
        source: "api",
      }));
    } catch (e) {
      return [];
    }
  }
  async function mealByArea(a) {
    try {
      const d = await fetchJSON(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=" +
          encodeURIComponent(a)
      );
      return (d.meals || []).map((m) => ({
        id: m.idMeal,
        title: m.strMeal,
        image: m.strMealThumb,
        category: a,
        source: "api",
      }));
    } catch (e) {
      return [];
    }
  }
  async function mealByIng(i) {
    try {
      const d = await fetchJSON(
        "https://www.themealdb.com/api/json/v1/1/filter.php?i=" +
          encodeURIComponent(i)
      );
      return (d.meals || []).map((m) => ({
        id: m.idMeal,
        title: m.strMeal,
        image: m.strMealThumb,
        category: i,
        source: "api",
      }));
    } catch (e) {
      return [];
    }
  }
  async function mealSearch(s) {
    try {
      const d = await fetchJSON(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
          encodeURIComponent(s)
      );
      return (d.meals || []).map((m) => ({
        id: m.idMeal,
        title: m.strMeal,
        image: m.strMealThumb,
        category: m.strCategory || s,
        source: "api",
      }));
    } catch (e) {
      return [];
    }
  }

  // Extended planner to map page titles -> API queries
  function planFor(t) {
    t = (t || "").toLowerCase();
    const plan = { categories: [], areas: [], ings: [], search: [] };
    const add = (k, arr) =>
      arr.forEach((v) => {
        if (!plan[k].includes(v)) plan[k].push(v);
      });

    // Core recipe categories (TheMealDB known categories)
    const catMap = {
      breakfast: "Breakfast",
      dessert: "Dessert",
      pasta: "Pasta",
      vegan: "Vegan",
      vegetarian: "Vegetarian",
      chicken: "Chicken",
      beef: "Beef",
      seafood: "Seafood",
      pork: "Pork",
      lamb: "Lamb",
      starter: "Starter",
      side: "Side",
      misc: "Miscellaneous",
    };
    for (const key in catMap) {
      if (t.includes(key)) add("categories", [catMap[key]]);
    }

    // Areas (cuisines) supported by API
    const areaMap = {
      mexican: "Mexican",
      italian: "Italian",
      indian: "Indian",
      chinese: "Chinese",
      japanese: "Japanese",
      thai: "Thai",
      american: "American",
      british: "British",
      french: "French",
      greek: "Greek",
      turkish: "Turkish",
      spanish: "Spanish",
    };
    for (const key in areaMap) {
      if (t.includes(key)) add("areas", [areaMap[key]]);
    }

    // Holidays/Seasonal approximations via search or ingredient
    if (t.includes("thanksgiving")) add("ings", ["turkey"]);
    if (t.includes("christmas")) add("search", ["christmas", "roast"]);
    if (t.includes("new year")) add("search", ["party", "appetizer"]);
    if (t.includes("spring")) add("search", ["asparagus", "fresh"]);
    if (t.includes("summer")) add("search", ["salad", "grill", "bbq"]);
    if (t.includes("fall")) add("search", ["pumpkin", "soup"]);
    if (t.includes("winter")) add("search", ["stew", "casserole"]);
    if (t.includes("popular")) add("search", ["popular", "best", "casserole"]);
    if (t.includes("dinner")) add("search", ["chicken", "pasta", "beef"]); // heuristic

    if (
      !plan.categories.length &&
      !plan.areas.length &&
      !plan.ings.length &&
      !plan.search.length
    ) {
      add("categories", ["Chicken", "Beef", "Dessert", "Pasta"]);
    }
    return plan;
  }

  async function loadHybrid(title) {
    const p = planFor(title || "");
    const [A, B, C, D, stat] = await Promise.all([
      Promise.all(p.categories.map(mealByCategory)).then((x) => x.flat()),
      Promise.all(p.areas.map(mealByArea)).then((x) => x.flat()),
      Promise.all(p.ings.map(mealByIng)).then((x) => x.flat()),
      Promise.all(p.search.map(mealSearch)).then((x) => x.flat()),
      loadStatic(),
    ]);
    const st = (stat.items || [])
      .filter((r) =>
        (r.category || "").toLowerCase().includes((title || "").toLowerCase())
      )
      .map((r) => ({ ...r, source: "static" }));
    let merged = mergeUnique([...A, ...B, ...C, ...D], st);
    if (merged.length < 12) {
      const pad = await mealByCategory("Chicken");
      merged = mergeUnique(merged, pad);
    }
    return merged.slice(0, 24);
  }

  async function loadDetail(params) {
    if (params.src === "api" && params.id) {
      try {
        const d = await fetchJSON(
          "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +
            encodeURIComponent(params.id)
        );
        const m = (d.meals || [])[0];
        if (m) {
          const ings = [];
          for (let i = 1; i <= 20; i++) {
            const ing = m["strIngredient" + i],
              meas = m["strMeasure" + i];
            if (ing && ing.trim()) ings.push((meas ? meas + " " : "") + ing);
          }
          return {
            title: m.strMeal,
            image: m.strMealThumb,
            category: m.strCategory,
            area: m.strArea,
            instructions: m.strInstructions,
            tags: (m.strTags || "").split(",").filter(Boolean),
            ingredients: ings,
          };
        }
      } catch (e) {}
    }
    const s = await loadStatic();
    const f = (s.items || []).find(
      (r) => r.title.toLowerCase() === (params.title || "").toLowerCase()
    );
    return f
      ? {
          title: f.title,
          image: f.image,
          category: f.category,
          area: "—",
          instructions: f.description || "Tasty and simple recipe.",
          tags: [],
          ingredients: [],
        }
      : null;
  }

  window.FC = Object.assign(window.FC, { fetch: { loadHybrid, loadDetail } });
})();
