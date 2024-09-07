async function populate() {
    const requestURL = "/assets/js/data.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const results = await response.json();
    console.log(results);

    for(i in results) {
        console.log(results[i]);
        populateResult(results[i]);
    }

}

function populateResult(obj) {
    const container = document.querySelector(".summary");
    const button = container.querySelector("button");
    const result = document.createElement("div");
    result.classList.add("result");
    result.innerHTML =
    /* html */
    `<img src="${obj.icon}" alt="${obj.category} icon" />
    <p class="name bold">${obj.category}</p>
    <p class="points neutral-dark-gray-blue-50 bold"><span class="neutral-dark-gray-blue">${obj.score}</span> / 100</p>`;
    
    container.insertBefore(result, button);
}

populate();