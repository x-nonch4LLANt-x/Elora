import { d as derived, w as writable } from "./index.js";
const products = writable([
  {
    id: "1",
    name: "Elora Anti Light Screen",
    category: "accessories",
    price: 6e3,
    rating: 4.8,
    image: "/projector-screen.png",
    description: "High-quality 120-inch anti-light screen for vibrant visuals even in ambient light.",
    gallery: ["/projector-screen.png"],
    features: ["120 inches", "Anti-Light Material", "Wide Viewing Angle"],
    specs: {
      "Size": "120 inches",
      "Material": "Anti-Light Fabric"
    },
    reviews: []
  },
  {
    id: "2",
    name: "Elora XG projector",
    category: "smart",
    price: 26e3,
    rating: 4.5,
    image: "/smart-projector.png",
    description: "Versatile 1080p projector with 4K input support, perfect for home cinema.",
    gallery: ["/smart-projector.png"],
    features: ["1080p Native (Supports 4K inputs)", "50 to 300 inches projection", "High Brightness"],
    specs: {
      "Resolution": "1080p (Supports 4K)",
      "Projection Size": "50 to 300 inches",
      "Brightness": "High Lumens"
    },
    reviews: [
      {
        id: "r1",
        user: "Wairioko97",
        rating: 5,
        comment: "Bought the Elora projector and I can say it's good,now I'm coming for the anti light",
        date: "2024-05-15"
      }
    ]
  },
  {
    id: "3",
    name: "Elora R20",
    category: "smart",
    price: 32e3,
    rating: 4.9,
    image: "/outdoor-projector.png",
    description: "Premium Full HD projector for an immersive 200-inch viewing experience.",
    gallery: ["/outdoor-projector.png"],
    features: ["200 INCHES Projection", "1080P FULL HD", "Premium Audio"],
    specs: {
      "Resolution": "1080P FULL HD",
      "Max Projection": "200 INCHES",
      "Connectivity": "HDMI, USB, WiFi"
    },
    reviews: []
  }
]);
const activeCategory = writable("all");
const searchQuery = writable("");
const sortBy = writable("rating");
function levenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}
function getSearchScore(product, query) {
  const queryLower = query.toLowerCase();
  let score = 0;
  if (product.name.toLowerCase() === queryLower) {
    score += 100;
  }
  if (product.name.toLowerCase().includes(queryLower)) {
    score += 50;
  }
  const nameWords = product.name.toLowerCase().split(" ");
  for (const word of nameWords) {
    const distance = levenshteinDistance(word, queryLower);
    if (distance <= 2 && word.length > 3) {
      score += 30 - distance * 10;
    }
  }
  if (product.description.toLowerCase().includes(queryLower)) {
    score += 20;
  }
  for (const feature of product.features) {
    if (feature.toLowerCase().includes(queryLower)) {
      score += 15;
    }
  }
  for (const [key, value] of Object.entries(product.specs)) {
    if (key.toLowerCase().includes(queryLower) || value.toLowerCase().includes(queryLower)) {
      score += 10;
    }
  }
  if (product.category.toLowerCase().includes(queryLower)) {
    score += 5;
  }
  return score;
}
const filteredProducts = derived(
  [products, activeCategory, searchQuery, sortBy],
  ([$products, $activeCategory, $searchQuery, $sortBy]) => {
    let filtered = $products;
    if ($activeCategory !== "all") {
      filtered = filtered.filter((p) => p.category === $activeCategory);
    }
    if ($searchQuery) {
      const scoredProducts = filtered.map((product) => ({
        product,
        score: getSearchScore(product, $searchQuery)
      }));
      filtered = scoredProducts.filter(({ score }) => score > 0).sort((a, b) => b.score - a.score).map(({ product }) => product);
      return filtered;
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
  sortBy as b,
  filteredProducts as f,
  products as p,
  searchQuery as s
};
