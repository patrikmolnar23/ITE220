var shop = {
 customerName: "Patrik",
 totalPrice: 0,
 products: [
    "Brooklyn T-Shirt White"
    "Brooklyn T-Shirt Black"
    "Apple Watch"
    "Android Phone" 
],
 prices: [10,10,199,159],
    
 displayCustomerName: function() {
  var customerElement = document.getElementById("customer-name");   
  customerElement.textContent = this.customerName;     
 },
 displayProductList: function() {
  var productsText = "";
  var productsElement = document.getElementById("product-list");
     
  productsText += "<li class='list-group-item'><span class='badge'>$"+         this.prices[0]+"</span>" + this.products[0]+"</li>"; 
  productsText += "<li class='list-group-item'><span class='badge'>$"+         this.prices[1]+"</span>" + this.products[1]+"</li>";  
  productsText += "<li class='list-group-item'><span class='badge'>$"+         this.prices[2]+"</span>" + this.products[2]+"</li>";  
  productsText += "<li class='list-group-item'><span class='badge'>$"+         this.prices[3]+"</span>" + this.products[3]+"</li>"; 
     
  productsElement.innerHTML = productsText;
     
       
 },
 calculateTotalPrice: function() {
  return (this.prices[0] + this.prices[1] + this.prices[2] + this.prices[3]) * 0.75;
 },
 
 displayTotalPrice: function() {
  this.totalPrice = this.calculateTotalPrice();
  var totalPriceElement = document.getElementById("total-price");
  totalPriceElement.textContent = this.totalPrice;     
 }    
}

shop.displayCustomerName();
shop.displayProductList();
shop.displayTotalPrice();