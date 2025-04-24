let messages = [];

// JSONを最初に読み込んでおく
fetch('messages.json')
  .then(response => response.json())
  .then(data => {
    messages = data;
    showRandomMessage(); // 初回表示もランダムでOK
  })
  .catch(error => {
    console.error("読み込み失敗:", error);
    document.getElementById('message').innerText = "メッセージを取得できませんでした。";
  });

// ボタン押下で呼ばれる関数
function showRandomMessage() {
  if (messages.length === 0) return;
  const index = Math.floor(Math.random() * messages.length);
  document.getElementById('message').innerText = messages[index];
}

