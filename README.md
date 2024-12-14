# Testing New Things With Nextjs

## Features

- Parallel Route

  - More on [Nextjs Parallel Route](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
  
  - In `/parallel` route dev mode for simulating delay functions
  
  - Suspense can be added by creating `loading.tsx` in any route
  
  - *OR* add `<Suspense>` component with custom loading in `fallback` attrib
  
  > Add `default.tsx` to each section to avoid refresh error

- Standalone Build

  - [***Docs:*** Nextjs Standalone Build](https://nextjs.org/docs/app/api-reference/config/next-config-js/output#automatically-copying-traced-files)

  - In `next.config.ts` add `output: "standalone"`

  - ***For this project just add `BUILDMODE = "standalone"` in `env.local`***

  - Run `pnpm build`

  - Run the Commands in bash/powershell where `cp` command for copy available

  ```bash
  cp -r public .next/standalone/  
  cp -r .next/static .next/standalone/.next/
  ```

  - Start the server `node .\.next\standalone\server.js`

  > NB: If there is symlinks in `node_modules` have to add `.npmrc` in root directory
  > and add `node-linker=hoisted`

- `rewrites` Map incoming request path

  - [***Docs:*** `rewrites` in next.config.ts](https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites)

  - Allows masking default url to another url path

  - For this project, `/landing.html` masked to `/landing`

- Conditional prefetch  

  - [***Docs***: `router.prefetch(...)`](https://nextjs.org/docs/app/building-your-application/caching#routerprefetch)

  - Route `/parallel/subsection`

  - Clicking button 3rd time will prefetch `/dummy`

  - And that route will directly load from cache
