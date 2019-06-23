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
        - webpack.config.js      # Basic Webpack setting file
    npm-package:
        - webpack                # Base package
        - webpack-cli            # Base requirement package
        - html-webpack-plugin    # Generate an html with javascript embedded
```
