const buttonSubmit = document.getElementById("button");

buttonSubmit.addEventListener("click", () => {
  const inputFeilds = document.getElementsByClassName("input");
  let isValid = false;
  const validInputs = Array.from(inputFeilds).filter((input) => {
    if (input.value == "") {
      input.style.borderColor = "red";
    }
  });
});
