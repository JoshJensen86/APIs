const getResidentsBtn = document.querySelector('button')

function buttonClick(){
    axios.get ("https://swapi.dev/api/planets/?search=alderaan").then(res => {
        const residents = res.data.results[0].residents
        for (let i = 0; i < residents.length; i++) {
            axios.get(residents[i]).then(res => {
                let h2 = document.createElement('h2')
                h2.textContent = res.data.name
                 document.body.appendChild(h2)
            }
                )
                // console.log(res.data)
            
        }
    }
    )
    
}

document.addEventListener('click',buttonClick)

