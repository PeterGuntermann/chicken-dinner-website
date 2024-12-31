# Chicken Dinner Website

## Development setup

- Install Node.js and npm.
- Check out this repository and run `npm install`.
- Start development server with `npm run dev`.
- Make changes and commit/push to branch `main` or create a feature branch + merge request alternatively.

## Prod deployment

- Run `npm run generate`.
- Upload contents from `.output/public` to webserver folder `staging`.
- Go to [staging.chickendinnerband.de](http://staging.chickendinnerband.de) and check if everything works as intended.
- If yes, remove old files in `prod` and move new files from `staging/*` to `prod/*`.

## Links

- https://github.com/nuxt-ui-pro/landing
- https://content.nuxt.com/get-started/installation
- https://image.nuxt.com/get-started/installation
- https://fonts.nuxt.com/get-started/installation
- https://nuxt.com/modules/use-bootstrap
