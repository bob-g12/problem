document.getElementById('registerBtn').addEventListener('click', async function() {
    const formData = new FormData(document.getElementById('registerForm'));

    try {
        const response = await fetch('register.php', {
            method: 'POST',
            body: formData
        });

        const data = await response.text();
        if (response.ok && data.trim() === '') {
            // 登録が成功した場合、ログイン画面にリダイレクト
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
