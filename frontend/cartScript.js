fetch("http://localhost:3000/cart")
  .then((response) => response.json())
  .then((data) => {
    if (data) {
      console.log(data);
      document.querySelector("#displayCart").innerHTML = "";
      data.trips.forEach((trip) => {
        document.querySelector("#displayCart").innerHTML += `
        <h2>My Cart</h2>
          <div class="display-trips">
            <div class="cities">Paris>Lyon</div>
            <div class="time">17:48</div>
            <div class="price">62€</div>
            <button class="cart-btn">X</button>
          </div>
          <div class="total-container">
            <div class="total">
              <p class="cart-text">Total: 230€</p>
              <button class="cart-btn">Purchase</button>
            </div>
          </div>`;
      });
    } else {
      console.log("no trips found");
    }
  });
