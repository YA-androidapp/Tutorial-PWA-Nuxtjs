# Tutorial-PWA-Nuxtjs
 Nuxt.jsでWebアプリケーションを作る

---

## 手順

### 1. Nuxtプロジェクトの作成

```bat
$ npm install -g yarn
$ yarn global bin
```

`yarn global bin` の結果をPATHに追加

```bat
$ yarn global add vue-cli
$ vue init nuxt-community/starter-template tutorial-pwa
```

> ? Project name tutorial-pwa
>
> ? Project description tutorial project of PWA
>
> ? Author YA
>
>
>
>    vue-cli · Generated "tutorial-pwa".
>
>
>
>    To get started:
>
>
>
>      cd tutorial-pwa
>
>      npm install # Or yarn
>
>      npm run dev
>
>

### 2. PWAモジュールのインストール

```bat
$ yarn add '@nuxtjs/pwa'
```

`Host key verification failed.\nfatal: Could not read from remote repository.`の様なエラーが出たら、Git Bashに切り替えて実行してみる

### 3. ビルド

```bat
$ yarn install

$ yarn run dev
```

```
yarn run v1.19.0
$ nuxt

   ╭─────────────────────────────────────────────╮
   │                                             │
   │   Nuxt.js v2.9.2                            │
   │   Running in development mode (universal)   │
   │                                             │
   │   Listening on: http://localhost:3000/      │
   │                                             │
   ╰─────────────────────────────────────────────╯

i Preparing project for development                                                                           08:57:57
i Initial build may take a while                                                                              08:57:57
√ Builder initialized                                                                                         08:57:57
√ Nuxt files generated                                                                                        08:57:57

√ Client
  Compiled successfully in 23.03s

√ Server
  Compiled successfully in 19.33s

i Waiting for file changes                                                                                    08:58:24
i Memory usage: 169 MB (RSS: 231 MB)
```
