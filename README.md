# @bconnorwhite/environment
![dependencies](https://img.shields.io/david/bconnorwhite/environment)
![typescript](https://img.shields.io/github/languages/top/bconnorwhite/environment)
![npm](https://img.shields.io/npm/v/@bconnorwhite/environment)

A utility for checking node environment.

```
yarn add @bconnorwhite/environment
```
## API
```js
import environment, { inProduction, inDevelopment, isProduction, isDevelopment, getEnvironment } from "@bconnorwhite/environment";

// environment: "development" | "production";
// inProduction: boolean;
// inDevelopment: boolean;
// getEnvironment: (env?: string) => "development" | "production";
// isProduction: (env?: string) => boolean;
// isDevelopment: (env?: string) => boolean;
```
