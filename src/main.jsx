import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateView from "./routes/CreateView.jsx"
import SideNav from './routes/SideNav.jsx';
import Gallery from './routes/Gallery.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SideNav />}>
        <Route index={true} element={<App />} />
        <Route index={false} path="/create" element={<CreateView />} />
        <Route index={false} path="/gallery" element={<Gallery />} />
        <Route path="*" element={
          <div>
            <p className="message">There's nothing here!</p>
          </div>
        }
        />
      </Route>
    </Routes>
  </BrowserRouter>
)
