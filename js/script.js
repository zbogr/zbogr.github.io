(function () {
  var burger = document.querySelector(".burger");
  var header = document.getElementById("header");
  if (!burger || !header) return;

  var mq = window.matchMedia("(max-width: 992px)");

  function setOpen(open) {
    header.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("menu-lock", open);
  }

  burger.addEventListener("click", function () {
    setOpen(!header.classList.contains("menu-open"));
  });

  header.querySelectorAll(".header__panel a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  mq.addEventListener("change", function (event) {
    if (!event.matches) setOpen(false);
  });
})();
