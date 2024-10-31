import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {DashBoard} from "./DashBoard.jsx"
import '@fontsource/roboto/400.css';

createRoot(document.getElementById('root')).render(
  <>
    <DashBoard></DashBoard>
  </>
)
