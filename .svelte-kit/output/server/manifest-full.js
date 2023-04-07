export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.39f2da8a.js","imports":["_app/immutable/entry/start.39f2da8a.js","_app/immutable/chunks/index.019f7634.js","_app/immutable/chunks/singletons.2fe4f274.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.b8f3f75d.js","imports":["_app/immutable/entry/app.b8f3f75d.js","_app/immutable/chunks/index.019f7634.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
