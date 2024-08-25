document.getElementById('loginBtn').addEventListener('click', async function() {
    const formData = new FormData(document.getElementById('loginForm'));
    try {
        const response = await fetch('login.php', {
            method: 'POST',
            body: formData
        });
        const result = await response.text();
        if (result.trim() === "success") {
            // ログイン成功時に success.html へリダイレクト
            window.location.href = 'success.html';
        } else {
            document.getElementById('loginResponse').textContent = result;
        }
    } catch (error) {
        console.error('エラー:', error);
        document.getElementById('loginResponse').textContent = 'エラーが発生しました。';
    }
});
// 新規ユーザー登録画面へ遷移するボタンの処理
document.getElementById('registerRedirectBtn').addEventListener('click', function() {
    window.location.href = 'register.html';
});