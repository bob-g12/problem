// 取得した内容を受け取るオブジェクトを生成
var phpfile = new XMLHttpRequest();
// get.php の動作から取得する設定
phpfile.open('GET', 'get.php');
// データの型をテキストに指定
phpfile.responseType = 'text';
// リクエストを送信
phpfile.send();
// XMLHttpRequest の状態が変わるたびにif文へ
phpfile.onreadystatechange = function(){
    // リクエストした場合のみ下記の処理へ移行
    if(phpfile.readyState == 4){
        // データベースから取得した値を配列に変換
        let text_data = phpfile.responseText.split(',');
        // 新しいHTML要素を作成
        new_element = document.createElement('p');
        // 作成したHTML要素にテキストを挿入
        new_element.innerHTML = text_data[1];
        // 初期表示のためのpタグを取得
        let init_tag = document.getElementById('init_display');
        // 取得したpタグに作成したHTML要素を追加
        init_tag.appendChild(new_element);
        
    }
}
// ボタンを押した回数をカウントする変数
let i = 1;
// 追加ボタンを押した際の動作
const add = () => {
    // phpから受け取った内容のテキストを受け取る
    const receive_data = phpfile.responseText;
    // データベースから取得した値を配列に変換
    const text_data = receive_data.split(',');
    // ボタンのカウントを１進める
    i++;
    if(text_data[0] >= i){
        // 要素を追加したいdivタグをidで取得
        let textbox_tag = document.getElementById('textbox');
        // 新しいHTML要素を作成
        new_element = document.createElement('p');
        // 作成したHTML要素にテキストを挿入
        new_element.innerHTML = text_data[i];
        // 取得したdivタグの末尾に作成したHTML要素を追加
        textbox_tag.appendChild(new_element);
    }else{
        console.log("これ以上表示できません");
    }
}

function test(){
    return 1;
}

const test = 1;