document.getElementById('registerBtn').addEventListener('click', function() {
    // フォームデータを取得
    const formData = new FormData(document.getElementById('registerForm'));

    // fetchでPHPファイルにデータを送信
    fetch('register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // 登録が成功した場合、ログイン画面にリダイレクト
            window.location.href = 'index.html';
        } else {
            return response.text().then(data => {
                document.getElementById('registerResponse').textContent = data;
            });
        }
    })
    .catch(error => {
        console.error('エラー:', error);
        document.getElementById('registerResponse').textContent = 'エラーが発生しました。';
    });
});
