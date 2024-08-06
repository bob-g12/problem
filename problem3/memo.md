# 作成した機能
データベースから取得したデータの一つ目をはじめから表示し、
ボタンを押すと二つ目以降のデータを1つずつ表示、
すべて表示しきるとコンソールログにてメッセージを表示

# ファイル構成
problem
　└ problem3
    　├ index.html
    　├ display.js
    　└ get.php 

# ディレクトリ・ファイル解説
get.phpでデータベースからデータと総数を取得し、
display.jsでphpで取得したデータを扱い、
text_display.htmlで表示します。

# 詰まったポイント

1. データベースとの接続に不安があったため以前の掲示板アプリのコードや、
"php データベース　接続"で検索し、接続に必要な値を一度変数に代入するやり方が、
わかりやすいと感じたため、説明変数を採用しました。

2. データベースのテーブルからデータを取得する方法が分からず
"php データベース 取得"で検索し、参考にしました。

3. データベースに用意した内容をすべて取得すると配列になってしまい、
echoでjsファイルに渡すことができなかったため、
"php 配列　文字列　変換"で検索し、
implode で配列を一つの文字列にすることで、
文字列としてjsファイルに引き渡すことができ、
区切りの","を付けることで、jsファイルで配列として扱えました。

# 参考サイト

1. データベースの接続
https://www.php.net/manual/ja/pdo.connections.php
https://qiita.com/pito555/items/77d2f141846a40d8c659

2. データベースからのデータ取得
https://qiita.com/pito555/items/5937d2dbaa58df03021a

3. 配列を文字列にする方法
https://webkaru.net/php/function-implode/
https://www.php.net/manual/ja/function.implode.php

