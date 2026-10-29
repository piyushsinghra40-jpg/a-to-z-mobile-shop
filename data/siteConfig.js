// EDIT HERE: shop details, images and developer details. The website reads everything from this file.
window.siteConfig = {
  shop: {
    name: "A to Z Mobile Shop",
    ownerName: "SUNDRAM MAURYA",                 // shown in the hero next to the owner photo
    address: "Surapur, Mudila Road, Uttar Pradesh, India",
    phone: "9565629127", phoneDisplay: "+91 9565629127",
    whatsapp: "919565629127",                    // shop WhatsApp (91 + number)
    mapQuery: "A to Z Mobile Shop Surapur Mudila Road Uttar Pradesh",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=A+to+Z+Mobile+Shop+Surapur+Mudila+Road+Uttar+Pradesh",
    mapEmbedUrl: "https://www.google.com/maps?q=A+to+Z+Mobile+Shop+Surapur+Mudila+Road+Uttar+Pradesh&output=embed",
  },
  images: {
    logo: "assets/images/logo.jpg",
    owner: "assets/images/owner.jpg?v=2",
    hero: "assets/images/shop.png",
    placeholder: "assets/images/products/accessory-fast-charger-25w.svg",
  },
  gallery: [   // shop photos
    { src: "assets/images/shop.png",   alt: "Display cabinets and premium section", caption: "Display cabinets" },
    { src: "assets/images/shop1.png",  alt: "Chargers and power banks display",     caption: "Chargers & power banks" },
    { src: "assets/images/shop2.png",  alt: "Mobile covers and cases wall",         caption: "Covers & cases" },
    { src: "assets/images/swhop3.png", alt: "Accessories and gadgets shelves",      caption: "Accessories & gadgets" },
  ],
  repairs: [   // examples only - confirm with shop owner. image = illustration (replace with your own photo if you like)
    { title: "Screen Replacement", image: "assets/images/products/repair-screen-replacement.svg" },
    { title: "Battery Replacement", image: "assets/images/products/repair-battery-replacement.svg" },
    { title: "Charging Port Repair", image: "assets/images/products/repair-charging-port-repair.svg" },
    { title: "Software Assistance", image: "assets/images/products/repair-software-assistance.svg" }
  ],
  developer: {
    name: "Piyush Thakur07", phone: "8787090913",
    instagram: "https://www.instagram.com/thakur._piyush07/",
    portfolio: "https://piyush-portfolio-iota-amber.vercel.app/",
  },
};
