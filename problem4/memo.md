#   作成した機能
##  ログイン機能
index.htmlでユーザー名とパスワードを入力し、登録ボタンを押すとjsファイルへ。
register.jsのデータ追加機能によってfetchでregister.phpに入力値をポスト。
register.phpで受け取った入力値の内、ユーザー名の一致するものが1つでもあれば
    "この名前は既に登録されています。"と返し、一致するものが無かった場合、
    データベースへの登録を行い、正常に登録できれば、
    "データが追加されました。"、できなければ、
    "データ追加に失敗しました。"と返す
    register.jsへreturnとして上記を返す。
register.jsに返されたreturn値を表示する

#   ファイル構成
problem
　└ problem4
    ├ index.html
    ├ register.js
    └ register.php
    


#   詰まったポイント

1.  fetchでphpを作動する際に入力データを与える方法が分からず苦戦しました。

2.  重複するユーザー名を避けたかったが、条件を加えるWHEREにたどり着くまでに苦戦しました。

3.  

#   参考サイト

1.  addEventListenerの使い方
https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener
https://qiita.com/gishitomi/items/269f6884625bfff5fd4b

2.  fetchでPOSTリクエストを送信する方法
https://apidog.com/jp/blog/fetch-api-post/
https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch(メソッドの設定)

2.  WHEREについて(SELECT, FROM, WHEREがまとめられていてとても参考になりました)
https://qiita.com/REON/items/35ddc2bf287abcb51c7e

3.  配列を文字列にする方法
https://webkaru.net/php/function-implode/
https://www.php.net/manual/ja/function.implode.php

#   