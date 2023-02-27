import React from 'react'
import ReactDOM from 'react-dom/client'
import Tweet from './components/Tweet'
import './components/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <div className="layot">
      <aside className="sidebar">
        sidebar
        <img src="" alt="Logo" />
        <nav></nav>
        <button>tweet</button>
      </aside>
      
      <div className="content"></div>
        content
    </div>

  </React.StrictMode>,
)
