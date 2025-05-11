// Cache DOM elements
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menu = document.getElementById("navigationHeader");
const downarrow = document.getElementById("downarrow");
const header = document.getElementById("navigationHeader");
const startContainer = document.getElementById("startContainer");

let isSmallScreen = true;
let sticky = header.offsetTop;
let initOffset = startContainer.clientHeight;

// Utility function to update offsets
function updateOffsets() {
  sticky = header.offsetTop;
  initOffset = startContainer.clientHeight;
}

// Handle window resizing and update UI accordingly
function handleResize() {
  const isCurrentlySmallScreen = window.innerWidth <= 1200;

  if (isCurrentlySmallScreen !== isSmallScreen) {
    isSmallScreen = isCurrentlySmallScreen;

    if (isSmallScreen) {
      menuBtn.style.visibility = "visible";
      downarrow.hidden = true;
      closeBtn.hidden = false;
      menu.style.width = "0%";
    } else {
      menuBtn.style.visibility = "hidden";
      downarrow.hidden = false;
      closeBtn.hidden = true;
      menu.style.width = "100%";
    }

    updateOffsets();
  }
}

// Handle the sticky header functionality on scroll
function handleScroll() {
  if (!isSmallScreen) {
    if (window.scrollY > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}

// Open the menu for small screens
function openMenu() {
  menuBtn.style.visibility = "hidden";
  menu.style.width = "100%";
}

// Close the menu for small screens
function closeMenu() {
  if (isSmallScreen) {
    menuBtn.style.visibility = "visible";
    menu.style.width = "0%";
  }
}

// Event listeners
window.addEventListener("load", handleResize);
window.addEventListener("resize", handleResize);
window.addEventListener("scroll", handleScroll);
closeBtn.addEventListener("click", closeMenu);
menuBtn.addEventListener("click", openMenu);

// Initial offset update on load
updateOffsets();

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
});

// //animation on scroll
// document.querySelectorAll(".section").forEach((section) => {
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) entry.target.classList.add("visible");
//       });
//     },
//     { threshold: 0.1 }
//   );
//   observer.observe(section);
// });

