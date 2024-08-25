document.getElementById('loginBtn').addEventListener('click', async function() {
    const formData = new FormData(document.getElementById('loginForm'));

    try {
        const response = await fetch('login.php', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            // ログイン成功時に success.html へリダイレクト
            window.location.href = 'success.html';
        } else {
            document.getElementById('loginResponse').textContent = 'ログインに失敗しました。';
        }
    } catch (error) {
        console.error('エラー:', error);
        document.getElementById('loginResponse').textContent = 'エラーが発生しました。';
    }
});
