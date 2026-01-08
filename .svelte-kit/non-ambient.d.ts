
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/accessories" | "/cart" | "/catalog" | "/checkout" | "/contact" | "/dashboard" | "/products" | "/products/[id]" | "/reviews" | "/reviews/[productId]" | "/settings" | "/settings/orders" | "/settings/profile" | "/wishlist";
		RouteParams(): {
			"/products/[id]": { id: string };
			"/reviews/[productId]": { productId: string }
		};
		LayoutParams(): {
			"/": { id?: string; productId?: string };
			"/about": Record<string, never>;
			"/accessories": Record<string, never>;
			"/cart": Record<string, never>;
			"/catalog": Record<string, never>;
			"/checkout": Record<string, never>;
			"/contact": Record<string, never>;
			"/dashboard": Record<string, never>;
			"/products": { id?: string };
			"/products/[id]": { id: string };
			"/reviews": { productId?: string };
			"/reviews/[productId]": { productId: string };
			"/settings": Record<string, never>;
			"/settings/orders": Record<string, never>;
			"/settings/profile": Record<string, never>;
			"/wishlist": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/accessories" | "/accessories/" | "/cart" | "/cart/" | "/catalog" | "/catalog/" | "/checkout" | "/checkout/" | "/contact" | "/contact/" | "/dashboard" | "/dashboard/" | "/products" | "/products/" | `/products/${string}` & {} | `/products/${string}/` & {} | "/reviews" | "/reviews/" | `/reviews/${string}` & {} | `/reviews/${string}/` & {} | "/settings" | "/settings/" | "/settings/orders" | "/settings/orders/" | "/settings/profile" | "/settings/profile/" | "/wishlist" | "/wishlist/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/hdmi-cable.png" | "/logo.png" | "/manifest.json" | "/mini-projector.png" | "/outdoor-projector.png" | "/projector-screen.png" | "/robots.txt" | "/smart-projector.png" | "/tripod-stand.png" | string & {};
	}
}