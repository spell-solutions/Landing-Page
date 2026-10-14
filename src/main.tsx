import './index.css'
import { initApp } from './app-native'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element was not found')
}

initApp(root)
