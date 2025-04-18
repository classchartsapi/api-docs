let PROXY_URL;

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SET_PROXY_URL") {
    PROXY_URL = event.data.payload;
  }
});

self.addEventListener("fetch", (event) => {
  if (!PROXY_URL) {
    return; // Don't intercept if PROXY_URL is not set
  }
  const url = new URL(event.request.url);
  if (url.hostname === "www.classcharts.com") {
    event.respondWith(handleRequest(event.request));
  }
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const proxyUrl = new URL(PROXY_URL);
  url.protocol = proxyUrl.protocol;
  url.hostname = proxyUrl.hostname;
  url.port = proxyUrl.port;

  const requestInit = {
    method: request.method,
    headers: new Headers(request.headers),
    mode: "cors",
    cache: request.cache,
    redirect: request.redirect,
    referrer: request.referrer,
    integrity: request.integrity,
  };

  if (["POST", "PUT", "PATCH", "DELETE"].includes(request.method)) {
    if (request.body) {
      requestInit.body = await request.clone().arrayBuffer();
    }
    requestInit.duplex = "half";
  }

  const modifiedRequest = new Request(url.toString(), requestInit);

  try {
    const response = await fetch(modifiedRequest);
    return response;
  } catch (error) {
    console.error("Proxy request failed:", error);
    return new Response("Proxy request failed", { status: 500 });
  }
}
