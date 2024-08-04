const add = () => {
    // id属性で要素を取得
    let textbox_element = document.getElementById('textbox');

    var phpfile = new XMLHttpRequest();

    phpfile.onreadystatechange = function(){
        // レスポンスの受信完了
        if(phpfile.readyState == 4){
            console.log(phpfile.status);
            let data = phpfile.responseText;
            // 新しいHTML要素を作成
            let new_element = document.createElement('p');
            new_element.innerHTML = data;

            // 指定した要素の中の末尾に挿入
            textbox_element.appendChild(new_element);
        }
    }
    // jsからfetchでphpでファイルの内容を動かす
    phpfile.open('GET', 'http://localhost/problem/problem2/test.php', true);
    phpfile.responseType = 'text';
    phpfile.send();

    
}