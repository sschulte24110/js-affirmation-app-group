onReady();

function onReady() {
  console.log('Javascript is working!');
}

function fireButton(event) {
  // console.log('fire button');
  const fireEmoji = document.getElementById('emoji-div'); // Target where you want the new item to be inserted
  fireEmoji.innerHTML += `<div>🔥</div>`;
}

function iceButton(event) {
  // console.log('ice button');
  const iceEmoji = document.getElementById('emoji-div');
  iceEmoji.innerHTML += `<div>❄️</div>`;
}
