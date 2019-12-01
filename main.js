
// Welcome banner
var banner = document.querySelector(".intro");
document.querySelector(".close-button").addEventListener("click", closeBanner);
function closeBanner(){
  banner.style.display= "none";
}


// Icon hover selection/refresh HTML
document.querySelector('#dashboard-icon-click').addEventListener('click',showBorder1);
var icon1 = document.querySelector('#dashboard-icon-click');
function showBorder1() {
icon1.classList.add('nav-button-selected');
icon2.classList.remove('nav-button-selected');
icon3.classList.remove('nav-button-selected');
showDashboardPage();
}
function showDashboardPage(){
mainContainerHTML.innerHTML =
  `<h1>Balancing Act</h1>
    <section class="column1">
      <div class="intro">
        <p>Welcome, Oscar!</p>
        <img class="close-button" src="assets/close.svg" />
      </div>
      <div class="topBoxes">
      <div class="budget">
        <p class="acct-details">Income</p>
        <p class="acct-details">$2,119.12</p>
      </div>
      <div class="budget">
        <p class="acct-details">Expenses</p>
        <p class="acct-details">$420.52</p>
      </div>
      <div class="budget">
        <p class="acct-details">Credit Score</p>
        <p class="acct-details">673</p>
      </div>
      </div>
      <div class="accounts">
      <div class="accts-top">
        <h3 class="actHDR">Accounts</h3>
        <button class="primary-button" type="button">Manage Accounts!</button>
      </div>
      <div class="whole-account-box">
        <div class="account-box">
          <img class="account-icon item-align" src="assets/checking.svg" />
          <p class="accounts item-align">Wells Fargo</p>
          <span class="acct-type">
          <p class="account-type item-align">Checking</p>
        </span>
        </div>
          <div class="account-box">
          <img class="account-icon item-align" src="assets/savings.svg" />
          <p class="accounts item-align">Wells Fargo</p>
          <span class="acct-type">
          <p class="account-type item-align">Savings</p>
          </span>
          </div>
            <div class="account-box">
            <img class="account-icon item-align" src="assets/credit-card.svg" />
            <p class="accounts item-align">Amazon Credit</p>
            <span class="acct-type">
            <p class="account-type item-align">Credit Card</p>
            </span>
            </div>
          <div class="account-box">
            <img class="account-icon item-align" src="assets/credit-card.svg" />
            <p class="accounts item-align">Southwest Credit</p>
            <span class="acct-type">
            <p class="account-type item-align">Credit Card</p>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section class="column2">
      <h2>Recent Transactions</h2>
      <button class="primary-button" type="button">NEW TRANSACTIONS!</button>
    <table class="global-table">
      <th>Date</th>
      <th>Payee</th>
      <th>Inflow</th>
      <th>Outflow</th>
      <tr>
          <td>Oct 25,2019</td>
          <td>Target</td>
          <td>-</td>
          <td>$82.35</td>
      <tr>
          <td>Oct 24,2019</td>
          <td>Express</td>
          <td>-</td>
          <td>$212.24</td>
      <tr>
          <td>Oct 22,2019</td>
          <td>Paycheck</td>
          <td>$1,319.12</td>
          <td>-</td>
      <tr>
          <td>Oct 21,2019</td>
          <td>Trader Joe's</td>
          <td>-</td>
          <td>$54.92</td>
      <tr>
          <td>Oct 20,2019</td>
          <td>Shell</td>
          <td>-</td>
          <td>$46.23</td>
      <tr>
          <td>Oct 19,2019</td>
          <td>Rent</td>
          <td>$800.00</td>
          <td>-</td>
      <tr>
          <td>Oct 19,2019</td>
          <td>Hapi Sushi</td>
          <td>-</td>
          <td>$13.97</td>
      <tr>
          <td>Oct 18,2019</td>
          <td>Pig Train</td>
          <td>-</td>
          <td>$4.83</td>
      <tr>
          <td>Oct 18,2019</td>
          <td>RTD</td>
          <td>-</td>
          <td>$6.00</td>
    </table>
  `
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
mainContainerHTML.innerHTML = `<div class="maincontainer-transactions">
  <h1 id="transactions-page-header">Transactions</h1>
<button type="button">Click me</button>
<button type="button">Click me</button>
<button type="button">Click me</button>
  <div class="transactions-main-container">
  <div class="transactions-container-left">
  <table class="transactions-table global-table">
    <th>Date</th>
    <th>Account</th>
    <th>Payee</th>
    <th>Inflow</th>
    <th>Outlow</th>
    <tr>
      <td>10-25-19</td>
      <td>Credit Card</td>
      <td>Target</td>
      <td>-</td>
      <td>$82.35</td>
    </tr>
    <tr>
      <td>10-24-19</td>
      <td>Credit Card</td>
      <td>Target</td>
      <td>-</td>
      <td>$212.24</td>
    </tr>
    <tr>
      <td>10-22-19</td>
      <td>Checking</td>
      <td>Paycheck</td>
      <td>$1319.12</td>
      <td>-</td>
    </tr>
    <tr>
      <td>10-21-19</td>
      <td>Credit Card</td>
      <td>Trader Joe's</td>
      <td>-</td>
      <td>$54.92</td>
    </tr>
    <tr>
      <td>10-20-19</td>
      <td>Credit Card</td>
      <td>Shell</td>
      <td>-</td>
      <td>$46.23</td>
    </tr>
    <tr>
      <td>10-19-19</td>
      <td>Savings</td>
      <td>Rent</td>
      <td>$800.00</td>
      <td>-</td>
    </tr>
    <tr>
      <td>10-19-19</td>
      <td>Checking</td>
      <td>Hapa Sushi</td>
      <td>-</td>
      <td>13.97</td>
    </tr>
    <tr>
      <td>10-18-19</td>
      <td>Credit Card</td>
      <td>PigTrain</td>
      <td>-</td>
      <td>$4.83</td>
    </tr>
    <tr>
      <td>10-18-19</td>
      <td>Checking</td>
      <td>RTD</td>
      <td>-</td>
      <td>$4.83</td>
    </tr>
    <tr>
      <td>10-18-19</td>
      <td>Checking</td>
      <td>Express</td>
      <td>-</td>
      <td>$6.00</td>
    </tr>
    <tr>
      <td>10-24-19</td>
      <td>Checking</td>
      <td>Express</td>
      <td>-</td>
      <td>$212.24</td>
    </tr>
    <tr>
      <td>10-24-19</td>
      <td>Checking</td>
      <td>Express</td>
      <td>-</td>
      <td>$212.24</td>
    </tr>
    <tr>
      <td>10-24-19</td>
      <td>Checking</td>
      <td>Express</td>
      <td>-</td>
      <td>$212.24</td>
    </tr>
    <tr>
      <td>10-24-19</td>
      <td>Checking</td>
      <td>Express</td>
      <td>-</td>
      <td>$212.24</td>
    </tr>
  </table>
</div>
<div class="transactions-container-right">
  <p id="transactions-box-header">New Transactions</p>
  <form class="new-transaction-form ">
  <p>Type of Transaction</p>
  <select name="type of transaction:">
    <option value="inflow">Inflow</option>
    <option value="outflow">Outflow</option>
  </select>
  <p>Category</p>
  <select name="category">
    <option value="groceries">Groceries</option>
    <option value="bills">Bills</option>
    <option value="fun money">Fun Money</option>
    <option value="paycheck">Paycheck</option>
  </select>
  <p>Payee:</p>
  <input type="text"></input>
  <p>Outflow:</p>
  <input type="text"></input>
  <p>Catergory:</p>
  <input type="text"></input>
  </form>
</div>
</div>
</div>`
}

document.querySelector('#profile-icon-click').addEventListener('click',showBorder3);
var icon3 = document.querySelector('#profile-icon-click');
function showBorder3() {
icon3.classList.add('nav-button-selected');
icon1.classList.remove('nav-button-selected');
icon2.classList.remove('nav-button-selected');
}

// Inner HTML refresh variable
var mainContainerHTML = document.querySelector('.mainContainer');
