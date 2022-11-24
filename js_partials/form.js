const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

const summaryInfo = document.querySelector(".summary-info");
const summary = document.createElement("p");
summaryInfo.append(summary);

const submitBtn = document.querySelector(".form__submit-btn");
submitBtn.disabled = true;

const date = document.getElementById("deliveryDate");
const day = new Date().getDate();
const minDate = new Date();
minDate.setDate(day + 1);
const dateSetUp = `${minDate.getFullYear()}-${
  minDate.getMonth() + 1
}-${minDate.getDate()}`;
date.setAttribute("min", dateSetUp);

const selectedAmount = () => {
  let chosenBox = document.querySelectorAll(".checkbox:checked");
  if (chosenBox.length >= max + 1) return false;
};
const checkRefs = document.querySelectorAll(".checkbox");
const max = 2;
for (let i = 0; i < checkRefs.length; i += 1) {
  checkRefs[i].onclick = selectedAmount;
}

submitBtn.addEventListener("click", onBtnClick);
form.addEventListener("submit", function (event) {
  event.preventDefault();
  orderInfo(event.target);
});

inputs.forEach((input) => {
  input.addEventListener(
    "invalid",
    () => {
      input.classList.add("on-error");
      onBtnClick();
    },
    false
  );
  input.addEventListener("blur", () => {
    input.checkValidity();
    const onError = document.querySelector(`#${input.id} + p.on-error`);
    showError(input, onError);
  });
});

inputs.forEach((input) => {
  const onError = document.querySelector(`#${input.id} + p.on-error`);
  if (!input || !onError) {
    return;
  }
  input.addEventListener("input", () => {
    input.checkValidity();
    if (input.validity.valid) {
      onError.textContent = "";
      input.classList.remove("on-error");
      onBtnClick();
    } else {
      showError(input, onError);
    }
  });
});

function onBtnClick() {
  const btnValid = Array.from(inputs)
    .map((input) => input.validity)
    .every(
      (validity) => validity.valid === true && validity.valueMissing === false
    );

  submitBtn.disabled = btnValid === false;
}

function showError(input, onError) {
  if (!input || input === "null") return;
  if (!onError) return;

  if (input.validity.valueMissing)
    onError.textContent = "This field is required";

  if (
    input.validity.rangeUnderflow ||
    input.validity.tooShort ||
    input.validity.patternMismatch
  )
    onError.textContent = input.getAttribute("pattern-error-message");
}

function orderInfo(form) {
  const formData = new FormData(form);
  const customer = Object.fromEntries(formData);
  console.log(customer);

  const street = customer.street;
  const house = customer.houseNumber;
  const apartment = customer.apartmentNumber;
  const name = customer.firstName;
  const surname = customer.lastName;

  summary.innerText = `The delivery address is ${street},${house} apartment ${apartment}. Customer is ${name} ${surname}.`;

  document.querySelector(".form").style.display = "none";
  document.querySelector(".summary-info").style.display = "flex";
}
