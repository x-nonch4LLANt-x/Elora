import { g as attr_class, f as escape_html, e as ensure_array_like, c as stringify, d as attr, b as attr_style, a as store_get, h as head, u as unsubscribe_stores } from "../../../../chunks/index2.js";
import { d as device } from "../../../../chunks/device.js";
import "../../../../chunks/toast.js";
function ReviewCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { review, compact = false } = $$props;
    function formatDate(dateString) {
      const date = new Date(dateString);
      const now = /* @__PURE__ */ new Date();
      const diffTime = Math.abs(now.getTime() - date.getTime());
      const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
      if (diffDays < 7) {
        return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
      } else if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
      } else {
        return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
      }
    }
    $$renderer2.push(`<div${attr_class(`p-${stringify(compact ? "4" : "6")} bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 ${stringify(compact ? "" : "shadow-sm")}`)}><div class="flex justify-between items-start mb-3"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-sm">${escape_html(review.user.charAt(0).toUpperCase())}</div> <div><div class="font-bold text-slate-900 dark:text-white">${escape_html(review.user)}</div> <div class="text-xs text-slate-500">${escape_html(formatDate(review.date))}</div></div></div> <div class="flex text-yellow-400"><!--[-->`);
    const each_array = ensure_array_like(Array(5));
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      each_array[i];
      $$renderer2.push(`<svg${attr_class(`w-4 h-4 ${stringify(i < review.rating ? "fill-current" : "text-slate-300 dark:text-slate-700 fill-current")}`)} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></div></div> <p${attr_class(`text-slate-700 dark:text-slate-300 leading-relaxed ${stringify(compact ? "text-sm" : "")}`)}>${escape_html(review.comment)}</p> `);
    if (!compact) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800"><button${attr_class(`flex items-center gap-2 text-sm font-medium transition-colors ${stringify("text-slate-500 hover:text-slate-700 dark:hover:text-slate-300")}`)}><span class="material-symbols-outlined text-[18px]">${escape_html("thumb_up_off_alt")}</span> <span>Helpful ${escape_html("")}</span></button></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
