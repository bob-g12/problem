
<?php
// ファイルパス取得
$file = 'test.txt'; 
// ファイル内容取得
$contents = file_get_contents($file); 
// 取得内容を返す
echo $contents;
?>