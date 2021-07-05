// form to googlesheets
const scriptURL = "https://script.google.com/macros/s/AKfycbyUl83TKWsVVEbJtjd2429zBQB1nCkQHgQjqhLhzRr-b_Trdky_m86s4oV4YTxeSpjo/exec";
const form = document.forms["badak-gunung-form"];
const btnKirim = document.querySelector(".button-kirim");
const btnLoading = document.querySelector(".button-loading");
const myAlert = document.querySelector(".my-alerto");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // klik book, ganti btn-loading, btn-book ilang
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // btn-loading ilang, btn-book muncul
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// slider
const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 625,
  transition: 700,
  interval: 3000,
});
