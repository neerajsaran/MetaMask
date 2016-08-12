var accounts;
var account;
var balance;
var admin = Admin.deployed();
var user = User.deployed();
var pid;
var customers= new Array();

function startApp() {
  var account = web3.eth.accounts[0]
  var acctEl = document.getElementById("currentAccount");
  acctEl.innerText = account
}

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function setStatus1(message) {
  var status = document.getElementById("status1");
  status.innerHTML = message;
};


function buyProd() {


  var account = web3.eth.accounts[0]
  console.log("account: " + account);

  var contAddress = "0x69eabf45623e5b53683924dff98309eb39af1a89";
  var etherValue = 2;

    //Send Ether to Contract
      web3.eth.sendTransaction({from:account,to: contAddress, value: etherValue}, function (err, value1) {
       if (err != null) {
         alert ("There was an error fetching contract Balance in Send Ether");
         console.log("Send Ether error: " + err);
       } else {
         setStatus("Ether Sent Successfully.")
      }
    });

};

window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {

    //
    web3 = new Web3(web3.currentProvider);
  } else {
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }

  // Then you can now safely start your app & access web3 freely:
  startApp()
})
