# Tutorial-PWA-Nuxtjs
 Nuxt.jsでWebアプリケーションを作る

---

## 手順

### 1. Nuxtプロジェクトの作成

```bat
$ npm update -g npm

REM nodistを使っているとデフォルトで入っていない
$ npm install -g npx

$ npx create-nuxt-app tutorial-pwa
```

>npx: installed 344 in 65.125s
>
>
>
> create-nuxt-app v2.11.1
>
> ✨  Generating Nuxt.js project in tutorial-pwa
>
> ? Project name tutorial-pwa
>
> ? Project description My excellent Nuxt.js project
>
> ? Author name YA
>
> ? Choose the package manager Npm
>
> ? Choose UI framework None
>
> ? Choose custom server framework None (Recommended)
>
> ? Choose Nuxt.js modules Progressive Web App (PWA) Support
>
> ? Choose linting tools (Press <space> to select, <a> to toggle all, <i> to invert selection)
>
> ? Choose test framework None
>
> ? Choose rendering mode Universal (SSR)
>
> ? Choose development tools (Press <space> to select, <a> to toggle all, <i> to invert selection)
>
> / Installing packages with npm

>
> 🎉  Successfully created project tutorial-pwa
>
>
>
>   To get started:
>
>
>
>         cd tutorial-pwa
>
>         npm run dev
>
>
>
>   To build & start for production:
>
>
>
>         cd tutorial-pwa
>
>         npm run build
>
>         npm run start

### 2. 動作確認

```bat
$ cd tutorial-pwa
$ npm run dev
```

### 3. PWA有効化のための設定変更

`nuxt.config.js` に以下の設定を追記。 `dev: true` を指定することで、localhostでもPWAが有効になる

```js
  manifest: {
    name: 'Tutorial-PWA',
    lang: 'ja',
  },
  workbox: {
    dev: true,
  },
```

```bat
$ npm run dev
```

F12開発ツールのConsoleを開き、Service workerが登録されていることを確認

> Successfully registered service worker. /sw.js

### 4. ビルド

```bat
$ npm run build
$ npm run start
```

### 5. gh-pages(GitHub)へのデプロイ

`nuxt.config.js` に以下の設定を追記。サブディレクトリでも動作可能になる

```js
// `DEPLOY_ENV` が `GH_PAGES` の場合のみ `router.base = '/<repository-name>/'` を追加する
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/<repository-name>/'
  }
} : {}
```

`package.json` に以下の設定を追記

```js
"scripts": {
  "build:gh-pages": "DEPLOY_ENV=GH_PAGES nuxt build",
  "generate:gh-pages": "DEPLOY_ENV=GH_PAGES nuxt generate"
},
```

静的サイトを生成

```sh
$ npm run build:gh-pages
$ npm run generate:gh-pages
```

---

Copyright (c) 2019 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.
