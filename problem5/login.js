document.getElementById('loginBtn').addEventListener('click', async function() {
    // フォームデータを取得
    const formData = new FormData(document.getElementById('loginForm'));
    try {
        // PHPファイルにPOSTリクエストを送信
        const response = await fetch('login.php', {
            method: 'POST',
            body: formData
        });
        // レスポンスが成功の場合、success.html へリダイレクト
        if (response.ok) {
            window.location.href = 'success.html';
        } else {
            // エラーメッセージを表示
            document.getElementById('loginResponse').textContent = 'ログインに失敗しました。';
        }
    } catch (error) {
        console.error('エラー:', error);
        document.getElementById('loginResponse').textContent = 'エラーが発生しました。';
    }
});
// 新規ユーザー登録画面へ遷移するボタンの処理
document.getElementById('registerRedirectBtn').addEventListener('click', function() {
    window.location.href = 'register.html';
});