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
      console.log(trips);

      if (data) {
        document.querySelector("#display").innerHTML = " ";
        trips.map((trip) => {
          document.querySelector("#display").innerHTML += `
          <div class="display-trips">
          <div class="cities">${trip.departure}>${trip.arrival}</div>
          <div class="time">80</div>
          <div class="price">${trip.price}</div>
          <button class="book-btn">Book</button>
        </div> 
            `;
        });

        // document.querySelector("#input-departure").value = "";
        // document.querySelector("#input-arrival").value = "";
        // document.querySelector("#input-date").value = "";
      }
    });
});
