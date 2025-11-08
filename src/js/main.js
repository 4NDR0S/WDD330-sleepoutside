import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

// Create an instance of ProductData.
const dataSource = new ProductData("tents");

// Find the <ul> element in your index.html that has the class "product-list"
const listElement = document.querySelector(".product-list");

// Create an instance of ProductList
const productList = new ProductList("tents", dataSource, listElement);

// Call the .init() method to load and render the product list
productList.init();