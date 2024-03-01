import React from 'react'

/**
 * 支持并发渲染
 * 减少卡顿
 * 更好的错误处理
 * 统一客户端和服务端渲染方式
 */
import { createRoot } from 'react-dom/client'
import './style/style.less'
import './style/index.less'

type Message = {
    title: string;
    body: string;
}

const msg: Message = {
    title: 'title',
    body: 'body'
}

const App = () => (
    <>
        <h1>{msg.title}</h1>
        <div>{msg.body}</div>
    </>
)

const root = createRoot(
    document.getElementById('root')
)

root.render(<App/>)

