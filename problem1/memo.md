# 作成した機能
ボタンを押すとテキストファイルの文字列が表示される機能を作成しました。

# ファイル構成
problem
　└ problem1
    　├ text_display.html
    　├ text_add.js
    　└ test.txt

# ディレクトリ・ファイル解説
画面上の追加ボタンを押すと
javascript で test.txt を取得し、内容を表示する

# 詰まったポイント

1. javascript から PHP を呼び出す方法が分からず
"javascript PHP 呼び出し方" で検索し、XMLHttpRequest を使用することを知り、
各種メソッドを調べることで扱い方が分かりました。

2. XMLHttpRequest で取得した内容のテキストを扱う方法が分からず、
"xmlhttprequest text" で検索し、responseTextを使用することで解決しました

# 参考サイト

1. XMLHttpRequest
https://sirius10.net/blog/wordpress/index.php/2023/04/19/2680/
https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest

2. XMLHttpRequest: open() メソッド
https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest/open

3. XMLHttpRequest: send() メソッド
https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest/send

4. XMLHttpRequest: responseText プロパティ
https://developer.mozilla.org/ja/docs/Web/API/XMLHttpRequest/responseText
