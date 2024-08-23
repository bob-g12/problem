document.getElementById('registerBtn').addEventListener('click', function() {
    // フォームデータを取得
    const formData = new FormData(document.getElementById('registerForm'));
    // fetchでPHPファイルにデータを送信
    fetch('register.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text()) // レスポンスをテキストとして取得
    .then(data => {
        // 成功したらメッセージを表示
        document.getElementById('registerResponse').textContent = data;
    })
    .catch(error => {
        console.error('エラー:', error);
        document.getElementById('registerResponse').textContent = 'エラーが発生しました。';
    });
});