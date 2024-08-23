document.getElementById('loginBtn').addEventListener('click', function() {
    // フォームデータを取得
    const formData = new FormData(document.getElementById('loginForm'));
    // fetchでPHPファイルにデータを送信
    fetch('login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text()) // レスポンスをテキストとして取得
    .then(data => {
        // ログイン結果を表示
        document.getElementById('loginResponse').textContent = data;
    })
    .catch(error => {
        console.error('エラー:', error);
        document.getElementById('loginResponse').textContent = 'エラーが発生しました。';
    });
});
// 新規ユーザー登録画面への遷移
document.getElementById('registerRedirectBtn').addEventListener('click', function() {
    window.location.href = 'register.html'; // register.htmlへ遷移
});