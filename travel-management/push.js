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

/*const addActivity = (travelPackage) => {
    travelPackage.activities.push("Boat Ride");
    return travelPackages;
};
console.log(addActivity(travelPackages[0]));*/

const addActivity = (packageId, activity) => {
    const activitiesPush = travelPackages.findIndex((travelPackage) => travelPackage.packageId === packageId);
        if (activitiesPush !== -1 ) {
            const activityIndex = travelPackages[activitiesPush].activities.indexOf(activity); //find boat ride index
                if (activityIndex === -1) {                                             //-1 === -1 --> true
                    travelPackages[activitiesPush].activities.push(activity);
        }
    }
};

addActivity(102, "Boat Ride");
console.log(travelPackages);