const express = require('express')

import my_createApp from '../app'
import { renderToString } from '@vue/server-renderer'

import { createMemoryHistory } from 'vue-router'
import createRouter from '../router'

import { createPinia } from 'pinia'

const server = express()
// 部署静态资源
server.use(express.static('build'))

server.get('/*', async (req, res) => {
  const app = my_createApp()

  // 路由
  // createMemoryHistory 创建一个基于内存的历史。该历史的主要目的是为了处理服务端渲染
  const router = createRouter(createMemoryHistory())
  app.use(router)
  await router.push(req.url || '/')
  await router.isReady()

  // pinia
  const pinia = createPinia()
  app.use(pinia)

  const html = await renderToString(app)
  res.send(
    `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <div id="app">
          ${html}
        </div>
        <script src="/client/client_bundle.js"></script>
      </body>
      </html>
    `
  )
})

server.listen(4396, () => {
  console.log('服务器启动')
})
