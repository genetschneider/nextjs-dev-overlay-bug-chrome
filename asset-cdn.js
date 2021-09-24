const http = require('http');
const httpProxy = require('http-proxy');
// nextjs app
const client = 'http://localhost:3000';
const proxy = httpProxy.createProxyServer({
	target: client,
	ws: true,
	xfwd: true,
});

proxy.on('proxyReq', (_, req) => {
	console.log('Proxying static asset: ', req.url);
});

http.createServer((req, res) => proxy.web(req, res)).listen(7777);