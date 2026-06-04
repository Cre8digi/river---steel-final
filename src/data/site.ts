export const SITE = {
  name: "River Steels",
  tagline: "Manufacturers, Stockists & Suppliers of Industrial Raw Materials",
  email: "riversteels316@gmail.com",
  contacts: [
    { name: "Govind Prajapati", phone: "+91 8828471856" },
    { name: "Sharvan Prajapati", phone: "+91 9987231497" },
    { name: "Sharvan Prajapati", phone: "+91 8169949606" },
  ],
  primaryPhone: "+918828471856",
  whatsappPhone: "918828471856",
  address: {
    line1: "Office No. 6, 1st Floor, Plot No. 59/61",
    line2: "Khandke Building, Bhandari Street",
    line3: "Durgadevi Udyan, 1st Kumbharwada",
    line4: "Girgaon, Mumbai - 400004",
  },
  fullAddress:
    "Office No. 6, 1st Floor, Plot No. 59/61, Khandke Building, Bhandari Street, Durgadevi Udyan, 1st Kumbharwada, Girgaon, Mumbai - 400004",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;
