import { useEffect } from "react";

interface ServiceWorkerMessage {
  type: string;
  payload?: string;
}

export function useServiceWorker(): void {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      let refreshing = false;

      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration: ServiceWorkerRegistration) => {
          console.log(
            "Service Worker registered successfully:",
            registration.scope,
          );

          const sendProxyUrl = (worker: ServiceWorker) => {
            worker.postMessage({
              type: "SET_PROXY_URL",
              payload: process.env.NEXT_PUBLIC_PROXY_URL,
            } as ServiceWorkerMessage);
          };

          if (registration.active) {
            sendProxyUrl(registration.active);
          }

          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (newWorker.state === "activated") {
                  sendProxyUrl(newWorker);
                }
              });
            }
          });
        })
        .catch((error: Error) => {
          console.error("Service Worker registration failed:", error);
        });

      // Handle updates without forcing reload
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!refreshing) {
          refreshing = true;
          console.log(
            "New service worker activated. Reload the page to use it.",
          );
          // Optionally, you could show a user-friendly notification here
          // to inform the user that a reload is recommended
        }
      });
    }
  }, []);
}
