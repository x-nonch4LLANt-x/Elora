export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["hdmi-cable.png","logo.png","mini-projector.png","outdoor-projector.png","projector-screen.png","robots.txt","smart-projector.png","tripod-stand.png"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.YAeKyg_A.js",app:"_app/immutable/entry/app.BBBeo8W1.js",imports:["_app/immutable/entry/start.YAeKyg_A.js","_app/immutable/chunks/Bk70sHby.js","_app/immutable/chunks/D97IuHMQ.js","_app/immutable/chunks/B3VlpfkE.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/Oh7xaASr.js","_app/immutable/chunks/B17Q6ahh.js","_app/immutable/chunks/DdaHFDoq.js","_app/immutable/entry/app.BBBeo8W1.js","_app/immutable/chunks/D97IuHMQ.js","_app/immutable/chunks/p3BVkhEL.js","_app/immutable/chunks/DdaHFDoq.js","_app/immutable/chunks/BnfQKSU9.js","_app/immutable/chunks/CPfwhYki.js","_app/immutable/chunks/B3VlpfkE.js","_app/immutable/chunks/C8Gg-cER.js","_app/immutable/chunks/CLyLYJAi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/accessories",
				pattern: /^\/accessories\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/cart",
				pattern: /^\/cart\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/catalog",
				pattern: /^\/catalog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/checkout",
				pattern: /^\/checkout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/products/[id]",
				pattern: /^\/products\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/wishlist",
				pattern: /^\/wishlist\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
