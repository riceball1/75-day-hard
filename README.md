# 75-day-hard

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Firebase Guide

- `firebase deploy --only hosting:hard-challenge`


## Run Storybook 
- `yarn storybook`

## Process for Development:
1. Commit Changes
2. `yarn build` - creates a production build
3. `git push origin main` - push changes to repo
4. `firebase deploy` - deploys changes to firebase site https://hard-challenge.web.app/