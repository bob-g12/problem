<?php
// データベース接続設定
$name = 'mysql:host=mysql57.sasaki1019.sakura.ne.jp;dbname=sasaki1019_problem';
$user = 'sasaki1019';
$pass = 'password1-1';

try {
    $pdo = new PDO($name, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch(PDOException $e){
    echo '接続失敗: ' . $e->getMessage();
    exit();
}

// POSTデータを取得
$username = $_POST['username'];
$password = $_POST['password'];

// SQLクエリを準備して実行
$stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
$stmt->bindParam(':username', $username);
$stmt->bindParam(':password', $password);

if ($stmt->execute()) {
    // 登録が成功した場合、ログイン画面へリダイレクト
    header("Location: index.html");
    exit();
} else {
    echo "データ追加に失敗しました。";
}
?>
