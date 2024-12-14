function sendMessageToWhatsapp() {
  console.log(nama.value);
  console.log(pesan.value);
  
  const urlToWhatsapp = `https://wa.me/6289692408800?text=Hallo20%nama20%saya ${nama.value},${pesan.value}`;
  window.open(urlToWhatsapp,"_blank");
}