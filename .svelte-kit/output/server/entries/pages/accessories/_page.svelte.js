import { a as store_get, u as unsubscribe_stores } from "../../../chunks/index2.js";
import { C as CatalogPage, a as CatalogPage$1 } from "../../../chunks/CatalogPage.js";
import { d as device } from "../../../chunks/device.js";
import "../../../chunks/products.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const Components = {
      mobile: CatalogPage$1,
      tablet: CatalogPage,
      desktop: CatalogPage
    };
    let ActiveComponent = Components[store_get($$store_subs ??= {}, "$device", device)];
    $$renderer2.push(`<!---->`);
    ActiveComponent($$renderer2, {});
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
