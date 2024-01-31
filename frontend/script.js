document.querySelector(".search-btn").addEventListener("click", function () {
  const departure = document.querySelector("#input-departure").value;
  const arrival = document.querySelector("#input-arrival").value;
  const date = document.querySelector("#input-date").value;
  const url = `http://localhost:3000/trips/${departure}/${arrival}/${date}`;
  // console.log(url);
  fetch(url)
    .then((response) => response.json()) // Converts the response to JSON
    .then((data) => {
      const trips = data.trip;
      console.log(trips.length);

      if (trips.length > 0) {
        document.querySelector("#display").innerHTML = " ";
        trips.map((trip) => {
          const hours = moment(trip.date).format("HH:mm");
          document.querySelector("#display").innerHTML += `
          <div class="display-trips">
          <div class="cities"><span class="departure">${trip.departure}</span>><span class="arrival">${trip.arrival}</span></div>
          <div class="time">${hours}</div>
          <div ><span class="price">${trip.price}</span>€</div>
          <button id="${trip._id}" class="book-btn">Book</button>
        </div> 
            `;
        });

        // document.querySelector("#input-departure").value = "";
        // document.querySelector("#input-arrival").value = "";
        // document.querySelector("#input-date").value = "";
      } else if (trips.length === 0) {
        document.querySelector("#display").innerHTML = " ";
        document.querySelector("#display").innerHTML += `
        <img
        class="train-img"
        src="./images/notfound.png"
        alt="train-logo"
        srcset=""
      />
      <p>No trip found.</p>`;
      }
    });
});
document.querySelector("#display").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".book-btn")) {
    const buttonId = event.target.id;

    console.log(buttonId);

    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: buttonId,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          console.log(data);
        } else {
          console.log("Moins youpi...");
        }
      });
  }
});
