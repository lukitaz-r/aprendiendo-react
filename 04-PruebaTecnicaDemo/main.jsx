// Importamos createRoot
import { createRoot } from 'react-dom/client'
// Importamos el componente de la App
import App from './src/App'

// Creamos la raiz del proyecto
const root = createRoot(document.getElementById('root'))

// Renderizamos el componente
root.render(
  <App />
)
