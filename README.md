# Testing New Things With Nextjs

## Features

- Parallel Route

  - More on [Nextjs Parallel Route](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)

- Standalone Build

  - [Nextjs Standalone Build Doc](https://nextjs.org/docs/app/api-reference/config/next-config-js/output#automatically-copying-traced-files)

  - In `next.config.ts` add `output: "standalone"`

  - ___For this project just add `BUILDMODE = "standalone"` in `env.local`___

  - Run `pnpm build`

  - Run the Commands in bash/powershell where `cp` command for copy available

  ```bash
  cp -r public .next/standalone/  
  cp -r .next/static .next/standalone/.next/
  ```

  - Start the server `node .\.next\standalone\server.js`

  > NB: If there is symlinks in `node_modules` have to add `.npmrc` in root directory
  > and add `node-linker=hoisted`
