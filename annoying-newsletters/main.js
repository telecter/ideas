const newsletterPopup = document.getElementById("newsletter");
const donePopup = document.getElementById("done");
const noBtn = document.getElementById("no");

let deg = 0;
let size = 1;

noBtn.addEventListener("click", () => {
  deg += 10;
  size -= 0.1;
  noBtn.style.transform = `rotate(${deg}deg)`;
  noBtn.style.scale = size;
});

function displayNewsletterPopup() {
  newsletterPopup.showModal();
}
function displayDonePopup() {
  newsletterPopup.close();
  donePopup.showModal();
}
