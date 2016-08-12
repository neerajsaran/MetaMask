var accounts;
var account;
var balance;
var admin = Admin.deployed();
var user = User.deployed();
var pid;
var customers= new Array();

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function setStatus1(message) {
  var status = document.getElementById("status1");
  status.innerHTML = message;
};


function buyProd() {


  var account = document.getElementById('buyAcc').value;
  var contAddress = "0x69eabf45623e5b53683924dff98309eb39af1a89";
  var etherValue = 2;
  var account1 = account.toLowerCase();
  console.log("account1: " + account1);

    //Send Ether to Contract
      web3.eth.sendTransaction({from:account1,to: contAddress, value: etherValue}, function (err, value1) {
       if (err != null) {
         alert ("There was an error fetching contract Balance in Send Ether");
         console.log("Send Ether error: " + err);
       } else {
         setStatus("Ether Sent Successfully.")
    }
    });
    //Send Ether to Contract


};

window.onload = function() {



};
