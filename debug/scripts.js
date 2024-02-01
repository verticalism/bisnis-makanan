// script.js

function sendWhatsAppMessage() {
    // Mendapatkan nilai input dari formulir
    var phoneNumber = document.getElementById('phoneNumber').value;
    var message = document.getElementById('message').value;

    // Membuat URL untuk mengirim pesan WhatsApp
    var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Buka URL di jendela baru atau tab
    window.open(whatsappURL, '_blank');
}
