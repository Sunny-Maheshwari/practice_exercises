function create_car(manufacturer, model, ...options) {
    let car = { manufacturer, model, options: {} };
    for (let i = 0; i < options.length; i++) {
        let option = options[i];
        let key = Object.keys(option)[0];
        car.options[key] = option[key];
    }
    
    return car;
}

let my_car = create_car('Toyota', 'Camry', { color: 'blue' }, { features: 'Sunroof' });

console.log(my_car);
