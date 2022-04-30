let countHTML = document.querySelector(".count");
let count = document.querySelector(".count").innerText;

function checkedcheck() {
  let checkedInput = document.getElementById("nav-mobile");

  if (checkedInput.checked == true) {
    document.getElementById("nav-links-ul").style.left = "0%";
  } else {
    document.getElementById("nav-links-ul").style.left = "-100%";
  }
}

let products = [
  {
    name: "Rolex",
    price: "100000",
    image: "item-1.jpg",
    button: "rolex-btn",
    buttonid: "btn1",
  },
  {
    name: "G-Shock",
    price: "50000",
    image: "item-2.jpg",
    button: "gshock-btn",
    buttonid: "btn2",
  },
  {
    name: "Titan",
    price: "40000",
    image: "item-3.jpg",
    button: "titan-btn",
    buttonid: "btn3",
  },
  {
    name: "Fossil",
    price: "30000",
    image: "item-4.jpg",
    button: "fossil-btn",
    buttonid: "btn4",
  },
  {
    name: "Smart",
    price: "50000",
    image: "item-5.jpg",
    button: "smart-btn",
    buttonid: "btn5",
  },
  {
    name: "Apple",
    price: "100000",
    image: "item-1.jpg",
    button: "apple-btn",
    buttonid: "btn6",
  },
];

function showCart() {
  // document.getElementById('closecart').checked = checked;
  document.querySelector(".section-cart-container").style.display = "block";
}

function closeCart() {
  let closecartChecked = document.getElementById("closecart");

  if (closecartChecked.checked == false) {
    document.querySelector(".section-cart-container").style.display = "none";
    closecartChecked.checked = true;
  } else {
    document.querySelector(".section-cart-container").style.display = "block";
  }
}

let sectioncartContainer = document.querySelector(".section-cart-container");
function checkCount() {
  // console.log("i am checkcount")
  // console.log(count);
  if (parseInt(count) == 0) {
    document.getElementById("para-items").innerHTML = "No Items in the Cart.";
    document.querySelector(".total-price").style.display = "none";
  } else {
    document.getElementById("para-items").style.display = "none";
    document.querySelector(".total-price").style.display = "block";
  }
}
checkCount();

let section = document.querySelector(".card-container");

for (j = 0; j <= products.length; j++) {
  section.innerHTML += `<div class="card">
<img src=${products[j].image} alt="Watch1" style="width: 100%" />
<h1>${products[j].name}</h1>
<span class="price">${products[j].price}</span>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
  sequi ipsa repudiandae, doloremque quisquam illo quod saepe quis
  fugiat enim!
</p>
<p>
  <button id="${products[j].buttonid}" class="button ${products[j].button}" onclick="buttonId(this.id)">
    Add to Cart
  </button>
</p>
</div> `;
}

function countIncrease() {
  countHTML.innerHTML = parseInt(countHTML.innerText) + 1;
  count = parseInt(countHTML.innerText);
  checkCount();
  // alert(id);
}

function countDecrease() {
  countHTML.innerHTML = parseInt(countHTML.innerText) - 1;
  count = parseInt(countHTML.innerText);
  if (count == 0) {
    // console.log('i am count = 0')
    checkWhatAdded();
  }
}

