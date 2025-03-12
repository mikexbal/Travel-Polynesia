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
        <p>${location.long_desc}</p>`;

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