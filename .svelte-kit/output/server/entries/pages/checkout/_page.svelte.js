import { f as escape_html, e as ensure_array_like, g as attr_class, a as store_get, d as attr, u as unsubscribe_stores, c as stringify, h as head } from "../../../chunks/index2.js";
import { d as device } from "../../../chunks/device.js";
import "clsx";
import { a as cart, b as cartTotal } from "../../../chunks/cart.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
import { F as FloatingLabelInput } from "../../../chunks/FloatingLabelInput.js";
import "../../../chunks/toast.js";
function MapPicker($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      initialLocation = { lat: -1.286389, lng: 36.817223 },
      // Nairobi default
      onLocationSelect = (lat, lng, address) => {
      }
    } = $$props;
    let selectedAddress = "Select location on map";
    $$renderer2.push(`<div class="w-full h-full relative"><div class="w-full h-full rounded-xl overflow-hidden"></div> `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl"><div class="text-center"><div class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div> <p class="text-sm text-slate-500">Loading map...</p></div></div>`);
    }
    $$renderer2.push(`<!--]--> <div class="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"><div class="flex items-start gap-2"><span class="material-symbols-outlined text-primary text-[20px] shrink-0 mt-1">location_on</span> <div class="flex-1 min-w-0"><p class="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1">Selected Location</p> <p class="text-sm text-slate-900 dark:text-white font-medium line-clamp-2">${escape_html(selectedAddress)}</p></div></div> <p class="text-xs text-slate-500 mt-2">Drag marker or tap map to change location</p></div></div>`);
  });
}
function CheckoutPage$2($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let shippingInfo = {
      name: "",
      email: "",
      road: "",
      house: "",
      apt: "",
      landmark: "",
      phone: "",
      lat: -1.286389,
      lng: 36.817223,
      address: ""
    };
    function handleLocationSelect(lat, lng, address) {
      shippingInfo.lat = lat;
      shippingInfo.lng = lng;
      shippingInfo.address = address;
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24"><div class="sticky top-16 z-40 bg-white dark:bg-surface-dark border-b border-slate-100 dark:border-slate-800 px-4 py-4"><h1 class="text-xl font-bold text-slate-900 dark:text-white">Checkout</h1></div> `);
      {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="flex flex-col gap-6 p-4"><div class="w-full h-64 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">`);
        MapPicker($$renderer3, {
          initialLocation: {},
          onLocationSelect: handleLocationSelect
        });
        $$renderer3.push(`<!----></div> <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 flex items-start gap-2"><span class="material-symbols-outlined text-blue-600 dark:text-blue-400 text-[20px]">info</span> <p class="text-xs text-blue-700 dark:text-blue-300 leading-relaxed">Distance fee applied. The further the location, the higher
                    the delivery cost.</p></div> <form class="space-y-4"><h2 class="font-bold text-lg text-slate-900 dark:text-white">Delivery Location</h2> `);
        FloatingLabelInput($$renderer3, {
          label: "Place Name",
          placeholder: "e.g. Westlands Center",
          required: true,
          get value() {
            return shippingInfo.name;
          },
          set value($$value) {
            shippingInfo.name = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> `);
        FloatingLabelInput($$renderer3, {
          label: "Road / Street",
          placeholder: "e.g. Waiyaki Way",
          required: true,
          get value() {
            return shippingInfo.road;
          },
          set value($$value) {
            shippingInfo.road = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> <div class="grid grid-cols-2 gap-3">`);
        FloatingLabelInput($$renderer3, {
          label: "House / Building",
          placeholder: "No. 4B",
          get value() {
            return shippingInfo.house;
          },
          set value($$value) {
            shippingInfo.house = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> `);
        FloatingLabelInput($$renderer3, {
          label: "Apartment Unit",
          placeholder: "Flr 2",
          get value() {
            return shippingInfo.apt;
          },
          set value($$value) {
            shippingInfo.apt = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----></div> `);
        FloatingLabelInput($$renderer3, {
          label: "Landmark (Optional)",
          placeholder: "e.g. Near the Shell Station",
          get value() {
            return shippingInfo.landmark;
          },
          set value($$value) {
            shippingInfo.landmark = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> `);
        FloatingLabelInput($$renderer3, {
          label: "Email Address",
          type: "email",
          required: true,
          get value() {
            return shippingInfo.email;
          },
          set value($$value) {
            shippingInfo.email = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> `);
        FloatingLabelInput($$renderer3, {
          label: "Phone Number",
          type: "tel",
          placeholder: "+254 712 345 678",
          required: true,
          get value() {
            return shippingInfo.phone;
          },
          set value($$value) {
            shippingInfo.phone = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> <button type="submit" class="w-full mt-6 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95">Continue to Payment</button></form></div>`);
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function CheckoutPage$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let step = "shipping";
    let shippingInfo = {
      name: "",
      email: "",
      road: "",
      house: "",
      apt: "",
      landmark: "",
      phone: "",
      lat: -1.286389,
      lng: 36.817223,
      address: ""
    };
    let deliveryFee = 860;
    function formatMoney(amount) {
      return new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES" }).format(amount);
    }
    function handleLocationSelect(lat, lng, address) {
      shippingInfo.lat = lat;
      shippingInfo.lng = lng;
      shippingInfo.address = address;
      const defaultLat = -1.286389;
      const defaultLng = 36.817223;
      const distance = Math.sqrt(Math.pow(lat - defaultLat, 2) + Math.pow(lng - defaultLng, 2));
      deliveryFee = Math.round(500 + distance * 1e3);
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="min-h-screen bg-background-light dark:bg-background-dark py-12 px-6 lg:px-8"><div class="max-w-7xl mx-auto">`);
      {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<div class="mb-12"><div class="flex items-center justify-center max-w-2xl mx-auto relative"><div class="absolute left-0 top-1/2 w-full h-1 bg-slate-200 dark:bg-slate-700 -z-10"></div> <!--[-->`);
        const each_array = ensure_array_like(["shipping", "payment"]);
        for (let i = 0, $$length = each_array.length; i < $$length; i++) {
          let s = each_array[i];
          const isActive = step === s || step === "payment";
          $$renderer3.push(`<div class="flex flex-col items-center bg-background-light dark:bg-background-dark px-4 flex-1"><div${attr_class(`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-colors duration-300 ${stringify(isActive ? "border-primary bg-primary text-white" : "border-slate-300 text-slate-500 dark:border-slate-600 bg-white dark:bg-surface-dark")}`)}>${escape_html(i + 1)}</div> <span${attr_class(`mt-2 text-sm font-medium uppercase ${stringify(isActive ? "text-primary" : "text-slate-500 dark:text-slate-400")}`)}>${escape_html(s)}</span></div>`);
        }
        $$renderer3.push(`<!--]--></div></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2">`);
        {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="space-y-6"><div class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Choose Delivery Location</h2> <div class="h-[400px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">`);
          MapPicker($$renderer3, {
            initialLocation: {},
            onLocationSelect: handleLocationSelect
          });
          $$renderer3.push(`<!----></div> <div class="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 flex items-start gap-2"><span class="material-symbols-outlined text-blue-600 dark:text-blue-400 text-[20px]">info</span> <p class="text-sm text-blue-700 dark:text-blue-300">Delivery fee is calculated based on
                                        distance from our warehouse in Nairobi.</p></div></div> <div class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-6">Delivery Details</h2> <form class="space-y-5">`);
          FloatingLabelInput($$renderer3, {
            label: "Place Name",
            placeholder: "e.g. Westlands Center",
            required: true,
            get value() {
              return shippingInfo.name;
            },
            set value($$value) {
              shippingInfo.name = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          FloatingLabelInput($$renderer3, {
            label: "Road / Street",
            placeholder: "e.g. Waiyaki Way",
            required: true,
            get value() {
              return shippingInfo.road;
            },
            set value($$value) {
              shippingInfo.road = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> <div class="grid grid-cols-2 gap-4">`);
          FloatingLabelInput($$renderer3, {
            label: "House / Building",
            placeholder: "No. 4B",
            get value() {
              return shippingInfo.house;
            },
            set value($$value) {
              shippingInfo.house = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          FloatingLabelInput($$renderer3, {
            label: "Apartment Unit",
            placeholder: "Flr 2",
            get value() {
              return shippingInfo.apt;
            },
            set value($$value) {
              shippingInfo.apt = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----></div> `);
          FloatingLabelInput($$renderer3, {
            label: "Landmark (Optional)",
            placeholder: "e.g. Near the Shell Station",
            get value() {
              return shippingInfo.landmark;
            },
            set value($$value) {
              shippingInfo.landmark = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> <div class="grid grid-cols-2 gap-4">`);
          FloatingLabelInput($$renderer3, {
            label: "Email Address",
            type: "email",
            required: true,
            get value() {
              return shippingInfo.email;
            },
            set value($$value) {
              shippingInfo.email = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          FloatingLabelInput($$renderer3, {
            label: "Phone Number",
            type: "tel",
            placeholder: "+254 712 345 678",
            required: true,
            get value() {
              return shippingInfo.phone;
            },
            set value($$value) {
              shippingInfo.phone = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----></div> <div class="flex justify-end pt-4"><button type="submit" class="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95">Continue to Payment</button></div></form></div></div>`);
        }
        $$renderer3.push(`<!--]--></div> <div class="lg:col-span-1"><div class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 sticky top-24"><h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Order Summary</h3> <div class="space-y-3 mb-6 max-h-64 overflow-y-auto"><!--[-->`);
        const each_array_2 = ensure_array_like(store_get($$store_subs ??= {}, "$cart", cart));
        for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
          let item = each_array_2[$$index_2];
          $$renderer3.push(`<div class="flex gap-3"><div class="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden shrink-0"><img${attr("src", item.image)}${attr("alt", item.name)} class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-slate-900 dark:text-white line-clamp-2">${escape_html(item.name)}</div> <div class="text-xs text-slate-500">Qty: ${escape_html(item.quantity)}</div></div> <div class="text-sm font-bold text-slate-900 dark:text-white">${escape_html(formatMoney(item.price * item.quantity))}</div></div>`);
        }
        $$renderer3.push(`<!--]--></div> <div class="space-y-3 py-4 border-t border-slate-200 dark:border-slate-700"><div class="flex justify-between text-sm"><span class="text-slate-600 dark:text-slate-400">Subtotal</span> <span class="font-medium text-slate-900 dark:text-white">${escape_html(formatMoney(store_get($$store_subs ??= {}, "$cartTotal", cartTotal)))}</span></div> <div class="flex justify-between text-sm"><span class="text-slate-600 dark:text-slate-400">Delivery Fee</span> <span class="font-medium text-slate-900 dark:text-white">${escape_html(formatMoney(deliveryFee))}</span></div></div> <div class="flex justify-between pt-4 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-lg text-slate-900 dark:text-white">Total</span> <span class="font-bold text-xl text-primary">${escape_html(formatMoney(store_get($$store_subs ??= {}, "$cartTotal", cartTotal) + deliveryFee))}</span></div></div></div></div>`);
      }
      $$renderer3.push(`<!--]--></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function CheckoutPage($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let step = "shipping";
    let shippingInfo = {
      name: "",
      email: "",
      road: "",
      house: "",
      apt: "",
      landmark: "",
      phone: "",
      lat: -1.286389,
      lng: 36.817223,
      address: ""
    };
    let deliveryFee = 860;
    function formatMoney(amount) {
      return new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES" }).format(amount);
    }
    function handleLocationSelect(lat, lng, address) {
      shippingInfo.lat = lat;
      shippingInfo.lng = lng;
      shippingInfo.address = address;
      const defaultLat = -1.286389;
      const defaultLng = 36.817223;
      const distance = Math.sqrt(Math.pow(lat - defaultLat, 2) + Math.pow(lng - defaultLng, 2));
      deliveryFee = Math.round(500 + distance * 1e3);
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="min-h-screen bg-background-light dark:bg-background-dark py-12 px-6 lg:px-8"><div class="max-w-7xl mx-auto">`);
      {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<div class="mb-12"><div class="flex items-center justify-center max-w-2xl mx-auto relative"><div class="absolute left-0 top-1/2 w-full h-1 bg-slate-200 dark:bg-slate-700 -z-10"></div> <!--[-->`);
        const each_array = ensure_array_like(["shipping", "payment"]);
        for (let i = 0, $$length = each_array.length; i < $$length; i++) {
          let s = each_array[i];
          const isActive = step === s || step === "payment";
          $$renderer3.push(`<div class="flex flex-col items-center bg-background-light dark:bg-background-dark px-4 flex-1"><div${attr_class(`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-colors duration-300 ${stringify(isActive ? "border-primary bg-primary text-white" : "border-slate-300 text-slate-500 dark:border-slate-600 bg-white dark:bg-surface-dark")}`)}>${escape_html(i + 1)}</div> <span${attr_class(`mt-2 text-sm font-medium uppercase ${stringify(isActive ? "text-primary" : "text-slate-500 dark:text-slate-400")}`)}>${escape_html(s)}</span></div>`);
        }
        $$renderer3.push(`<!--]--></div></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="lg:col-span-2">`);
        {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<div class="space-y-6"><div class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Choose Delivery Location</h2> <div class="h-[400px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">`);
          MapPicker($$renderer3, {
            initialLocation: {},
            onLocationSelect: handleLocationSelect
          });
          $$renderer3.push(`<!----></div> <div class="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 flex items-start gap-2"><span class="material-symbols-outlined text-blue-600 dark:text-blue-400 text-[20px]">info</span> <p class="text-sm text-blue-700 dark:text-blue-300">Delivery fee is calculated based on
                                        distance from our warehouse in Nairobi.</p></div></div> <div class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"><h2 class="text-xl font-bold text-slate-900 dark:text-white mb-6">Delivery Details</h2> <form class="space-y-5">`);
          FloatingLabelInput($$renderer3, {
            label: "Place Name",
            placeholder: "e.g. Westlands Center",
            required: true,
            get value() {
              return shippingInfo.name;
            },
            set value($$value) {
              shippingInfo.name = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          FloatingLabelInput($$renderer3, {
            label: "Road / Street",
            placeholder: "e.g. Waiyaki Way",
            required: true,
            get value() {
              return shippingInfo.road;
            },
            set value($$value) {
              shippingInfo.road = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> <div class="grid grid-cols-2 gap-4">`);
          FloatingLabelInput($$renderer3, {
            label: "House / Building",
            placeholder: "No. 4B",
            get value() {
              return shippingInfo.house;
            },
            set value($$value) {
              shippingInfo.house = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          FloatingLabelInput($$renderer3, {
            label: "Apartment Unit",
            placeholder: "Flr 2",
            get value() {
              return shippingInfo.apt;
            },
            set value($$value) {
              shippingInfo.apt = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----></div> `);
          FloatingLabelInput($$renderer3, {
            label: "Landmark (Optional)",
            placeholder: "e.g. Near the Shell Station",
            get value() {
              return shippingInfo.landmark;
            },
            set value($$value) {
              shippingInfo.landmark = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> <div class="grid grid-cols-2 gap-4">`);
          FloatingLabelInput($$renderer3, {
            label: "Email Address",
            type: "email",
            required: true,
            get value() {
              return shippingInfo.email;
            },
            set value($$value) {
              shippingInfo.email = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          FloatingLabelInput($$renderer3, {
            label: "Phone Number",
            type: "tel",
            placeholder: "+254 712 345 678",
            required: true,
            get value() {
              return shippingInfo.phone;
            },
            set value($$value) {
              shippingInfo.phone = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----></div> <div class="flex justify-end pt-4"><button type="submit" class="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95">Continue to Payment</button></div></form></div></div>`);
        }
        $$renderer3.push(`<!--]--></div> <div class="lg:col-span-1"><div class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 sticky top-24"><h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Order Summary</h3> <div class="space-y-3 mb-6 max-h-64 overflow-y-auto"><!--[-->`);
        const each_array_2 = ensure_array_like(store_get($$store_subs ??= {}, "$cart", cart));
        for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
          let item = each_array_2[$$index_2];
          $$renderer3.push(`<div class="flex gap-3"><div class="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden shrink-0"><img${attr("src", item.image)}${attr("alt", item.name)} class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-slate-900 dark:text-white line-clamp-2">${escape_html(item.name)}</div> <div class="text-xs text-slate-500">Qty: ${escape_html(item.quantity)}</div></div> <div class="text-sm font-bold text-slate-900 dark:text-white">${escape_html(formatMoney(item.price * item.quantity))}</div></div>`);
        }
        $$renderer3.push(`<!--]--></div> <div class="space-y-3 py-4 border-t border-slate-200 dark:border-slate-700"><div class="flex justify-between text-sm"><span class="text-slate-600 dark:text-slate-400">Subtotal</span> <span class="font-medium text-slate-900 dark:text-white">${escape_html(formatMoney(store_get($$store_subs ??= {}, "$cartTotal", cartTotal)))}</span></div> <div class="flex justify-between text-sm"><span class="text-slate-600 dark:text-slate-400">Delivery Fee</span> <span class="font-medium text-slate-900 dark:text-white">${escape_html(formatMoney(deliveryFee))}</span></div></div> <div class="flex justify-between pt-4 border-t border-slate-200 dark:border-slate-700"><span class="font-bold text-lg text-slate-900 dark:text-white">Total</span> <span class="font-bold text-xl text-primary">${escape_html(formatMoney(store_get($$store_subs ??= {}, "$cartTotal", cartTotal) + deliveryFee))}</span></div></div></div></div>`);
      }
      $$renderer3.push(`<!--]--></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  var $$store_subs;
  const components = {
    mobile: CheckoutPage$2,
    tablet: CheckoutPage$1,
    desktop: CheckoutPage
  };
  const CurrentComponent = components[store_get($$store_subs ??= {}, "$device", device)];
  head("jbcej5", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Checkout | Elora Tech</title>`);
    });
  });
  $$renderer.push(`<!---->`);
  CurrentComponent($$renderer, {});
  $$renderer.push(`<!---->`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
export {
  _page as default
};
