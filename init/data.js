const medicineInventory = [
  {
    name: "Dapsone",
    description: "Used in leprosy treatment.",
    manufactureDate: "2025-01-15",
    expiryDate: "2027-01-15",
    quantityAvailable: 500,
    price: 15.0,
    image: { url: "https://5.imimg.com/data5/SELLER/Default/2024/6/426161655/VP/VD/IK/133816967/dapsone-100mg-1000x1000.png" }
  },
  {
    name: "Clofazimine",
    description: "Anti-leprosy medication.",
    manufactureDate: "2025-02-10",
    expiryDate: "2028-02-10",
    quantityAvailable: 300,
    price: 25.0,
    image: { url: "https://5.imimg.com/data5/SELLER/Default/2023/10/357121750/VD/HT/TW/559666/clofazimine-100mg-capsules-1000x1000.jpeg" }
  },
  {
    name: "Rifampicin",
    description: "Broad-spectrum antibiotic for leprosy and TB.",
    manufactureDate: "2025-03-05",
    expiryDate: "2027-03-05",
    quantityAvailable: 400,
    price: 20.0,
    image: { url: "https://5.imimg.com/data5/SELLER/Default/2024/1/374646101/LK/CW/RX/109604861/rifampicin-capsules-300-mg-1000x1000.jpg" }
  },
  {
    name: "Prednisolone",
    description: "Corticosteroid for leprosy reactions.",
    manufactureDate: "2025-01-20",
    expiryDate: "2026-01-20",
    quantityAvailable: 200,
    price: 12.5,
    image: { url: "https://5.imimg.com/data5/SELLER/Default/2024/8/445237076/IY/VB/EN/40658102/20mg-prednisolone-tablet-1000x1000.jpg" }
  },
  {
    name: "Thalidomide",
    description: "Treats erythema nodosum leprosum.",
    manufactureDate: "2025-04-12",
    expiryDate: "2027-04-12",
    quantityAvailable: 150,
    price: 30.0,
    image: { url: "https://5.imimg.com/data5/SELLER/Default/2023/8/333233269/GK/ZD/CM/557330/thalidomide-capsule-1000x1000.jpg" }
  },
  {
    name: "Paracetamol",
    description: "Pain reliever and fever reducer.",
    manufactureDate: "2025-02-25",
    expiryDate: "2027-02-25",
    quantityAvailable: 1000,
    price: 5.0,
    image: { url: "https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet-1000x1000.jpg" }
  },
  {
    name: "Ibuprofen",
    description: "Anti-inflammatory painkiller.",
    manufactureDate: "2025-03-15",
    expiryDate: "2027-03-15",
    quantityAvailable: 800,
    price: 10.0,
    image: { url: "https://5.imimg.com/data5/SELLER/Default/2023/7/325863554/WI/JM/SY/135658020/ibuprofen-tablets-ip-200-mg--1000x1000.jpg" }
  },
  {
    name: "Amoxicillin",
    description: "Broad-spectrum antibiotic.",
    manufactureDate: "2025-01-30",
    expiryDate: "2027-01-30",
    quantityAvailable: 600,
    price: 18.0,
    image: { url: "https://5.imimg.com/data5/SELLER/Default/2023/4/302374024/JI/DV/MR/25738186/amoxicillin-500mg-capsule-1000x1000.png" }
  },
  {
    name: "Metformin",
    description: "Controls blood sugar in diabetes.",
    manufactureDate: "2025-02-20",
    expiryDate: "2027-02-20",
    quantityAvailable: 300,
    price: 22.0,
    image: { url: "https://upload.wikimedia.org/wikipedia/commons/d/db/Metformin_500mg_Tablets.jpg" }
  },
  {
    name: "Amlodipine",
    description: "Treats high blood pressure.",
    manufactureDate: "2025-03-10",
    expiryDate: "2027-03-10",
    quantityAvailable: 400,
    price: 15.5,
    image: { url: "https://5.imimg.com/data5/SELLER/Default/2023/7/326770036/BL/UA/BR/135658020/amlodipine-tablets-ip-5-mg-1000x1000.jpg" }
  },
  {
    name: "Aspirin",
    description: "Blood thinner and pain reliever.",
    manufactureDate: "2025-04-05",
    expiryDate: "2027-04-05",
    quantityAvailable: 900,
    price: 7.5,
    image: { url: "https://media.istockphoto.com/id/458563393/photo/aspirin-bottle-with-tablets-spilling-out.jpg?s=1024x1024&w=is&k=20&c=rRt0qm-fADXG58bJbDSDeSRhkekDXc1Xy5t-6kGCEFY=" }
  },
  {
    name: "Cetirizine",
    description: "Antihistamine for allergies.",
    manufactureDate: "2025-03-22",
    expiryDate: "2027-03-22",
    quantityAvailable: 500,
    price: 8.0,
    image: { url: "https://media.istockphoto.com/id/1196234905/photo/cetirizine-medication-or-allergy-drug-concept-photo-on-doctor-table-is-pack-with-words.jpg?s=1024x1024&w=is&k=20&c=cT6ohnspySY1Rm9MNoXHXqAy_XuGVgyjbXYOKHQ5L-I=" }
  },
  {
    name: "Loratadine",
    description: "Non-drowsy allergy medication.",
    manufactureDate: "2025-04-08",
    expiryDate: "2027-04-08",
    quantityAvailable: 450,
    price: 9.0,
    image: { url: "https://media.istockphoto.com/id/1343262408/photo/generic-box-of-loratadine-or-allergy-relief-pills-white-background.jpg?s=1024x1024&w=is&k=20&c=x75uxkCF2F6hRK9VdCQ6PMahz9mObJDY6euAYTLi5_A=" }
  },
  {
    name: "Omeprazole",
    description: "Reduces stomach acid.",
    manufactureDate: "2025-02-18",
    expiryDate: "2027-02-18",
    quantityAvailable: 700,
    price: 12.0,
    image: { url: "https://media.istockphoto.com/id/1223269269/photo/generic-omeprazole-pills.jpg?s=1024x1024&w=is&k=20&c=MWOmp-TrRFLx-E0fhZ9BXXIgl9nzJFhxkeFSBqOMEws=" }
  },
  {
    name: "Atorvastatin",
    description: "Lowers cholesterol.",
    manufactureDate: "2025-02-14",
    expiryDate: "2027-02-14",
    quantityAvailable: 500,
    price: 20.0,
    image: { url: "https://media.istockphoto.com/id/1197904271/photo/atorvastatin-active-ingredient-in-drug-as-international-nonproprietary-name-of-active.jpg?s=1024x1024&w=is&k=20&c=3o4nwCOsWSVpJSXEI6mXRK5WloUFxnd3JXyh6p_QWqw=" }
  },
  {
    name: "Losartan",
    description: "Lowers high blood pressure.",
    manufactureDate: "2025-03-19",
    expiryDate: "2027-03-19",
    quantityAvailable: 400,
    price: 14.0,
    image: { url: "https://media.istockphoto.com/id/1089801966/photo/gray-blister-texture-with-lots-of-brown-pills-in-pack.jpg?s=1024x1024&w=is&k=20&c=9LmnH1ePgSP9TmW2osMOhfnq8ERfiR7d3PkOxwWI9MA=" }
  },
  {
    name: "Hydrochlorothiazide",
    description: "Diuretic to reduce blood pressure.",
    manufactureDate: "2025-03-12",
    expiryDate: "2027-03-12",
    quantityAvailable: 350,
    price: 11.0,
    image: { url: "https://media.istockphoto.com/id/1132286430/photo/diuretic-drug-for-heart-kidneys-and-cardiovascular-system-packing-of-pills-with-inscription.jpg?s=1024x1024&w=is&k=20&c=7jjtSp7VhvsrXevU3S2UQ3YdI3L5jlcXrAar17p4Z2A=" }
  },
  {
    name: "Clopidogrel",
    description: "Prevents blood clots.",
    manufactureDate: "2025-04-03",
    expiryDate: "2027-04-03",
    quantityAvailable: 600,
    price: 16.5,
    image: { url: "https://media.istockphoto.com/id/458091005/photo/plavix-tablets.jpg?s=1024x1024&w=is&k=20&c=gK6ULTVSGSqu7FiOMzi0lGWvbYca2d0YNS9wtGvv6A4=" }
  },
  {
    name: "Warfarin",
    description: "Blood thinner to prevent strokes.",
    manufactureDate: "2025-02-28",
    expiryDate: "2027-02-28",
    quantityAvailable: 250,
    price: 18.0,
    image: { url: "https://5.imimg.com/data5/SELLER/Default/2022/8/ZQ/OW/RW/129887935/warfarin-tablet-5-mg-1000x1000.jpg" }
  }
];



module.exports={data:medicineInventory};
