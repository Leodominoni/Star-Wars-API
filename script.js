window.onload = function(){
    fetch('https://swapi.dev/api/people')
    .then(async (data) => {
        const response = await data.json()
        console.log({ response })

        const list = document.getElementById('personage-list')

        response.forEach(people => {
            const personageName = document.createTextNode(people.name)
        }) 
       }).catch((error) => {
        console.log(error)
        alert('Erro ao carregar')
    })
} 
/*
let request = 'https://swapi.dev/api/people/1'

fetch(request).then((response) => {
    return response.json()
}).then( (data) => {
    let p = document.getElementById('text')
    console.log(data)
    p.innerHTML = JSON.stringify(data)
}) */ 