/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-6cddc5b46adf9d769158.js"
  },
  {
    "url": "framework-43898561dafbdf32aefd.js"
  },
  {
    "url": "app-06f1f8d6efbf7f45de40.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-9423e06cb6889cf456aa.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f9103152185c81c8ff442c568d469d91"
  },
  {
    "url": "google-fonts/s/cormorantgaramond/v7/co3WmX5slCNuHLi8bLeY9MK7whWMhyjYrEPjuz-KzhM.woff2",
    "revision": "41fbea9e321bc22357715753d447afb8"
  },
  {
    "url": "google-fonts/s/cormorantgaramond/v7/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQAllfvg-I.woff2",
    "revision": "c4bcdcb79ad0aa3490ee08653557694b"
  },
  {
    "url": "google-fonts/s/cormorantgaramond/v7/co3YmX5slCNuHLi8bLeY9MK7whWMhyjQWlhfvg-I.woff2",
    "revision": "94473e4e2e1a288829625c2042ccd318"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "c355c8040c47a63bfb3360e4b7cb6553"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "a72eb73ec94b43c78ce1ae8a341bb538"
  },
  {
    "url": "manifest.json",
    "revision": "b773e901ef06ac93343dc05e67540787"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "873d19b7f66bdfb613658da7d2969499"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, workbox.strategies.cacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, workbox.strategies.networkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, workbox.strategies.staleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

const navigationRoute = new NavigationRoute(async ({ event }) => {
  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/architecture`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/architecture/app-06f1f8d6efbf7f45de40.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/architecture/offline-plugin-app-shell-fallback/index.html`
  return await caches.match(offlineShell)
})

workbox.routing.registerRoute(navigationRoute)

const messageApi = {
  setPathResources(event, { path, resources }) {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources(event) {
    event.waitUntil(idbKeyval.clear())
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi } = event.data
  if (gatsbyApi) messageApi[gatsbyApi](event, event.data)
})
