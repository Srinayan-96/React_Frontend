import laysImg from '../assets/snacks/Lay\'s Classic Salted Chips.jpg';
import maggiImg from '../assets/snacks/Maggi.jpg';
import dairyMilkImg from '../assets/snacks/Dairy Milk Chocolate.jpg';
import hideSeekImg from '../assets/snacks/Hide & Seek Biscuits.jpg';
import realJuiceImg from '../assets/snacks/Real Fruit Juice (Mango).jpg';
import darkFantasyImg from '../assets/snacks/Dark Fantasy Choco Fills.jpg';

import usbCableImg from '../assets/devices/USB-C Charging Cable (2m).jpg';
import earbudsImg from '../assets/devices/Wireless Earbuds.jpg';
import laptopStandImg from '../assets/devices/Laptop Stand (Portable).jpeg';
import keyboardImg from '../assets/devices/Mechanical Keyboard.jpg';
import pendriveImg from '../assets/devices/32GB Pendrive (USB 3.0).jpeg';
import laptopSleeveImg from '../assets/devices/Laptop Sleeve (15.6 inch).jpeg';

import dsaImg from '../assets/books/dsa.jpg';
import osImg from '../assets/books/Os.jpg';
import engMathImg from '../assets/books/eng_math.jpg';
import cnImg from '../assets/books/computer networks.jpg';
import dbmsImg from '../assets/books/DBMS.jpg';
import discreteMathImg from '../assets/books/discrete_math.jpg';

import classmateImg from '../assets/staionery/classmate.jpg';
import reynoldsImg from '../assets/staionery/Reynolds-Champ-pack-of-10.jpg';
import apsaraImg from '../assets/staionery/apsara_.jpg';
import drawingKitImg from '../assets/staionery/drawing_kit.jpg';
import highlightersImg from '../assets/staionery/highlighters.jpg';
import calculatorImg from '../assets/staionery/calculator.jpg';

