const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://192.168.0.227:9020',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
        })
    );
};