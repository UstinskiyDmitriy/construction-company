import { createRoot } from 'react-dom/client'
import App from './components/app/App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <HashRouter basename='/'>
  <Provider store={store}>
    <App />
  </Provider>
  </HashRouter>
)
