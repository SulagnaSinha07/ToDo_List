import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  App_renamed from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* with default exports we can change the import name of the component. */}
    <App_renamed />
  </StrictMode>,
)