const products = [
  // ── BOOKS (6 items) ──────────────────────────────────────────────
  {
    id: 1,
    name: "Data Structures & Algorithms",
    category: "Books",
    manufacturer: "Pearson Education",
    weight: "600g",
    price: 450,
    discount: 10,
    availability: true,
    image: dsaImg,
    sizes: [],
  },
  {
    id: 2,
    name: "Operating Systems Concepts",
    category: "Books",
    manufacturer: "Wiley",
    weight: "720g",
    price: 520,
    discount: 8,
    availability: true,
    image: osImg,
    sizes: [],
  },
  {
    id: 3,
    name: "Engineering Mathematics Vol. 1",
    category: "Books",
    manufacturer: "S. Chand Publishing",
    weight: "550g",
    price: 380,
    discount: 5,
    availability: true,
    image: engMathImg,
    sizes: [],
  },
  {
    id: 4,
    name: "Computer Networks",
    category: "Books",
    manufacturer: "Tata McGraw-Hill",
    weight: "680g",
    price: 495,
    discount: 12,
    availability: true,
    image: cnImg,
    sizes: [],
  },
  {
    id: 5,
    name: "Database Management Systems",
    category: "Books",
    manufacturer: "Oxford University Press",
    weight: "590g",
    price: 430,
    discount: 7,
    availability: false,
    image: dbmsImg,
    sizes: [],
  },
  {
    id: 6,
    name: "Discrete Mathematics",
    category: "Books",
    manufacturer: "Pearson Education",
    weight: "500g",
    price: 360,
    discount: 6,
    availability: true,
    image: discreteMathImg,
    sizes: [],
  },

  // ── STATIONERY (6 items) ──────────────────────────────────────────
  {
    id: 7,
    name: "Classmate Spiral Notebook (200 pages)",
    category: "Stationery",
    manufacturer: "ITC",
    weight: "320g",
    price: 80,
    discount: 5,
    availability: true,
    image: classmateImg,
    sizes: [
      { size: "A4", price: 80 },
      { size: "A5", price: 60 },
    ],
  },
  {
    id: 8,
    name: "Reynolds Ball Pen (Pack of 10)",
    category: "Stationery",
    manufacturer: "Reynolds",
    weight: "100g",
    price: 55,
    discount: 0,
    availability: true,
    image: reynoldsImg,
    sizes: [],
  },
  {
    id: 9,
    name: "Apsara Geometry Box",
    category: "Stationery",
    manufacturer: "Apsara",
    weight: "150g",
    price: 120,
    discount: 10,
    availability: true,
    image: apsaraImg,
    sizes: [],
  },
  {
    id: 10,
    name: "Staedtler Drawing Kit",
    category: "Stationery",
    manufacturer: "Staedtler",
    weight: "250g",
    price: 350,
    discount: 15,
    availability: true,
    image: drawingKitImg,
    sizes: [],
  },
  {
    id: 11,
    name: "Highlighter Set (6 Colors)",
    category: "Stationery",
    manufacturer: "Faber-Castell",
    weight: "90g",
    price: 95,
    discount: 5,
    availability: true,
    image: highlightersImg,
    sizes: [],
  },
  {
    id: 12,
    name: "Scientific Calculator FX-82",
    category: "Stationery",
    manufacturer: "Casio",
    weight: "130g",
    price: 750,
    discount: 8,
    availability: true,
    image: calculatorImg,
    sizes: [],
  },

  // ── SNACKS (6 items) ───────────────────────────────────────────────
  {
    id: 13,
    name: "Lay's Classic Salted Chips",
    category: "Snacks",
    manufacturer: "PepsiCo",
    weight: "100g",
    price: 30,
    discount: 0,
    availability: true,
    image: laysImg,
    sizes: [
      { size: "26g", price: 10 },
      { size: "52g", price: 20 },
      { size: "100g", price: 30 },
    ],
  },
  {
    id: 14,
    name: "Maggi 2-Minute Noodles",
    category: "Snacks",
    manufacturer: "Nestlé",
    weight: "70g",
    price: 14,
    discount: 0,
    availability: true,
    image: maggiImg,
    sizes: [
      { size: "Single (70g)", price: 14 },
      { size: "Pack of 4", price: 52 },
    ],
  },
  {
    id: 15,
    name: "Dairy Milk Chocolate",
    category: "Snacks",
    manufacturer: "Cadbury",
    weight: "40g",
    price: 40,
    discount: 0,
    availability: true,
    image: dairyMilkImg,
    sizes: [
      { size: "13g", price: 10 },
      { size: "40g", price: 40 },
      { size: "120g", price: 105 },
    ],
  },
  {
    id: 16,
    name: "Hide & Seek Biscuits",
    category: "Snacks",
    manufacturer: "Parle",
    weight: "120g",
    price: 25,
    discount: 0,
    availability: true,
    image: hideSeekImg,
    sizes: [
      { size: "75g", price: 15 },
      { size: "120g", price: 25 },
    ],
  },
  {
    id: 17,
    name: "Real Fruit Juice (Mango)",
    category: "Snacks",
    manufacturer: "Dabur",
    weight: "200ml",
    price: 30,
    discount: 5,
    availability: true,
    image: realJuiceImg,
    sizes: [
      { size: "200ml", price: 30 },
      { size: "1L", price: 110 },
    ],
  },
  {
    id: 18,
    name: "Dark Fantasy Choco Fills",
    category: "Snacks",
    manufacturer: "Sunfeast",
    weight: "150g",
    price: 35,
    discount: 0,
    availability: false,
    image: darkFantasyImg,
    sizes: [],
  },

  // ── DEVICES (6 items) ─────────────────────────────────────────────
  {
    id: 19,
    name: "USB-C Charging Cable (2m)",
    category: "Devices",
    manufacturer: "Anker",
    weight: "90g",
    price: 399,
    discount: 10,
    availability: true,
    image: usbCableImg,
    sizes: [
      { size: "1m", price: 299 },
      { size: "2m", price: 399 },
    ],
  },
  {
    id: 20,
    name: "Wireless Earbuds",
    category: "Devices",
    manufacturer: "boAt",
    weight: "60g",
    price: 1299,
    discount: 20,
    availability: true,
    image: earbudsImg,
    sizes: [],
  },
  {
    id: 21,
    name: "Laptop Stand (Portable)",
    category: "Devices",
    manufacturer: "AmazonBasics",
    weight: "350g",
    price: 699,
    discount: 12,
    availability: true,
    image: laptopStandImg,
    sizes: [],
  },
  {
    id: 22,
    name: "Mechanical Keyboard",
    category: "Devices",
    manufacturer: "Zebronics",
    weight: "800g",
    price: 1999,
    discount: 15,
    availability: true,
    image: keyboardImg,
    sizes: [],
  },
  {
    id: 23,
    name: "32GB Pendrive (USB 3.0)",
    category: "Devices",
    manufacturer: "SanDisk",
    weight: "30g",
    price: 499,
    discount: 5,
    availability: true,
    image: pendriveImg,
    sizes: [
      { size: "16GB", price: 299 },
      { size: "32GB", price: 499 },
      { size: "64GB", price: 799 },
    ],
  },
  {
    id: 24,
    name: "Laptop Sleeve (15.6 inch)",
    category: "Devices",
    manufacturer: "Lavie Sport",
    weight: "250g",
    price: 599,
    discount: 8,
    availability: false,
    image: laptopSleeveImg,
    sizes: [
      { size: '13"', price: 449 },
      { size: '15.6"', price: 599 },
    ],
  },
];

export default products;
