async function loadDestinations(){
    try {
        const response = await fetch("destinationData.json");
        const destinationData = await response.json();

        let data = "";

        let divContainer = document.getElementById("destination-container");
        
        destinationData.destinations.forEach(location => { 
            let div = document.createElement('div');
            div.className = 'destination-card';
            div.innerHTML = 
            `<img src="${location.image}" alt="Hawaii Beach"/>
            <h2>${location.name}</h2>
            <p>${location.short_desc}</p>`;
           divContainer.appendChild(div);
        });

        document.getElementById("demo").innerHTML = data;
    } catch (error){
        console.log("Error fetching JSON:", error)
    }
}

loadDestinations();
//Create a load booking function for destination.html