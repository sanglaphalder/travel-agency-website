/**
 * db/rental-vehicle-data.js
 * Vehicle Fleet Data — Ruler Tours
 * Add new vehicle objects here to expand the fleet.
 */

const carRentals = [
    {
        id: "car-bolero",
        name: "Mahindra Bolero",
        type: "SUV",
        seats: 7,
        price: "₹2,500",
        timing: "24 Hours",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&q=75&fit=crop",
        features: ["AC", "Music System", "GPS Navigation", "Mountain Road Certified", "Luggage Rack"],
        suitable: "Mountain trips, group travel, rough terrain",
        driver: "With Driver",
        fuel: "Diesel"
    },
    {
        id: "car-innova",
        name: "Toyota Innova Crysta",
        type: "Premium MPV",
        seats: 8,
        price: "₹3,500",
        timing: "24 Hours",
        img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&q=75&fit=crop",
        features: ["AC", "Rear Entertainment", "GPS Navigation", "Push-back Seats", "USB Charging"],
        suitable: "Families, comfort travel, long distance",
        driver: "With Driver",
        fuel: "Diesel"
    },
    {
        id: "car-tempo",
        name: "Tempo Traveller 12-Seater",
        type: "Group Van",
        seats: 12,
        price: "₹5,500",
        timing: "24 Hours",
        img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&q=75&fit=crop",
        features: ["AC", "Push-back Seats", "Large Luggage Space", "Mountain Certified", "Music System"],
        suitable: "Large groups, corporate tours, pilgrimages",
        driver: "With Driver",
        fuel: "Diesel"
    },
    {
        id: "car-swift",
        name: "Maruti Swift Dzire",
        type: "Sedan",
        seats: 4,
        price: "₹1,800",
        timing: "24 Hours",
        img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&q=75&fit=crop",
        features: ["AC", "Music System", "Comfortable Ride", "Fuel Efficient", "USB Charging"],
        suitable: "Couples, small families, city transfers",
        driver: "With Driver / Self-Drive",
        fuel: "Petrol / CNG"
    }
];

const bikeRentals = [
    {
        id: "bike-re350",
        name: "Royal Enfield Classic 350",
        type: "Cruiser",
        seats: 2,
        price: "₹1,200",
        timing: "6AM – 10PM",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75&fit=crop",
        features: ["Helmet Included", "Fuel Card ₹200", "24/7 Breakdown Support", "Insurance Cover", "Tool Kit"],
        suitable: "Solo riders, mountain roads, adventure",
        driver: "Self-Ride",
        fuel: "Petrol"
    },
    {
        id: "bike-avenger",
        name: "Bajaj Avenger 220",
        type: "Cruiser",
        seats: 2,
        price: "₹1,000",
        timing: "6AM – 10PM",
        img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500&q=75&fit=crop",
        features: ["Helmet Included", "Insurance Cover", "24/7 Support", "Tool Kit", "Windshield"],
        suitable: "Solo / pillion, long highway rides",
        driver: "Self-Ride",
        fuel: "Petrol"
    },
    {
        id: "bike-activa",
        name: "Honda Activa 6G",
        type: "Scooter",
        seats: 2,
        price: "₹600",
        timing: "6AM – 10PM",
        img: "https://images.unsplash.com/photo-1558979159-2b18a4070a87?w=500&q=75&fit=crop",
        features: ["Helmet Included", "Easy to Ride", "Phone Holder", "Under-seat Storage", "Fuel Efficient"],
        suitable: "City sightseeing, beginners, couples",
        driver: "Self-Ride",
        fuel: "Petrol"
    }
];