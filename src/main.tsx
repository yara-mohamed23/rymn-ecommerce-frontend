// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import { AuthProvider } from "./context/AuthProvider";
// import React from 'react';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx"; // ملف الـ App العادي بتاعك
import { AuthProvider } from "./context/AuthProvider"; // 👈 السطر بتاعنا أهو
import { BrowserRouter } from "react-router-dom"; // 👈 تأكدي إن السطر ده موجود

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* 🎯 لفينا الـ AuthProvider حوالين الـ App كله من بره خالص أهو */}
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
