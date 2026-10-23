export const site = {
  name: "Alam Rezeki",
  tagline: "The Leading Supplier of Coconut",
  description:
    "Alam Rezeki is an Indonesian trading company specializing in coconut products. Founded in 2018, we deliver high-quality coconut products to customers around the world.",
  url: "https://alamrezeki.com",
  whatsapp: {
    number: "6283862889853",
    display: "+62 838-6288-9853",
  },
  email: "john@alamrezeki.com",
  address: "Jl. Raya Cakung Cilincing Km 3, Jakarta 14130, Indonesia",
  nav: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#about" },
    { label: "Products", href: "/products" },
    { label: "Contact Us", href: "/#contact" },
  ],
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsapp.number}`;
