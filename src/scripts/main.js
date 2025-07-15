async function GetClocksCards() {
    try {
        const response = await fetch('http://localhost:3339/api/v1/clocks')
        const clocks = await response.json()

        console.log(clocks)

        // capturar container de injecção
        const container = document.getElementById('clock-container')

        // clean container
        container.innerHTML = ''

        // renderizar componentes
        clocks.forEach(clock => {
            // div do card
            const card = document.createElement('div')
            card.className = 'card'

            //img
            const image = document.createElement('img')
            image.src = clock.picture
            image.alt = clock.name
            image.className = 'card-image'
            image.width = 250
            
            //h2
            const title = document.createElement('h2')
            title.className = 'card-title'
            title.textContent = clock.name

            //p
            const price = document.createElement('p')
            price.className = 'card-price'
            price.textContent = `R$ ${parseFloat(clock.actualPrice).toFixed(2)}`

            //conection
            card.appendChild(image)
            card.appendChild(title)
            card.appendChild(price)

            //injeção de dependencia
            container.appendChild(card)
        });
    } catch (error) {
        console.log(error)
    }
}

GetClocksCards()