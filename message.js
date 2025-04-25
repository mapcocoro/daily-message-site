let messages = [];

// アファメーションJSONを読み込んで初期表示
fetch('messages.json')
  .then(response => response.json())
  .then(data => {
    messages = data;
    showRandomMessage(); // 最初のアファメーション表示
  })
  .catch(error => {
    console.error("読み込み失敗:", error);
    document.getElementById('message').innerText = "メッセージを取得できませんでした。";
  });

// アファメーション表示用関数（初期とボタン切り替え用）
function showRandomMessage() {
  if (messages.length === 0) return;
  const index = Math.floor(Math.random() * messages.length);
  document.getElementById('message').innerText = messages[index];
}

// 🎯 テーマ別メッセージ（固定で定義してOK）
const themeMessages = {
  relax: [
    "🧘‍♀️ ゆったり深呼吸して、心と体をひと休みさせましょう。",
    "🕊️ 静かな時間が、あなたをリセットしてくれます。",
    "🌿 何もしない時間も、あなたに必要な栄養です。"
  ],
  positive: [
    "🌈 小さな一歩が、大きな変化を生みます。",
    "🌟 あなたはあなたのままで素晴らしい存在です。",
    "🔥 今日の努力は、明日のあなたの力になります。"
  ],
  healing: [
    "🍀 あなたの存在だけで、十分に価値があります。",
    "🌸 心が疲れたときは、やさしさで包んであげてください。",
    "🧡 あなたに必要な癒しは、すでに内側にあります。"
  ]
};

// 🔘 テーマ別切り替え関数（ボタンから呼ばれる）
function showTheme(theme) {
  const options = themeMessages[theme];
  if (!options) return;
  const index = Math.floor(Math.random() * options.length);
  document.getElementById('message').innerText = options[index];
}

