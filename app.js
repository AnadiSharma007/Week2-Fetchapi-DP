const getImage = () => {

    const button = document.getElementById("submit");
    const div = document.getElementById("items");
    div.classList.add("flex");
    const api = `https://jsonplaceholder.typicode.com/photos`;


    button.addEventListener("click", async () => {

        const response = await fetch(api);
        const data = await response.json();
        for (let i = 0; i < 3; i++) {
            let img = document.createElement("img");
            let h4 = document.createElement("h4");
            img.src = data[i].thumbnailUrl;
            h4.textContent = data[i].title;
            div.appendChild(img);
            div.appendChild(h4);
        }
    });
};

getImage();