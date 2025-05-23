let messages = [];

// ✅ アファメーション表示用関数（上部カードに表示）
function showRandomMessage() {
  if (messages.length === 0) return;

  const index = Math.floor(Math.random() * messages.length);
  const messageBox = document.getElementById('message');

  if (messageBox) {
    messageBox.innerText = messages[index];
  } else {
    console.warn('⚠️ #message 要素が見つかりませんでした');
  }
}

// ✅ テーマメッセージ表示用関数（下部エリアに表示）
function showTheme(theme) {
  const options = themeMessages[theme];
  if (!options) return;

  const index = Math.floor(Math.random() * options.length);
  const themeBox = document.getElementById('theme-message');

  if (!themeBox) {
    console.warn('⚠️ #theme-message 要素が見つかりませんでした');
    return;
  }

  // 表示内容更新
  themeBox.classList.remove('visible');
  themeBox.innerHTML = `
    <strong>${getThemeLabel(theme)} メッセージ：</strong><br>
    ${options[index]}
  `;

  // アニメーション表示
  setTimeout(() => {
    themeBox.classList.add('visible');
  }, 50);
}

// ✅ ラベル表記（テーマごとの絵文字付き）
function getThemeLabel(theme) {
  switch (theme) {
    case 'relax': return '🧘‍♀️ リラックス';
    case 'positive': return '🌈 前向き';
    case 'healing': return '🍀 癒し';
    default: return '';
  }
}

// ✅ JSONからアファメーションメッセージ読み込み
fetch('messages.json')
  .then(response => response.json())
  .then(data => {
    messages = data;
    showRandomMessage(); // 初期表示
  })
  .catch(error => {
    console.error("読み込み失敗:", error);
    const messageBox = document.getElementById('message');
    if (messageBox) {
      messageBox.innerText = "メッセージを取得できませんでした。";
    }
  });


// ✅ テーマ別メッセージ（固定で定義OK）
const themeMessages = {
  relax: [
    "🧘‍♀️ ゆったり深呼吸して、心と体をひと休みさせましょう。",
    "🕊️ 静かな時間が、あなたをリセットしてくれます。",
    "🌿 何もしない時間も、あなたに必要な栄養です。",
    "🍵 ほっと一息、あたたかいお茶でも飲みませんか？",
    "🌙 月の光に包まれるように、今夜は自分を癒してあげましょう。",
    "🛁 お風呂にゆっくりつかる時間も、心のご褒美です。",
    "☁️ 少し立ち止まって、何もしない時間を楽しんで。",
    "💆‍♀️ ゆるめることで、また力が湧いてきます。",
    "🌼 今は「がんばらない」選択も、あなたらしさのひとつです。",
    "🎧 心地よい音楽に身をゆだねて、深呼吸。",
    "🛌 眠る前に、自分に「今日もありがとう」と伝えましょう。",
    "🍃 自然の中で深呼吸するような気持ちで、今を味わって。",
    "🌅 朝日を浴びながら、今日をリセットするつもりでスタートしよう。",
    "💤 無理せず、しっかり休むことも大切なアクションです。",
    "🪷 心と体のバランスを、やさしく整えてあげましょう。"
  ],
  positive: [
    "🌈 小さな一歩が、大きな変化を生みます。",
    "🌟 あなたはあなたのままで素晴らしい存在です。",
    "🔥 今日の努力は、明日のあなたの力になります。",
    "🚀 思いきって進んでみた先に、新しい景色が待っています。",
    "🏃‍♀️ 失敗しても大丈夫。それも前に進んだ証です。",
    "💪 チャンスはいつだって、あなたの中に眠っています。",
    "🪄 未来は、あなたの選択でいくらでも変えられます。",
    "📈 今は小さく見える変化も、やがて大きな実りになります。",
    "🎯 やりたいと思った気持ちが、あなたの原動力になります。",
    "🌞 今日のあなたは、昨日より確実に成長しています。",
    "💫 信じる力が、あなたを望む方向へ導いてくれます。",
    "🗺️ 遠回りに見えても、それはあなたに必要な道です。",
    "🏅 経験すべてが、あなたの強さに変わっていきます。",
    "📖 今日はまだ、あなたの物語の途中。続きが楽しみですね。",
    "⚡ やってみたい！という直感、大切にしてみましょう。"
  ],
  healing: [
    "🍀 あなたの存在だけで、十分に価値があります。",
    "🌸 心が疲れたときは、やさしさで包んであげてください。",
    "🧡 あなたに必要な癒しは、すでに内側にあります。",
    "💖 頑張りすぎた心を、ふんわり抱きしめてあげましょう。",
    "💐 たまには、理由もなく自分を褒めてあげましょう。",
    "🌤️ 少し涙が出るくらいのやさしさ、今のあなたに贈ります。",
    "🫶 誰かと比べる必要はありません。あなたはあなたで素晴らしい。",
    "🍃 心にそっと風を通すように、深呼吸してみてください。",
    "🧸 疲れてるなって思ったら、ただ「休む」を選んでください。",
    "🌼 「今のままの自分でもいい」と思えたら、それだけで癒しです。",
    "✨ そのままで、愛おしい存在です。",
    "📦 無理に整理しなくても、気持ちは自然と落ち着いていきます。",
    "🌺 忘れかけていたやさしさを、自分にも向けてみてください。",
    "📩 あなたの心に「大丈夫」というメッセージを送ります。",
    "🏡 あなたにとっての“心の居場所”は、いつも内側にあります。"
  ]
};


