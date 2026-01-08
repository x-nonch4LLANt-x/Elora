import { d as attr_class, e as ensure_array_like, c as stringify } from "../../../chunks/index2.js";
import "../../../chunks/toast.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let user = {
      name: "Allan Doe",
      email: "allan@example.com"
    };
    let orders = [
      {
        id: "#ORD-7782",
        date: "Oct 24, 2025",
        status: "Delivered",
        total: "$2,499.00",
        items: ["Elora Vision Pro X"]
      },
      {
        id: "#ORD-7781",
        date: "Sep 12, 2025",
        status: "Processing",
        total: "$149.00",
        items: ["Smart Lens Kit"]
      },
      {
        id: "#ORD-7780",
        date: "Aug 05, 2025",
        status: "Cancelled",
        total: "$899.00",
        items: ["Elora Pad Air"]
      }
    ];
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="min-h-screen bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8"><div class="max-w-6xl mx-auto"><div class="flex flex-col md:flex-row gap-8"><div class="w-full md:w-64 space-y-4"><div class="glass p-6 rounded-2xl text-center"><div class="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-3xl font-bold text-primary mb-4">${escape_html(user.name.charAt(0))}</div> <h2 class="font-bold text-slate-900 dark:text-white">${escape_html(user.name)}</h2> <p class="text-sm text-slate-500">${escape_html(user.email)}</p></div> <nav class="glass rounded-xl overflow-hidden"><button${attr_class(`w-full text-left px-6 py-4 flex items-center gap-3 transition-colors ${stringify(
        "bg-primary/10 text-primary border-l-4 border-primary"
      )}`)}><span class="material-symbols-outlined">package_2</span> Orders</button> <button${attr_class(`w-full text-left px-6 py-4 flex items-center gap-3 transition-colors ${stringify("text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800")}`)}><span class="material-symbols-outlined">person</span> Profile</button> <button class="w-full text-left px-6 py-4 flex items-center gap-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"><span class="material-symbols-outlined">logout</span> Logout</button></nav></div> <div class="flex-1">`);
      {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="space-y-6"><h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">Order History</h2> <!--[-->`);
        const each_array = ensure_array_like(orders);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let order = each_array[$$index];
          $$renderer3.push(`<div class="glass-card p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><div><div class="flex items-center gap-3 mb-2"><h3 class="font-bold text-slate-900 dark:text-white">${escape_html(order.id)}</h3> <span${attr_class(`px-2 py-1 text-xs rounded-full ${stringify(order.status === "Delivered" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : order.status === "Processing" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400")}`)}>${escape_html(order.status)}</span></div> <p class="text-sm text-slate-500">${escape_html(order.date)}</p> <p class="text-sm font-medium text-slate-900 dark:text-white mt-1">${escape_html(order.items.join(", "))}</p></div> <div class="text-right"><p class="font-bold text-lg text-primary">${escape_html(order.total)}</p> <button class="text-sm text-slate-500 hover:text-primary transition-colors mt-2">View Details</button></div></div>`);
        }
        $$renderer3.push(`<!--]--></div>`);
      }
      $$renderer3.push(`<!--]--></div></div></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _page as default
};
