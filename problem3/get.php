
<?php
$name = 'mysql:host=mysql57.sasaki1019.sakura.ne.jp;dbname=sasaki1019_problem';
$user = 'sasaki1019';
$pass = 'password1-1';
// データベースに接続
try{
    // [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION] エラーを表示する設定
    $pdo = new PDO($name,$user,$pass,[PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch(PDOException $e){
    echo '接続失敗'. $e->getMessage();
    exit();
};
// 取得するテーブル名を指定
$sql = 'SELECT * FROM message';
$stmt = $pdo->query($sql);
// 指定したテーブルから配列ですべて取得
$result = $stmt->fetchAll(PDO::FETCH_COLUMN);
// 取得した配列の要素の数を取得
$res_count = count($result);
// 配列を文字列にし、,で区切り
$str = implode(",", $result);
// 取得した配列の内容と要素数を統合
$res_str = $res_count.",".$str;
echo $res_str;

?>