function ReviewsPage$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { product } = $$props;
    let sortBy = "recent";
    const sortedReviews = () => {
      const reviews = [...product.reviews];
      {
        return reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      }
    };
    function formatMoney(amount) {
      return new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES" }).format(amount);
    }
    function getRatingDistribution() {
      const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
      product.reviews.forEach((r) => {
        dist[r.rating]++;
      });
      return dist;
    }
    const ratingDist = getRatingDistribution();
    const totalReviews = product.reviews.length;
    $$renderer2.push(`<div class="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-6"><div class="sticky top-16 z-40 bg-white dark:bg-surface-dark border-b border-slate-100 dark:border-slate-800 px-4 py-4"><a${attr("href", `/products/${stringify(product.id)}`)} class="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-3"><span class="material-symbols-outlined">arrow_back</span> <span class="text-sm font-medium">Back to Product</span></a> <h1 class="text-xl font-bold text-slate-900 dark:text-white">Customer Reviews</h1></div> <div class="p-4 bg-white dark:bg-surface-dark border-b border-slate-100 dark:border-slate-800"><div class="flex gap-4"><div class="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden shrink-0"><img${attr("src", product.image)}${attr("alt", product.name)} class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><h2 class="font-bold text-slate-900 dark:text-white line-clamp-2 mb-1">${escape_html(product.name)}</h2> <p class="text-sm font-bold text-primary">${escape_html(formatMoney(product.price))}</p></div></div></div> <div class="p-4 space-y-4"><div class="bg-white dark:bg-surface-dark p-6 rounded-2xl border border-slate-100 dark:border-slate-800"><div class="flex items-center gap-6"><div class="text-center"><div class="text-5xl font-bold text-slate-900 dark:text-white mb-1">${escape_html(product.rating.toFixed(1))}</div> <div class="flex text-yellow-400 mb-2"><!--[-->`);
    const each_array = ensure_array_like(Array(5));
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      each_array[i];
      $$renderer2.push(`<svg${attr_class(`w-4 h-4 ${stringify(i < Math.floor(product.rating) ? "fill-current" : "text-slate-300 dark:text-slate-700 fill-current")}`)} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="text-xs text-slate-500">${escape_html(totalReviews)} reviews</div></div> <div class="flex-1 space-y-1.5"><!--[-->`);
    const each_array_1 = ensure_array_like([5, 4, 3, 2, 1]);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let star = each_array_1[$$index_1];
      const count = ratingDist[star];
      const percentage = totalReviews > 0 ? count / totalReviews * 100 : 0;
      $$renderer2.push(`<div class="flex items-center gap-2"><span class="text-xs text-slate-600 dark:text-slate-400 w-6">${escape_html(star)}★</span> <div class="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"><div class="h-full bg-yellow-400 transition-all duration-300"${attr_style(`width: ${stringify(percentage)}%`)}></div></div> <span class="text-xs text-slate-500 w-8 text-right">${escape_html(count)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div> <button class="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center gap-2"><span class="material-symbols-outlined text-[20px]">edit</span> <span>${escape_html("Write a Review")}</span></button> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (totalReviews > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex items-center justify-between"><h3 class="font-bold text-slate-900 dark:text-white">All Reviews (${escape_html(totalReviews)})</h3> `);
      $$renderer2.select(
        {
          value: sortBy,
          class: "text-sm px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
        },
        ($$renderer3) => {
          $$renderer3.option({ value: "recent" }, ($$renderer4) => {
            $$renderer4.push(`Most Recent`);
          });
          $$renderer3.option({ value: "highest" }, ($$renderer4) => {
            $$renderer4.push(`Highest Rated`);
          });
          $$renderer3.option({ value: "lowest" }, ($$renderer4) => {
            $$renderer4.push(`Lowest Rated`);
          });
        }
      );
      $$renderer2.push(`</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (totalReviews === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-center py-12"><span class="material-symbols-outlined text-slate-300 dark:text-slate-700 text-[64px]">rate_review</span> <p class="text-slate-500 mt-4">No reviews yet. Be the first to review!</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="space-y-4"><!--[-->`);
      const each_array_2 = ensure_array_like(sortedReviews());
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let review = each_array_2[$$index_2];
        ReviewCard($$renderer2, { review });
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
function ReviewsPage$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { product } = $$props;
    let sortBy = "recent";
    const sortedReviews = () => {
      const reviews = [...product.reviews];
      {
        return reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      }
    };
    function formatMoney(amount) {
      return new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES" }).format(amount);
    }
    function getRatingDistribution() {
      const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
      product.reviews.forEach((r) => {
        dist[r.rating]++;
      });
      return dist;
    }
    const ratingDist = getRatingDistribution();
    const totalReviews = product.reviews.length;
    $$renderer2.push(`<div class="min-h-screen bg-background-light dark:bg-background-dark py-8 px-6 lg:px-8"><div class="max-w-7xl mx-auto"><nav class="flex mb-8 text-sm text-slate-500"><a href="/" class="hover:text-primary transition-colors">Home</a> <span class="mx-2">/</span> <a href="/catalog" class="hover:text-primary transition-colors">Catalog</a> <span class="mx-2">/</span> <a${attr("href", `/products/${stringify(product.id)}`)} class="hover:text-primary transition-colors">${escape_html(product.name)}</a> <span class="mx-2">/</span> <span class="text-slate-900 dark:text-white">Reviews</span></nav> <div class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 mb-8"><div class="flex items-center gap-6"><div class="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shrink-0"><img${attr("src", product.image)}${attr("alt", product.name)} class="w-full h-full object-cover"/></div> <div class="flex-1"><h1 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">${escape_html(product.name)}</h1> <p class="text-lg font-bold text-primary">${escape_html(formatMoney(product.price))}</p></div> <a${attr("href", `/products/${stringify(product.id)}`)} class="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">Back to Product</a></div></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-1 space-y-6"><div class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 sticky top-24"><h2 class="font-bold text-slate-900 dark:text-white mb-6">Rating Summary</h2> <div class="text-center mb-6 pb-6 border-b border-slate-200 dark:border-slate-700"><div class="text-6xl font-bold text-slate-900 dark:text-white mb-2">${escape_html(product.rating.toFixed(1))}</div> <div class="flex justify-center text-yellow-400 mb-3"><!--[-->`);
    const each_array = ensure_array_like(Array(5));
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      each_array[i];
      $$renderer2.push(`<svg${attr_class(`w-6 h-6 ${stringify(i < Math.floor(product.rating) ? "fill-current" : "text-slate-300 dark:text-slate-700 fill-current")}`)} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="text-sm text-slate-500">Based on ${escape_html(totalReviews)} review${escape_html(totalReviews !== 1 ? "s" : "")}</div></div> <div class="space-y-3"><!--[-->`);
    const each_array_1 = ensure_array_like([5, 4, 3, 2, 1]);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let star = each_array_1[$$index_1];
      const count = ratingDist[star];
      const percentage = totalReviews > 0 ? count / totalReviews * 100 : 0;
      $$renderer2.push(`<div class="flex items-center gap-3"><span class="text-sm text-slate-600 dark:text-slate-400 w-8">${escape_html(star)} ★</span> <div class="flex-1 h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"><div class="h-full bg-yellow-400 transition-all duration-300"${attr_style(`width: ${stringify(percentage)}%`)}></div></div> <span class="text-sm text-slate-500 w-10 text-right">${escape_html(count)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div> <button class="w-full mt-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center gap-2"><span class="material-symbols-outlined text-[20px]">edit</span> <span>Write a Review</span></button></div></div> <div class="lg:col-span-2 space-y-6">`);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex items-center justify-between bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-800"><h3 class="font-bold text-slate-900 dark:text-white">All Reviews (${escape_html(totalReviews)})</h3> `);
    $$renderer2.select(
      {
        value: sortBy,
        class: "px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
      },
      ($$renderer3) => {
        $$renderer3.option({ value: "recent" }, ($$renderer4) => {
          $$renderer4.push(`Most Recent`);
        });
        $$renderer3.option({ value: "highest" }, ($$renderer4) => {
          $$renderer4.push(`Highest Rated`);
        });
        $$renderer3.option({ value: "lowest" }, ($$renderer4) => {
          $$renderer4.push(`Lowest Rated`);
        });
      }
    );
    $$renderer2.push(`</div> `);
    if (totalReviews === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-center py-16 bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800"><span class="material-symbols-outlined text-slate-300 dark:text-slate-700 text-[80px]">rate_review</span> <p class="text-slate-500 mt-4 text-lg">No reviews yet. Be the first to review!</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="space-y-4"><!--[-->`);
      const each_array_2 = ensure_array_like(sortedReviews());
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let review = each_array_2[$$index_2];
        ReviewCard($$renderer2, { review });
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div>`);
  });
}
function ReviewsPage($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { product } = $$props;
    let sortBy = "recent";
    const sortedReviews = () => {
      const reviews = [...product.reviews];
      {
        return reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      }
    };
    function formatMoney(amount) {
      return new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES" }).format(amount);
    }
    function getRatingDistribution() {
      const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
      product.reviews.forEach((r) => {
        dist[r.rating]++;
      });
      return dist;
    }
    const ratingDist = getRatingDistribution();
    const totalReviews = product.reviews.length;
    $$renderer2.push(`<div class="min-h-screen bg-background-light dark:bg-background-dark py-8 px-6 lg:px-8"><div class="max-w-7xl mx-auto"><nav class="flex mb-8 text-sm text-slate-500"><a href="/" class="hover:text-primary transition-colors">Home</a> <span class="mx-2">/</span> <a href="/catalog" class="hover:text-primary transition-colors">Catalog</a> <span class="mx-2">/</span> <a${attr("href", `/products/${stringify(product.id)}`)} class="hover:text-primary transition-colors">${escape_html(product.name)}</a> <span class="mx-2">/</span> <span class="text-slate-900 dark:text-white">Reviews</span></nav> <div class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 mb-8"><div class="flex items-center gap-6"><div class="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shrink-0"><img${attr("src", product.image)}${attr("alt", product.name)} class="w-full h-full object-cover"/></div> <div class="flex-1"><h1 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">${escape_html(product.name)}</h1> <p class="text-lg font-bold text-primary">${escape_html(formatMoney(product.price))}</p></div> <a${attr("href", `/products/${stringify(product.id)}`)} class="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">Back to Product</a></div></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-1 space-y-6"><div class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 sticky top-24"><h2 class="font-bold text-slate-900 dark:text-white mb-6">Rating Summary</h2> <div class="text-center mb-6 pb-6 border-b border-slate-200 dark:border-slate-700"><div class="text-6xl font-bold text-slate-900 dark:text-white mb-2">${escape_html(product.rating.toFixed(1))}</div> <div class="flex justify-center text-yellow-400 mb-3"><!--[-->`);
    const each_array = ensure_array_like(Array(5));
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      each_array[i];
      $$renderer2.push(`<svg${attr_class(`w-6 h-6 ${stringify(i < Math.floor(product.rating) ? "fill-current" : "text-slate-300 dark:text-slate-700 fill-current")}`)} viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="text-sm text-slate-500">Based on ${escape_html(totalReviews)} review${escape_html(totalReviews !== 1 ? "s" : "")}</div></div> <div class="space-y-3"><!--[-->`);
    const each_array_1 = ensure_array_like([5, 4, 3, 2, 1]);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let star = each_array_1[$$index_1];
      const count = ratingDist[star];
      const percentage = totalReviews > 0 ? count / totalReviews * 100 : 0;
      $$renderer2.push(`<div class="flex items-center gap-3"><span class="text-sm text-slate-600 dark:text-slate-400 w-8">${escape_html(star)} ★</span> <div class="flex-1 h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"><div class="h-full bg-yellow-400 transition-all duration-300"${attr_style(`width: ${stringify(percentage)}%`)}></div></div> <span class="text-sm text-slate-500 w-10 text-right">${escape_html(count)}</span></div>`);
    }
    $$renderer2.push(`<!--]--></div> <button class="w-full mt-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center gap-2"><span class="material-symbols-outlined text-[20px]">edit</span> <span>Write a Review</span></button></div></div> <div class="lg:col-span-2 space-y-6">`);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex items-center justify-between bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-800"><h3 class="font-bold text-slate-900 dark:text-white">All Reviews (${escape_html(totalReviews)})</h3> `);
    $$renderer2.select(
      {
        value: sortBy,
        class: "px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
      },
      ($$renderer3) => {
        $$renderer3.option({ value: "recent" }, ($$renderer4) => {
          $$renderer4.push(`Most Recent`);
        });
        $$renderer3.option({ value: "highest" }, ($$renderer4) => {
          $$renderer4.push(`Highest Rated`);
        });
        $$renderer3.option({ value: "lowest" }, ($$renderer4) => {
          $$renderer4.push(`Lowest Rated`);
        });
      }
    );
    $$renderer2.push(`</div> `);
    if (totalReviews === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="text-center py-16 bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800"><span class="material-symbols-outlined text-slate-300 dark:text-slate-700 text-[80px]">rate_review</span> <p class="text-slate-500 mt-4 text-lg">No reviews yet. Be the first to review!</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="space-y-4"><!--[-->`);
      const each_array_2 = ensure_array_like(sortedReviews());
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let review = each_array_2[$$index_2];
        ReviewCard($$renderer2, { review });
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { data } = $$props;
    const components = {
      mobile: ReviewsPage$2,
      tablet: ReviewsPage$1,
      desktop: ReviewsPage
    };
    const CurrentComponent = components[store_get($$store_subs ??= {}, "$device", device)];
    head("1ery3wx", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.product.name)} - Reviews | Elora Tech</title>`);
      });
    });
    $$renderer2.push(`<!---->`);
    CurrentComponent($$renderer2, { product: data.product });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
