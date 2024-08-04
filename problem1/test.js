const add = async () => {
    // id属性で要素を取得
    let textbox_element = document.getElementById('textbox');

    // 同じディレクトリ内のtest.txtを取得
    const response = await fetch("test.txt");
    const text = await response.text();

    // 新しいHTML要素を作成
    let new_element = document.createElement('p');
    new_element.innerHTML = text;

    // 指定した要素の中の末尾に挿入
    textbox_element.appendChild(new_element);
}