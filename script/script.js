$(document).ready(function () {
  $(this).scrollTop(0);
  $(document).scroll(function () {
    if (window.scrollY == 0) {
      $(".navbar")
        .removeClass("bg-opacity", "slow")
        .addClass("bg-nothing", "slow");
    } else if (window.scrollY > 0) {
      $(".navbar")
        .removeClass("bg-nothing", "slow")
        .addClass("bg-opacity", "slow");
    }
    changeActiveMenu();
  });
  $(".navbar a").click(function (event) {
    event.preventDefault();
    if ($(this).attr("href") == "#home") {
      $("html, body").animate(
        { scrollTop: $($(this).attr("href")).offset().top },
        100
      );
    } else {
      $("html, body").animate(
        { scrollTop: $($(this).attr("href")).offset().top + 5 },
        100
      );
    }
  });
  $('[data-toggle="tooltip"]').tooltip();
  $("#myTooltip").tooltip();
  observadorEfectos();
  $(".navbar-collapse a").click(function () {
    if ($("#home").css("margin-top") == "250px") {
      $("#home").css("margin-top", "0px");
    }
    $(".navbar-collapse").collapse("hide");
  });
  $(".navbar-toggler").click(function () {
    if ($(window).scrollTop() == 0) {
      if ($(this).hasClass("collapsed")) {
        $(".navbar").addClass("bg-nothing");
        $(".navbar").removeClass("bg-opacity");
        $("#home").css("margin-top", "0px");
      } else {
        $(".navbar").addClass("bg-opacity");
        $(".navbar").removeClass("bg-nothing");
        $("#home").css("margin-top", "250px");
      }
    } else {
      if ($("#home").css("margin-top") == "250px") {
        $("#home").css("margin-top", "0px");
      }
    }
  });
});
function changeActiveMenu() {
  var scrollTop = $(window).scrollTop() + $(window).height();
  $("section").each(function () {
    var id = $(this).attr("id");
    offset = $(this).offset().top + 1;
    height = $(this).height();
    if (scrollTop >= offset && scrollTop < offset + height) {
      $(".navbar a").removeClass("active");
      $(".navbar")
        .find("[data-scroll='" + id + "']")
        .addClass("active");
    }
  });
}
function downloadCV() {
  downloadInstance = document.createElement("a");
  downloadInstance.href = "assests/cv.pdf";
  downloadInstance.target = "_blank";
  downloadInstance.download = "CV Sergio Alcázar";
  document.body.appendChild(downloadInstance);
  downloadInstance.click();
  document.body.removeChild(downloadInstance);
}
function observadorEfectos() {
  const tituloAbout = document.getElementById("tituloabout");
  const tituloProjects = document.getElementById("tituloprojects");
  const tituloContact = document.getElementById("titulocontact");
  const lenguajes = document.getElementById("lenguajes");
  const buttonDownload = document.getElementById("buttondownload");
  const textoAbout = document.getElementById("textoabout");
  const textoProjects = document.getElementById("textoprojects");
  const tallermadrid = document.getElementById("tallermadrid");
  const tienda = document.getElementById("tienda");
  const gym = document.getElementById("gym");
  const tituloSkills = document.getElementById("tituloskills");
  const textoSkills = document.getElementById("textoskills");
  const cajaSkills = document.getElementById("boxskills");
  const contacticons = document.getElementById("contacticons");
  const cargarTitulo = (entradas, observador) => {
    entradas.forEach((element) => {
      if (element.isIntersecting) {
        element.target.classList.add("efecto");
      }
    });
  };
  const observador = new IntersectionObserver(cargarTitulo, {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });
  observador.observe(tituloAbout);
  observador.observe(tituloProjects);
  observador.observe(tituloContact);
  observador.observe(lenguajes);
  observador.observe(buttonDownload);
  observador.observe(textoAbout);
  observador.observe(textoProjects);
  observador.observe(tallermadrid);
  observador.observe(tienda);
  observador.observe(gym);
  observador.observe(tituloSkills);
  observador.observe(textoSkills);
  observador.observe(contacticons);
  observador.observe(cajaSkills);
}
