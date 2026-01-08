import { a as store_get, h as head, f as escape_html, e as ensure_array_like, d as attr, u as unsubscribe_stores } from "../../chunks/index2.js";
import { L as Logo, p as page } from "../../chunks/stores.js";
function _error($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const errorMessages = {
      404: {
        title: "Page Not Found",
        message: "Oops! The page you're looking for doesn't exist. It might have been moved or deleted."
      },
      500: {
        title: "Server Error",
        message: "Something went wrong on our end. We're working to fix it. Please try again later."
      },
      403: {
        title: "Access Denied",
        message: "You don't have permission to access this page."
      }
    };
    const status = store_get($$store_subs ??= {}, "$page", page).status;
    const error = errorMessages[status] || {
      title: "Something Went Wrong",
      message: "An unexpected error occurred. Please try again."
    };
    head("1j96wlh", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(error.title)} | Elora Tech</title>`);
      });
    });
    $$renderer2.push(`<div class="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center px-4"><div class="max-w-2xl w-full"><div class="glass p-8 sm:p-12 rounded-3xl text-center space-y-8 border border-slate-200 dark:border-slate-800"><div class="flex flex-col items-center gap-4">`);
    Logo($$renderer2, { className: "h-16 w-16" });
    $$renderer2.push(`<!----> <h2 class="text-2xl font-bold text-slate-900 dark:text-white">ELORA Tech</h2></div> <div class="space-y-2"><div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 mb-4"><span class="material-symbols-outlined text-red-600 dark:text-red-400 text-[48px]">${escape_html(status === 404 ? "search_off" : "error")}</span></div> <h1 class="text-6xl sm:text-7xl font-bold text-slate-900 dark:text-white">${escape_html(status)}</h1> <h2 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">${escape_html(error.title)}</h2></div> <p class="text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto">${escape_html(error.message)}</p> <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4"><a href="/" class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95"><span class="material-symbols-outlined text-[20px]">home</span> Back to Home</a> <a href="/catalog" class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"><span class="material-symbols-outlined text-[20px]">shopping_bag</span> View Catalog</a></div> `);
    if (status === 404) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="pt-8 border-t border-slate-200 dark:border-slate-700"><p class="text-sm text-slate-500 mb-4">Looking for something specific?</p> <div class="flex flex-wrap justify-center gap-3"><!--[-->`);
      const each_array = ensure_array_like([
        { label: "Projectors", href: "/catalog" },
        { label: "Accessories", href: "/accessories" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" }
      ]);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let link = each_array[$$index];
        $$renderer2.push(`<a${attr("href", link.href)} class="text-sm text-primary hover:underline font-medium">${escape_html(link.label)}</a>`);
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _error as default
};
