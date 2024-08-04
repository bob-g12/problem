<!-- test.js11行目に表示したいメッセージを返す処理を作成
-->
<?php

$file = 'test.txt'; //ファイルパス取得
$contents = file_get_contents($file); //ファイル内容取得
echo $contents;


?>