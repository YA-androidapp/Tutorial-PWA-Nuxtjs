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