/* 
window.onload = function () {
  var Vbtn0 = document.getElementById("Vbtn0");
  var Vbtn1 = document.getElementById("Vbtn1");
  var Vbtn2 = document.getElementById("Vbtn2");
  var Vbtn3 = document.getElementById("Vbtn3");

  var p00 = document.getElementById("p00");
  var p01 = document.getElementById("p01");
  var p02 = document.getElementById("p02");
  var p03 = document.getElementById("p03");
  var p04 = document.getElementById("p04");
  var p05 = document.getElementById("p05");
  var p06 = document.getElementById("p06");
  var Pbtn00 = document.getElementById("Pbtn00");
  var Pbtn01 = document.getElementById("Pbtn01");
  var Pbtn02 = document.getElementById("Pbtn02");
  var Pbtn03 = document.getElementById("Pbtn03");
  var Pbtn04 = document.getElementById("Pbtn04");
  var Pbtn05 = document.getElementById("Pbtn05");
  var Pbtn06 = document.getElementById("Pbtn06");
  var p10 = document.getElementById("p10");
  var p11 = document.getElementById("p11");
  var p12 = document.getElementById("p12");
  var p13 = document.getElementById("p13");
  var p14 = document.getElementById("p14");
  var p15 = document.getElementById("p15");
  var p16 = document.getElementById("p16");
  var Pbtn10 = document.getElementById("Pbtn10");
  var Pbtn11 = document.getElementById("Pbtn11");
  var Pbtn12 = document.getElementById("Pbtn12");
  var Pbtn13 = document.getElementById("Pbtn13");
  var Pbtn14 = document.getElementById("Pbtn14");
  var Pbtn15 = document.getElementById("Pbtn15");
  var Pbtn16 = document.getElementById("Pbtn16");
  var p20 = document.getElementById("p20");
  var p21 = document.getElementById("p21");
  var p22 = document.getElementById("p22");
  var p23 = document.getElementById("p23");
  var p24 = document.getElementById("p24");
  var p25 = document.getElementById("p25");
  var p26 = document.getElementById("p26");
  var Pbtn20 = document.getElementById("Pbtn20");
  var Pbtn21 = document.getElementById("Pbtn21");
  var Pbtn22 = document.getElementById("Pbtn22");
  var Pbtn23 = document.getElementById("Pbtn23");
  var Pbtn24 = document.getElementById("Pbtn24");
  var Pbtn25 = document.getElementById("Pbtn25");
  var Pbtn26 = document.getElementById("Pbtn26");
  var p30 = document.getElementById("p30");
  var p31 = document.getElementById("p31");
  var p32 = document.getElementById("p32");
  var p33 = document.getElementById("p33");
  var p34 = document.getElementById("p34");
  var p35 = document.getElementById("p35");
  var p36 = document.getElementById("p36");
  var Pbtn30 = document.getElementById("Pbtn30");
  var Pbtn31 = document.getElementById("Pbtn31");
  var Pbtn32 = document.getElementById("Pbtn32");
  var Pbtn33 = document.getElementById("Pbtn33");
  var Pbtn34 = document.getElementById("Pbtn34");
  var Pbtn35 = document.getElementById("Pbtn35");
  var Pbtn36 = document.getElementById("Pbtn36");
  var row0 = document.getElementById("row0");
  var row1 = document.getElementById("row1");
  var row2 = document.getElementById("row2");
  var row3 = document.getElementById("row3");

  p00.style.display = "none";
  p01.style.display = "none";
  p02.style.display = "none";
  p03.style.display = "none";
  p04.style.display = "none";
  p05.style.display = "none";
  p06.style.display = "none";

  p10.style.display = "none";
  p11.style.display = "none";
  p12.style.display = "none";
  p13.style.display = "none";
  p14.style.display = "none";
  p15.style.display = "none";
  p16.style.display = "none";

  p20.style.display = "none";
  p21.style.display = "none";
  p22.style.display = "none";
  p23.style.display = "none";
  p24.style.display = "none";
  p25.style.display = "none";
  p26.style.display = "none";

  p30.style.display = "none";
  p31.style.display = "none";
  p32.style.display = "none";
  p33.style.display = "none";
  p34.style.display = "none";
  p35.style.display = "none";
  p36.style.display = "none";

  row0.style.display = "block";
  row1.style.display = "none";
  row2.style.display = "none";
  row3.style.display = "none";



  Pbtn00.addEventListener("click", function (event) {
    if (p00.style.display == "none") {
      p00.style.display = "block";
    } else {
      p00.style.display = "none";
    }
  });

  Pbtn01.addEventListener("click", function (event) {
    if (p01.style.display == "none") {
      p01.style.display = "block";
    } else {
      p01.style.display = "none";
    }
  });
  Pbtn02.addEventListener("click", function (event) {
    if (p02.style.display == "none") {
      p02.style.display = "block";
    } else {
      p02.style.display = "none";
    }
  });
  Pbtn03.addEventListener("click", function (event) {
    if (p03.style.display == "none") {
      p03.style.display = "block";
    } else {
      p03.style.display = "none";
    }
  });
  Pbtn04.addEventListener("click", function (event) {
    if (p04.style.display == "none") {
      p04.style.display = "block";
    } else {
      p04.style.display = "none";
    }
  });
  Pbtn05.addEventListener("click", function (event) {
    if (p05.style.display == "none") {
      p05.style.display = "block";
    } else {
      p05.style.display = "none";
    }
  });
  Pbtn06.addEventListener("click", function (event) {
    if (p06.style.display == "none") {
      p06.style.display = "block";
    } else {
      p06.style.display = "none";
    }
  });
  Pbtn10.addEventListener("click", function (event) {
    if (p10.style.display == "none") {
      p10.style.display = "block";
    } else {
      p10.style.display = "none";
    }
  });

  Pbtn11.addEventListener("click", function (event) {
    if (p11.style.display == "none") {
      p11.style.display = "block";
    } else {
      p11.style.display = "none";
    }
  });
  Pbtn12.addEventListener("click", function (event) {
    if (p12.style.display == "none") {
      p12.style.display = "block";
    } else {
      p12.style.display = "none";
    }
  });
  Pbtn13.addEventListener("click", function (event) {
    if (p13.style.display == "none") {
      p13.style.display = "block";
    } else {
      p13.style.display = "none";
    }
  });
  Pbtn14.addEventListener("click", function (event) {
    if (p14.style.display == "none") {
      p14.style.display = "block";
    } else {
      p14.style.display = "none";
    }
  });
  Pbtn15.addEventListener("click", function (event) {
    if (p15.style.display == "none") {
      p15.style.display = "block";
    } else {
      p15.style.display = "none";
    }
  });
  Pbtn16.addEventListener("click", function (event) {
    if (p16.style.display == "none") {
      p16.style.display = "block";
    } else {
      p16.style.display = "none";
    }
  });

  Pbtn20.addEventListener("click", function (event) {
    if (p20.style.display == "none") {
      p20.style.display = "block";
    } else {
      p20.style.display = "none";
    }
  });

  Pbtn21.addEventListener("click", function (event) {
    if (p21.style.display == "none") {
      p21.style.display = "block";
    } else {
      p21.style.display = "none";
    }
  });
  Pbtn22.addEventListener("click", function (event) {
    if (p22.style.display == "none") {
      p22.style.display = "block";
    } else {
      p22.style.display = "none";
    }
  });
  Pbtn23.addEventListener("click", function (event) {
    if (p23.style.display == "none") {
      p23.style.display = "block";
    } else {
      p23.style.display = "none";
    }
  });
  Pbtn24.addEventListener("click", function (event) {
    if (p24.style.display == "none") {
      p24.style.display = "block";
    } else {
      p24.style.display = "none";
    }
  });
  Pbtn25.addEventListener("click", function (event) {
    if (p25.style.display == "none") {
      p25.style.display = "block";
    } else {
      p25.style.display = "none";
    }
  });
  Pbtn26.addEventListener("click", function (event) {
    if (p26.style.display == "none") {
      p26.style.display = "block";
    } else {
      p26.style.display = "none";
    }
  });

  Pbtn30.addEventListener("click", function (event) {
    if (p30.style.display == "none") {
      p30.style.display = "block";
    } else {
      p30.style.display = "none";
    }
  });

  Pbtn31.addEventListener("click", function (event) {
    if (p31.style.display == "none") {
      p31.style.display = "block";
    } else {
      p31.style.display = "none";
    }
  });
  Pbtn32.addEventListener("click", function (event) {
    if (p32.style.display == "none") {
      p32.style.display = "block";
    } else {
      p32.style.display = "none";
    }
  });
  Pbtn33.addEventListener("click", function (event) {
    if (p33.style.display == "none") {
      p33.style.display = "block";
    } else {
      p33.style.display = "none";
    }
  });
  Pbtn34.addEventListener("click", function (event) {
    if (p34.style.display == "none") {
      p34.style.display = "block";
    } else {
      p34.style.display = "none";
    }
  });
  Pbtn35.addEventListener("click", function (event) {
    if (p35.style.display == "none") {
      p35.style.display = "block";
    } else {
      p35.style.display = "none";
    }
  });
  Pbtn36.addEventListener("click", function (event) {
    if (p36.style.display == "none") {
      p36.style.display = "block";
    } else {
      p36.style.display = "none";
    }
  });

  Vbtn0.addEventListener("click", function (event) {
    if (row0.style.display == "none") {
      row0.style.display = "block";
      row1.style.display = "none";
      row2.style.display = "none";
      row3.style.display = "none";
    }
  })
  Vbtn1.addEventListener("click", function (event) {
    if (row1.style.display == "none") {
      row0.style.display = "none";
      row1.style.display = "block";
      row2.style.display = "none";
      row3.style.display = "none";
    }
  })
  Vbtn2.addEventListener("click", function (event) {
    if (row2.style.display == "none") {
      row0.style.display = "none";
      row1.style.display = "none";
      row2.style.display = "block";
      row3.style.display = "none";
    }
  })
  Vbtn3.addEventListener("click", function (event) {
    if (row3.style.display == "none") {
      row0.style.display = "none";
      row1.style.display = "none";
      row2.style.display = "none";
      row3.style.display = "block";
    }
  })
}
 */
