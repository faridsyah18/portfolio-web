// Mengambil semua elemen <a> di dalam .nav-desktop-left
const navLinks = document.querySelectorAll('.nav-desktop-left a');

// Mengambil semua elemen <h1>
const headings = document.querySelectorAll('.judul .sub-header h1');

// Mendaftarkan event listener untuk setiap elemen <a>
navLinks.forEach((link, index) => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Menghentikan perilaku default dari tautan

    // Menghapus kelas .active dari semua elemen <a>
        navLinks.forEach(link => {
            link.classList.remove('active');
        });

    // Menambahkan kelas .active pada elemen <a> yang diklik
        this.classList.add('active');
    });
});
