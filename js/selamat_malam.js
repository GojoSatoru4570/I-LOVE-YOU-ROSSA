// Mendapatkan parameter hadiah dari URL
function getGiftFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("hadiah");
}

// Menampilkan hadiah di halaman
document.addEventListener("DOMContentLoaded", () => {
  const giftMessage = document.getElementById("giftMessage");
  const hadiah = getGiftFromURL();

  if (hadiah) {
    giftMessage.innerText = `Ini hadiah pilihanmu: ${hadiah}! ❤️`;
  } else {
    giftMessage.innerText = "Tidak ada hadiah yang dipilih!";
  }
});
