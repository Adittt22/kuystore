const banners = [
    "image1.webp",
    "image2.jpeg",
    "image3.webp"
];

let currentIndex = 0;
const body = document.body;
const banner = document.getElementById("banner");
const text = document.getElementById("textjalan");
text.innerHTML = `
  <marquee>
    <span>MadebyAdit</span>
    <span>MadebyAdit</span>
    <span>MadebyAdit</span> <span>HALOO</span>
    <span>MadebyAdit</span>
    <span>MadebyAdit</span> <span>HALOO</span>
    <span>MadebyAdit</span>
    <span>MadebyAdit</span>
  </marquee>
`;
function nextSlide() {
    currentIndex++;

    if (currentIndex >= banners.length) {
        currentIndex = 0;
    }

    banner.src = banners[currentIndex];
}
    setInterval(nextSlide, 5000);

function prevSlide() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = banners.length - 1;
    }

    banner.src = banners[currentIndex];
}

const buttons = document.querySelectorAll(".btn-container button");

buttons.forEach(function(button)  {
    button.addEventListener("click", function() {

        // Hapus active dari semua tombol
        buttons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Tambahkan active ke tombol yang diklik
        this.classList.add("active");
    });
});