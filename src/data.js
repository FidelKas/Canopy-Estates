export const company = {
  name: 'Canopy Estates',
  tagline: 'Find a home that grows with you',
  phone: '+254 700 123 456',
  email: 'hello@canopyestates.co.ke',
  address: '12 Riverside Drive, Westlands, Nairobi',
  hours: 'Mon–Sat, 8:00 AM – 6:00 PM',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'register', label: 'Register' },
  { id: 'contact', label: 'Contact Us' },
]

const u = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=70`

export const images = {
  hero: `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=70`,
  about: u('photo-1560518883-ce09059eeffa'),
}

export const services = [
  { icon: '🏢', title: 'Apartment Rentals', text: 'Studios to penthouses in vetted, well-managed buildings across the city.' },
  { icon: '🏡', title: 'Property Sales', text: 'Buy or sell family homes, villas and townhouses with transparent pricing.' },
  { icon: '🌳', title: 'Land & Plots', text: 'Titled, surveyed plots in fast-growing areas, ready for development.' },
  { icon: '🔧', title: 'Property Management', text: 'Tenant sourcing, rent collection and maintenance handled for landlords.' },
  { icon: '📊', title: 'Valuation & Advisory', text: 'Accurate market valuations and investment advice backed by local data.' },
  { icon: '📑', title: 'Legal & Documentation', text: 'Title searches, agreements and transfers completed securely and quickly.' },
]

export const gallery = [
  { src: u('photo-1545324418-cc1a3fa10c00'), title: 'Skyline Apartments', category: 'Apartments' },
  { src: u('photo-1512917774080-9991f1c4c750'), title: 'Modern Villa', category: 'Houses' },
  { src: u('photo-1522708323590-d24dbb6b0267'), title: 'Open-Plan Living', category: 'Interiors' },
  { src: u('photo-1502672260266-1c1ef2d93688'), title: 'Bright Apartment', category: 'Interiors' },
  { src: u('photo-1564013799919-ab600027ffc6'), title: 'Family Home', category: 'Houses' },
  { src: u('photo-1486406146926-c627a92ad1ab'), title: 'City Tower', category: 'Apartments' },
  { src: u('photo-1580587771525-78b9dba3b914'), title: 'Garden Estate', category: 'Houses' },
  { src: u('photo-1493809842364-78817add7ffb'), title: 'Cosy Bedroom', category: 'Interiors' },
]

export const stats = [
  { value: '1,200+', label: 'Properties sold & let' },
  { value: '15', label: 'Years of experience' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '40+', label: 'Neighbourhoods covered' },
]