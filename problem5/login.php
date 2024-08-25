<?php
// データベース接続設定
$name = 'mysql:host=mysql57.sasaki1019.sakura.ne.jp;dbname=sasaki1019_problem';
$user = 'sasaki1019';
$pass = 'password1-1';
// PDOを使ってデータベースに接続
try {
    $pdo = new PDO($name, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch (PDOException $e) {
    // 接続エラー時の処理
    echo '接続失敗: ' . $e->getMessage();
    exit();
}
// POSTデータを取得
$username = $_POST['username'];
$password = $_POST['password'];
// ユーザーのパスワードを取得するクエリを準備
$stmt = $pdo->prepare("SELECT password FROM users WHERE username = :username");
$stmt->bindParam(':username', $username);
$stmt->execute();
// 結果を取得
$user = $stmt->fetch(PDO::FETCH_ASSOC);
if ($user) {
    // 入力されたパスワードが一致するか確認
    if ($password === $user['password']) {
        // 一致した場合、ログイン成功として success.html へリダイレクト
        echo "success";
    } else {
        // パスワードが間違っている場合の処理
        echo "パスワードが間違っています。";
    }
} else {
    // ユーザー名が存在しない場合の処理
    echo "ユーザー名が存在しません。";
}
?>