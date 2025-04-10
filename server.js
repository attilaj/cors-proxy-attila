const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());

app.use('/proxy', createProxyMiddleware({
  target: '',
  changeOrigin: true,
  router: req => req.query.url,
  pathRewrite: () => '',
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`CORS Proxy Server running on port ${PORT}`);
});
