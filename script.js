const button = document.getElementById("calculateBtn");
const input = document.getElementById("birthdate");
const result = document.getElementById("result");

button.addEventListener("click", calculateAge);

function calculateAge() {
  const inputValue = input.value;
  if (!inputValue) {
    alert("Please Enter your Birth Date");
    return;
  }

  const birthDate = new Date(inputValue);

  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  result.textContent = `You are ${age} year${age !== 1 ? "s" : ""} old.`;
}
