document.getElementById('submitBtn').addEventListener('click', function() {
    // フォームデータを取得
    const formData = new FormData(document.getElementById('dataForm'));
    // fetchでPHPファイルにデータを送信
    fetch('get.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text()) // レスポンスをテキストとして取得
    .then(data => {
        // 成功したらメッセージを表示
        document.getElementById('responseMessage').textContent = data;
    })
    .catch(error => {
        console.error('エラー:', error);
        document.getElementById('responseMessage').textContent = 'エラーが発生しました。';
    });
});