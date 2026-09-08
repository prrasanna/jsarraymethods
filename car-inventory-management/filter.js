const cars = [
  {
    carId: 101,
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    features: ["Bluetooth", "Sunroof", "Backup Camera"],
    maintenance: {
      "2024-05-10": true,
      "2024-05-11": false,
      "2024-06-15": true,
    },
    specs: {
      engine: ["1.8L", "4-Cylinder"],
      transmission: ["Automatic"],
      fuel: ["Petrol"],
    },
  },

  {
    carId: 102,
    make: "Ford",
    model: "Mustang",
    year: 2023,
    features: ["Bluetooth", "Leather Seats", "Cruise Control"],
    maintenance: {
      "2024-04-20": true,
      "2024-05-12": true,
      "2024-06-20": false,
    },
    specs: {
      engine: ["5.0L", "V8"],
      transmission: ["Manual"],
      fuel: ["Petrol"],
    },
  },

  {
    carId: 103,
    make: "Honda",
    model: "Civic",
    year: 2021,
    features: ["Backup Camera", "Apple CarPlay", "Bluetooth"],
    maintenance: {
      "2024-03-15": true,
      "2024-05-18": false,
      "2024-07-01": true,
    },
    specs: {
      engine: ["2.0L", "4-Cylinder"],
      transmission: ["Automatic"],
      fuel: ["Petrol"],
    },
  },

  {
    carId: 104,
    make: "BMW",
    model: "3 Series",
    year: 2024,
    features: ["Sunroof", "Leather Seats", "Parking Sensors"],
    maintenance: {
      "2024-06-10": true,
      "2024-07-15": true,
      "2024-08-05": false,
    },
    specs: {
      engine: ["2.0L", "Turbo"],
      transmission: ["Automatic"],
      fuel: ["Petrol"],
    },
  },

  {
    carId: 105,
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    features: ["Autopilot", "Bluetooth", "Backup Camera"],
    maintenance: {
      "2024-05-05": true,
      "2024-06-12": true,
      "2024-07-20": false,
    },
    specs: {
      engine: ["Electric Motor"],
      transmission: ["Automatic"],
      fuel: ["Electric"],
    },
  },
];

const filterCars = (year) => {
    return cars.filter(car => car.year >= year);
};

console.log(filterCars(2023));
