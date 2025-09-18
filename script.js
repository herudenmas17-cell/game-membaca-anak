let score = 0;

const data = [
  { word: "buku", img: "img/buku.jpg" },
  { word: "bola", img: "img/bola.jpg" },
  { word: "rumah", img: "img/rumah.jpg" },
  { word: "kuda", img: "img/kuda.jpg" },
  { word: "sapi", img: "img/sapi.jpg" }
];

let currentWord;

function mulaiGame() {
  buatSoal();
}

function buatSoal() {
  // pilih kata acak
  currentWord = data[Math.floor(Math.random() * data.length)];
  document.getElementById("word").innerText = currentWord.word;

  // ambil 3 opsi acak
  let pilihan = [...data].sort(() => Math.random() - 0.5).slice(0, 3);
  if (!pilihan.includes(currentWord)) pilihan[0] = currentWord;
  pilihan.sort(() => Math.random() - 0.5);

  // tampilkan gambar
  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  pilihan.forEach(item => {
    let img = document.createElement("img");
    img.src = item.img;
    img.className = "option-img";
    img.onclick = () => cekJawaban(item);
    optionsDiv.appendChild(img);
  });

  document.getElementById("feedback").innerText = "";
}

function cekJawaban(item) {
  if (item.word === currentWord.word) {
    score += 10;
    document.getElementById("feedback").innerText = "✅ Benar!";
  } else {
    document.getElementById("feedback").innerText = "❌ Salah!";
  }
  document.getElementById("score").innerText = score;
  setTimeout(buatSoal, 1500);
}

window.onload = mulaiGame;
