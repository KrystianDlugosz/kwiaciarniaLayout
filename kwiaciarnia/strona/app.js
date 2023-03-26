const menuBut = document.querySelector(".fas.fa-bars");
const btnBuy = document.querySelector(".buy");
const goToUpBtn = document.querySelector(".goToTop");


menuBut.addEventListener("click", responsibleMenu);


function responsibleMenu() {
  let menu = document.querySelector("ul");
  let listNav = document.querySelectorAll(".listElement");
  menu.classList.toggle("active");
  menu.classList.toggle("listNotActive");

  if (menu.classList.contains("active")) {
    for (let i = 0; i < listNav.length; i++) {
      listNav.forEach((e) => (e.style.visibility = "visible"));
    }
  } else {
    for (let i = 0; i < listNav.length; i++) {
      listNav.forEach((e) => (e.style.visibility = "hidden"));
    }
  }
}


const btnInfo1 = document.querySelector(".info1");
const btnInfo2 = document.querySelector(".info2");
const btnInfo3 = document.querySelector(".info3");

btnInfo1.addEventListener("click", info1Text);
btnInfo2.addEventListener("click", info2Text);
btnInfo3.addEventListener("click", info3Text);

function info1Text() {
  let text = document.querySelector(".textp");
  text.textContent =
    "Trzydzieści lat minęło jak jeden dzień Emocji moc i wiele pięknych scen Trzydzieści lat minęło, to wzrusza mnie Jak film, lub serial, życie toczy się Ten świat słoneczny uśmiech wciąż dawać chce I prosi, żeby brać Z rodziną na kanapie dowiecie się O co w czym chodzi i czy będzie wiać I chociaż czas pogania, śmiej się z tego drania Bo nas na wiele jeszcze Z Wami na wiele jeszcze Z Wami na wiele jeszcze Stac";
}
function info2Text() {
  let text = document.querySelector(".textp");
  text.textContent =
    "Zaopatrzenie – wszystkie środki materiałowo-techniczne wykorzystywane do wyposażenia, wsparcia i utrzymania wojska[1].Z tym pojęciem wiąże się także termin:zaopatrzenie zasadnicze (ładunek zasadniczy) – produkty, istotne z punktu widzenia dalszego prowadzenia wojny w okresie przetrwania lub do zapewnienia przetrwania narodu w tym okresie, i które powinny być rozładowane tak szybko jak pozwalają na to okoliczności. Obejmują pożywienie, produkty rafinacji ropy, oleje, smary i zaopatrzenie medyczne.punkt zaopatrywania – jest to każdy punkt, w którym wydawane są poszczególne środki materiałowe.";
}
function info3Text() {
  let text = document.querySelector(".textp");
    text.textContent =
    "Witaj w naszej kwiaciarni rodzinnej! Jesteśmy zespołem, którego więzi opierają się na miłości, pasji i dedykacji w pracy, którą wykonujemy. Kwiaciarnia to dla nas nie tylko miejsce pracy, ale przede wszystkim nasza pasja, którą z wielką przyjemnością przekazujemy naszym klientom. Dzięki temu, że jesteśmy rodziną, możemy zagwarantować Ci, że każde zamówienie jest dla nas niezwykle ważne, a każdy klient traktowany jest z indywidualnym podejściem." 
}
  

$(document).ready(function() {
    var scrollToTopBtn = $(".goToTop");
    
    $(window).scroll(function() {
      if ($(window).scrollTop() < $(window).height() / 2) {
        scrollToTopBtn.addClass("showButton");
      } else {
        scrollToTopBtn.removeClass("showButton");
      }
    });
    
    scrollToTopBtn.on("click", function(e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "100");
    });
  });


const newsleter = document.querySelector('#newsletter-form');
const notification = document.querySelector('#newsletter-notification');

newsleter.addEventListener('submit', (event) => {
  event.preventDefault();

  newsleter.style.display = 'none';
  notification.style.display = 'block';
});



const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup-content");
const closeButton = document.querySelector(".close");
const orderButton = document.querySelector(".buy");

function showPopup() {
  popup.style.display = "block";
}

function closePopup() {
  popup.style.display = "none";
}



function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var product = document.getElementById("product").value;
  var quantity = document.getElementById("quantity").value;

  if (name == "" || email == "" || phone == "" || product == "" || quantity == "") {
    alert("Proszę wypełnić wszystkie pola formularza.");
    return false;
  }

  if (!/^[a-zA-Z ]+$/.test(name)) {
    alert("Proszę wprowadzić prawidłowe imię i nazwisko.");
    return false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Proszę wprowadzić prawidłowy adres e-mail.");
    return false;
  }

  if (!/^[0-9]{9}$/.test(phone)) {
    alert("Proszę wprowadzić prawidłowy numer telefonu (9 cyfr).");
    return false;
  }

  if (!/^[0-9]+$/.test(quantity)) {
    alert("Proszę wprowadzić prawidłową ilość (tylko liczby).");
    return false;
  }

  return true;
}

const form = popupContent.querySelector(".orderForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if(validateForm()){
    popupContent.innerHTML = "<h2>Zamówiono!</h2>";
    setTimeout(function(){
      setTimeout(showPopup, 2000);
    });
  }
});

closeButton.addEventListener("click", closePopup);
orderButton.addEventListener("click", showPopup);

window.addEventListener("click", function(event) {
  if (event.target == popup) {
    setTimeout(closePopup, 1000);
  }
});

