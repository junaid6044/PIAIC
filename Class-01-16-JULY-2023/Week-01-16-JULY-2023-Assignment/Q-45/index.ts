interface CarInfo {
  manufacturer: string;
  model: string;
  [key: string]: string;
}

function store_car_info(manufacturer: string, modelName: string, ...options: string[]): CarInfo {
  const carInfo: CarInfo = {
    manufacturer: manufacturer,
    model: modelName
  };

  for (let i = 0; i < options.length; i += 2) {
    const key = options[i];
    const value = options[i + 1];
    carInfo[key] = value;
  }

  return carInfo;
}

let car = store_car_info("Toyota", "Camry", "color", "blue", "optionalFeature", "Sunroof");
console.log(car);
