const consultar = () =>{
    const ciudades = JSON.parse(localStorage.getItem('cities'));
    selectorCity = cities.map=() => {
        cities.forEach(city => {
            return `<option>${ciudad}</option>`}); 
        
    };
    const selectorCityHtml = document.querySelector('#ciudad');
    select.innerHTML = selectorCity

};
