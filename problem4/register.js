document.getElementById('registerBtn').addEventListener('click', async function() {
    // フォームデータを取得
    const formData = new FormData(document.getElementById('registerForm'));
    try {
        // PHPファイルにPOSTリクエストを送信
        const response = await fetch('register.php', {
            method: 'POST',
            body: formData
        });
        const text_data = await response.text();
        // レスポンスのメッセージを表示
        document.getElementById('registerResponse').textContent = text_data;
    } catch (error) {
        console.error('エラー:', error);
        document.getElementById('registerResponse').textContent = 'エラーが発生しました。';
    }
});