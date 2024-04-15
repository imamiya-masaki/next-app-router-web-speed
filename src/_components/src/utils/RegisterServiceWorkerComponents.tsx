'use client'

import { useEffect } from "react"
import { registerServiceWorker } from "./registerServiceWorker"


export const RegisterServiceWorker:React.FC = function () {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            registerServiceWorker().then(() => {
              console.log('Service Worker registered and activated.');
            }).catch((error) => {
              console.error('Service Worker registration failed:', error);
            });
          }
    },[])
    return (<></>)
}