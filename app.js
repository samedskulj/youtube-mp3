const dugme = document.getElementById("dugme");
const uzimanjeFrame = document.getElementById("myname");
const uzimanjeLinkova = document.getElementById("link");
const pisanjeLinka = document.getElementById("fname");

function linkovi(videoID) {
    videoID = pisanjeLinka.value;
    uzimanjeLinkova.src = `https://www.yt-download.org/api/button/mp3/${videoID}`;
    uzimanjeLinkova.width = "100%";
    uzimanjeLinkova.height = "100%";
   
}

dugme.addEventListener("click", linkovi);