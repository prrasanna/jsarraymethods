let buses = [
  {
    busId: "B001",
    busName: "KPN Travels",
    from: "Coimbatore",
    to: "Chennai",
    type: "Sleeper",
    fare: 850,
    rating: 4.5,
    availableSeats: 12,
    amenities: ["AC", "WiFi", "Charging"],
    passengers: [
      {
        passengerId: "P101",
        name: "Arun",
        age: 24,
        gender: "Male",
        seatNo: 12,
        paid: true,
      },
      {
        passengerId: "P102",
        name: "Priya",
        age: 21,
        gender: "Female",
        seatNo: 13,
        paid: true,
      },
      {
        passengerId: "P103",
        name: "Rahul",
        age: 30,
        gender: "Male",
        seatNo: 14,
        paid: false,
      },
    ],
  },

  {
    busId: "B002",
    busName: "SRS Travels",
    from: "Chennai",
    to: "Madurai",
    type: "Semi-Sleeper",
    fare: 650,
    rating: 4.2,
    availableSeats: 8,
    amenities: ["AC", "Charging"],
    passengers: [
      {
        passengerId: "P104",
        name: "Kavi",
        age: 22,
        gender: "Female",
        seatNo: 5,
        paid: true,
      },
      {
        passengerId: "P105",
        name: "Vijay",
        age: 28,
        gender: "Male",
        seatNo: 6,
        paid: true,
      },
      {
        passengerId: "P106",
        name: "Divya",
        age: 25,
        gender: "Female",
        seatNo: 7,
        paid: false,
      },
    ],
  },

  {
    busId: "B003",
    busName: "Parveen Travels",
    from: "Bangalore",
    to: "Coimbatore",
    type: "Sleeper",
    fare: 750,
    rating: 4.7,
    availableSeats: 15,
    amenities: ["AC", "WiFi", "Blanket"],
    passengers: [
      {
        passengerId: "P107",
        name: "Suresh",
        age: 35,
        gender: "Male",
        seatNo: 20,
        paid: true,
      },
      {
        passengerId: "P108",
        name: "Meena",
        age: 27,
        gender: "Female",
        seatNo: 21,
        paid: true,
      },
      {
        passengerId: "P109",
        name: "Karthik",
        age: 19,
        gender: "Male",
        seatNo: 22,
        paid: true,
      },
    ],
  },

  {
    busId: "B004",
    busName: "Orange Travels",
    from: "Madurai",
    to: "Bangalore",
    type: "AC Seater",
    fare: 900,
    rating: 4.0,
    availableSeats: 5,
    amenities: ["AC", "WiFi", "Charging", "Water Bottle"],
    passengers: [
      {
        passengerId: "P110",
        name: "Anitha",
        age: 32,
        gender: "Female",
        seatNo: 3,
        paid: true,
      },
      {
        passengerId: "P111",
        name: "Manoj",
        age: 40,
        gender: "Male",
        seatNo: 4,
        paid: false,
      },
    ],
  },

  {
    busId: "B005",
    busName: "VRL Travels",
    from: "Coimbatore",
    to: "Bangalore",
    type: "Sleeper",
    fare: 700,
    rating: 4.6,
    availableSeats: 10,
    amenities: ["AC", "Charging", "Blanket"],
    passengers: [
      {
        passengerId: "P112",
        name: "Sneha",
        age: 23,
        gender: "Female",
        seatNo: 15,
        paid: true,
      },
      {
        passengerId: "P113",
        name: "Ajay",
        age: 29,
        gender: "Male",
        seatNo: 16,
        paid: true,
      },
      {
        passengerId: "P114",
        name: "Harish",
        age: 26,
        gender: "Male",
        seatNo: 17,
        paid: false,
      },
    ],
  },
];

const displayBuses = (bus) => {
  for (const key in bus) {
    if (key != "amenities" && key != "passengers") {
      console.log(key, ":", bus[key]);
    }
  }

  for (const amenitie of bus.amenities) {
    console.log(amenitie);
  }

  for (const passenger of bus.passengers) {
    for (const info in passenger) {
      console.log(info, ":", passenger[info]);
    }
  }
  console.log("--------------------------")
};

for (const bus of buses) {
  displayBuses(bus);
}
