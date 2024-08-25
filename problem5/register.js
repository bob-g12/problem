document.getElementById('registerBtn').addEventListener('click', async function() {
    // フォームデータを取得
    const formData = new FormData(document.getElementById('registerForm'));
    try {
        // PHPファイルにPOSTリクエストを送信
        const response = await fetch('register.php', {
            method: 'POST',
            body: formData
        });
        const data = await response.text();
        // レスポンスが正常かつ空の文字列の場合、ログイン画面にリダイレクト
        if (response.ok && data.trim() === '') {
            window.location.href = 'index.html';
        } else {
            // エラーメッセージを表示
            document.getElementById('registerResponse').textContent = data;
        }
    } catch (error) {
        console.error('エラー:', error);
        document.getElementById('registerResponse').textContent = 'エラーが発生しました。';
    }
});
// ログイン画面へ戻るボタンの処理
document.getElementById('loginRedirectBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});