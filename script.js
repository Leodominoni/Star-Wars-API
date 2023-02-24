window.onload = function(){ 
    fetch('https://swapi.dev/api/people') 
    .then(async (data) => { 
        const response = await data.json() 
        console.log({ response }) 

        const list = document.getElementById('personage-list') 

        Object.values(response.results).forEach(people => { 
           console.log(people.name) 
            /*
           const personageName = document.createTextNode(people.name)
           const personageCard = document.createElement('div')

           personageCard.style.backgroundImage = `url${film.image}`
           personageCard.className = '.film-card'
           personageCard.appendChild(personageName)
           list.appendChild(personageCard) */
        })  
    }).catch((error) => { 
        console.log(error) 
        alert('Erro ao carregar') 
    }) 
}
/* window.onload = function(){
    fetch('https://swapi.dev/api/films')
    .then(async (data) => {
        const response = await data.json()
        console.log(response)

        const list = document.getElementById('films-list')

        response.forEach((films) => {
            const filmTitle = document.createTextNode(film.title)
            const filmCard = document.createElement('div')
            filmCard.style.backgroundImage = `url${film.image}`
            filmCard.className = '.film-card'
            filmCard.appendChild(filmTitle)
            list.appendChild(filmCard)
        }) 
       }).catch((error) => {
        console.log(error)
        alert('Erro ao carregar a API')
    })
} 

let request = 'https://swapi.dev/api/people/1'

fetch(request).then((response) => {
    return response.json()
}).then( (data) => {
    let p = document.getElementById('text')
    console.log(data)
    p.innerHTML = JSON.stringify(data)
}) */ 