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
       var jurusan = document.getElementById("jurusan").value;
       var jumlah = document.getElementById("jumlah").value;
       var catatan = document.getElementById("catatan").value;
       var kelas = document.getElementById("kelas").value

       var url = "https://wa.me/" + phonenumber + "?text="
       +"*Name :* "+nama+"%0a"
       +"*Makanan :* "+makanan+"%0a"
       +"*Jurusan :* "+jurusan+"%0a"
       +"*Kelas:*" +kelas+"%0a"
       +"*Jumlah:* "+jumlah+"%0a"
       +"*Catatan :* "+catatan
       +"%0a%0a"
       +"saya "+nama+" ingin memesan makanan/minuman tersebut";

       window.open(url).focus();
       alert('terima kasih sudah memesan')
       window.location.href = 'index.html'
     }