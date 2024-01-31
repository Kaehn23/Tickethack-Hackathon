fetch("https://tickethackback.vercel.app/booked")
  .then((response) => response.json())
  .then((data) => {
    if (data.trips.length > 0) {
      console.log(data);
      document.querySelector("#displayCart").innerHTML = `
      <h2>My Bookings</h2>
      <div class="container-trips">
        
      </div>
     `;
      data.trips.forEach((trip) => {
        let currentMoment = moment();
        let departureMoment = moment(trip.date);
        let remaningHours = departureMoment.diff(currentMoment, "hours");

        const hours = moment(trip.date).format("HH:mm");
        document.querySelector(".container-trips").innerHTML += `
        <div class="display-trips">
        <div class="cities">${trip.departure}>${trip.arrival}</div>
        <div class="time">${hours}</div>
        <div class="price">${trip.price}€</div>
        <p>Departure in ${remaningHours} hours</p>
      </div>
         `;
      });
    } else {
      console.log("no trips found");
    }
  });
