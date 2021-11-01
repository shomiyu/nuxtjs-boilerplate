# Nuxt ボイラープレート

Node.js のバージョン 14.17.3 で動作します。

## 機能

- 構文チェック（ ESlint / Prettier ）
- 非同期通信 ( axios )
- リセット CSS ( ress )
- CSS プリプロセッサ ( Sass )
- 日付フォーマット ( date-fns )
- モバイルデバイスからローカル環境にアクセス ( cross-env )
- 画像の自動圧縮 ( nuxt-optimized-images )
- サイトマップ自動生成 ( @nuxtjs/sitemap )
- microCMS 連携

## セットアップ

### 環境変数作成

microCMS とのデータ通信をするために環境変数を作成する必要があります。<br>
`.env.template`をコピーして`.env`を作成してください。<br>
※microCMS の管理画面にログインするか、プロジェクト管理者に確認して正しい値を取得してください。

```
MAIN_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
BASE_URI=https://xxxxxx.microcms.io/api/v1/
```

### モジュールインストール

```bash
$ yarn install
```

## 起動

### 通常

```bash
$ yarn dev
```

`localhost:3000`でアクセスできます。<br>
3000 ポートが埋まっている場合は空いているポート番号を Nuxt が自動で割り当てるのでターミナルを確認してください。

### モバイル端末からローカル環境にアクセスする

下記のコマンドで立ち上げるとターミナルに出力される IP アドレスで、モバイルデバイスからローカル環境にアクセスできるようになります。<br>（同じ Wi-Fi に繋いでいることが前提になります。）

```bash
$ yarn dev:mobile
```

下記のようにターミナルに表示された IP でモバイル端末からアクセスできるようになります。<br>（繋がらない場合は Wi-Fi 設定を確認）

```
   ╭─────────────────────────────────────────╮
   │                                         │
   │   Nuxt @ v2.15.7                        │
   │                                         │
   │   ▸ Environment: development            │
   │   ▸ Rendering:   server-side            │
   │   ▸ Target:      server                 │
   │                                         │
   │   Listening: http://192.168.3.9:3333/   │
   │                                         │
   ╰─────────────────────────────────────────╯
```

※IP アドレスは個人で異なるので自分の環境を確認してください

## 構文チェック

eslint を導入しているため、常に構文チェックを行います。<br>エディターに VScode を使用している場合は、保存時に自動で Prettier によるフォーマットを行います。<br>自動でフォーマットされなかったインデントやカンマ、セミコロン、改行などの軽微なエラーは下記のコマンドで自動修正されます。

```bash
$ yarn lintfix
```

## デプロイ

### Netlify

下記の設定を行うと main ブランチに push することでデプロイができるようになります。

[Deploy Nuxt on Netlify - Nuxt.js](https://ja.nuxtjs.org/docs/2.x/deployment/netlify-deployment)

Site Settings > Build & deploy > Continuous Deployment > Build settings

- Build command: `npm run generate`
- Publish directory: `dist`

環境変数がある場合には下記の設定も行います。

Site Settings > Build & deploy > Environment > Environment variables

## API の取得

各 pages 配下の vue ファイル script 内で下記のように記述して API を取得します。<br>下記は microCMS を想定しています。

```vue
<script>
export default {
   async asyncData({ app }) {
      const [blog] = await Promise.all([app.$api.get('blog')])
      return {
         blog: blog.data,
      }
   },
}
<script>
```
