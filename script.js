onReady();
let fireCounter = 0;
let iceCounter = 0;

function onReady() {
  console.log('Javascript is working!');
}

function fireButton(event) {
  // console.log('fire button');
  const fireEmoji = document.getElementById('emoji-div'); // Target where you want the new item to be inserted
  fireEmoji.innerHTML += `<div>🔥</div>`;

  fireCounter++;
  console.log(fireCounter);
}

function iceButton(event) {
  // console.log('ice button');
  const iceEmoji = document.getElementById('emoji-div');
  iceEmoji.innerHTML += `<div>❄️</div>`;

  iceCounter++;
  console.log(iceCounter);
}

function createAffirmation(event) {
  // console.log('Affirmation');
  event.preventDefault();
  const affirmation = document.getElementById('affirmation-input');
  const author = document.getElementById('author-input');
  // console.log(`${affirmation.value}, ${author.value}`);

  if (fireCounter >= iceCounter) {
    document.getElementById('table-body').innerHTML += `
  <tr>
    <td>${affirmation.value}</td>
    <td>${author.value}</td>
    <td><button class="button-color" onclick="deleteAffirmation(event)">&#x2718</button></td>
  </tr>
  `;
  }
  affirmation.value = ``;
  author.value = ``;
}

function deleteAffirmation(event) {
  if (iceCounter >= fireCounter) {
    event.target.closest('tr').remove();
  }
}
