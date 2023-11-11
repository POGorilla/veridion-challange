// JavaScript variables to store user choices
let industryChoice = '-';
let other1Choice = '-';
let other2Choice = '-';
let other3Choice = '-';
let other4Choice = '-';
let other5Choice = '-';

function handleIndustryChange() {
    const industryDropdown = document.getElementById('industry');
    const otherDropdown = document.getElementById('otherDropdown');

    industryChoice = industryDropdown.value;

    if (industryChoice === 'other') {
        otherDropdown.classList.remove('hidden');
    } else {
        otherDropdown.classList.add('hidden');
    }

    enableContinueButton();
}

function handleother1() {
    const colorDropdown = document.getElementById('other1');
    other1Choice = colorDropdown.value;
    enableContinueButton();
}

function handleother2() {
    const colorDropdown = document.getElementById('other2');
    other2Choice = colorDropdown.value;
    enableContinueButton();
}

function handleother3() {
    const colorDropdown = document.getElementById('other3');
    other3Choice = colorDropdown.value;
    enableContinueButton();
}

function handleother4() {
    const colorDropdown = document.getElementById('other4');
    other4Choice = colorDropdown.value;
    enableContinueButton();
}

function handleother5() {
    const colorDropdown = document.getElementById('other5');
    other5Choice = colorDropdown.value;
    enableContinueButton();
}

function enableContinueButton() {
    const continueBtn = document.getElementById('continueBtn');
    const dropdowns = [industryChoice, other1Choice, other2Choice, other3Choice, other4Choice, other5Choice];

    if (dropdowns.every(choice => choice !== '-')) {
        continueBtn.classList.remove('hidden');
    } else {
        continueBtn.classList.add('hidden');
    }
}

function continueToNextPage() {
    // You can navigate to the next page or perform additional actions here
    console.log('Continue button clicked');
    console.log('User Choices:', {
        industry: industryChoice,
        other1: other1Choice,
        other2: other2Choice,
        other3: other3Choice,
        other4: other4Choice,
        other5: other5Choice
    });
}