
export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  specs: {
    engine: string;
    power: string;
    topSpeed: string;
    weight: string;
  };
  features: string[];
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  founded: string;
  country: string;
}

export const brands: Brand[] = [
  {
    id: "ducati",
    name: "Ducati",
    logo: "🏍️",
    description: "Italian excellence in motorcycle engineering",
    founded: "1926",
    country: "Italy"
  },
  {
    id: "kawasaki",
    name: "Kawasaki",
    logo: "⚡",
    description: "Japanese precision and power",
    founded: "1896",
    country: "Japan"
  },
  {
    id: "yamaha",
    name: "Yamaha",
    logo: "🎵",
    description: "Revs your heart",
    founded: "1887",
    country: "Japan"
  },
  {
    id: "honda",
    name: "Honda",
    logo: "🚀",
    description: "The power of dreams",
    founded: "1948",
    country: "Japan"
  },
  {
    id: "suzuki",
    name: "Suzuki",
    logo: "⭐",
    description: "Way of life",
    founded: "1909",
    country: "Japan"
  },
  {
    id: "bmw",
    name: "BMW",
    logo: "🔘",
    description: "The ultimate riding machine",
    founded: "1916",
    country: "Germany"
  },
  {
    id: "ktm",
    name: "KTM",
    logo: "🧡",
    description: "Ready to race",
    founded: "1953",
    country: "Austria"
  },
  {
    id: "aprilia",
    name: "Aprilia",
    logo: "🦅",
    description: "Be a racer",
    founded: "1945",
    country: "Italy"
  },
  {
    id: "triumph",
    name: "Triumph",
    logo: "👑",
    description: "For the ride",
    founded: "1902",
    country: "United Kingdom"
  },
  {
    id: "harley",
    name: "Harley-Davidson",
    logo: "🦅",
    description: "All for freedom, freedom for all",
    founded: "1903",
    country: "United States"
  },
  {
    id: "mv-agusta",
    name: "MV Agusta",
    logo: "👑",
    description: "The art of motorcycle",
    founded: "1945",
    country: "Italy"
  },
  {
    id: "royal-enfield",
    name: "Royal Enfield",
    logo: "🛡️",
    description: "Made like a gun",
    founded: "1901",
    country: "India"
  }
];

