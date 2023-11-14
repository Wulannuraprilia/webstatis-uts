// dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function togglePuisi1(event) {
  event.preventDefault();
  const puisi1 = document.getElementById("puisi1");

  if (puisi1.style.display === "none" || puisi1.style.display === "") {
    puisi1.style.display = "block";
  } else {
    puisi1.style.display = "none";
  }
}

function togglePuisi2(event) {
  event.preventDefault();

  const puisi2 = document.getElementById("puisi2");
  if (puisi2.style.display === "none" || puisi2.style.display === "") {
    puisi2.style.display = "block";
  } else {
    puisi2.style.display = "none";
  }
}

function togglePuisi3(event) {
  event.preventDefault();

  const puisi3 = document.getElementById("puisi3");
  if (puisi3.style.display === "none" || puisi3.style.display === "") {
    puisi3.style.display = "block";
  } else {
    puisi3.style.display = "none";
  }
}

function togglePuisi4(event) {
  event.preventDefault();

  const puisi4 = document.getElementById("puisi4");
  if (puisi4.style.display === "none" || puisi4.style.display === "") {
    puisi4.style.display = "block";
  } else {
    puisi4.style.display = "none";
  }
}

function togglePuisi5(event) {
  event.preventDefault();

  const puisi5 = document.getElementById("puisi5");
  if (puisi5.style.display === "none" || puisi5.style.display === "") {
    puisi5.style.display = "block";
  } else {
    puisi5.style.display = "none";
  }
}

function togglePuisi6(event) {
  event.preventDefault();

  const puisi6 = document.getElementById("puisi6");
  if (puisi6.style.display === "none" || puisi6.style.display === "") {
    puisi6.style.display = "block";
  } else {
    puisi6.style.display = "none";
  }
}
