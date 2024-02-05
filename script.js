var darkModeSwitch = document.querySelector('#Dark-Mode-Switch');
var darkModetoggleIsOn = false;

let userplan = "";
let userplanDurations = "Monthly plan";

var yearlyPlanPrice = document.getElementsByClassName("yearly-description");
var Yearlyoffer = document.querySelectorAll('.yearly-offer');
var yrunit = document.querySelectorAll('.yr');
let PlanPrice = "";


//Change Monthly to yearly Plan
darkModeSwitch.addEventListener('click', function () {
  if (darkModetoggleIsOn === false) {
    darkModeSwitch.style.justifyContent = 'flex-end';
    darkModetoggleIsOn = true;
    userplanDurations = "Yearly plan";
    for (var i = 0; i < Yearlyoffer.length; i++) {
      Yearlyoffer[i].style.visibility = "visible";
    }
    for (var i = 0; i < yearlyPlanPrice.length; i++) {
      yearlyPlanPrice[i].style.display = 'contents';
    }
    for (var i = 0; i < yrunit.length; i++) {
      yrunit[i].innerHTML = "سنة";
    }

  } else {
    darkModeSwitch.style.justifyContent = 'flex-start';
    darkModetoggleIsOn = false;
    userplanDurations = "Monthly plan";
    for (var i = 0; i < Yearlyoffer.length; i++) {
      Yearlyoffer[i].style.visibility = "hidden";
    }
    for (var i = 0; i < yearlyPlanPrice.length; i++) {
      yearlyPlanPrice[i].style.display = 'none';
    }
    for (var i = 0; i < yrunit.length; i++) {
      yrunit[i].innerHTML = "شهر";
    }
  }
  turnOnDarkModeColors();
  return darkModetoggleIsOn;
});

// Change Form Steps

const formSteps = document.querySelectorAll('.form-step');

for (let i = 0; i < formSteps.length; i++) {
  formSteps[i].style.display = 'none';
}

let currentStep = 0;
formSteps[currentStep].style.display = 'block';

const stepIndicators = document.querySelectorAll('.step-indicator');
stepIndicators[currentStep].classList.add('active');
const nextBtn = document.querySelector('.next-step');
nextBtn.addEventListener('click', () => {
  if (currentStep === 2) {
    nextBtn.innerHTML = "تأكيد";
  }
  if(currentStep == 3){
    nextBtn.style.display = "none";
    backBtn.style.display = "none"; 
    

  }
  if (currentStep === 0 && userplan == "") {
    nextBtn.disabled ? true : false;
    }

  var UserPlanSelected = document.getElementsByClassName('plan-selected')[0];
  UserPlanSelected.innerHTML = userplan ? `${userplan.charAt(0).toUpperCase() + userplan.slice(1)} (${userplanDurations})` : '';
  finalPlanPrice.innerHTML = PlanPrice;
  


  backBtn.style.visibility = 'visible';
  let valid = true;
  const inputs = form.querySelectorAll('input[required]');
  inputs.forEach(function (input) {
    if (!input.checkValidity()) {
      valid = false;
      input.style.border = '1px solid red';
    } else {
      input.style.border = '';
    }
  });

  if (valid) {

  } else {
    alert('رجاء املئ جميع الحقول المطلوبة');
    if (currentStep === 0) return;
  }
  if (currentStep === formSteps.length - 1) return;
  formSteps[currentStep].style.display = 'none';
  stepIndicators[currentStep].classList.remove('active');
  currentStep++;
  formSteps[currentStep].style.display = 'block';
  stepIndicators[currentStep].classList.add('active');
});

const backBtn = document.querySelector('.go-back-button');
backBtn.addEventListener('click', () => {
  if (currentStep === 0) return;
  nextBtn.innerHTML = "الخطوة التالية";
  formSteps[currentStep].style.display = 'none';
  stepIndicators[currentStep].classList.remove('active');
  currentStep--;
  formSteps[currentStep].style.display = 'block';
  stepIndicators[currentStep].classList.add('active');
});

const form = document.querySelector('.user-input');
var finalPlanPrice = document.getElementsByClassName('final-plan-price')[0];
var addfinal = document.getElementsByClassName('user-selected-add-ons')[0];

function checkAddOns() {
  let addOns = new Set();
  let addOnOptions = document.querySelectorAll('.opts');

  for (let option of addOnOptions) {
    let addOnInput = option.querySelector('input[type="checkbox"]');
    addOnInput.checked
    ? (option.style.border = "1px solid blue",
        addOns.add(`${option.querySelector('h3').textContent} (${option.querySelector('.option-price').textContent})`))
    : (option.style.border = "");
  }

  addOns.size
  ? (addfinal.innerHTML = "",
    addOns.forEach(addon => {
      let addonDiv = document.createElement("div");
      addonDiv.innerHTML = addon;
      addfinal.appendChild(addonDiv);
    }))
  : (addfinal.innerHTML = "لم يتم اختيار أي اضافة");
}











