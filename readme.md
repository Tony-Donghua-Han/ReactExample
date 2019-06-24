[markdownlink PI]: https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint
[icon PI]: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons
[comment PI]: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
[gitlens PI]: https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens
[markdownhelp PI]: https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one

# **React Project**

## Feature

- Markdown - Readme file, syntax highlight and validation
- Git and nm package

# Quick Setup

Here we provide a quick list of require plugins and it's setting. Check individual sections to see how each Plugin is used. See Recommonded Plugins for plugins that are nice to have.

`! Install all of the following plugin, you only have to do them once in VS Code. !`

## markdownlint - [Official Plugin Page][markdownlink PI]

`Feature: Lint feature for .md documentation files`

# Recommonded Plugins

## vscode-icons - [Official Plugin Page][icon PI]

`Feature: Let's be honest, the default set of icons for all file sucks, we need better different icons for our files`

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
        - webpack.common.js      # common configuration file, shared by both dev and prod
        - webpack.dev.js         # development configuration file for local development
        - webpack.prod.js        # production configuration file for deployed product
    npm-package:
        - webpack                # Base package
        - webpack-cli            # Base requirement package
        - html-webpack-plugin    # Generate an html with javascript embedded
        - handlebars             # HTML template processor, check at https://handlebarsjs.com/
        - handlebars-loader      # Handlebars integration with webpack, support .hbs files
        - clean-webpack-plugin   # Removes old build folder before creating new ones
        - webpack-dev-server     # Officla webpack development server with hot reloading
        - webpack-merge          # Merges webpack configuration file together
```

# 4. Typescript

```yaml
    setting-file:
        - tsconfig               # Typescript config file
    npm-packages:
        - source-map-loader      # Integrate source map with TypeScript code
        - ts-loader              # Webpack integration
        - typescript             # Base package required to run tsc for compile
```

# 5. React

```yaml
    # IMPORTANT NOTE #
    # React and React dom are included as script tag in the handlebar index.hbs files
    # these two libraries are not included as dependency to the project, we only
    # include their type files so their references can be used in code

    npm-packages:
        - "@types/react"
        - "@types/react-dom"
```
