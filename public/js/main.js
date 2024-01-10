document.addEventListener("DOMContentLoaded", function () {
  // Get the button element
  const nextButton = document.getElementById("nextButton");
  const previousButton = document.getElementById("previousButton");
  const page1Button = document.getElementById("page1Button");
  const page2Button = document.getElementById("page2Button");
  const page3Button = document.getElementById("page3Button");

  // Get the project areas
  const projectAreas = document.querySelectorAll(".projectArea");

  // Variables
  let page = 1;
  let maxPage = projectAreas.length / 2;

  // Initial state: show the first 2 project areas, hide the rest
  for (let i = 2; i < projectAreas.length; i++) {
    projectAreas[i].style.display = "none";
  }

  function renderProject() {
    if (page === 1) {
      for (let i = 0; i < projectAreas.length; i++) {
        if (i < 2) {
          projectAreas[i].style.display = "flex";
        } else {
          projectAreas[i].style.display = "none";
        }
      }
      page1Button.style.backgroundColor = "#999";
      page2Button.style.backgroundColor = "#fff";
      page3Button.style.backgroundColor = "#fff";
    } else if (page === 2) {
      for (let i = 0; i < projectAreas.length; i++) {
        if (i > 1 && i < 4) {
          projectAreas[i].style.display = "flex";
        } else {
          projectAreas[i].style.display = "none";
        }
      }
      page1Button.style.backgroundColor = "#fff";
      page2Button.style.backgroundColor = "#999";
      page3Button.style.backgroundColor = "#fff";
    } else if (page === 3) {
      for (let i = 0; i < projectAreas.length; i++) {
        if (i > 3 && i < 6) {
          projectAreas[i].style.display = "flex";
        } else {
          projectAreas[i].style.display = "none";
        }
      }
      page1Button.style.backgroundColor = "#fff";
      page2Button.style.backgroundColor = "#fff";
      page3Button.style.backgroundColor = "#999";
    }
  }

  nextButton.addEventListener("click", function () {
    if (page < maxPage) {
      page = page + 1;
      renderProject();
    }
  });

  previousButton.addEventListener("click", function () {
    if (page > 1) {
      page = page - 1;
      renderProject();
    }
  });

  page1Button.addEventListener("click", function () {
    page = 1;
    renderProject();
  });

  page2Button.addEventListener("click", function () {
    page = 2;
    renderProject();
  });

  page3Button.addEventListener("click", function () {
    page = 3;
    renderProject();
  });
});
