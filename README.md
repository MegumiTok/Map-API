# with Map API

メモ

```bash
rm -rf node_modules/ && yarn cache clean && yarn install
```

```bash
npx create-next-app --ts App
yarn dev
yarn build
yarn lint
```

## storybook の導入

`package.json`に下のように書いて yarn install

```json
{
  "name": "map_1",
  "version": "0.1.0",
  "private": true,
  "engines": {
    "node": ">=14.0.0",
    "yarn": ">=1.22.0",
    "npm": "please-use-yarn"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "sb": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
  },
  "dependencies": {
    "@types/node": "18.15.11",
    "@types/react": "18.0.35",
    "@types/react-dom": "18.0.11",
    "eslint": "8.38.0",
    "eslint-config-next": "13.3.0",
    "next": "13.2.0",
    "react": "^18.2.0",
    "react-dom": "18.2.0",
    "typescript": "<4.8",
    "util": "^0.12.5"
  },
  "devDependencies": {
    "@babel/core": "^7.21.4",
    "@storybook/addon-actions": "^6.5.16",
    "@storybook/addon-controls": "^6.5.16",
    "@storybook/addon-essentials": "^6.5.16",
    "@storybook/addon-interactions": "^6.5.16",
    "@storybook/addon-links": "^6.5.16",
    "@storybook/addon-postcss": "^2.0.0",
    "@storybook/addon-storysource": "^6.5.16",
    "@storybook/addons": "^6.5.16",
    "@storybook/builder-webpack5": "^6.5.16",
    "@storybook/manager-webpack5": "^6.5.16",
    "@storybook/react": "^6.5.16",
    "@storybook/testing-library": "^0.0.13",
    "@storybook/theming": "^6.5.16",
    "@typescript-eslint/eslint-plugin": "^5.58.0",
    "babel-loader": "^9.1.2",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-storybook": "^0.6.11",
    "storybook-addon-next-router": "^4.0.2",
    "storybook-css-modules-preset": "^1.1.1"
  },
  "resolutions": {
    "webpack": "^5"
  }
}
```
