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
  //...
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
    "sb": "storybook dev -p 6006",
    "build-storybook": "storybook build"
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
    "@storybook/addon-actions": "^7.0.5",
    "@storybook/addon-controls": "^7.0.5",
    "@storybook/addon-essentials": "^7.0.5",
    "@storybook/addon-interactions": "^7.0.5",
    "@storybook/addon-links": "^7.0.5",
    "@storybook/addon-mdx-gfm": "^7.0.5",
    "@storybook/addon-postcss": "^2.0.0",
    "@storybook/addon-storysource": "^7.0.5",
    "@storybook/addons": "^7.0.5",
    "@storybook/nextjs": "^7.0.5",
    "@storybook/react": "^7.0.5",
    "@storybook/testing-library": "^0.1.0",
    "@storybook/theming": "^7.0.5",
    "@typescript-eslint/eslint-plugin": "^5.58.0",
    "babel-loader": "^9.1.2",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-storybook": "^0.6.11",
    "storybook": "^7.0.5",
    "storybook-css-modules-preset": "^1.1.1"
  },
  "resolutions": {
    "webpack": "^5"
  }
}
```
