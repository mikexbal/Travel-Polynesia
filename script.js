async function loadDestinations(){
    try {
        const response = await fetch("destinationData.json");
        const destinationData = await response.json();

        let data = "";

        let divContainer = document.getElementById("destination-container");
        
        destinationData.islands.forEach(island => { 
            let div = document.createElement('div');
            div.className = 'destination-card';
            div.innerHTML = 
            `<h3>${island.name}</h3>
            <p>${island.age}</p>`;
           divContainer.appendChild(div);
        });

        document.getElementById("demo").innerHTML = data;
    } catch (error){
        console.log("Error fetching JSON:", error)
    }
}

window.onload = loadDestinations;