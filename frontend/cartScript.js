fetch("http://localhost:3000/cart")
  .then((response) => response.json())
  .then((data) => {
    if (data.trips.length > 0) {
      console.log(data);

      document.querySelector("#displayCart").innerHTML = `
      <h2>My Cart</h2>
      <div class="container-trips">
      
      </div>
   `;
      let total = 0;
      data.trips.forEach((trip) => {
        const hours = moment(trip.date).format("HH:mm");
        document.querySelector(".container-trips").innerHTML += `
        <div class="display-trips">
        <div class="cities">${trip.departure}>${trip.arrival}</div>
        <div class="time">${hours}</div>
        <div class="price">${trip.price}€</div>
        <button class="cart-btn">X</button>
      </div>
         `;
        total += trip.price;
      });
      document.querySelector(
        "#displayCart"
      ).innerHTML += `   <div class="total-container">
      <div class="total">
        <p class="cart-text">Total:${total} €</p>
        <button  id='purchase-btn'  class="cart-btn">Purchase</button>
      </div>
    </div>`;

      /*
      const cartButtons = document.querySelectorAll(".cart-btn");

      cartButtons.forEach((button) => {
        button.addEventListener("click", function () {
          // Get the id of the trip from the button's data-id attribute
          const tripId = this.getAttribute("data-id");

          // Send a DELETE request to the server
          fetch(`http://localhost:3000/booked/${tripId}`, {
            method: "DELETE",
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error("Error:", error));
        });
      });*/
    } else {
      console.log("no trips found");
    }
  });

document
  .querySelector("#displayCart")
  .addEventListener("click", function (event) {
    if (event.target && event.target.matches("#purchase-btn")) {
      console.log("you clicked");
      fetch("http://localhost:3000/cart")
        .then((response) => response.json())
        .then((data) => {
          console.log("all trips:", data.trips);
          data.trips.map((trip) => {
            fetch("http://localhost:3000/booked", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                trip: trip,
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                if (data) {
                  console.log(data);
                  fetch(`http://localhost:3000/cart/`, {
                    method: "DELETE",
                  })
                    .then((response) => response.json())
                    .then((data) => (window.location.href = "bookings.html"))
                    .catch((error) => console.error("Error:", error));
                } else {
                  console.log("Moins youpi...");
                }
              });
          });
        });

      // fetch("http://localhost:3000/cart", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     id: buttonId,
      //   }),
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     if (data) {
      //       console.log(data);
      //     } else {
      //       console.log("Moins youpi...");
      //     }
      //   });
    }
  });
