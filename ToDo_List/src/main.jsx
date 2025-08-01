import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App_renamed from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* with default exports we can change the import name of the component. */}
    <App_renamed />
  </StrictMode>,
)
