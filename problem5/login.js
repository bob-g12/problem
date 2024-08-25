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
        // 成功かどうかを判定
        if (data.trim() === "success") {
            // ログインが成功した場合、success.htmlへリダイレクト
            window.location.href = 'success.html';
        } else {
            // 失敗した場合はエラーメッセージを表示
            document.getElementById('loginResponse').textContent = data;
        }
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
