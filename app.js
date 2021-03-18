const dugme = document.getElementById("dugme");
const uzimanjeFrame = document.getElementById("myname");
const uzimanjeLinkova = document.getElementById("link");
const pisanjeLinka = document.getElementById("fname");

function linkovi(videoID) {
  videoID = pisanjeLinka.value;
  let ID = videoID.replace("https://youtu.be/", " ");
  uzimanjeLinkova.src = `https://www.yt2mp3s.me/@api/button/mp3/${ID}`;
  console.log(ID);
  uzimanjeLinkova.width = "100%";
  uzimanjeLinkova.height = "100%";
}

dugme.addEventListener("click", linkovi);
