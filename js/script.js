// Menampilkan pesan "Selamat Malam" dan tombol "Lihat Hadiah" dengan animasi
function showGreeting() {
  const greetingMessage = document.getElementById("greetingMessage");
  const seeGiftButton = document.getElementById("seeGiftButton");
  const loveButton = document.getElementById("loveButton");

  greetingMessage.style.display = "block";
  seeGiftButton.style.display = "inline-block";

  // Tambahkan kelas animasi
  greetingMessage.classList.add("fade-in");
  seeGiftButton.classList.add("slide-up");

  // Sembunyikan tombol love setelah diklik
  loveButton.style.display = "none";
}

// Menampilkan dropdown hadiah dengan animasi dan tombol "Tampilkan Hadiah"
function chooseGift() {
  document.getElementById("giftLabel").style.display = "block";
  document.getElementById("gift").style.display = "inline-block";
  document.getElementById("showGiftButton").style.display = "inline-block";

  // Tambahkan kelas animasi slide-up
  document.getElementById("showGiftButton").classList.add("slide-up");
}

// Menampilkan hadiah dan mengarahkan ke halaman selamat malam dengan hadiah sebagai parameter URL
function showGift() {
  const giftSelect = document.getElementById("gift");
  const selectedGift = giftSelect.value;

  if (selectedGift) {
    // Arahkan ke halaman selamat malam dengan hadiah sebagai parameter URL
    window.location.href = `selamat_malam.html?hadiah=${encodeURIComponent(selectedGift)}`;
  } else {
    alert("Silakan pilih hadiah terlebih dahulu!");
  }
}
