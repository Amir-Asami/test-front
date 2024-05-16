const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");


document.addEventListener('DOMContentLoaded', function() {
  const userImage = document.getElementById("userImage");

  userImage.addEventListener('click', function() {
      // هدایت کاربر به صفحه لاگین
      window.location.href = 'login.html'; // تغییر این URL به مسیر صحیح صفحه لاگین شما
  });
});

user.addEventListener("click", () => {
  nav.classList.add("active");
});

bar.addEventListener("click", () => {
  nav.classList.add("active");
});

close.addEventListener("click", () => {
  nav.classList.remove("active");
});

let pro = Array.from(document.querySelectorAll(".pro"));

pro.forEach((e) => {
  e.addEventListener("click", function () {
    window.location.href = "sproduct.html";
  });
});
