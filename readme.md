[ESLint PI]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[JEST PI]: https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest
[markdownlink PI]: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
[chromeDebug PI]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome#review-details
[icon PI]: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons
[comment PI]: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
[gitlens PI]: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
[markdownhelp PI]: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one
[SASS PI]: https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented#review-details

# **React Project**

## Feature

- React - external library support
- Typescript - Compile and type verification
- Eslint - linting and autofixing
- Jest - unit test and snapshot test
- VS Code Debug - Chrome Debugger, Jest Unit Test Debugger
- Storybook - Isolated UI Component Development
- Webpack - local and development server
  - sass and css - dynamic style loading
  - Dynamic HTML - html generation code
  - DevServer - development server for hot-reloading
- Markdown - Readme file, syntax highlight and validation
- Git and npm package

## ToDo

- [ ] Deploy to aws
- [ ] Auto deployment to aws
- [ ] Auto test before deployment
- [ ] VS Code debug tool for prod

# Quick Setup

Here we provide a quick list of require plugins and it's setting. Check individual sections to see how each Plugin is used. See Recommonded Plugins for plugins that are nice to have.

`! Install all of the following plugin, you only have to do them once in VS Code. !`

## ESLint - [Official Plugin Page][ESLint PI]

`Feature: Real time linting, auto format on save, keep the code format consistent`

1. Put the following Setting into setting.json for VS COde to recognize typescript code and perform autofix on save

    ```js
    {
        "eslint.autoFixOnSave": true,
        "eslint.validate": [
            { "language": "typescript", "autoFix": true },
            { "language": "typescriptreact", "autoFix": true }
        ],
    }
    ```

2. Disable Auto format on save in VS Code setting, so that code doesn't get formatted twice

    ```js
    {
        "editor.formatOnSave": false
    }
    ```

## Jest - [Official Plugin Page][JEST PI]

`Feature: Automatic Test Run, Failure Highlight, File Coverage Highlight`

## Debugger for Chrome - [Official Plugin Page][chromeDebug PI]

`Feature: Lint feature for .md documentation files`

## markdownlint - [Official Plugin Page][markdownlink PI]

`Feature: Lint feature for .md documentation files`

## Sass - [Official Plugin Page][SASS PI]

`Feature: Syntax hightlight for SASS files`

# Recommonded Plugins

## vscode-icons - [Official Plugin Page][icon PI]

`Feature: Let's be honest, we need better icons for our files`

## Better Comments - [Official Plugin Page][comment PI]

`Feature: Highlight different type of comment used in this project`

## GitLens - [Official Plugin Page][gitlens PI]

`Feature: Perform Git Blame to find changes relates to commit`

## Markdown All in One - [Official Plugin Page][markdownhelp PI]

`Feature: Features that makes creating Markdown document easier`

# Dependencies

This section contains all related dev-ops tools as well as it's related setting files and npm packages. It should be used when someone want to update setting for specific tool or wants to add/remove dev-ops tools from this project.

## 1. Git Repository

```yaml
    setting-files:
        - .gitignore  # list of file ignored by git
```

## 2. NPM

```yaml
    setting-files:
        - package.json       # list of npm script to run and package dependencies
        - package-lock.json  # lock file for npm packages, read on npm for more detail
```

## 3. Webpack

```yaml
    setting-files:
        - webpack.common.js       # common configuration file, shared by both dev and prod
        - webpack.dev.js          # development configuration file for local development
        - webpack.prod.js         # production configuration file for deployed product
    npm-package:
        # Base Webpack Packages
        - webpack                 # Base package
        - webpack-cli             # Base requirement package
        # HTML Generation
        - html-webpack-plugin     # Generate an html with javascript embedded
        - handlebars              # HTML template processor, check at https://handlebarsjs.com/
        - handlebars-loader       # Handlebars integration with webpack, support .hbs files
        # Multi-webpack configuration and devserver
        - webpack-dev-server      # Officla webpack development server with hot reloading
        - webpack-merge           # Merges webpack configuration file together
        - clean-webpack-plugin    # Removes old build folder before creating new ones
        # Sass and Css support
        - css-loader              # Css loader
        - mini-css-extract-plugin # Extract Css into separate css files
        - node-sass               # node cass compiler used by sass loader
        - sass-loader             # Sass loader used for webpack
```

## 4. Typescript

```yaml
    setting-file:
        - tsconfig                   # Typescript config file
    npm-packages:
        - source-map-loader          # Integrate source map with TypeScript code
        - awesome-typescript-loader  # Webpack integration
        - typescript                 # Base package required to run tsc for compile
```

## 5. React

```yaml
    # !!IMPORTANT!! #
    # React and React dom are included as script tag in the handlebar index.hbs files
    # these two libraries are not included as dependency to the project

    npm-packages:
        - "@types/react"
        - "@types/react-dom"
```

## 6. Eslint

```yaml
    setting-files:
        - eslintrc.yaml                     # Eslint setting, read the file for more detail
        - .prettierrc.js                    # Prettier settings for linting and auto formating
    plugin:
        - ESLint                            # Eslint plugin, required
    npm-packages:
        - eslint                             # Base package
        - eslint-config-airbnb               # Airbnb recommonded linting for js and react
        - eslint-plugin-import               # import based rules, comes with airbnb
        - eslint-plugin-react                # React based rules, comes with airbnb
        - eslint-plugin-jsx-a11y             # Rules for html accessibility
        # Typescript based plugins
        - "@typescript-eslint/eslint-plugin" # Typescript rules for eslint
        - "@typescript-eslint/parser"        # Eslint parser for typescript
        - eslint-import-resolver-typescript  # Resolver for typescript and import
        # Prettier Settings
        - eslint-config-prettier             # Prettier Config to resolve package conflict
        - eslint-plugin-prettier             # Prettier plugin for eslint
        - prettier                           # Actual prettierrule library
        # Javascript Promise Rule Plugins
        - eslint-plugin-promise              # Recommonded Promise linting rules
```

## 7. Jest

```yaml
    setting-files:
        - jest.config.js               # Jest test settings

    npm-packages:
        - jest                         # Default package framework
        - "@types/jest"
        - ts-jest                      # Jest typescript support
        # Enzyme related packages
        - enzyme
        - enzyme-adapter-react-16      # React enzyme adapter
        - "@types/enzyme"
        - "@types/enzme-adapter-react-16"
        # ! Important ! #
        # We include React in dev-dependencies
        - react
        - react-dom
```

## 8. Storybook

```yaml
    setting-files:
        - .storybook/config.js         # Base Storybook configuration
        - .storybook/webpack.config.js # Storybook webpack config

    npm-packages:
        - "@storybook/react"           # Base package
        - "@types/storybook__react"    # Type for base package
        - "@babel/core"                # Storybook required dependency
        - "babel-loader"               # Storybook required dependency
        ## Css style loader
        - style-loader                 # Css style loader for storybook
        # ! Important ! #
        # We include React in dev-dependencies
        - react
        - react-dom

```
