const openBtn = document.getElementById('openGift');
const closeBtn = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const typingText = document.getElementById('typingText');

const message = `Aku mungkin nggak selalu bisa bilang langsung…\n\nTapi aku ingin kamu tahu, dari semua hal yang terjadi dalam hidupku—kenal kamu adalah salah satu yang terbaik.\n\nKamu selalu tahu caranya membuat orang lain tersenyum, bahkan saat kamu sendiri sedang lelah.\n\nDan aku… semakin hari, makin merasa kagum.\n\nSemoga di tahun ini, kamu bisa lebih sering bahagia, dan lebih jarang merasa sendiri.\n\nKalau boleh… aku ingin jadi bagian kecil dari kebahagiaan itu.`;

let i = 0;

openBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
  typingText.innerHTML = '';
  i = 0;
  typeWriter();
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

function typeWriter() {
  if (i < message.length) {
    typingText.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 35); // Ketik huruf per huruf
  }
}
