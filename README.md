# Retail Web App

A web app that allows customers to make payments, manage accounts, review transactions, manage budgets, and set saving goals.
Functional overview can be found at the Product Hub page — [Retail App](https://backbase.io/developers/documentation/retail-banking-usa/2023.06)

## Project structure

The project structure significantly changed comparing to the banking-schematics app.
There is no more schematics, a project generation approach and a page-model.

### Apps

An average app looks like that:

```
src/
├── app/
│   ├── auth/
│   ├── journeys/
│   ├── layout/
│   │   ├─ navigation-menu/
│   │   └─ layout.*.ts|html|scss
│   ├── routable-modal/
│   └── user-context/
│       app.*.component.ts|html|scss
│       app.*.module.ts
├── environment/
├── locale/
└── ...
```

The major parts are:

- `auth` - authentication related configuration, e.g. permission
- `journeys` - all bundle modules for used journeys. An inner structure may vary depending on an app, and it's mostly migrated from an approach used in schematics
- `layout` - module that defines an app layout. It uses an app specific `navigation menu` and a shared monorepo library for a _scope/region_.
- `routable-modal` - a module with configuration for a routable modal
- `user-context` - a module that defines a select-context page of an app

### Libs

At the root along with a standard `apps` now exists `libs` folder. It contains libs for specific scopes of apps and ones shared across all apps.
If an app has a folder with the same name, then it gives a basis for the app functionality, i.e. it's not an overwriting but an extension.
The `libs` folder follows naming convention provided by Nx. That means that prefixes as `feature-`, `ui-`, etc. gives the idea about a library type.

### Mock-server

Next to `apps` and `libs` folder at the root level also exists `mock-server` directory, which contains `ng-apimock` server to run locally and JSON with mocked data grouped inside `./mock-server/mocks/`.
To start it, run `npm run mock-server`. The server will start on `http://localhost:9999/`. To access the full list of available endpoints or to change response options navigate to `http://localhost:9999/dev-interface/#/mocks`, it will give access to a developer interface.
Example:

```bash
## Retail Universal
npm run mock-server
```

## Documentation

- [Nx Documentation](https://nx.dev/angular)
- [10-minute video showing all Nx features](https://nx.dev/getting-started/intro)
- [Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

### Contribution Guideline

When creating a PR:

> It's highly recommended NOT to update the version manually.
> Because it will be bumped automatically by the pipeline.
>
> But, if you have to bump the version manually:
>
> 1. Update the version in package.json file
> 2. set your git commit message as following: "... bump/0.0.2 ..."

#### Code formatting

When making changes to the codebase, make sure that your code is aligned with the code formatting rules. Run the following command to list files that contain code formatting issues:

```sh
npm run format:check
```

If the code is not aligned with the formatting rules, you may see the following output when running the command manually or in the logs of the repository workflows:

```log
Run npx nx format:check
apps/<banking-app>/src/styles.scss
apps/<banking-app>/src/themes/style.scss
apps/<banking-app>/src/themes/variables/_logo.scss
apps/<banking-app>/src/themes/variables/_typography.scss
Error: Process completed with exit code 1.
```

Run the following command to fix most of the code formatting issues:

```sh
npm run format
```

## Development Setup

### Accessing BaaS

By default, api request will be proxying to BaaS env:

- [proxy-ret-us-l.conf.js](./proxy-ret-us-l.conf.js)

You can alter the configuration to the one that suits your best. To do it change `target` to a required uri. For more information you can check [Angular docs](https://angular.io/guide/build#proxying-to-a-backend-server).

### Install NX Cli

```bash
npm i -g nx
```

## Getting Started

### Development server

Run `nx serve <app-name>` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Example:

```bash
## Retail Banking Universal
nx serve retail-universal
```

### Build

Run `nx build <app-name>` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Example:

```bash
## Retail Banking Universal
nx build retail-universal
```

### Build Docker Image

#### For a specific app

```bash
## Prerequisite: Build the app `nx build <app-name>`
## Example:
nx build retail-universal

## nx build-docker <app-name> --docker-registry=<your-docker-registry> --image-tag=<tag>
## Example:
nx build-docker retail-universal --docker-registry=harbor.backbase.eu/development/retail-web-app --image-tag=0.0.14
```

#### For the affected Apps

```bash
## Prerequisite: Build the affected project
npm run build:affected

## Build docker image
npm run build:docker
```

By default, it will use:

- docker registry: `harbor.backbase.eu/staging`
- Image name: `<app-name>`
- Image tag: `latest`

If you want to set your own docker registry and image tag, please set the following env vars before you run `npm run build:docker`:

```bash
## export CHANGE_DOCKER_REGISTRY=<your-docker-registry>
## Example:
export CHANGE_DOCKER_REGISTRY=harbor.backbase.eu/development/retail-web-app

## export CHANGE_IMAGE_TAG=<image.tag>
## Example:
export CHANGE_IMAGE_TAG=0.0.14
```

### Running unit tests

Run `nx test <app-name>` to execute the unit tests.

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

#### Prerequisite

- Update the [proxy.env.conf.js](proxy.env.conf.js) and [ret-ref-local.config.json](apps/retail-universal-e2e/config/ret-ref-local.config.json) file with Baas headers and environment details.
- Update the [environment.e2e.ts](apps/retail-universal/src/environments/environment.e2e.ts) with Identity URL and realms value.

Run `nx e2e <app-name>` to execute the end-to-end

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

### Generate an application

Run `nx g app my-new-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `nx g lib my-new-lib --directory=custom/directory` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@backbase/my-lib`.

### Code scaffolding

Run `nx g component my-new-component --project=my-new-app` to generate a new component.

## Important!

### If banking application is having locale

See `project.json`, set:

```
  ...
  "baseHref": "${BASE_HREF::-1}",
  ...
```

See `environment.<corresponding configuration file>.ts`. eg: `environment.prod.ts`, then set:

```
  ....
  localize: true,
  ....
```

### If banking application is NOT having locale

See `project.json`, set:

```
  ...
  "baseHref": "${BASE_HREF}"
  ...
```

## Mocking Data

It's only applicable for dev environment by setting up `enableMocks = true` in local storage.

#### CashFlow Journey Mock Data

In order to change or test some states in Cash Flow Journey, you need to pass some values to localStorage.

| Vars                                             | Description                                                     |
| ------------------------------------------------ | --------------------------------------------------------------- |
| localStorage.setItem("enableMocks", true);       | enable/disable mocks in application (disabled if set to false)  |
| localStorage.setItem('smeLinkedStatus', 'true'); | enable/disable accounting software linking flow                 |
| localStorage.setItem('forecastExist', 'true');   | enable/disable initial setup forecast flow                      |
| localStorage.setItem('dataFetched', 'true');     | enable/disable data fetching flow (showing data fetching sceen) |
