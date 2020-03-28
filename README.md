# @bconnorwhite/environment
![dependencies](https://img.shields.io/david/bconnorwhite/environment)
![minzipped size](https://img.shields.io/bundlephobia/minzip/@bconnorwhite/environment)
![typescript](https://img.shields.io/github/languages/top/bconnorwhite/environment)
![npm](https://img.shields.io/npm/v/@bconnorwhite/environment)

A utility for checking node environment

```
yarn add @bconnorwhite/environment
```
## API
```ts
isProduction: boolean
isDevelopment: boolean
environment: "development" | "production";
```
```js
import environment, { isProduction, isDevelopment } from "@bconnorwhite/environment";
