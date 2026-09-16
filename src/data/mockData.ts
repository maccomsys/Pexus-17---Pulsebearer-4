import {
  Car,
  Wrench,
  Shield,
  Battery,
  Settings,
  Truck,
  Phone,
  Clock,
  CheckCircle,
  MapPin,
  Star
} from 'lucide-react';

export const HERO_SLIDES = [
  {
    id: 1,
    headline: '24/7 Emergency Towing Services',
    subheadline: 'Fast response, safe vehicle transport, affordability, and reliability across Ghana. Call us anytime, anywhere.',
    buttons: [
      { label: 'Call Now: 0597684860', primary: true, href: 'tel:0597684860' },
      { label: 'WhatsApp Us', primary: false, href: 'https://wa.me/233597684860' }
    ],
    image: 'https://i.ibb.co/0RDWpXBh/Image-8-Heavy-Duty-Recovery-Vehicle-or-Car.jpg',
  },
  {
    id: 2,
    headline: 'Nationwide Haulage & Heavy Machinery Transport',
    subheadline: 'Specialized lowbeds and heavy flatbeds for excavators, containers, generators, and industrial cargo across Ghana.',
    buttons: [
      { label: 'Explore Haulage', primary: true, href: '/haulage' },
      { label: 'Call: 0597684860', primary: false, href: 'tel:0597684860' }
    ],
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    headline: 'Accident Recovery & Roadside Assistance',
    subheadline: 'Professional winch-outs, flat tire changes, battery jump starts, and rapid off-road vehicle extraction.',
    buttons: [
      { label: 'Request Assistance', primary: true, href: 'tel:0597684860' }
    ],
    image: 'https://i.ibb.co/j9GzSqt8/Image-9-Car-Battery-Maintenance.jpg',
  },
  {
    id: 4,
    headline: 'Professional Auto Repairs & Diagnostics',
    subheadline: 'Certified mechanics, computerized engine diagnostics, precision brake service, and genuine OEM auto parts.',
    buttons: [
      { label: 'Call for Repair', primary: true, href: 'tel:0597684860', color: '#FCA311' },
      { label: 'WhatsApp Us', primary: false, href: 'https://wa.me/233597684860', color: '#111835' }
    ],
    image: 'https://i.ibb.co/23wLXy6t/Image-12-Tyre-Maintenance.jpg',
  },
];

export const QUICK_ACTIONS = [
  { id: 1, title: 'Request Towing', description: '24/7 emergency response', icon: Truck },
  { id: 2, title: 'Heavy Haulage', description: 'Machinery & cargo transport', icon: Shield },
  { id: 3, title: 'Auto Repairs', description: 'Certified expert mechanics', icon: Wrench },
  { id: 4, title: 'Shop Auto Parts', description: 'Genuine replacement parts', icon: Settings },
  { id: 5, title: 'Fleet Services', description: 'Commercial vehicle management', icon: Truck },
];

export const STATS = [
  { label: 'Years of Experience', value: 15, suffix: '+' },
  { label: 'Vehicles Repaired', value: 25000, suffix: '+' },
  { label: 'Happy Customers', value: 10000, suffix: '+' },
  { label: 'Emergency Calls Completed', value: 5000, suffix: '+' },
];

export const SERVICES = [
  { id: 1, title: 'Emergency Towing', desc: 'Fast response towing anywhere, anytime across Ghana.', icon: Truck, image: 'https://i.ibb.co/gZh5x06r/Image-1-Towing-Vehicle.jpg' },
  { id: 2, title: 'Haulage & Heavy Transport', desc: 'Heavy machinery, container, generator, and plant transport.', icon: Truck, image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Vehicle Recovery', desc: 'Safe off-road, ditch, and accident recovery with heavy winching.', icon: Shield, image: 'https://i.ibb.co/0RDWpXBh/Image-8-Heavy-Duty-Recovery-Vehicle-or-Car.jpg' },
  { id: 4, title: 'Auto Repairs', desc: 'Comprehensive mechanical repairs, computer diagnostics, and tune-ups.', icon: Wrench, image: 'https://i.ibb.co/WpyLYZQk/Image-15-Car-Lightening-maintenance.jpg' },
  { id: 5, title: 'Body Works & Spray Painting', desc: 'Precision dent repairs, collision restoration, and factory-grade spray painting.', icon: Shield, image: 'https://i.ibb.co/DH19ffJd/Image-6-Luxury-Mercedes-Benz.jpg' },
  { id: 6, title: 'Genuine Auto Parts', desc: 'High-quality OEM and verified aftermarket spare parts & batteries.', icon: Settings, image: 'https://i.ibb.co/3998gkTG/Image-16-Accessories.jpg' },
  { id: 7, title: 'Fleet Maintenance', desc: 'Dedicated commercial fleet priority repairs and maintenance contracts.', icon: Truck, image: 'https://i.ibb.co/WpNkptMZ/Image-4-Van-Hyundai-H1-2022.jpg' },
];

export const VEHICLES: any[] = [];
export const RENTAL_CATEGORIES: any[] = [];

export const PARTS_CATEGORIES = [
  'Car Batteries', 'Engine Oil', 'Brake Pads', 'Tires',
  'Filters', 'Suspension Parts', 'Lighting', 'Accessories'
];

export const WHY_CHOOSE_US = [
  { title: '24/7 Emergency Support', icon: Clock },
  { title: 'Fast Response Time', icon: Truck },
  { title: 'Certified Technicians', icon: Shield },
  { title: 'Transparent Pricing', icon: Settings },
  { title: 'Genuine Parts', icon: Settings },
  { title: 'Modern Equipment', icon: Settings },
  { title: 'Nationwide Coverage', icon: MapPin },
  { title: 'Customer Satisfaction', icon: CheckCircle },
];

export const FAQS = [
  { q: 'How fast can you respond to a towing emergency?', a: 'Our average response time is under 30 minutes within Greater Accra and major city corridors.' },
  { q: 'Do you offer nationwide heavy haulage and machinery transport?', a: 'Yes, Pexus provides multi-axle lowbeds and heavy flatbeds for excavators, containers, and oversized freight across all 16 regions of Ghana.' },
  { q: 'Do you offer warranties on auto repairs?', a: 'Yes, we offer comprehensive warranties on all mechanical repairs and OEM replacement parts installed at our workshop.' },
  { q: 'Can I purchase genuine batteries and spare parts directly?', a: 'Yes, we stock authentic OEM and certified aftermarket car batteries, brake pads, fluids, and filters with same-day dispatch.' },
];

