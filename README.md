# oneAudi - oneaudi-feature-app-release-exmaple

## Description

Add a description for your Feature App.

#### Links
[Demo] Add the link to your dev deployment, e.g. `https://oneaudi-feature-app-release-exmaple.cdn.dev.one.audi.com/main/index.html?spaceId=8l1afi0yxljy&environment=master&contentId=2h72eEIHOZNAceUPCADA05)` \
[Test reports] Add the link to your private [test report page](https://github.com/volkswagen-onehub/oneaudi-feature-app-release-exmaple/settings/pages). \
[Content Model] Add the link to your Feature App Content Model.

## Prerequisites
* >= Node 14

## Available scripts
| Command                 | Purpose                                                                                                                                                                                                                     |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn serve`            | Serves your app for local development on `http://localhost:3000`.<br> Your app will automatically reload in the browser if you make any changes.                                                                            |
| `yarn build`            | Builds your app via `build:all` step. Your `dist` folder is cleaned before the build. Necessary api files are copied to the `dist` folder after the build.                                                                  |
| `yarn build:all`        | Combines `build:fh`, `build:modern` and `build:demo` steps.                                                                                                                                                                 |
| `yarn build:demo`       | Builds a demo integrator.                                                                                                                                                                                                   |
| `yarn build:fh`         | Builds your code as a FeatureHub Feature App.                                                                                                                                                                               |
| `yarn build:modern`     | Builds your code as a oneAudiOS Feature App.                                                                                                                                                                                |
| `yarn ci:lighthouse`    | Runs the Lighthouse CI. Lighthouse CI is a suite of tools for using Lighthouse during continuous integration. The generated lighthouse report can be found in the `.lighthouseci` folder in the root level of your project. |
| `yarn lighthouse`       | This script also generates a new lighthouse report. The report will be opened in your default browser afterwards.                                                                                                           |
| `yarn lighthouse:serve` | Runs lighthouse in watch mode under `http://localhost:4012`.                                                                                                                                                                |
| `yarn format`           | Runs prettier which reformats all your files to match the specified prettier rules in `.prettierrc.js`.                                                                                                                     |
| `yarn format:check`     | Checks if your files are matching the specified prettier rules in `.prettierrc.js`.                                                                                                                                         |
| `yarn lint`             | Executes static code analysis with _eslint_ using config `.eslintrc.js`.                                                                                                                                                    |
| `yarn lint:fix`         | Fixes findings of static code analysis with _eslint_.                                                                                                                                                                       |
| `yarn localLambda:run`  | AWS SAM is started to serve your lambda functions locally under `http://localhost:8000`. You can test these functions via Postman, Curl or any other tool that allows you to trigger endpoints.                             |
| `yarn registerApp`      | Registers your app in the App Store, if it wasn't already registered via the CLI wizard.                                                                                                                                    |
| `yarn test`             | Runs your unit tests via jest and gives you an overview over your test coverage.                                                                                                                                            |
| `yarn test:dev`         | Runs your unit tests via jest in watch mode. This can be used to develop new tests.                                                                                                                                         |
| `yarn test:e2e`         | This will execute `test:e2e-clean`, `test:e2e-run` and `test:e2e-report`.                                                                                                                                                   |
| `yarn test:e2e-clean`   | Cleans the _mochawesome-report_ folder.                                                                                                                                                                                     |
| `yarn test:e2e-run`     | Runs your End-to-End tests via cypress.
| `yarn test:e2e-open`    | Opens Cypress with tests loaded.                                                                                                                                                                                   |
| `yarn test:e2e-report`  | Merges all existing reports in *mochawesome-report* folder. This will generate a new *output.json* file in the *mochawesome-report* folder.                                                                                 |
| `yarn deploy`           | Deploys your app to the configured AWS infrastructure via CDK. See the section _Backend-for-frontend_ of this documentation for further information.                                                                        |

_Note:_ If you chose npm as your package manager (instead of yarn), execute those commands using `npm run <command>`, e.g. `npm run serve`.

## Release
Your project use [semantic-release](https://github.com/semantic-release/semantic-release). Create a "release" branch as default distribution channel and make Pull Request to this branch, when the Pull Request is merged the semantic release process will generate a new version and execute the pipelines involved with your release process.

## Browser compatibility matrix

For a list of supported operating systems and browser see: [oneaudi-os/README](https://github.com/volkswagen-onehub/oneaudi-os/blob/master/docs/feature_app_compability.md)
