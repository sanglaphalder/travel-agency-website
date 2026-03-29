/**
 * db/tour-data.js
 * North Bengal Tour Packages — Ruler Tours
 * Add more tour objects here to expand the catalogue.
 */

const northBengalTours = [
    {
        id: "darjeeling-01",
        name: "Darjeeling: Queen of Hills",
        price: "₹12,500",
        duration: "3N / 4D",
        maxGroup: "10 pax",
        bestTime: "Oct – May",
        category: "Hills",
        tags: ["Hills", "Tea Garden", "Heritage"],
        badge: "Most Popular",
        img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=75&fit=crop",
        desc: "Marvel at the Tiger Hill sunrise, ride the UNESCO Toy Train through lush valleys, stroll through the iconic Darjeeling tea estates, and soak in panoramic Himalayan views.",
        highlights: [
            "Tiger Hill Sunrise (Kanchenjunga view)",
            "Darjeeling Himalayan Railway (Toy Train)",
            "Batasia Loop & War Memorial",
            "Padmaja Naidu Himalayan Zoological Park",
            "Tea Garden walk & tasting session"
        ]
    },
    {
        id: "kurseong-01",
        name: "Kurseong: White Orchid Retreat",
        price: "₹8,500",
        duration: "2N / 3D",
        maxGroup: "12 pax",
        bestTime: "Sep – Jun",
        category: "Heritage",
        tags: ["Hills", "Heritage", "Peaceful"],
        badge: "Serene Pick",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=75&fit=crop",
        desc: "Escape to Kurseong's tranquil colonial charm — Eagle's Crag viewpoint, Makaibari Tea Estate, heritage railway stations draped in mist, and breathtaking Teesta valley vistas.",
        highlights: [
            "Eagle's Crag sunset viewpoint",
            "Makaibari Heritage Tea Estate",
            "St. Mary's Hill & heritage walk",
            "Dow Hill Forest & Victoria Boys' School",
            "Local market & Tibetan cuisine"
        ]
    },
    {
        id: "jaldapara-01",
        name: "Jaldapara Rhino Safari",
        price: "₹9,800",
        duration: "2N / 3D",
        maxGroup: "8 pax",
        bestTime: "Nov – Apr",
        category: "Wildlife",
        tags: ["Wildlife", "Safari", "Adventure"],
        badge: "Wild Thrill",
        img: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=75&fit=crop",
        desc: "Track the endangered Indian one-horned rhinoceros on thrilling elephant-back and jeep safaris deep inside Jaldapara National Park. Perfect for wildlife lovers.",
        highlights: [
            "Elephant-back safari at dawn",
            "Jeep safari in Jaldapara NP",
            "Chilapata forest & Nalraja ruins",
            "Bird watching (300+ species)",
            "Hollong Forest Lodge stay"
        ]
    },
    {
        id: "lava-01",
        name: "Lava & Loleygaon Escape",
        price: "₹7,200",
        duration: "2N / 3D",
        maxGroup: "14 pax",
        bestTime: "Mar – Jun, Sep – Dec",
        category: "Nature",
        tags: ["Hills", "Nature", "Peaceful"],
        badge: "Hidden Gem",
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=75&fit=crop",
        desc: "Pine forests swathed in mist, the sacred Changey Waterfall, the enchanting canopy walkway at Loleygaon, and serene Himalayan views that refresh the soul.",
        highlights: [
            "Rishop viewpoint (Kanchenjunga panorama)",
            "Loleygaon Canopy Walk",
            "Changey Waterfall trek",
            "Neora Valley National Park edge",
            "Rachela Pass (highest motorable point)"
        ]
    },
    {
        id: "dooars-01",
        name: "Dooars: Forests & Tea Plains",
        price: "₹10,500",
        duration: "3N / 4D",
        maxGroup: "10 pax",
        bestTime: "Oct – Mar",
        category: "Wildlife",
        tags: ["Wildlife", "Tea Garden", "Nature"],
        badge: "Family Favourite",
        img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=75&fit=crop",
        desc: "Explore vast Dooars plains bordering Bhutan — Gorumara National Park safaris, Chapramari Wildlife Sanctuary, river activities on the Murti, and sprawling tea estates.",
        highlights: [
            "Gorumara NP jeep safari",
            "Chapramari Wildlife Sanctuary",
            "Murti River picnic & nature walk",
            "Bindu border point near Bhutan",
            "Jiti & Dharanipur tea estate tour"
        ]
    },
    {
        id: "kalimpong-01",
        name: "Kalimpong: Flower Capital",
        price: "₹8,000",
        duration: "2N / 3D",
        maxGroup: "12 pax",
        bestTime: "Oct – May",
        category: "Heritage",
        tags: ["Hills", "Heritage", "Culture"],
        badge: "Culture Rich",
        img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=75&fit=crop",
        desc: "Discover Kalimpong's vibrant orchid nurseries, Tibetan Buddhist monasteries perched on ridges, colonial boarding schools, and sweeping Teesta valley views from Durpin Hill.",
        highlights: [
            "Durpin Hill Monastery sunrise",
            "Deolo Hill summit walk",
            "Morgan House colonial bungalow",
            "Cactus Nursery & Orchid Garden",
            "Himalayan Handmade Paper Factory"
        ]
    },
    {
        id: "mirik-01",
        name: "Mirik Lake Getaway",
        price: "₹6,500",
        duration: "1N / 2D",
        maxGroup: "15 pax",
        bestTime: "Year Round",
        category: "Hills",
        tags: ["Hills", "Peaceful", "Short Trip"],
        badge: "Quick Escape",
        img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=75&fit=crop",
        desc: "A peaceful short escape to Mirik's crystal-clear Sumendu Lake for boating, orange orchards in season, tea garden strolls, and gorgeous sunset views across the hills.",
        highlights: [
            "Sumendu Lake boating",
            "Orange orchard walk (Oct–Dec)",
            "Sunrise from Daragaon viewpoint",
            "Mirik Tea Estate visit",
            "Bustee Dara local market"
        ]
    },
    {
        id: "sittong-01",
        name: "Sittong: The Orange Valley",
        price: "₹7,800",
        duration: "2N / 3D",
        maxGroup: "8 pax",
        bestTime: "Oct – Feb",
        category: "Nature",
        tags: ["Nature", "Offbeat", "Adventure"],
        badge: "Offbeat Choice",
        img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&q=75&fit=crop",
        desc: "Sittong is North Bengal's best-kept secret — terraced orange orchards, leech-free shaded forest trails, and a bird-watcher's paradise with over 200 recorded species.",
        highlights: [
            "Orange harvest experience (Oct–Dec)",
            "Bird watching trails (200+ species)",
            "Forest village walks",
            "Tinchuley viewpoint",
            "Homestay with local Lepcha families"
        ]
    },
    {
        id: "lepchajagat-01",
        name: "Lepchajagat: Into the Cloud",
        price: "₹7,000",
        duration: "2N / 3D",
        maxGroup: "8 pax",
        bestTime: "Mar – Jun, Oct – Dec",
        category: "Nature",
        tags: ["Hills", "Nature", "Offbeat"],
        badge: "Digital Detox",
        img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=75&fit=crop",
        desc: "At 7,000 ft, Lepchajagat is a tiny hamlet swallowed by silver fir, oak, and rhododendron forests that dissolve into cloud — the ultimate digital detox destination.",
        highlights: [
            "Cloud forest morning trek",
            "Sunset Hill viewpoint",
            "Rhododendron & orchid trails",
            "Birdlife in pristine forest",
            "Complete offline & nature retreat"
        ]
    }
];