export const products: Product[] = [
  // Ducati Products
  {
    id: "ducati-panigale-v4",
    name: "Panigale V4 S",
    brand: "ducati",
    price: 2599000,
    originalPrice: 2799000,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    description: "The ultimate expression of Ducati's racing DNA",
    specs: {
      engine: "1103cc V4",
      power: "214 HP",
      topSpeed: "300 km/h",
      weight: "195 kg"
    },
    features: ["Ducati Traction Control", "Cornering ABS", "Ducati Wheelie Control", "Öhlins Suspension"],
    category: "Sport",
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: "ducati-monster-1200",
    name: "Monster 1200 S",
    brand: "ducati",
    price: 1899000,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&h=600&fit=crop",
    description: "Naked aggression meets Italian style",
    specs: {
      engine: "1198cc L-Twin",
      power: "147 HP",
      topSpeed: "250 km/h",
      weight: "185 kg"
    },
    features: ["Riding Modes", "Ducati Safety Pack", "TFT Display", "LED Lighting"],
    category: "Naked",
    inStock: true,
    rating: 4.8,
    reviews: 203
  },
  {
    id: "ducati-multistrada-v4",
    name: "Multistrada V4 S",
    brand: "ducati",
    price: 2299000,
    image: "https://images.unsplash.com/photo-1619416405720-6e0e6b815098?w=800&h=600&fit=crop",
    description: "Adventure touring redefined",
    specs: {
      engine: "1158cc V4",
      power: "170 HP",
      topSpeed: "260 km/h",
      weight: "218 kg"
    },
    features: ["Radar Technology", "Adaptive Cruise Control", "Skyhook Suspension", "Matrix LED Headlight"],
    category: "Adventure",
    inStock: true,
    rating: 4.7,
    reviews: 98
  },
  {
    id: "ducati-scrambler-icon",
    name: "Scrambler Icon",
    brand: "ducati",
    price: 999000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
    description: "Essential fun on two wheels",
    specs: {
      engine: "803cc L-Twin",
      power: "73 HP",
      topSpeed: "200 km/h",
      weight: "189 kg"
    },
    features: ["Cornering ABS", "Traction Control", "LCD Display", "LED DRL"],
    category: "Scrambler",
    inStock: true,
    rating: 4.6,
    reviews: 142
  },
  {
    id: "ducati-diavel-1260",
    name: "Diavel 1260 S",
    brand: "ducati",
    price: 1799000,
    image: "https://images.unsplash.com/photo-1592912678476-c3c8a43f1a88?w=800&h=600&fit=crop",
    description: "Power cruiser extraordinaire",
    specs: {
      engine: "1262cc L-Twin",
      power: "159 HP",
      topSpeed: "245 km/h",
      weight: "218 kg"
    },
    features: ["Power Launch", "Riding Modes", "Öhlins Suspension", "Brembo Brakes"],
    category: "Cruiser",
    inStock: true,
    rating: 4.8,
    reviews: 89
  },

  // Kawasaki Products
  {
    id: "kawasaki-ninja-zx10r",
    name: "Ninja ZX-10R",
    brand: "kawasaki",
    price: 1699000,
    originalPrice: 1799000,
    image: "https://images.unsplash.com/photo-1616643496636-c8c7d6ba8fb8?w=800&h=600&fit=crop",
    description: "Track-bred superbike perfection",
    specs: {
      engine: "998cc Inline-4",
      power: "200 HP",
      topSpeed: "299 km/h",
      weight: "207 kg"
    },
    features: ["KTRC Traction Control", "Launch Control", "Showa Suspension", "Quick Shifter"],
    category: "Sport",
    inStock: true,
    rating: 4.9,
    reviews: 187
  },
  {
    id: "kawasaki-z900",
    name: "Z900",
    brand: "kawasaki",
    price: 899000,
    image: "https://images.unsplash.com/photo-1544966503-7e9e834d81e8?w=800&h=600&fit=crop",
    description: "Supernaked style and performance",
    specs: {
      engine: "948cc Inline-4",
      power: "125 HP",
      topSpeed: "230 km/h",
      weight: "210 kg"
    },
    features: ["Assist & Slipper Clutch", "KTRC", "Power Modes", "LED Lighting"],
    category: "Naked",
    inStock: true,
    rating: 4.7,
    reviews: 234
  },
  {
    id: "kawasaki-versys-1000",
    name: "Versys 1000 SE",
    brand: "kawasaki",
    price: 1299000,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop",
    description: "Adventure touring capability",
    specs: {
      engine: "1043cc Inline-4",
      power: "120 HP",
      topSpeed: "220 km/h",
      weight: "257 kg"
    },
    features: ["Electronic Suspension", "Cornering Management", "TFT Display", "Cruise Control"],
    category: "Adventure",
    inStock: true,
    rating: 4.6,
    reviews: 156
  },
  {
    id: "kawasaki-w800",
    name: "W800 Cafe",
    brand: "kawasaki",
    price: 699000,
    image: "https://images.unsplash.com/photo-1558583055-d7ac00b1adca?w=800&h=600&fit=crop",
    description: "Classic cafe racer styling",
    specs: {
      engine: "773cc Parallel Twin",
      power: "48 HP",
      topSpeed: "180 km/h",
      weight: "226 kg"
    },
    features: ["Retro Styling", "Chrome Details", "Classic Gauges", "Assist Clutch"],
    category: "Classic",
    inStock: true,
    rating: 4.5,
    reviews: 198
  },
  {
    id: "kawasaki-vulcan-s",
    name: "Vulcan S",
    brand: "kawasaki",
    price: 599000,
    image: "https://images.unsplash.com/photo-1601464485593-4b3b1a1e5d2b?w=800&h=600&fit=crop",
    description: "Modern cruiser with sport bike engine",
    specs: {
      engine: "649cc Parallel Twin",
      power: "61 HP",
      topSpeed: "190 km/h",
      weight: "229 kg"
    },
    features: ["Ergo-Fit System", "Slipper Clutch", "Digital Display", "Low Seat Height"],
    category: "Cruiser",
    inStock: true,
    rating: 4.4,
    reviews: 167
  },

  // Yamaha Products
  {
    id: "yamaha-r1m",
    name: "YZF-R1M",
    brand: "yamaha",
    price: 2199000,
    originalPrice: 2399000,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop",
    description: "MotoGP technology for the road",
    specs: {
      engine: "998cc Inline-4",
      power: "200 HP",
      topSpeed: "299 km/h",
      weight: "201 kg"
    },
    features: ["Öhlins Electronic Racing Suspension", "Carbon Fiber Bodywork", "GPS Data Logger", "Launch Control"],
    category: "Sport",
    inStock: true,
    rating: 4.9,
    reviews: 123
  },
  {
    id: "yamaha-mt09",
    name: "MT-09",
    brand: "yamaha",
    price: 999000,
    image: "https://images.unsplash.com/photo-1580310614729-4d01a4e82bbc?w=800&h=600&fit=crop",
    description: "Dark side of Japan",
    specs: {
      engine: "889cc Inline-3",
      power: "119 HP",
      topSpeed: "230 km/h",
      weight: "193 kg"
    },
    features: ["CP3 Engine", "TCS", "Ride Modes", "Quick Shifter"],
    category: "Naked",
    inStock: true,
    rating: 4.8,
    reviews: 289
  },
  {
    id: "yamaha-tenere-700",
    name: "Ténéré 700",
    brand: "yamaha",
    price: 1099000,
    image: "https://images.unsplash.com/photo-1590048866042-8e78ce0f7b47?w=800&h=600&fit=crop",
    description: "Adventure spirit unleashed",
    specs: {
      engine: "689cc Parallel Twin",
      power: "73 HP",
      topSpeed: "200 km/h",
      weight: "205 kg"
    },
    features: ["Rally-inspired Design", "Long Travel Suspension", "21-inch Front Wheel", "ABS"],
    category: "Adventure",
    inStock: true,
    rating: 4.7,
    reviews: 176
  },
  {
    id: "yamaha-xsr900",
    name: "XSR900",
    brand: "yamaha",
    price: 999000,
    image: "https://images.unsplash.com/photo-1581712395207-1d25e7b9d7e8?w=800&h=600&fit=crop",
    description: "Sport heritage meets modern performance",
    specs: {
      engine: "889cc Inline-3",
      power: "119 HP",
      topSpeed: "230 km/h",
      weight: "195 kg"
    },
    features: ["Neo-retro Design", "TCS", "ABS", "LCD Display"],
    category: "Heritage",
    inStock: true,
    rating: 4.6,
    reviews: 145
  },
  {
    id: "yamaha-bolt",
    name: "Bolt R-Spec",
    brand: "yamaha",
    price: 699000,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&h=600&fit=crop",
    description: "Minimalist bobber style",
    specs: {
      engine: "942cc V-Twin",
      power: "54 HP",
      topSpeed: "170 km/h",
      weight: "252 kg"
    },
    features: ["Bobber Styling", "Low Seat", "Chrome Details", "Classic Look"],
    category: "Cruiser",
    inStock: true,
    rating: 4.5,
    reviews: 132
  },

  // Honda Products
  {
    id: "honda-cbr1000rr",
    name: "CBR1000RR-R Fireblade SP",
    brand: "honda",
    price: 2499000,
    originalPrice: 2699000,
    image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=800&h=600&fit=crop",
    description: "Total control superbike",
    specs: {
      engine: "999cc Inline-4",
      power: "215 HP",
      topSpeed: "299 km/h",
      weight: "201 kg"
    },
    features: ["Öhlins NPX Suspension", "Brembo Stylema Calipers", "Marchesini Wheels", "Track Mode"],
    category: "Sport",
    inStock: true,
    rating: 4.9,
    reviews: 98
  },
  {
    id: "honda-cb1000r",
    name: "CB1000R Black Edition",
    brand: "honda",
    price: 1399000,
    image: "https://images.unsplash.com/photo-1586053842063-8b999e0be0a3?w=800&h=600&fit=crop",
    description: "Neo-sports cafe perfection",
    specs: {
      engine: "998cc Inline-4",
      power: "145 HP",
      topSpeed: "240 km/h",
      weight: "212 kg"
    },
    features: ["Honda Selectable Torque Control", "Showa Suspension", "LED Lighting", "TFT Display"],
    category: "Naked",
    inStock: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: "honda-africa-twin",
    name: "Africa Twin Adventure Sports",
    brand: "honda",
    price: 1599000,
    image: "https://images.unsplash.com/photo-1620838831163-64ad2b482728?w=800&h=600&fit=crop",
    description: "True adventure companion",
    specs: {
      engine: "1084cc Parallel Twin",
      power: "102 HP",
      topSpeed: "200 km/h",
      weight: "238 kg"
    },
    features: ["DCT Option", "Honda Selectable Torque Control", "Showa Suspension", "Apple CarPlay"],
    category: "Adventure",
    inStock: true,
    rating: 4.7,
    reviews: 234
  },
  {
    id: "honda-cb650r",
    name: "CB650R",
    brand: "honda",
    price: 799000,
    image: "https://images.unsplash.com/photo-1559392147-9c8ad2b44296?w=800&h=600&fit=crop",
    description: "Neo-sports cafe middleweight",
    specs: {
      engine: "649cc Inline-4",
      power: "95 HP",
      topSpeed: "200 km/h",
      weight: "200 kg"
    },
    features: ["Assist Slipper Clutch", "Showa SFF Forks", "LCD Display", "LED Lighting"],
    category: "Naked",
    inStock: true,
    rating: 4.6,
    reviews: 189
  },
  {
    id: "honda-rebel-1100",
    name: "Rebel 1100",
    brand: "honda",
    price: 999000,
    image: "https://images.unsplash.com/photo-1614016001788-5b4a75bb4e0e?w=800&h=600&fit=crop",
    description: "Modern cruiser revolution",
    specs: {
      engine: "1084cc Parallel Twin",
      power: "87 HP",
      topSpeed: "180 km/h",
      weight: "233 kg"
    },
    features: ["DCT Option", "Riding Modes", "Low Seat Height", "LED Lighting"],
    category: "Cruiser",
    inStock: true,
    rating: 4.5,
    reviews: 156
  },

  // Suzuki Products
  {
    id: "suzuki-gsxr1000r",
    name: "GSX-R1000R",
    brand: "suzuki",
    price: 1899000,
    originalPrice: 2099000,
    image: "https://images.unsplash.com/photo-1592880968336-9c5bc89e75d5?w=800&h=600&fit=crop",
    description: "Own the racetrack",
    specs: {
      engine: "999cc Inline-4",
      power: "202 HP",
      topSpeed: "299 km/h",
      weight: "203 kg"
    },
    features: ["Variable Valve Timing", "Launch Control", "Showa Balance Free Suspension", "Brembo Brakes"],
    category: "Sport",
    inStock: true,
    rating: 4.8,
    reviews: 143
  },
  {
    id: "suzuki-gsxs1000",
    name: "GSX-S1000",
    brand: "suzuki",
    price: 1199000,
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
    description: "Street performance redefined",
    specs: {
      engine: "999cc Inline-4",
      power: "152 HP",
      topSpeed: "240 km/h",
      weight: "214 kg"
    },
    features: ["Motion Track Brake System", "Traction Control", "Easy Start System", "Low RPM Assist"],
    category: "Naked",
    inStock: true,
    rating: 4.7,
    reviews: 176
  },
  {
    id: "suzuki-vstrom-1050",
    name: "V-Strom 1050XT",
    brand: "suzuki",
    price: 1399000,
    image: "https://images.unsplash.com/photo-1616788529686-6ed6b43b6e97?w=800&h=600&fit=crop",
    description: "Adventure without limits",
    specs: {
      engine: "1037cc V-Twin",
      power: "107 HP",
      topSpeed: "200 km/h",
      weight: "247 kg"
    },
    features: ["Electronic Suspension", "Traction Control", "Hill Hold Control", "Cruise Control"],
    category: "Adventure",
    inStock: true,
    rating: 4.6,
    reviews: 134
  },
  {
    id: "suzuki-sv650",
    name: "SV650X",
    brand: "suzuki",
    price: 699000,
    image: "https://images.unsplash.com/photo-1577980195432-2b4b7a39adfb?w=800&h=600&fit=crop",
    description: "Cafe racer inspired",
    specs: {
      engine: "645cc V-Twin",
      power: "76 HP",
      topSpeed: "200 km/h",
      weight: "197 kg"
    },
    features: ["Low RPM Assist", "ABS", "Easy Start System", "Clip-on Handlebars"],
    category: "Sport",
    inStock: true,
    rating: 4.5,
    reviews: 198
  },
  {
    id: "suzuki-boulevard-m109r",
    name: "Boulevard M109R B.O.S.S.",
    brand: "suzuki",
    price: 1499000,
    image: "https://images.unsplash.com/photo-1593327547055-af3b51f24fde?w=800&h=600&fit=crop",
    description: "Ultimate power cruiser",
    specs: {
      engine: "1783cc V-Twin",
      power: "123 HP",
      topSpeed: "200 km/h",
      weight: "347 kg"
    },
    features: ["Massive Torque", "Inverted Forks", "Carbon Fiber Details", "Chrome Finish"],
    category: "Cruiser",
    inStock: true,
    rating: 4.7,
    reviews: 89
  },

  // BMW Products
  {
    id: "bmw-s1000rr",
    name: "S 1000 RR",
    brand: "bmw",
    price: 2299000,
    originalPrice: 2499000,
    image: "https://images.unsplash.com/photo-1625050575697-52ad6cf96819?w=800&h=600&fit=crop",
    description: "Racing precision meets road capability",
    specs: {
      engine: "999cc Inline-4",
      power: "207 HP",
      topSpeed: "299 km/h",
      weight: "197 kg"
    },
    features: ["Dynamic Damping Control", "Launch Control", "M Package", "Race Pro Modes"],
    category: "Sport",
    inStock: true,
    rating: 4.9,
    reviews: 112
  },
  {
    id: "bmw-s1000r",
    name: "S 1000 R",
    brand: "bmw",
    price: 1799000,
    image: "https://images.unsplash.com/photo-1572803542086-d0ffb44e2b28?w=800&h=600&fit=crop",
    description: "Naked power and precision",
    specs: {
      engine: "999cc Inline-4",
      power: "165 HP",
      topSpeed: "250 km/h",
      weight: "199 kg"
    },
    features: ["Dynamic Traction Control", "Engine Brake Control", "Hill Start Control", "Cruise Control"],
    category: "Naked",
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: "bmw-r1250gs",
    name: "R 1250 GS Adventure",
    brand: "bmw",
    price: 2199000,
    image: "https://images.unsplash.com/photo-1558618620-fcd25c85cd64?w=800&h=600&fit=crop",
    description: "The ultimate adventure machine",
    specs: {
      engine: "1254cc Boxer Twin",
      power: "136 HP",
      topSpeed: "200 km/h",
      weight: "268 kg"
    },
    features: ["Dynamic ESA", "Enduro Pro Modes", "TFT Display", "Keyless Ride"],
    category: "Adventure",
    inStock: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: "bmw-rninet",
    name: "R nineT",
    brand: "bmw",
    price: 1599000,
    image: "https://images.unsplash.com/photo-1573473112737-2eff0e89d6e0?w=800&h=600&fit=crop",
    description: "Heritage meets modern technology",
    specs: {
      engine: "1170cc Boxer Twin",
      power: "109 HP",
      topSpeed: "200 km/h",
      weight: "222 kg"
    },
    features: ["Heritage Design", "ABS", "Traction Control", "Multiple Ride Modes"],
    category: "Heritage",
    inStock: true,
    rating: 4.7,
    reviews: 134
  },
  {
    id: "bmw-r18",
    name: "R 18",
    brand: "bmw",
    price: 1899000,
    image: "https://images.unsplash.com/photo-1571119022187-2c1d0d5ad96c?w=800&h=600&fit=crop",
    description: "Emotional greatness on two wheels",
    specs: {
      engine: "1802cc Boxer Twin",
      power: "91 HP",
      topSpeed: "180 km/h",
      weight: "345 kg"
    },
    features: ["Massive Torque", "Chrome Details", "Reverse Assist", "Hill Start Control"],
    category: "Cruiser",
    inStock: true,
    rating: 4.6,
    reviews: 98
  },

  // KTM Products
  {
    id: "ktm-1290-super-duke-r",
    name: "1290 Super Duke R",
    brand: "ktm",
    price: 1999000,
    originalPrice: 2199000,
    image: "https://images.unsplash.com/photo-1619416405720-6e0e6b815098?w=800&h=600&fit=crop",
    description: "The Beast - Naked performance king",
    specs: {
      engine: "1301cc V-Twin",
      power: "180 HP",
      topSpeed: "270 km/h",
      weight: "189 kg"
    },
    features: ["Track Mode", "Cornering ABS", "MSC", "Launch Control"],
    category: "Naked",
    inStock: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: "ktm-rc8c",
    name: "RC 8C",
    brand: "ktm",
    price: 4999000,
    image: "https://images.unsplash.com/photo-1607973242519-1e64b9000d3c?w=800&h=600&fit=crop",
    description: "Track-only perfection",
    specs: {
      engine: "889cc Parallel Twin",
      power: "128 HP",
      topSpeed: "250 km/h",
      weight: "154 kg"
    },
    features: ["Carbon Fiber Construction", "WP APEX Suspension", "Akrapović Exhaust", "Track-Only"],
    category: "Sport",
    inStock: false,
    rating: 5.0,
    reviews: 23
  },
  {
    id: "ktm-1290-adventure-s",
    name: "1290 Super Adventure S",
    brand: "ktm",
    price: 1899000,
    image: "https://images.unsplash.com/photo-1591768793269-b32de885b2e4?w=800&h=600&fit=crop",
    description: "Adventure touring excellence",
    specs: {
      engine: "1301cc V-Twin",
      power: "160 HP",
      topSpeed: "220 km/h",
      weight: "249 kg"
    },
    features: ["Semi-Active Suspension", "Cornering ABS", "MSC", "Adaptive Cruise Control"],
    category: "Adventure",
    inStock: true,
    rating: 4.8,
    reviews: 145
  },
  {
    id: "ktm-890-duke",
    name: "890 Duke R",
    brand: "ktm",
    price: 1199000,
    image: "https://images.unsplash.com/photo-1615842966478-0cb2bfbfa81c?w=800&h=600&fit=crop",
    description: "The scalpel - Precision naked bike",
    specs: {
      engine: "889cc Parallel Twin",
      power: "121 HP",
      topSpeed: "230 km/h",
      weight: "166 kg"
    },
    features: ["WP APEX Suspension", "Cornering ABS", "Track Mode", "Quickshifter+"],
    category: "Naked",
    inStock: true,
    rating: 4.7,
    reviews: 189
  },
  {
    id: "ktm-690-smc-r",
    name: "690 SMC R",
    brand: "ktm",
    price: 999000,
    image: "https://images.unsplash.com/photo-1601169988580-4fbec35bb41f?w=800&h=600&fit=crop",
    description: "Supermoto madness",
    specs: {
      engine: "693cc Single",
      power: "74 HP",
      topSpeed: "180 km/h",
      weight: "147 kg"
    },
    features: ["Supermoto Setup", "WP Suspension", "Lean Angle Sensitive ABS", "Ride Modes"],
    category: "Supermoto",
    inStock: true,
    rating: 4.6,
    reviews: 134
  },

  // Aprilia Products
  {
    id: "aprilia-rsv4-1100",
    name: "RSV4 1100 Factory",
    brand: "aprilia",
    price: 2799000,
    originalPrice: 2999000,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&h=600&fit=crop",
    description: "Racing DNA in pure form",
    specs: {
      engine: "1077cc V4",
      power: "217 HP",
      topSpeed: "300 km/h",
      weight: "199 kg"
    },
    features: ["Öhlins Smart EC 2.0", "Wings Package", "Brembo Stylema", "Carbon Fiber"],
    category: "Sport",
    inStock: true,
    rating: 4.9,
    reviews: 76
  },
  {
    id: "aprilia-tuono-v4",
    name: "Tuono V4 1100 Factory",
    brand: "aprilia",
    price: 2199000,
    image: "https://images.unsplash.com/photo-1542076557-a6acda8eee4a?w=800&h=600&fit=crop",
    description: "Naked superbike supremacy",
    specs: {
      engine: "1077cc V4",
      power: "175 HP",
      topSpeed: "270 km/h",
      weight: "184 kg"
    },
    features: ["APRC System", "Multiple Ride Modes", "Cornering ABS", "Öhlins Suspension"],
    category: "Naked",
    inStock: true,
    rating: 4.8,
    reviews: 98
  },
  {
    id: "aprilia-caponord-1200",
    name: "Caponord 1200 Rally",
    brand: "aprilia",
    price: 1699000,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&h=600&fit=crop",
    description: "Adventure touring Italian style",
    specs: {
      engine: "1197cc V-Twin",
      power: "125 HP",
      topSpeed: "200 km/h",
      weight: "235 kg"
    },
    features: ["Cruise Control", "Three Ride Modes", "Traction Control", "ABS"],
    category: "Adventure",
    inStock: true,
    rating: 4.6,
    reviews: 67
  },
  {
    id: "aprilia-shiver-900",
    name: "Shiver 900",
    brand: "aprilia",
    price: 999000,
    image: "https://images.unsplash.com/photo-1599715032746-1d0b5dd8dc33?w=800&h=600&fit=crop",
    description: "Modern naked performance",
    specs: {
      engine: "896cc V-Twin",
      power: "95 HP",
      topSpeed: "220 km/h",
      weight: "214 kg"
    },
    features: ["Ride-by-Wire", "Traction Control", "Multiple Ride Modes", "TFT Display"],
    category: "Naked",
    inStock: true,
    rating: 4.5,
    reviews: 112
  },
  {
    id: "aprilia-dorsoduro-900",
    name: "Dorsoduro 900",
    brand: "aprilia",
    price: 1099000,
    image: "https://images.unsplash.com/photo-1585867474721-58e08e8e7b8d?w=800&h=600&fit=crop",
    description: "Supermoto with V-twin soul",
    specs: {
      engine: "896cc V-Twin",
      power: "95 HP",
      topSpeed: "210 km/h",
      weight: "212 kg"
    },
    features: ["Supermoto Style", "Ride Modes", "Traction Control", "ABS"],
    category: "Supermoto",
    inStock: true,
    rating: 4.6,
    reviews: 89
  },

  // Triumph Products
  {
    id: "triumph-speed-triple-1200-rs",
    name: "Speed Triple 1200 RS",
    brand: "triumph",
    price: 1899000,
    originalPrice: 2099000,
    image: "https://images.unsplash.com/photo-1539676398523-b645c5e3be45?w=800&h=600&fit=crop",
    description: "The ultimate speed machine",
    specs: {
      engine: "1160cc Inline-3",
      power: "180 HP",
      topSpeed: "260 km/h",
      weight: "198 kg"
    },
    features: ["Öhlins Suspension", "Brembo Stylema", "Track Mode", "Shift Assist"],
    category: "Naked",
    inStock: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: "triumph-daytona-765",
    name: "Daytona Moto2 765",
    brand: "triumph",
    price: 1599000,
    image: "https://images.unsplash.com/photo-1591067040917-6a6cbd09725b?w=800&h=600&fit=crop",
    description: "Moto2 technology for the road",
    specs: {
      engine: "765cc Inline-3",
      power: "128 HP",
      topSpeed: "250 km/h",
      weight: "165 kg"
    },
    features: ["Moto2 Derived", "Track Focus", "Race Ergonomics", "Limited Edition"],
    category: "Sport",
    inStock: false,
    rating: 4.9,
    reviews: 45
  },
  {
    id: "triumph-tiger-1200",
    name: "Tiger 1200 Rally Explorer",
    brand: "triumph",
    price: 1999000,
    image: "https://images.unsplash.com/photo-1616788529686-6ed6b43b6e97?w=800&h=600&fit=crop",
    description: "Adventure without compromise",
    specs: {
      engine: "1160cc Inline-3",
      power: "150 HP",
      topSpeed: "200 km/h",
      weight: "249 kg"
    },
    features: ["Semi-Active Suspension", "Cornering ABS", "Off-Road Pro", "TFT Display"],
    category: "Adventure",
    inStock: true,
    rating: 4.7,
    reviews: 167
  },
  {
    id: "triumph-bonneville-t120",
    name: "Bonneville T120",
    brand: "triumph",
    price: 999000,
    image: "https://images.unsplash.com/photo-1581712395207-1d25e7b9d7e8?w=800&h=600&fit=crop",
    description: "Classic British heritage",
    specs: {
      engine: "1200cc Parallel Twin",
      power: "80 HP",
      topSpeed: "190 km/h",
      weight: "224 kg"
    },
    features: ["Classic Styling", "Modern Reliability", "Ride Modes", "ABS"],
    category: "Classic",
    inStock: true,
    rating: 4.6,
    reviews: 198
  },
  {
    id: "triumph-rocket-3-r",
    name: "Rocket 3 R",
    brand: "triumph",
    price: 2199000,
    image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=800&h=600&fit=crop",
    description: "The world's largest production motorcycle engine",
    specs: {
      engine: "2458cc Inline-3",
      power: "165 HP",
      topSpeed: "200 km/h",
      weight: "291 kg"
    },
    features: ["Massive Torque", "Modern Muscle", "Advanced Electronics", "Cruise Control"],
    category: "Cruiser",
    inStock: true,
    rating: 4.8,
    reviews: 87
  },

  // Harley-Davidson Products
  {
    id: "harley-pan-america-1250",
    name: "Pan America 1250 Special",
    brand: "harley",
    price: 1999000,
    originalPrice: 2199000,
    image: "https://images.unsplash.com/photo-1590048866042-8e78ce0f7b47?w=800&h=600&fit=crop",
    description: "Adventure redefined by Harley",
    specs: {
      engine: "1252cc V-Twin",
      power: "150 HP",
      topSpeed: "200 km/h",
      weight: "258 kg"
    },
    features: ["Adaptive Ride Height", "Cornering ABS", "Multiple Ride Modes", "TFT Display"],
    category: "Adventure",
    inStock: true,
    rating: 4.7,
    reviews: 123
  },
  {
    id: "harley-sportster-s",
    name: "Sportster S",
    brand: "harley",
    price: 1499000,
    image: "https://images.unsplash.com/photo-1544966503-7e9e834d81e8?w=800&h=600&fit=crop",
    description: "Revolution Max power meets Sportster soul",
    specs: {
      engine: "1252cc V-Twin",
      power: "121 HP",
      topSpeed: "200 km/h",
      weight: "228 kg"
    },
    features: ["Revolution Max Engine", "Cornering ABS", "Lean Angle Sensitive", "TFT Display"],
    category: "Cruiser",
    inStock: true,
    rating: 4.6,
    reviews: 156
  },
  {
    id: "harley-fat-bob-114",
    name: "Fat Bob 114",
    brand: "harley",
    price: 1799000,
    image: "https://images.unsplash.com/photo-1592912678476-c3c8a43f1a88?w=800&h=600&fit=crop",
    description: "Raw power meets bold styling",
    specs: {
      engine: "1868cc V-Twin",
      power: "94 HP",
      topSpeed: "180 km/h",
      weight: "297 kg"
    },
    features: ["Milwaukee-Eight 114", "Inverted Forks", "Dual Disc Brakes", "LED Lighting"],
    category: "Cruiser",
    inStock: true,
    rating: 4.7,
    reviews: 134
  },
  {
    id: "harley-street-glide-special",
    name: "Street Glide Special",
    brand: "harley",
    price: 2499000,
    image: "https://images.unsplash.com/photo-1601464485593-4b3b1a1e5d2b?w=800&h=600&fit=crop",
    description: "Touring comfort with attitude",
    specs: {
      engine: "1868cc V-Twin",
      power: "94 HP",
      topSpeed: "170 km/h",
      weight: "365 kg"
    },
    features: ["Boom! Box GTS", "Reflex Linked Brembo", "Electronic Cruise Control", "RDRS"],
    category: "Touring",
    inStock: true,
    rating: 4.8,
    reviews: 98
  },
  {
    id: "harley-livewire-one",
    name: "LiveWire One",
    brand: "harley",
    price: 2199000,
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
    description: "Electric revolution",
    specs: {
      engine: "Electric Motor",
      power: "105 HP",
      topSpeed: "177 km/h",
      weight: "249 kg"
    },
    features: ["Electric Powertrain", "Instant Torque", "Cellular Connectivity", "OTA Updates"],
    category: "Electric",
    inStock: true,
    rating: 4.5,
    reviews: 67
  },

  // MV Agusta Products
  {
    id: "mv-agusta-f4-rc",
    name: "F4 RC",
    brand: "mv-agusta",
    price: 4999000,
    originalPrice: 5499000,
    image: "https://images.unsplash.com/photo-1619416405720-6e0e6b815098?w=800&h=600&fit=crop",
    description: "Italian superbike artistry",
    specs: {
      engine: "998cc Inline-4",
      power: "212 HP",
      topSpeed: "312 km/h",
      weight: "175 kg"
    },
    features: ["Carbon Fiber Construction", "Racing Electronics", "Limited Production", "Track Focused"],
    category: "Sport",
    inStock: false,
    rating: 5.0,
    reviews: 12
  },
  {
    id: "mv-agusta-brutale-1000-rr",
    name: "Brutale 1000 RR",
    brand: "mv-agusta",
    price: 2999000,
    image: "https://images.unsplash.com/photo-1607973242519-1e64b9000d3c?w=800&h=600&fit=crop",
    description: "Naked perfection",
    specs: {
      engine: "998cc Inline-4",
      power: "208 HP",
      topSpeed: "300 km/h",
      weight: "186 kg"
    },
    features: ["Counter-Rotating Crankshaft", "Launch Control", "Quickshifter EAS 3.0", "LED Matrix"],
    category: "Naked",
    inStock: true,
    rating: 4.9,
    reviews: 34
  },
  {
    id: "mv-agusta-turismo-veloce-800",
    name: "Turismo Veloce 800 Lusso",
    brand: "mv-agusta",
    price: 1999000,
    image: "https://images.unsplash.com/photo-1591768793269-b32de885b2e4?w=800&h=600&fit=crop",
    description: "Sport touring elegance",
    specs: {
      engine: "798cc Inline-3",
      power: "110 HP",
      topSpeed: "230 km/h",
      weight: "235 kg"
    },
    features: ["Semi-Active Suspension", "Cruise Control", "Heated Grips", "GPS Navigator"],
    category: "Sport Touring",
    inStock: true,
    rating: 4.7,
    reviews: 45
  },
  {
    id: "mv-agusta-dragster-800-rr",
    name: "Dragster 800 RR",
    brand: "mv-agusta",
    price: 1799000,
    image: "https://images.unsplash.com/photo-1615842966478-0cb2bfbfa81c?w=800&h=600&fit=crop",
    description: "Naked sport perfection",
    specs: {
      engine: "798cc Inline-3",
      power: "140 HP",
      topSpeed: "245 km/h",
      weight: "168 kg"
    },
    features: ["EAS 3.0 Quickshifter", "Traction Control", "Launch Control", "Lean Angle Detection"],
    category: "Naked",
    inStock: true,
    rating: 4.8,
    reviews: 67
  },
  {
    id: "mv-agusta-rush-1000",
    name: "Rush 1000",
    brand: "mv-agusta",
    price: 4199000,
    image: "https://images.unsplash.com/photo-1601169988580-4fbec35bb41f?w=800&h=600&fit=crop",
    description: "Limited edition masterpiece",
    specs: {
      engine: "998cc Inline-4",
      power: "208 HP",
      topSpeed: "300 km/h",
      weight: "186 kg"
    },
    features: ["Limited Edition", "Carbon Fiber", "Forged Wheels", "Racing Kit"],
    category: "Limited",
    inStock: false,
    rating: 5.0,
    reviews: 8
  },

  // Royal Enfield Products
  {
    id: "royal-enfield-continental-gt-650",
    name: "Continental GT 650",
    brand: "royal-enfield",
    price: 349000,
    originalPrice: 379000,
    image: "https://images.unsplash.com/photo-1558583055-d7ac00b1adca?w=800&h=600&fit=crop",
    description: "Cafe racer perfection",
    specs: {
      engine: "648cc Parallel Twin",
      power: "47 HP",
      topSpeed: "160 km/h",
      weight: "198 kg"
    },
    features: ["Twin Cylinder Engine", "Cafe Racer Style", "Pirelli Tires", "Dual Channel ABS"],
    category: "Cafe Racer",
    inStock: true,
    rating: 4.6,
    reviews: 256
  },
  {
    id: "royal-enfield-interceptor-650",
    name: "Interceptor 650",
    brand: "royal-enfield",
    price: 329000,
    image: "https://images.unsplash.com/photo-1573473112737-2eff0e89d6e0?w=800&h=600&fit=crop",
    description: "Classic twin cylinder charm",
    specs: {
      engine: "648cc Parallel Twin",
      power: "47 HP",
      topSpeed: "160 km/h",
      weight: "202 kg"
    },
    features: ["Classic Styling", "Twin Exhaust", "Relaxed Ergonomics", "ABS"],
    category: "Classic",
    inStock: true,
    rating: 4.7,
    reviews: 312
  },
  {
    id: "royal-enfield-himalayan",
    name: "Himalayan",
    brand: "royal-enfield",
    price: 229000,
    image: "https://images.unsplash.com/photo-1620838831163-64ad2b482728?w=800&h=600&fit=crop",
    description: "Adventure made simple",
    specs: {
      engine: "411cc Single",
      power: "24.3 HP",
      topSpeed: "120 km/h",
      weight: "199 kg"
    },
    features: ["Adventure Ready", "Long Travel Suspension", "Dual Purpose Tires", "Windscreen"],
    category: "Adventure",
    inStock: true,
    rating: 4.5,
    reviews: 423
  },
  {
    id: "royal-enfield-classic-350",
    name: "Classic 350",
    brand: "royal-enfield",
    price: 199000,
    image: "https://images.unsplash.com/photo-1571119022187-2c1d0d5ad96c?w=800&h=600&fit=crop",
    description: "Timeless classic design",
    specs: {
      engine: "349cc Single",
      power: "20.2 HP",
      topSpeed: "105 km/h",
      weight: "195 kg"
    },
    features: ["Classic Design", "Chrome Details", "Kick Start", "Halogen Headlamp"],
    category: "Classic",
    inStock: true,
    rating: 4.4,
    reviews: 567
  },
  {
    id: "royal-enfield-meteor-350",
    name: "Meteor 350",
    brand: "royal-enfield",
    price: 219000,
    image: "https://images.unsplash.com/photo-1593327547055-af3b51f24fde?w=800&h=600&fit=crop",
    description: "Cruiser comfort meets modern tech",
    specs: {
      engine: "349cc Single",
      power: "20.2 HP",
      topSpeed: "110 km/h",
      weight: "191 kg"
    },
    features: ["Tripper Navigation", "Bluetooth Connectivity", "LED Lighting", "Relaxed Ergonomics"],
    category: "Cruiser",
    inStock: true,
    rating: 4.6,
    reviews: 289
  }
];

export const getProductsByBrand = (brandId: string) => {
  return products.filter(product => product.brand === brandId);
};

export const getBrandById = (brandId: string) => {
  return brands.find(brand => brand.id === brandId);
};

export const getProductById = (productId: string) => {
  return products.find(product => product.id === productId);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.originalPrice).slice(0, 8);
};
