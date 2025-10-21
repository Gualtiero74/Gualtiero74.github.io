// dom elements
let divService = document.querySelector("#service")
function getServices() {
    fetch("../Json/service.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach(element => {
                let card = document.createElement("div")
                card.classList.add("card", "shadow-lg", "rounded-4", "overflow-hidden")
                let img = document.createElement("img")
                img.src = element.img
                img.classList.add("card-img-top", "img-apparence")
                let cardBody = document.createElement("div")
                cardBody.classList.add("card-body","overflow-y-scroll")
                let title = document.createElement("h5")
                title.textContent = element.title
                title.classList.add("card-title")
                let description = document.createElement("P")
                description.textContent = element.description
                description.classList.add("card-text")
                cardBody.appendChild(title)
                cardBody.appendChild(description)
                let cardFooter = document.createElement("div")
                cardFooter.classList.add("mt-auto", "p-3")
                let cardButton = document.createElement("button")
                cardButton.type = "button"
                cardButton.classList.add("btn", "btn-primary")
                cardButton.textContent = "Info"
                cardButton.setAttribute("data-bs-toggle","modal")
                cardButton.setAttribute("data-bs-target", element.link )
                cardFooter.appendChild(cardButton)
                card.appendChild(img)
                card.appendChild(cardBody)
                card.appendChild(cardFooter)
                divService.appendChild(card);
            });
        })
        .catch((error) => console.log(error));
}

let divPortfolio = document.querySelector("#portfolio")
function getPortfolio() {
    fetch("../Json/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach(element => {
                let card = document.createElement("div")
                card.classList.add("card", "shadow-lg", "rounded-4", "overflow-hidden")
                let img = document.createElement("img")
                img.src = element.img
                img.classList.add("card-img-top", "img-apparence")
                let cardBody = document.createElement("div")
                cardBody.classList.add("card-body")
                let title = document.createElement("h5")
                title.textContent = element.title
                title.classList.add("card-title")
                let description = document.createElement("P")
                description.textContent = element.description
                description.classList.add("card-text")
                cardBody.appendChild(title)
                cardBody.appendChild(description)
                let cardFooter = document.createElement("div")
                cardFooter.classList.add("mt-auto", "p-3")
                let cardButton = document.createElement("a")
                cardButton.href = element.link
                cardButton.target="-blank"
                cardButton.textContent = "Vai al Progetto"
                cardFooter.appendChild(cardButton)
                card.appendChild(img)
                card.appendChild(cardBody)
                card.appendChild(cardFooter)
                divPortfolio.appendChild(card);
            });
        })
        .catch((error) => console.log(error));
}


getServices()
getPortfolio()
