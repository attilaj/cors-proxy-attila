const cors_proxy = require('cors-anywhere');

// Start CORS Anywhere server
cors_proxy.createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
  redirectSameOrigin: false,
}).listen(process.env.PORT || 8080, () => {
  console.log('CORS Anywhere proxy running on port 8080');
});
