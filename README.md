# Testing New Things With Nextjs

## Features

- Parallel Route

  - More on [Nextjs Parallel Route](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)

- Standalone Build

  - [Nextjs Standalone Build Doc](https://nextjs.org/docs/app/api-reference/config/next-config-js/output#automatically-copying-traced-files)

  - In `next.config.ts` add `output: "standalone"`

  - Run `pnpm build`

  - Run the Commands in bash/powershell

  ```bash
  mkdir build
  cp -r ./public ./build
  cp -r ./.next/standalone/* ./build
  cp -r ./.next/standalone/.next ./build
  cp -r ./.next/static ./build/.next
  ```

  - Start the server `node .\build\server.js`

  > NB: If there is symlinks in `node_modules` have to add `.npmrc` in root directory
  > and add `node-linker=hoisted`
