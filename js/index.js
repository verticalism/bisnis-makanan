let navbarButton = document.getElementById('navbar-button')
let navbarResponsiveUI = document.getElementById('nav-res')

navbarButton.addEventListener('click',() => {
    navbarResponsiveUI.classList.toggle('top-14')
    navbarResponsiveUI.classList.toggle('-translate-y-48')
    // navbarResponsiveUI.classList.toggle('top-14')
    // navbarResponsiveUI.classList.toggle('inherit')
    // navbarResponsiveUI.classList.toggle('hidden')
    console.log('berhasil')
})

function clickFilter (id,){
    let i = document.getElementById('')
}

      function sendwhatsapp(makanan){
       var phonenumber = "+6281358610650";

       var nama = document.getElementById("nama").value;
       var makananKe2 = document.getElementById("menu-tambahan").value;
       var jumlahMakananKe2 = document.getElementById("menu-tambahan-jumlah").value;
       var makananKe3 = document.getElementById("menu-tambahan-ke-2").value;
       var jumlahMakananKe3 = document.getElementById("menu-tambahan-ke-2-jumlah").value;
       var jurusan = document.getElementById("jurusan").value;
       var jumlah = document.getElementById("jumlah").value;
       var catatan = document.getElementById("catatan").value;
       var kelas = document.getElementById("kelas").value

       var url = "https://wa.me/" + phonenumber + "?text="
       +"*Name :* "+nama+"%0a"
       +"*Makanan/minuman utama :* "+makanan+"%0a"
       +"*Jumlah:* "+jumlah+"%0a"
       +"*Menu ke 2 :* "+makananKe2+"%0a"
       +"*Jumlah menu ke 2 :* "+jumlahMakananKe2+"%0a"
       +"*Menu ke 3 :* "+makananKe3+"%0a"
       +"*Jumlah menu ke 3:* "+jumlahMakananKe3+"%0a"
       +"*Jurusan :* "+jurusan+"%0a"
       +"*Kelas:*" +kelas+"%0a"
       +"*Catatan :* "+catatan
       +"%0a%0a"
       +"saya "+nama+" ingin memesan makanan/minuman tersebut";

       window.open(url).focus();
       alert('terima kasih sudah memesan')
       window.location.href = 'index.html'
     }