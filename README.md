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

### 2. ビルド

```bat
$ cd tutorial-pwa
$ npm install
```