function buttonId(id) {
  countIncrease();

  const sectioncartDiv = document.querySelector(".cart-items");

  if (id == products[0].buttonid) {
    sectioncartDiv.innerHTML += `<div class="cart-itemcontainer cart-itemcontainer-rolex">
  <div class="cart-item-image-container">
    <img
      src="${products[0].image}"
      alt=""
      class="cart-item-image rolex"
    />
  </div>
  <div class="card-product-details">
      <p>Name    :${products[0].name}</p>
      <p>Price   :${products[0].price}</p>
      <p>Quantity:1</p>
      
  </div>
  <button class="remove-item" onclick="onRemoveItem(this)">X</button>
</div>`;
  } else if (id == products[1].buttonid) {
    // console.log("i am gshock");
    sectioncartDiv.innerHTML += `<div class="cart-itemcontainer cart-itemcontainer-gshock">
  <div class="cart-item-image-container">
    <img
      src="${products[1].image}"
      alt=""
      class="cart-item-image gshock"
    />
  </div>
  <div class="card-product-details">
      <p>Name    :${products[1].name}</p>
      <p>Price   :${products[1].price}</p>
      <p>Quantity:1</p>
  </div>
  <button class="remove-item" onclick="onRemoveItem(this)">X</button>
</div>`;
  } else if (id == products[2].buttonid) {
    // console.log("i am fossil");
    sectioncartDiv.innerHTML += `<div class="cart-itemcontainer cart-itemcontainer-fossil">
  <div class="cart-item-image-container">
    <img
      src="${products[2].image}"
      alt=""
      class="cart-item-image fossil"
    />
  </div>
  <div class="card-product-details">
      <p>Name    :${products[2].name}</p>
      <p>Price   :${products[2].price}</p>
      <p>Quantity:1</p>
  </div>
  <button class="remove-item" onclick="onRemoveItem(this)">X</button>
</div>`;
  } else if (id == products[3].buttonid) {
    // console.log("i am titan");
    sectioncartDiv.innerHTML += `<div class="cart-itemcontainer cart-itemcontainer-titan">
  <div class="cart-item-image-container">
    <img
      src="${products[3].image}"
      alt=""
      class="cart-item-image titan"
    />
  </div>
  <div class="card-product-details">
      <p>Name    :${products[3].name}</p>
      <p>Price   :${products[3].price}</p>
      <p>Quantity:1</p>
  </div>
  <button class="remove-item" onclick="onRemoveItem(this)">X</button>
</div>`;
  } else if (id == products[4].buttonid) {
    // console.log("i am smart");

    sectioncartDiv.innerHTML += `<div class="cart-itemcontainer cart-itemcontainer-smart">
  <div class="cart-item-image-container">
    <img
      src="${products[4].image}"
      alt=""
      class="cart-item-image smart"
    />
  </div>
  <div class="card-product-details">
      <p>Name    :${products[4].name}</p>
      <p>Price   :${products[4].price}</p>
      <p>Quantity:1</p>
  </div>
  <button class="remove-item" onclick="onRemoveItem(this)">X</button>
</div>`;
  } else if (id == products[5].buttonid) {
    // console.log("i am apple");

    sectioncartDiv.innerHTML += `<div class="cart-itemcontainer cart-itemcontainer-apple">
  <div class="cart-item-image-container">
    <img
      src="${products[5].image}"
      alt=""
      class="cart-item-image apple"
    />
  </div>
  <div class="card-product-details">
      <p>Name    :${products[5].name}</p>
      <p>Price   :${products[5].price}</p>
      <p>Quantity:1</p>
  </div>
  <button class="remove-item" onclick="onRemoveItem(this)">X</button>
</div>`;
  }

  checkWhatAdded();
}

function onRemoveItem(id) {
  // console.log(id);
  $(id).parent("div").remove();
  countDecrease();
  checkWhatAdded();
}

function checkWhatAdded() {
  let totalPrice = 0;
  // console.log(totalPrice);
  if ($(".cart-items").find(".cart-itemcontainer-rolex").length != 0) {
    let priceOfrolex = 0;
    priceOfrolex =
      priceOfrolex +
      $(".cart-items").find(".cart-itemcontainer-rolex").length * 100000;
    totalPrice = totalPrice + priceOfrolex;
  }
  if ($(".cart-items").find(".cart-itemcontainer-gshock").length != 0) {
    let priceOfgshock = 0;
    priceOfgshock =
      priceOfgshock +
      $(".cart-items").find(".cart-itemcontainer-gshock").length * 50000;
    totalPrice = totalPrice + priceOfgshock;
  }
  if ($(".cart-items").find(".cart-itemcontainer-fossil").length != 0) {
    let priceOffossil = 0;
    priceOffossil =
      priceOffossil +
      $(".cart-items").find(".cart-itemcontainer-fossil").length * 40000;
    totalPrice = totalPrice + priceOffossil;
  }
  if ($(".cart-items").find(".cart-itemcontainer-titan").length != 0) {
    let priceOftitan = 0;
    priceOftitan =
      priceOftitan +
      $(".cart-items").find(".cart-itemcontainer-titan").length * 30000;
    totalPrice = totalPrice + priceOftitan;
  }
  if ($(".cart-items").find(".cart-itemcontainer-smart").length != 0) {
    let priceOfsmart = 0;
    priceOfsmart =
      priceOfsmart +
      $(".cart-items").find(".cart-itemcontainer-smart").length * 50000;
    totalPrice = totalPrice + priceOfsmart;
  }
  if ($(".cart-items").find(".cart-itemcontainer-apple").length != 0) {
    let priceOfapple = 0;
    priceOfapple =
      priceOfapple +
      $(".cart-items").find(".cart-itemcontainer-apple").length * 100000;
    totalPrice = totalPrice + priceOfapple;
  }

  document.getElementById("total-price-here").innerHTML = "₹" + totalPrice;

  return totalPrice;
}
