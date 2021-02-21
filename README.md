# Nuxt.js のボイラープレート

## ライブラリ

- yarn 1.21.1
- Nuxt.js 2.14.0
- ESlint 7.6.0
- Prettier 2.0.5
- axios 5.12.0
- ress 3.0.0
- dotenv 1.4.1
- sass 1.32.8
- sass-loader 9.0.3
- date-fns 1.4.3
- nuxt-optimized-images 1.4.0
- imagemin-mozjpeg 9.0.0
- imagemin-pngquant 9.0.1
- cross-env 7.0.3

## セットアップ

### 立ち上げ

```bash
$ yarn install
$ yarn dev
```

### 環境変数設定 (.env)

```
API_KEY = 'XXXXXXXXXX'
BASE_URI = 'https://xxxxxx/'
```

## 更新履歴

### 2021/2/16 スタイル設計更新

下記の scss 設定を更新

- mixins
- functions
- variables
- base

### 2021/2/21 モジュール追加・更新

下記のモジュールを追加

- date-fns
- nuxt-optimized-images
- imagemin-mozjpeg
- imagemin-pngquant
- cross-env

下記のモジュールを変更
node-sass -> sass
