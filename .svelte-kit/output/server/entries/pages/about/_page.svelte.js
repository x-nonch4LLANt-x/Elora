import { e as ensure_array_like, f as escape_html } from "../../../chunks/index2.js";
function _page($$renderer) {
  $$renderer.push(`<div class="min-h-screen bg-background-light dark:bg-background-dark"><div class="relative overflow-hidden py-20 sm:py-32 bg-primary/5 dark:bg-primary/10"><div class="absolute inset-0 z-0 opacity-30"><div class="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div> <div class="absolute top-1/2 -left-24 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div></div> <div class="container mx-auto px-4 sm:px-6 relative z-10"><div class="max-w-3xl mx-auto text-center"><h1 class="text-4xl sm:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6">We Are <span class="text-primary">Elora Tech</span></h1> <p class="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">Crafting the future of technology with premium electronics
                    and accessories. We believe in quality, innovation, and
                    design that speaks for itself.</p></div></div></div> <div class="py-16 sm:py-24"><div class="container mx-auto px-4 sm:px-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"><div><div class="glass p-2 rounded-2xl rotate-3 transform hover:rotate-0 transition-all duration-500"><div class="aspect-video bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl overflow-hidden flex items-center justify-center"><span class="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700">storefront</span></div></div></div> <div class="space-y-6"><h2 class="text-3xl font-bold text-slate-900 dark:text-white">Our Story</h2> <p class="text-slate-600 dark:text-slate-300">Founded in 2024, Elora Tech started with a simple
                        mission: to make high-end technology accessible without
                        compromising on aesthetics. We noticed a gap in the
                        market for tech retailers who truly care about the
                        visual and functional experience of their products.</p> <p class="text-slate-600 dark:text-slate-300">From a small garage setup to a growing online presence,
                        our journey has been fueled by a passion for excellence
                        and a commitment to our customers.</p></div></div></div></div> <div class="py-16 sm:py-24 bg-surface-light dark:bg-surface-dark"><div class="container mx-auto px-4 sm:px-6"><div class="grid grid-cols-1 md:grid-cols-3 gap-8"><!--[-->`);
  const each_array = ensure_array_like([
    {
      icon: "rocket_launch",
      title: "Innovation",
      desc: "Pushing boundaries with cutting-edge tech."
    },
    {
      icon: "diamond",
      title: "Quality",
      desc: "Only the best materials and build quality."
    },
    {
      icon: "favorite",
      title: "Customer First",
      desc: "Your satisfaction is our top priority."
    }
  ]);
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let item = each_array[i];
    $$renderer.push(`<div class="glass-card p-8 rounded-2xl text-center space-y-4"><div class="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center"><span class="material-symbols-outlined text-3xl text-primary">${escape_html(item.icon)}</span></div> <h3 class="text-xl font-bold text-slate-900 dark:text-white">${escape_html(item.title)}</h3> <p class="text-slate-600 dark:text-slate-400">${escape_html(item.desc)}</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div> <div class="py-16 sm:py-24"><div class="container mx-auto px-4 sm:px-6 text-center"><h2 class="text-3xl font-bold text-slate-900 dark:text-white mb-12">Meet the Team</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"><!--[-->`);
  const each_array_1 = ensure_array_like([1, 2, 3, 4]);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let member = each_array_1[$$index_1];
    $$renderer.push(`<div class="group"><div class="relative overflow-hidden rounded-2xl aspect-square mb-4 bg-slate-100 dark:bg-slate-800"><div class="absolute inset-0 flex items-center justify-center text-slate-300 dark:text-slate-700 font-display text-4xl">${escape_html(member)}</div> <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></div> <h3 class="text-lg font-bold text-slate-900 dark:text-white">Team Member ${escape_html(member)}</h3> <p class="text-primary text-sm">Role Title</p></div>`);
  }
  $$renderer.push(`<!--]--></div></div></div></div>`);
}
export {
  _page as default
};
