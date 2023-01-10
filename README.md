<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>@bconnorwhite/environment</h1>
  <a href="https://npmjs.com/package/@bconnorwhite/environment">
    <img alt="NPM" src="https://img.shields.io/npm/v/@bconnorwhite/environment.svg">
  </a>
  <a href="https://github.com/bconnorwhite/environment">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/environment.svg">
  </a>
</div>

<br />

<blockquote align="center">A utility for checking node environment.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/environment">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/environment?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

```sh
yarn add @bconnorwhite/environment
```

```sh
npm install @bconnorwhite/environment
```

```sh
pnpm add @bconnorwhite/environment
```

## Usage
```js
import environment, { inProduction, inDevelopment, isProduction, isDevelopment, getEnvironment } from "@bconnorwhite/environment";

// environment: "development" | "production";
// inProduction: boolean;
// inDevelopment: boolean;
// getEnvironment: (env?: string) => "development" | "production";
// isProduction: (env?: string) => boolean;
// isDevelopment: (env?: string) => boolean;
```

<!--BEGIN FOOTER-->

<br />

<h2>Dev Dependencies</h2>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/@bconnorwhite/environment.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
