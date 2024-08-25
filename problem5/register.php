<?php
// データベース接続設定
$name = 'mysql:host=mysql57.sasaki1019.sakura.ne.jp;dbname=sasaki1019_problem';
$user = 'sasaki1019';
$pass = 'password1-1';
// PDOを使ってデータベースに接続
try {
    $pdo = new PDO($name, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch(PDOException $e) {
    // 接続エラー時の処理
    echo '接続失敗: ' . $e->getMessage();
    exit();
}
// POSTデータを取得
$username = $_POST['username'];
$password = $_POST['password'];
// ユーザー名の重複チェック
$stmt = $pdo->prepare("SELECT COUNT(*) FROM users WHERE username = :username");
$stmt->bindParam(':username', $username);
$stmt->execute();
if ($stmt->fetchColumn() > 0) {
    // ユーザー名が既に存在する場合
    echo "この名前は既に登録されています。";
} else {
    // 新規登録
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
}
?>