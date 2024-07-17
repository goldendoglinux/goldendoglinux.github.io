const lis = document.querySelectorAll(".conteinerFaqs ul li");
const sections = document.querySelectorAll(".conteinerFaqs section");

lis.forEach((li, index) => {

  li.addEventListener("click", () => {

    sections.forEach((section) => {
      section.classList.remove("active");
    });

    sections[index].classList.add("active");

    lis.forEach((li) => {
      li.classList.remove("activeLi");
    });

    lis[index].classList.add("activeLi");

  });
});