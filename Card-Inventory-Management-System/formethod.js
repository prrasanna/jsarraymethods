const cards = [
  {
    cardId: 101,
    cardholderName: "Alex Morgan",
    cardType: "Credit",
    expiryYear: 2028,
    benefits: ["Cashback", "Airport Lounge Access", "Fuel Surcharge Waiver"],
    transactions: {
      "2026-05-10": 150.0,
      "2026-05-11": -50.0,
      "2026-05-15": 500.0,
    },
    limits: {
      daily: [5000],
      international: [10000],
    },
  },

  {
    cardId: 102,
    cardholderName: "Sarah Williams",
    cardType: "Debit",
    expiryYear: 2027,
    benefits: ["Cashback", "Fuel Surcharge Waiver"],
    transactions: {
      "2026-05-08": 200.0,
      "2026-05-12": -75.0,
      "2026-05-18": -120.0,
    },
    limits: {
      daily: [3000],
      international: [5000],
    },
  },

  {
    cardId: 103,
    cardholderName: "John Carter",
    cardType: "Credit",
    expiryYear: 2029,
    benefits: ["Reward Points", "Airport Lounge Access", "Dining Discounts"],
    transactions: {
      "2026-06-01": 1000.0,
      "2026-06-05": -250.0,
      "2026-06-10": -150.0,
    },
    limits: {
      daily: [10000],
      international: [25000],
    },
  },

  {
    cardId: 104,
    cardholderName: "Emma Davis",
    cardType: "Debit",
    expiryYear: 2028,
    benefits: ["Cashback", "Online Shopping Offers"],
    transactions: {
      "2026-06-03": 300.0,
      "2026-06-07": -100.0,
      "2026-06-15": -50.0,
    },
    limits: {
      daily: [4000],
      international: [8000],
    },
  },

  {
    cardId: 105,
    cardholderName: "Michael Brown",
    cardType: "Credit",
    expiryYear: 2030,
    benefits: [
      "Cashback",
      "Reward Points",
      "Airport Lounge Access",
      "Movie Discounts",
    ],
    transactions: {
      "2026-07-01": 2000.0,
      "2026-07-05": -500.0,
      "2026-07-12": -300.0,
    },
    limits: {
      daily: [15000],
      international: [30000],
    },
  },
];

const displayCardDetails = (card) => {
  for (const key in card) {
    if (key !== "benefits" && key != "transactions" && key !== "limits") {
      console.log(card[key]);
    }
  }

  for (const benefit of card.benefits) {
    console.log(benefit);
  }

  for (const key in card.transactions) {
    console.log(key, ":", card.transactions[key]);
  }

  for (const info in card.limits) {
    console.log(info, ":", card.limits[info]);
  }
  console.log("------------------------")
};

for (const card of cards) {
  displayCardDetails(card);
}
