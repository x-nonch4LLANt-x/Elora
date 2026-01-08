import { f as escape_html, a as store_get, e as ensure_array_like, g as attr_class, d as attr, c as stringify, u as unsubscribe_stores } from "../../chunks/index2.js";
import { t } from "../../chunks/i18n.js";
import "../../chunks/cart.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { d as device } from "../../chunks/device.js";
function HomePage$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { products = [] } = $$props;
    let activeCategory = "All";
    const categories = ["All", "Mini", "Smart", "Outdoor"];
    $$renderer2.push(`<div class="flex flex-col gap-6"><div class="px-4 pt-4"><div class="relative flex h-[480px] w-full flex-col justify-end overflow-hidden rounded-2xl bg-slate-200"><div class="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeUdZQ4iw9OFNCUOM0gnLfRX6IOYXTINe3LGBcEKpicNni9WMy2Kl2R4jTonXRI4HE3XlA8TvZCsuPLvnwVdfLRgHbs_odj-mB3UFi41e8mH3Q2e0Yv96yw8y-fVHeroqECcMyE1S2rt-67rA4EcgphDmoYot0n4MIwVEBhF3AFdHcViqK9A2SMWoa6U9yoAxuuoeZM1ftdR7nWGRvDF3Ew77zhfgowXvZnZpLgEihQv0pDJwbGU6tL3jjtIoyJsyfscaETNfS2ZA');"></div> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div> <div class="relative z-10 flex flex-col gap-5 p-6"><div class="space-y-2"><h2 class="text-sm font-medium uppercase tracking-widest text-primary">Upgrade Your View</h2> <h3 class="text-4xl font-bold leading-none tracking-tight text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("home.hero.title"))}</h3> <p class="text-slate-200 text-sm max-w-[85%] pt-2 leading-relaxed">${escape_html(store_get($$store_subs ??= {}, "$t", t)("home.hero.subtitle"))}</p></div> <a href="/catalog" class="mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 font-bold text-white transition-all hover:bg-blue-600 active:scale-95">Shop Now <span class="material-symbols-outlined text-[20px]">arrow_forward</span></a></div></div></div> <div class="flex w-full gap-3 overflow-x-auto px-4 pb-2 no-scrollbar"><!--[-->`);
    const each_array = ensure_array_like(categories);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let category = each_array[$$index];
      $$renderer2.push(`<button${attr_class(`flex h-10 shrink-0 items-center justify-center rounded-full px-6 transition-all duration-300 active:scale-95 ${stringify(activeCategory === category ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold" : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 font-medium hover:bg-slate-200 dark:hover:bg-slate-700")}`)}><span class="text-sm">${escape_html(category)}</span></button>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="flex flex-col pt-2"><div class="flex items-center justify-between px-4 pb-5"><h2 class="text-xl font-bold text-slate-900 dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("home.trending"))}</h2> <a href="/catalog" class="text-sm font-medium text-primary">See All</a></div> <div class="grid grid-cols-2 gap-5 px-4"><!--[-->`);
    const each_array_1 = ensure_array_like(products);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let product = each_array_1[$$index_1];
      $$renderer2.push(`<div class="group flex flex-col gap-3 relative"><a${attr("href", `/products/${stringify(product.id)}`)} class="absolute inset-0 z-0 rounded-2xl"${attr("aria-label", `View ${stringify(product.name)}`)}></a> <div class="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 z-10 pointer-events-none"><img${attr("src", product.image)} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"${attr("alt", product.name)} onerror="this.__e=event"/> <button class="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm text-slate-900 dark:text-white active:scale-95 transition-transform pointer-events-auto z-20" aria-label="Add to Cart"><span class="material-symbols-outlined text-[20px]">shopping_cart</span></button></div> <div class="z-10 pointer-events-none"><h3 class="text-base font-bold text-slate-900 dark:text-white">${escape_html(product.name)}</h3> <p class="text-base font-bold text-primary">${escape_html(store_get($$store_subs ??= {}, "$t", t)("currency"))}
                            ${escape_html(product.price.toLocaleString())}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function HomePage$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { products = [] } = $$props;
    $$renderer2.push(`<div class="flex flex-col gap-6"><div class="relative h-[400px] w-full overflow-hidden rounded-2xl bg-slate-900"><div class="absolute inset-0 h-full w-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeUdZQ4iw9OFNCUOM0gnLfRX6IOYXTINe3LGBcEKpicNni9WMy2Kl2R4jTonXRI4HE3XlA8TvZCsuPLvnwVdfLRgHbs_odj-mB3UFi41e8mH3Q2e0Yv96yw8y-fVHeroqECcMyE1S2rt-67rA4EcgphDmoYot0n4MIyVEBhF3AFdHcViqK9A2SMWoa6U9yoAxuuoeZM1ftdR7nWGRvDF3Ew77zhfgowXvZnZpLgEihQv0pDJwbGU6tL3jjtIoyJsyfscaETNfS2ZA');"></div> <div class="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div> <div class="relative z-10 flex flex-col justify-center h-full p-10 gap-4 max-w-lg"><h1 class="text-5xl font-bold text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("home.hero.title"))}</h1> <p class="text-lg text-slate-200">${escape_html(store_get($$store_subs ??= {}, "$t", t)("home.hero.subtitle"))}</p> <a href="/catalog" class="mt-4 flex h-12 w-fit items-center justify-center gap-2 px-8 rounded-xl bg-primary text-white font-bold transition-all hover:bg-blue-600 active:scale-95">Shop Now <span class="material-symbols-outlined text-[20px]">arrow_forward</span></a></div></div> <div class="grid grid-cols-3 gap-6"><!--[-->`);
    const each_array = ensure_array_like(products);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let product = each_array[$$index];
      $$renderer2.push(`<div class="group flex flex-col gap-3 relative"><a${attr("href", `/products/${stringify(product.id)}`)} class="absolute inset-0 z-0 rounded-xl"${attr("aria-label", `View ${stringify(product.name)}`)}></a> <div class="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 z-10 pointer-events-none"><img${attr("src", product.image)} class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"${attr("alt", product.name)} onerror="this.__e=event"/> <button class="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-sm text-slate-900 dark:text-white shadow-lg active:scale-95 transition-transform pointer-events-auto z-20" aria-label="Add to Cart"><span class="material-symbols-outlined text-[20px]">add_shopping_cart</span></button></div> <div class="z-10 pointer-events-none"><h3 class="text-lg font-bold text-slate-900 dark:text-white">${escape_html(product.name)}</h3> <p class="text-lg font-bold text-primary">${escape_html(store_get($$store_subs ??= {}, "$t", t)("currency"))}
                        ${escape_html(product.price.toLocaleString())}</p></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function HomePage($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { products = [] } = $$props;
    $$renderer2.push(`<div class="flex flex-col gap-12"><div class="relative h-[600px] w-full overflow-hidden rounded-3xl bg-slate-900"><div class="absolute inset-0 h-full w-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeUdZQ4iw9OFNCUOM0gnLfRX6IOYXTINe3LGBcEKpicNni9WMy2Kl2R4jTonXRI4HE3XlA8TvZCsuPLvnwVdfLRgHbs_odj-mB3UFi41e8mH3Q2e0Yv96yw8y-fVHeroqECcMyE1S2rt-67rA4EcgphDmoYot0n4MIwVEBhF3AFdHcViqK9A2SMWoa6U9yoAxuuoeZM1ftdR7nWGRvDF3Ew77zhfgowXvZnZpLgEihQv0pDJwbGU6tL3jjtIoyJsyfscaETNfS2ZA');"></div> <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div> <div class="relative z-10 flex h-full max-w-2xl flex-col justify-center p-16 gap-6"><span class="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-bold text-primary w-fit backdrop-blur-md">New Generation 2026</span> <h1 class="text-7xl font-bold tracking-tight text-white leading-[1.1]">${escape_html(store_get($$store_subs ??= {}, "$t", t)("home.hero.title"))}</h1> <p class="text-xl text-slate-300">${escape_html(store_get($$store_subs ??= {}, "$t", t)("home.hero.subtitle"))} Transform your living space into an immersive
                theater with 4K clarity and Dolby Atmos sound.</p> <div class="flex gap-4 pt-4"><a href="/catalog" class="h-14 px-8 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-lg transition-all shadow-lg shadow-primary/30 flex items-center gap-2 active:scale-95">Shop Projectors <span class="material-symbols-outlined">arrow_forward</span></a> <button class="h-14 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-lg backdrop-blur-sm transition-all flex items-center gap-2 active:scale-95"><span class="material-symbols-outlined">play_circle</span> Watch Demo</button></div></div></div> <div class="grid grid-cols-4 gap-6"><!--[-->`);
    const each_array = ensure_array_like([
      "Mini Projectors",
      "Smart Home",
      "Outdoor Cinema",
      "Accessories"
    ]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let category = each_array[$$index];
      $$renderer2.push(`<button class="group relative h-40 w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 p-6 flex items-center justify-between cursor-pointer hover:shadow-xl transition-all text-left active:scale-[0.98]"><h3 class="text-xl font-bold text-slate-900 dark:text-white z-10">${escape_html(category)}</h3> <div class="absolute right-[-20px] bottom-[-20px] h-24 w-24 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all"></div></button>`);
    }
    $$renderer2.push(`<!--]--></div> <div><div class="flex items-center justify-between mb-8"><h2 class="text-3xl font-bold text-slate-900 dark:text-white">${escape_html(store_get($$store_subs ??= {}, "$t", t)("home.trending"))}</h2> <a href="/catalog" class="text-primary font-bold hover:underline">View All Collection</a></div> <div class="grid grid-cols-4 gap-8"><!--[-->`);
    const each_array_1 = ensure_array_like(products);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let product = each_array_1[$$index_1];
      $$renderer2.push(`<div class="group relative"><a${attr("href", `/products/${stringify(product.id)}`)} class="absolute inset-0 z-0 rounded-2xl"${attr("aria-label", `View ${stringify(product.name)}`)}></a> <div class="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 mb-4 z-10 pointer-events-none"><img${attr("src", product.image)} class="h-full w-full object-cover transition-duration-700 group-hover:scale-110"${attr("alt", product.name)} onerror="this.__e=event"/> <div class="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0"><button class="bg-white text-slate-900 px-6 py-2 rounded-full font-bold shadow-lg hover:bg-primary hover:text-white transition-colors pointer-events-auto">Add to Cart</button></div></div> <h3 class="text-lg font-bold text-slate-900 dark:text-white z-10 relative pointer-events-none">${escape_html(product.name)}</h3> <p class="text-slate-500">${escape_html(product.description)}</p> <p class="text-lg font-bold text-primary mt-1">${escape_html(store_get($$store_subs ??= {}, "$t", t)("currency"))}
                        ${escape_html(product.price.toLocaleString())}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    const Components = {
      mobile: HomePage$2,
      tablet: HomePage$1,
      desktop: HomePage
    };
    const CurrentComponent = Components[store_get($$store_subs ??= {}, "$device", device)];
    $$renderer2.push(`<!---->`);
    CurrentComponent($$renderer2, { products: data.products });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
