// messages.json を読み込む
fetch('messages.json')
  .then(response => response.json())
  .then(messages => {
    // 今日の「年初からの通し日数」を取得（1月1日が1）
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);

    // メッセージ配列から該当するものを取得
    const message = messages[dayOfYear % messages.length];

    // 表示する
    document.getElementById('message').innerText = message;
  })
  .catch(error => {
    console.error("メッセージの読み込みに失敗しました:", error);
    document.getElementById('message').innerText = "メッセージを取得できませんでした。";
  });

