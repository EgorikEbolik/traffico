let questions = document.querySelectorAll(".faq__questions-grid__item");

questions.forEach(element => {
  let answer = element.querySelector(".faq__questions-grid__item__answer");
  let question = element.querySelector(".faq__questions-grid__item__question");
  question.setAttribute("tabindex", 0);
  console.log(question.attributes);

  element.onclick = function ()  {
    answer.classList.toggle("answer-active");
  }
});