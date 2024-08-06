# 作成した機能
test.txt の内容を PHP で取得、初めから表示し、
追加ボタンで同じ内容を追加で表示する動作を作成しました。

# ファイル構成
problem
　└ problem2
    　├ index.html
    　├ display.js
    　├ get.php
    　└ test.txt

# ディレクトリ・ファイル解説
text_display.html を表示した時点で display.js から get.php の
テキストファイルの内容を取得する処理をリクエストし、
test.txtの内容がphpファイル → jsファイルへと渡りhtml のタグへと挿入される

画面上の追加ボタンを押すと
上記で取得した内容を追加で表示する

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
