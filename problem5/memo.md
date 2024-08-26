#   作成した機能
##  ログイン機能
index.htmlでユーザー名とパスワードを入力し、ログインボタンを押すとjsファイルへ。
login.jsのログイン機能によってfetchでlogin.phpに入力値をポスト。
login.phpで受け取った入力値の内、ユーザー名の一致するものが無ければ
    "ユーザー名が存在しません"と返し、見つかった場合、パスワードが一致しない場合
    "パスワードが間違っています。"と返す。どちらも一致した場合
    "success"と返す。
    login.jsへreturnとして上記を返す。
login.jsに返されたreturn値が"success"の場合ログインが成功し、
    それ以外の場合は一致しなかったメッセージを表示
##  ユーザー登録の画面推移
ユーザー登録が完了した場合や、ログイン画面への推移ボタンをクリックした場合に、
    ログイン画面へ推移する機能を作成

#   ファイル構成
problem
　└ problem5
    ├ index.html
    ├ login.js
    ├ login.php
    ├ register.html
    ├ register.js
    └ register.php 


#   詰まったポイント

1.  

2.  

3.  

#   参考サイト

1.  データベースの接続
https://www.php.net/manual/ja/pdo.connections.php
https://qiita.com/pito555/items/77d2f141846a40d8c659

2.  データベースからのデータ取得
https://qiita.com/pito555/items/5937d2dbaa58df03021a

3.  配列を文字列にする方法
https://webkaru.net/php/function-implode/
https://www.php.net/manual/ja/function.implode.php

#   