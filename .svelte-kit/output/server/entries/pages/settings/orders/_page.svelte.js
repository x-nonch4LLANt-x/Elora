import { h as head, e as ensure_array_like, g as attr_class, f as escape_html, c as stringify } from "../../../../chunks/index2.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let orders = [
      {
        id: "#ORD-7782",
        date: "Oct 24, 2025",
        status: "Delivered",
        total: "KES 2,499.00",
        items: ["Elora Vision Pro X"]
      },
      {
        id: "#ORD-7781",
        date: "Sep 12, 2025",
        status: "Processing",
        total: "KES 149.00",
        items: ["Smart Lens Kit"]
      },
      {
        id: "#ORD-7780",
        date: "Aug 05, 2025",
        status: "Cancelled",
        total: "KES 899.00",
        items: ["Elora Pad Air"]
      },
      {
        id: "#ORD-7779",
        date: "Jul 18, 2025",
        status: "Delivered",
        total: "KES 55,000.00",
        items: ["Smart Beam 4K", "HDMI Cable"]
      }
    ];
    function getStatusColor(status) {
      switch (status) {
        case "Delivered":
          return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
        case "Processing":
          return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
        case "Cancelled":
          return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
        default:
          return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
      }
    }
    head("p7z8h4", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>My Orders | Elora Tech</title>`);
      });
    });
    $$renderer2.push(`<div class="min-h-screen bg-background-light dark:bg-background-dark pb-24"><div class="sticky top-0 z-40 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center gap-3"><a href="/settings" class="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white active:scale-90 transition-all"><span class="material-symbols-outlined text-[20px]">arrow_back</span></a> <h1 class="text-xl font-bold text-slate-900 dark:text-white">My Orders</h1></div> <div class="p-4 max-w-4xl mx-auto space-y-6"><div class="grid grid-cols-2 sm:grid-cols-4 gap-4"><!--[-->`);
    const each_array = ensure_array_like([
      {
        label: "Total Orders",
        value: orders.length,
        icon: "shopping_bag",
        color: "blue"
      },
      {
        label: "Delivered",
        value: orders.filter((o) => o.status === "Delivered").length,
        icon: "check_circle",
        color: "green"
      },
      {
        label: "Processing",
        value: orders.filter((o) => o.status === "Processing").length,
        icon: "sync",
        color: "orange"
      },
      {
        label: "Cancelled",
        value: orders.filter((o) => o.status === "Cancelled").length,
        icon: "cancel",
        color: "red"
      }
    ]);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let stat = each_array[$$index];
      $$renderer2.push(`<div class="bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 p-4 text-center"><div${attr_class(`w-10 h-10 rounded-full bg-${stringify(stat.color)}-100 dark:bg-${stringify(stat.color)}-900/30 text-${stringify(stat.color)}-600 dark:text-${stringify(stat.color)}-400 flex items-center justify-center mx-auto mb-2`)}><span class="material-symbols-outlined text-[20px]">${escape_html(stat.icon)}</span></div> <div class="text-2xl font-bold text-slate-900 dark:text-white">${escape_html(stat.value)}</div> <div class="text-xs text-slate-500 mt-1">${escape_html(stat.label)}</div></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="space-y-4"><h2 class="text-lg font-bold text-slate-900 dark:text-white">Order History</h2> `);
    if (orders.length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800 p-12 text-center"><span class="material-symbols-outlined text-slate-300 dark:text-slate-700 text-[64px]">shopping_bag</span> <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-4">No Orders Yet</h3> <p class="text-slate-500 mt-2">Start shopping to see your orders here</p> <a href="/catalog" class="inline-block mt-6 px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95">Browse Products</a></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_1 = ensure_array_like(orders);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let order = each_array_1[$$index_1];
        $$renderer2.push(`<div class="bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 p-6 hover:shadow-lg transition-shadow"><div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><div class="flex-1"><div class="flex items-center gap-3 mb-2"><h3 class="font-bold text-slate-900 dark:text-white">${escape_html(order.id)}</h3> <span${attr_class(`px-2 py-1 text-xs rounded-full font-medium ${stringify(getStatusColor(order.status))}`)}>${escape_html(order.status)}</span></div> <p class="text-sm text-slate-500">${escape_html(order.date)}</p> <p class="text-sm font-medium text-slate-900 dark:text-white mt-2">${escape_html(order.items.join(", "))}</p></div> <div class="text-right w-full sm:w-auto"><p class="font-bold text-lg text-primary mb-2">${escape_html(order.total)}</p> <button class="text-sm text-slate-500 hover:text-primary transition-colors font-medium flex items-center gap-1 ml-auto">View Details <span class="material-symbols-outlined text-[16px]">arrow_forward</span></button></div></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div> <div class="bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-200 dark:border-blue-800 p-6"><div class="flex items-start gap-4"><div class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0"><span class="material-symbols-outlined text-[24px]">help</span></div> <div class="flex-1"><h3 class="font-bold text-lg text-slate-900 dark:text-white mb-2">Need Help?</h3> <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">Have questions about your order? Our support team is
                        here to help.</p> <a href="/contact" class="inline-flex items-center gap-2 text-sm text-primary font-bold hover:underline">Contact Support <span class="material-symbols-outlined text-[16px]">arrow_forward</span></a></div></div></div></div></div>`);
  });
}
export {
  _page as default
};
