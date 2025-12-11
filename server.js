// server.js
import express from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './src/App.vue'

const server = express()

server.get('*', async (req, res) => {
  const app = createSSRApp(App)
  const html = await renderToString(app)
  
  res.send(`
<!DOCTYPE html>
<html>
  <head>
    <title>SSR App</title>
  </head>
  <body>
    <div id="app">${html}</div>
    <script type="module" src="/src/entry-client.js"></script>
  </body>
</html>
  `)
})

server.listen(3000)
