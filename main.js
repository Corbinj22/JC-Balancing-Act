
// Welcome banner
var banner = document.querySelector(".intro");
document.querySelector(".close-button").addEventListener("click", closeBanner);
function closeBanner(){
  banner.style.display= "none";
}


// Icon hover selection
document.querySelector('#dashboard-icon-click').addEventListener('click',showBorder1);
var icon1 = document.querySelector('#dashboard-icon-click');
function showBorder1() {
icon1.classList.add('nav-button-selected');
icon2.classList.remove('nav-button-selected');
icon3.classList.remove('nav-button-selected');
}

document.querySelector('#transaction-icon-click').addEventListener('click',showBorder2);
var icon2 = document.querySelector('#transaction-icon-click');
function showBorder2() {
icon2.classList.add('nav-button-selected');
icon1.classList.remove('nav-button-selected');
icon3.classList.remove('nav-button-selected');

showTransactionsPage();
}
function showTransactionsPage(){
mainContainerHTML.innerHTML = `<p>this is a test</p>`;
}

document.querySelector('#profile-icon-click').addEventListener('click',showBorder3);
var icon3 = document.querySelector('#profile-icon-click');
function showBorder3() {
icon3.classList.add('nav-button-selected');
icon1.classList.remove('nav-button-selected');
icon2.classList.remove('nav-button-selected');
}

// Inner HTML refresh
var mainContainerHTML = document.querySelector('.mainContainer');
