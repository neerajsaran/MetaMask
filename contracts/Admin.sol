contract Admin {

  struct Product {
    uint prodPrice;
    uint prodStock;
  }

  uint public prodId = 0;



  function Admin() {

      prodId =0;
  }

  mapping (uint => Product) prod;

  function addProduct(uint price, uint stock) {
    prodId = prodId + 1;
    prod[prodId] = Product(price, stock);

  }

  function returnLatestProd() constant returns (uint prid, uint prprice, uint prstock ) {
    Product p = prod[prodId];
    return (prodId, p.prodPrice, p.prodStock);
  }

  function returnProdId() constant returns (uint){
     return (prodId);
  }
}


contract User is Admin {
  address public contAddress;

  function returnProductList(uint len) constant returns(uint[],uint[]) {

        uint[] memory priceArray = new uint[](len);
        uint[] memory stockArray = new uint[](len);

        for (uint i=0;i<len;i++){

          Product p = prod[i+1];
          priceArray[i] = p.prodPrice;
          stockArray[i] = p.prodStock;

      }
      return (priceArray, stockArray);

  }


  function buyProd(uint bpid) {
    Product p = prod[bpid];
    p.prodStock = p.prodStock-1;
  }

  function returnAddrPrice(uint bpid) constant returns (uint,address) {
    Product p = prod[bpid];
    contAddress = this;
    return (p.prodPrice,contAddress);
  }

  function returnAccAddr() constant returns (address,address) {

    return (msg.sender,this);
  }

  function sendEther(uint etherValue, address receiver) {

    receiver.send(etherValue);
  }
}
