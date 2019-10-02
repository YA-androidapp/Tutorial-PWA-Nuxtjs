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
```

```bat
$ yarn run dev
```

>
> yarn run v1.19.0
>
> $ nuxt
>
>
>
>    ╭─────────────────────────────────────────────╮
>
>    │                                             │
>
>    │   Nuxt.js v2.9.2                            │
>
>    │   Running in development mode (universal)   │
>
>    │                                             │
>
>    │   Listening on: http://localhost:3000/      │
>
>    │                                             │
>
>    ╰─────────────────────────────────────────────╯
>
>
>
> i Preparing project for development                              >
>                                              08:57:57
>
> i Initial build may take a while                                 >
>                                              08:57:57
>
> √ Builder initialized                                            >
>                                              08:57:57
>
> √ Nuxt files generated                                           >
>                                              08:57:57
>
>
>
> √ Client
>
>   Compiled successfully in 23.03s
>
>
>
> √ Server
>
>   Compiled successfully in 19.33s
>
>
>
> i Waiting for file changes                                       >
>                                              08:58:24
>
> i Memory usage: 169 MB (RSS: 231 MB)

```bat
$ yarn build
```

> yarn run v1.19.0
>
> $ nuxt build
>
> i Production build                                               >
>                                              12:19:12
>
> √ Builder initialized                                            >
>                                              12:19:12
>
> √ Nuxt files generated                                           >
>                                              12:19:12
>
>
>
> √ Client
>
>   Compiled successfully in 10.26s
>
>
>
> √ Server
>
>   Compiled successfully in 2.73s
>
>
>
>
>
> Hash: 67a848d320f1706c9507
>
> Version: webpack 4.41.0
>
> Time: 10261ms
>
> Built at: 2019-10-02 12:19:27
>
>                          Asset       Size  Chunks                >
>          Chunk Names
>
> ../server/client.manifest.json   6.47 KiB          [emitted]
>
>        96d0cec6f3821d6b3700.js   2.31 KiB       3  [emitted] >
> [immutable]  runtime
>
>                       LICENSES  389 bytes          [emitted]
>
>        bb11cc498610a003c819.js   3.56 KiB       2  [emitted] >
> [immutable]  pages_index
>
>        c20263bbb72b0a64dd6b.js    151 KiB       1  [emitted] >
> [immutable]  commons.app
>
>        fb585927a26309365fe0.js     43 KiB       0  [emitted] >
> [immutable]  app
>
>  + 2 hidden assets
>
> Entrypoint app = 96d0cec6f3821d6b3700.js c20263bbb72b0a64dd6b.js >
> fb585927a26309365fe0.js
>
>
>
> Hash: 0ae0d8b1909951b259f5
>
> Version: webpack 4.41.0
>
> Time: 2731ms
>
> Built at: 2019-10-02 12:19:30
>
>                   Asset       Size  Chunks                       >
>   Chunk Names
>
> 87c8e9914ccf152c6d28.js   3.62 KiB       1  [emitted] [immutable]>
>   pages_index
>
>               server.js   24.9 KiB       0  [emitted]            >
>   app
>
>    server.manifest.json  243 bytes          [emitted]
>
>  + 2 hidden assets
>
> Entrypoint app = server.js server.js.map
>
> Done in 21.03s.

```bat
$ yarn start
```

> yarn run v1.19.0
>
> $ nuxt start
>
>
>
>    ╭────────────────────────────────────────────╮
>
>    │                                            │
>
>    │   Nuxt.js v2.9.2                           │
>
>    │   Running in production mode (universal)   │
>
>    │   Memory usage: 21.2 MB (RSS: 50.2 MB)     │
>
>    │                                            │
>
>    │   Listening on: http://localhost:3000/     │
>
>    │                                            │
>
>    ╰────────────────────────────────────────────╯
