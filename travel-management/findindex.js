const travelPackages = [
    {
        packageId: 101,
        destination: "Goa",
        duration: 5,
        price: 25000,
        activities: [
            "Beach Visit",
            "Sightseeing",
            "Shopping"
        ],
        availableDates: [
            "2026-09-10",
            "2026-09-20",
            "2026-10-05"
        ],
        bookings: [
            "Arun",
            "Ram",
            "Kumar"
        ],
        details: {
            hotel: "4 Star",
            transport: "Flight",
            meals: "Breakfast Included"
        },
    },

    {
        packageId: 102,
        destination: "Dubai",
        duration: 7,
        price: 75000,
        activities: [
            "Desert Safari",
            "Burj Khalifa Visit",
            "Shopping",
            "Cruise Dinner"
        ],
        availableDates: [
            "2026-09-15",
            "2026-10-01",
            "2026-10-20"
        ],
        bookings: [
            "Bala",
            "Saran"
        ],
        details: {
            hotel: "5 Star",
            transport: "Flight",
            meals: "Breakfast and Dinner"
        },
    },

    {
        packageId: 103,
        destination: "Ooty",
        duration: 3,
        price: 12000,
        activities: [
            "Botanical Garden",
            "Boat Ride",
            "Sightseeing"
        ],
        availableDates: [
            "2026-09-12",
            "2026-09-25"
        ],
        bookings: [
            "Prasanna",
            "Vijay",
            "Karthi"
        ],
        details: {
            hotel: "3 Star",
            transport: "Bus",
            meals: "Breakfast Included"
        },
    },
];


const displayFindIndexPackageId = (packageId) => {
    const packageIdFind = travelPackages.findIndex((travelPackage) => travelPackage.packageId === packageId);
    return packageIdFind;

};

console.log(displayFindIndexPackageId(101));
