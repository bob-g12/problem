<?php
// データベース接続設定
$name = 'mysql:host=mysql57.sasaki1019.sakura.ne.jp;dbname=sasaki1019_problem';
$user = 'sasaki1019';
$pass = 'password1-1';

try {
    $pdo = new PDO($name, $user, $pass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
} catch (PDOException $e) {
    echo '接続失敗: ' . $e->getMessage();
    exit();
}

// POSTデータを取得
$username = $_POST['username'];
$password = $_POST['password'];

// SQLクエリを準備して実行
$stmt = $pdo->prepare("SELECT password FROM users WHERE username = :username");
$stmt->bindParam(':username', $username);
$stmt->execute();

$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    // 平文で比較
    if ($password === $user['password']) {
        // ログインが成功した場合、"success"という文字列を返す
        echo "success";
    } else {
        echo "パスワードが間違っています。";
    }
} else {
    echo "ユーザー名が存在しません。";
}
?>
