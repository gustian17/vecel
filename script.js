// Script jQuery untuk animasi hover pada elemen dengan kelas "hobi"
$(document).ready(function(){
    $(".hobi").hover(function(){
        $(this).find("img").fadeOut("slow");
    }, function(){
        $(this).find("img").fadeIn("slow");
    });
});

// menampilkan alert saat tombol submit ditekan
function submitKomentar() {
    alert("Terima kasih atas komentar Anda! Komentar Anda telah dikirim.");
}

// menampilkan alert saat gambar profil diklik
document.getElementById("profile-pic").addEventListener("click", function() {
    alert("Hallo, nama saya Gustian Mawahir lagi belajar bikin web nih!");
});
