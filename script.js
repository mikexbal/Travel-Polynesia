async function loadDestinations(){
    try {
        const response = await fetch("destinationData.json");
        const destinationData = await response.json();

        let divContainer = document.getElementById("destination-container");
        
        destinationData.destinations.forEach(location => { 
            let div = document.createElement('div');
            div.className = 'destination-card';
            div.innerHTML = 
            `<img src="${location.image}" alt="${location.name}"/>
            <h2>${location.name}</h2>
            <p>${location.short_desc}</p>`;

            div.addEventListener("click", () => 
            window.open(`destination.html?id=${location.id}`, "_blank"));
           divContainer.appendChild(div);
        });

     
    } catch (error){
        console.log("Error fetching JSON:", error)
    }
}

loadDestinations();
//Create a load booking function for destination.html

async function loadBooking(){
    try {
        const response = await fetch("destinationData.json");
        const destinationData = await response.json();

        const urlParameters = new URLSearchParams(window.location.search);
        const id = urlParameters.get("id");
        const location = destinationData.destinations.find(destination => destination.id == id);

        let destinationInfo = document.getElementById("destination-info");
        destinationInfo.innerHTML = 
        `<img src="${location.image}" alt="${location.name}"/>
        <h1>${location.name}</h1>
        <p>${location.long_desc}</p>
        <h1>Itinerary</h1>
        <p>Day 1: ${location.itinerary.day_1}</p>
        <p>Day 2: ${location.itinerary.day_2}</p>
        <p>Day 3: ${location.itinerary.day_3}</p>`;

        let destinationMap = document.getElementById("destination-map");
        
        destinationMap.innerHTML = "";
            
            
        let map = document.createElement("gmp-map");
        map.setAttribute("center", `${location.coordinates}`);
        map.setAttribute("zoom", "11");
        map.setAttribute("map-id", location.name);
            
        let marker = document.createElement("gmp-advanced-marker");
        marker.setAttribute("position", `${location.coordinates}`);
        marker.setAttribute("title", location.name);
        
        map.appendChild(marker);
            
        destinationMap.appendChild(map);

        let selectedLocation = document.getElementById('location');
        selectedLocation.value = location.id;
        
    
        } catch (error){
        console.log("Error fetching JSON:", error)
    }
}

loadBooking();

function submitForm(){
    let name = `${document.getElementById('fname').value} ${document.getElementById('lname').value}`;
    let email = `${document.getElementById('email').value}`
    let numTravelers = `${document.getElementById('number_of_travelers').value}`
    let departureDate = `${document.getElementById('departure_date').value}`
    let returnDate = `${document.getElementById('return_date').value}`

    console.log("Name: " + name);
    console.log("Email: " + name);
    console.log("Number of Travelers: " + name);
    console.log("Departure Date: " + name);
    console.log("Return Date: " + name);

    window.close();

    alert("Trip successfully booked!")
}