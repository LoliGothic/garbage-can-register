# ガバイソン佐賀大team3

## 実行までの手順
1. 好きな場所でgit clone git@github.com:scla-sagauniv/gabaithon202303_team3.gitをする(httpsの人はgit clone https://github.com/scla-sagauniv/gabaithon202303_team3.git)
1. docker-compose buildでimageの構築
1. docker-compose upでコンテナの構築&起動
1. localhost:3000とlocalhost:8000にアクセス出来れば成功
1. ctrl+cでコンテナ停止

`※ 2回目以降はdocker-compose upだけで実行できる`

## コミットメッセージのルール(強制じゃないよ)
- プレフィックスを付ける（add: hogehogeとかfix: hogehogeとか)
   - add->新規機能や新規ファイルを追加
   - fix->バグ修正
   - update->バグではない機能修正
   - refactor->整理
   - rename->ファイル名の変更
   - delete->ファイルの削除
- whyとwhatを付ける(hogehogeのため，hogehogeした．みたいな感じ)

`※変なところとか，これには従いたくないってのがあったら，適当に書き換えててください`