import { d as derived, w as writable } from "./index.js";
const products = writable([
  {
    id: "1",
    name: "ELORA Mini Pro",
    category: "mini",
    price: 25e3,
    rating: 4.8,
    image: "/mini-projector.png",
    description: "Compact, bright, and portable. Perfect for bedroom cinema.",
    gallery: [
      "/mini-projector.png",
      "/mini-projector-side.png",
      // Placeholder
      "/mini-projector-lifestyle.png"
      // Placeholder
    ],
    features: [
      "1080p Native Resolution",
      "300 ANSI Lumens",
      "Android TV 11 Built-in",
      "Silent Cooling Technology"
    ],
    specs: {
      "Brightness": "300 ANSI Lumens",
      "Resolution": "1920 x 1080 (Full HD)",
      "Contrast Ratio": "2000:1",
      "Lamp Life": "30,000 Hours",
      "Connectivity": "HDMI, USB, WiFi 6, Bluetooth 5.0"
    },
    reviews: [
      { id: "r1", user: "Sarah K.", rating: 5, comment: "Amazing clarity for such a small device!", date: "2024-02-15" },
      { id: "r2", user: "Mike D.", rating: 4, comment: "Great value, but the fan is slightly audible in silent scenes.", date: "2024-01-20" }
    ]
  },
  {
    id: "2",
    name: "Smart Beam 4K",
    category: "smart",
    price: 55e3,
    rating: 4.9,
    image: "/smart-projector.png",
    description: "Ultra HD home theater experience with built-in streaming apps.",
    gallery: [
      "/smart-projector.png",
      "/smart-projector-front.png",
      "/smart-projector-room.png"
    ],
    features: [
      "4K UHD Resolution with HDR10+",
      "2000 ANSI Lumens",
      "Dolby Audio Integrated",
      "Auto Keystone & Focus"
    ],
    specs: {
      "Brightness": "2000 ANSI Lumens",
      "Resolution": "3840 x 2160 (4K UHD)",
      "Contrast Ratio": "10000:1",
      "Lamp Life": "50,000 Hours",
      "Connectivity": "2x HDMI 2.1, 2x USB, Ethernet, WiFi 6E"
    },
    reviews: [
      { id: "r1", user: "James W.", rating: 5, comment: "Replaced my TV completely. usage in daylight is fine too.", date: "2024-03-01" }
    ]
  },
  {
    id: "3",
    name: "Outdoor Cinema X",
    category: "outdoor",
    price: 35e3,
    rating: 4.7,
    image: "/outdoor-projector.png",
    description: "Rugged design with internal battery for camping and backyard movies.",
    gallery: [
      "/outdoor-projector.png",
      "/outdoor-lifestyle-camping.png"
    ],
    features: [
      "Water & Dust Resistant (IPX4)",
      "4-Hour Battery Life",
      "Built-in Power Bank",
      "Bluetooth Speaker Mode"
    ],
    specs: {
      "Brightness": "800 ANSI Lumens",
      "Resolution": "1080p",
      "Battery": "15000mAh (4 hours video)",
      "Connectivity": "USB-C, HDMI, Bluetooth 5.2"
    },
    reviews: [
      { id: "r1", user: "CampingGuy", rating: 5, comment: "The battery life is legit. Watched two movies back to back.", date: "2023-11-12" }
    ]
  },
  {
    id: "4",
    name: "ELORA Premium HDMI 2.1",
    category: "accessories",
    price: 2500,
    rating: 4.8,
    image: "/hdmi-cable.png",
    description: "Ultra high-speed 4K/8K braided cable with gold-plated connectors.",
    gallery: ["/hdmi-cable.png"],
    features: ["48Gbps Bandwidth", "8K@60Hz Support", "Braided Nylon"],
    specs: { "Length": "2 Meters", "Version": "HDMI 2.1", "Connector": "Gold Plated" },
    reviews: []
  },
  {
    id: "5",
    name: 'Pull-Down Projector Screen (100")',
    category: "accessories",
    price: 12e3,
    rating: 4.6,
    image: "/projector-screen.png",
    description: "Matte white surface for vibrant colors and wide viewing angles.",
    gallery: ["/projector-screen.png"],
    features: ["160° Viewing Angle", "Auto-Lock Mechanism", "Wrinkle-Free Material"],
    specs: { "Size": "100 Inch Diagonal", "Aspect Ratio": "16:9", "Gain": "1.1" },
    reviews: []
  },
  {
    id: "6",
    name: "Professional Aluminum Tripod",
    category: "accessories",
    price: 4500,
    rating: 4.9,
    image: "/tripod-stand.png",
    description: "Heavy-duty adjustable stand compatible with all ELORA projectors.",
    gallery: ["/tripod-stand.png"],
    features: ["360° Ball Head", "Height Adjustable", "Lightweight Aluminum"],
    specs: { "Max Height": "1.5 Meters", "Load Capacity": "5kg", "Weight": "1.2kg" },
    reviews: []
  }
]);
const activeCategory = writable("all");
const searchQuery = writable("");
const sortBy = writable("rating");
const filteredProducts = derived(
  [products, activeCategory, searchQuery, sortBy],
  ([$products, $activeCategory, $searchQuery, $sortBy]) => {
    let filtered = $products;
    if ($activeCategory !== "all") {
      filtered = filtered.filter((p) => p.category === $activeCategory);
    }
    if ($searchQuery) {
      const query = $searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) => p.name.toLowerCase().includes(query) || p.description.toLowerCase().includes(query)
      );
    }
    filtered = filtered.sort((a, b) => {
      if ($sortBy === "price-asc") return a.price - b.price;
      if ($sortBy === "price-desc") return b.price - a.price;
      if ($sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
    return filtered;
  }
);
export {
  activeCategory as a,
  filteredProducts as f,
  products as p,
  sortBy as s
};
