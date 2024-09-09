/**
 * https://urapri.net/yume-uranaiからキーワードと、その解説のurlを取得するスクリプト
 * ブラウザの開発者ツールのコンソールから実行できる
 */
const map = [];
const licenters = document.querySelectorAll(".licenter");
for (const licenter of licenters) {
    for (const a of licenter.querySelectorAll("li > a")) {
        const key = a.innerText;
        const value = a.href;
        map.push({ key, value });
    }
}

// キーと値にアクセスする例
console.log(map[99].key);   // キーにアクセス
console.log(map[99].value); // 値にアクセス