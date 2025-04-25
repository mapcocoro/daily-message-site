let messages = [];

function showRandomMessage() {
  if (messages.length === 0) return;
  const index = Math.floor(Math.random() * messages.length);
  document.getElementById('message').innerText = messages[index];
}

function showTheme(theme) {
  const options = themeMessages[theme];
  if (!options) return;

  const index = Math.floor(Math.random() * options.length);
  const themeBox = document.getElementById('theme-message');

  themeBox.classList.remove('visible');
  themeBox.innerHTML = `<strong>${getThemeLabel(theme)}メッセージ：</strong><br>「${options[index]}」`;

  setTimeout(() => {
    themeBox.classList.add('visible');
  }, 50);
}

function getThemeLabel(theme) {
  switch (theme) {
    case 'relax': return '🧘‍♀️ リラックス';
    case 'positive': return '🌈 前向き';
    case 'healing': return '🍀 癒し';
    default: return '';
  }
}

const themeMessages = {
  relax: [
    "🧘‍♀️ ゆったり深呼吸して、心と体をひと休みさせましょう。",
    "🍵 ほっと一息、あたたかいお茶でも飲みませんか？",
    "🛁 お風呂でリラックスして、心をほどいてみましょう。",
    "💤 今は立ち止まる時間も大切に。",
    "🎧 好きな音楽に包まれて、自分を癒してあげましょう。"
  ],
  positive: [
    "🌈 小さな一歩が、大きな変化を生みます。",
    "🚀 今日の挑戦が、未来の自分を育てます。",
    "📈 前に進んでいることを信じて、大丈夫。",
    "⚡ やりたいと思った気持ちを大切にしましょう。",
    "🌞 今日は新しい希望に満ちた1日になります。"
  ],
  healing: [
    "🌸 ゆっくりでも、自分のペースで進んでいいんです。",
    "🧡 心の声に寄り添って、自分を癒しましょう。",
    "💖 がんばった自分を、そっと抱きしめてあげましょう。",
    "🌺 たまには、何もしない日があってもいいんです。",
    "🍀 自分を信じて、一歩ずつ前へ。"
  ]
};

// JSON 読み込み後、初回のメッセージ表示
fetch('messages.json')
  .then(response => response.json())
  .then(data => {
    messages = data;
    showRandomMessage(); // 初期表示
  })
  .catch(error => {
    console.error("読み込み失敗:", error);
    document.getElementById('message').innerText = "メッセージを取得できませんでした。";
  });

