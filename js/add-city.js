const addCity=()=>{
    let newCity = document.querySelector("#newcity").value;
    let listCities = localStorage.getItem('cities');

    let cities = listCities === null? [] : JSON.parse(listCities)
    if (cities.some((item)=> item === newCity)){
        document.querySelector('#city-is-already-on-list-sign').style.display = 'block'
    }
    else {
        document.querySelector('#city-added-sign').style.display = 'block'
    }
    cities.push(newCity)
    console.log(cities);
    localStorage.setItem('cities', JSON.stringify(cities))
}
