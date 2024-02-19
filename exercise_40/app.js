function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model, options: {} };
    for (var i = 0; i < options.length; i++) {
        var option = options[i];
        var key = Object.keys(option)[0];
        car.options[key] = option[key];
    }
    return car;
}
var my_car = create_car('Toyota', 'Camry', { color: 'blue' }, { features: 'Sunroof' });
console.log(my_car);
