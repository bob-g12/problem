document.getElementById('registerBtn').addEventListener('click', async function() {
    const formData = new FormData(document.getElementById('registerForm'));

    try {
        const response = await fetch('register.php', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            // 登録が成功した場合、ログイン画面にリダイレクト
            window.location.href = 'index.html';
        } else {
            const data = await response.text();
            document.getElementById('registerResponse').textContent = data;
        }
    } catch (error) {
        console.error('エラー:', error);
        document.getElementById('registerResponse').textContent = 'エラーが発生しました。';
    }
});
