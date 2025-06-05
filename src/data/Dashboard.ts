import type { RevenueProjects, BlogCards, DailyActivities } from '@/types/dashboard/index';

import product1 from "@/assets/images/products/dash-prd-1.jpg";
import product2 from "@/assets/images/products/dash-prd-2.jpg";
import product3 from "@/assets/images/products/dash-prd-3.jpg";
import product4 from "@/assets/images/products/dash-prd-4.jpg";

import user1 from '@/assets/images/profile/user-1.jpg';
import user2 from '@/assets/images/profile/user-2.jpg';
import user3 from '@/assets/images/profile/user-3.jpg';
import img1 from '@/assets/images/blog/blog-img1.jpg';
import img2 from '@/assets/images/blog/blog-img2.jpg';
import img3 from '@/assets/images/blog/blog-img3.jpg';

/*--Revenue Projects --*/
const RevenueProjectsData: RevenueProjects[] = [
  {
    img: product1,
    leadname: "Minecraf App",
    designation: "Jason Roy",
    projectname: "73.2%",
    statuscolor: "warning",
    statustext: "Medium",
    money: "$3.5K",
  },
  {
    img: product2,
    leadname: "Web App Project",
    designation: "Mathew Flintoff",
    projectname: "73.2%",
    statuscolor: "secondary",
    statustext: "Very High",
    money: "$24.5K",
  },
  {
    img: product3,
    leadname: "Modernize Dashboard",
    designation: "Anil Kumar",
    projectname: "73.2%",
    statuscolor: "success",
    statustext: "Low",
    money: "$12.8K",
  },
  {
    img: product4,
    leadname: "Dashboard Co",
    designation: "George Cruize",
    projectname: "73.2%",
    statuscolor: "error",
    statustext: "High",
    money: "$2.4K",
  },
];


/*--Blog Cards--*/
const BlogCardData: BlogCards[] = [
  {
    avatar: user1,
    coveravatar: img1,
    read: '2 min Read',
    title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones',
    link: '/',
    category: 'Social',
    name: 'Georgeanna Ramero',
    view: '9,125',
    comments: '3',
    time: 'Mon, Dec 19'
  },
  {
    avatar: user2,
    coveravatar: img2,
    read: '2 min Read',
    title: 'Intel loses bid to revive antitrust case against patent foe Fortress',
    link: '/',
    category: 'Gadget',
    name: 'Georgeanna Ramero',
    view: '4,150',
    comments: '38',
    time: 'Sun, Dec 18'
  },
  {
    avatar: user3,
    coveravatar: img3,
    read: '2 min Read',
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    link: '/',
    category: 'Health',
    name: 'Georgeanna Ramero',
    view: '9,480',
    comments: '12',
    time: 'Sat, Dec 17'
  }
];

/*--Daily Activities--*/
const DailyActivitiesData: DailyActivities[] = [
  {
    title: '09:30 am',
    subtitle: 'Payment received from John Doe of $385.90',
    textcolor: 'primary',
    boldtext: false,
    line: true,
    link: '',
    url: ''
  },
  {
    title: '10:00 am',
    subtitle: 'New sale recorded',
    textcolor: 'secondary',
    boldtext: true,
    line: true,
    link: '#ML-3467',
    url: ''
  },
  {
    title: '12:00 am',
    subtitle: 'Payment was made of $64.95 to Michael',
    textcolor: 'success',
    boldtext: false,
    line: true,
    link: '',
    url: ''
  },
  {
    title: '09:30 am',
    subtitle: 'New sale recorded',
    textcolor: 'warning',
    boldtext: true,
    line: true,
    link: '#ML-3467',
    url: ''
  },
  {
    title: '09:30 am',
    subtitle: 'New arrival recorded',
    textcolor: 'error',
    boldtext: true,
    line: true,
    link: '#ML-3467',
    url: ''
  },
  {
    title: '12:00 am',
    subtitle: 'Payment Done',
    textcolor: 'success',
    boldtext: false,
    line: false,
    link: '',
    url: ''
  },
]

const ProductsData: any[] = [
  {
    id: 1,
    pescados: 'Platillo 1',
    qty: 25,
    amount: '$15,878.00'
  },
  {
    id: 2,
    pescados: 'Platillo 2',
    qty: 35,
    amount: '$10,584.00'
  },
];

const NetSalesData: any[] = [
  {
    id: 1,
    category: 'Beer',
    sales: '$40.88',
    voids: '$0.00',
    actual: '$40.88'
  },
  {
    id: 2,
    category: 'Food',
    sales: '$717.15',
    voids: '$0.00',
    actual: '$717.15'
  },
  {
    id: 3,
    category: 'Liquor',
    sales: '$53.93',
    voids: '$0.00',
    actual: '$53.93'
  },
  {
    id: 4,
    category: 'N/A Bev',
    sales: '$81.25',
    voids: '$0.00',
    actual: '$81.25'
  },
];

const NetSalesDayPartData: any[] = [
  {
    id: 1,
    category: 'Breakfast',
    sales: '$84.87',
    voids: '$0.00',
    actual: '$84.87'
  },
  {
    id: 2,
    category: 'Dinner',
    sales: '$443.87',
    voids: '$0.00',
    actual: '$443.87'
  },
  {
    id: 3,
    category: 'Lunch',
    sales: '$364.47',
    voids: '$0.00',
    actual: '$364.47'
  },
];

const OrderData: any[] = [
  {
    id: 1,
    type: 'Dine In',
    sales: '$40.88',
    voids: '$0.00',
    actual: '$40.88'
  },
  {
    id: 2,
    type: 'Online order',
    sales: '$717.15',
    voids: '$0.00',
    actual: '$717.15'
  },
  {
    id: 3,
    type: 'PARA LLEVAR',
    sales: '$53.93',
    voids: '$0.00',
    actual: '$53.93'
  },
];

const MethodOfPayments: any[] = [
  {
    id: 1,
    type: 'Tarjeta de credito',
    value: '$331.01', 
    bgColor: 'primary',
    color: 'primary',
    percent: 25
  },
  {
    id: 2,
    type: 'Efectivo',
    value: '$225.74', 
    bgColor: 'lightsecondary',
    color: 'secondary',
    percent: 87
  },
  {
    id: 3,
    type: 'Tarjeta de regalo',
    value: '$175.26', 
    bgColor: 'success',
    color: 'success',
    percent: 65
  },
  {
    id: 4,
    type: 'Dolares',
    value: '$134.32', 
    bgColor: 'primary',
    color: 'primary',
    percent: 72
  },
  {
    id: 5,
    type: 'Vales',
    value: '$25.98', 
    bgColor: 'lightwarning',
    color: 'warning',
    percent: 53
  },
];

const LaborData: any[] = [
  {
    id: 1,
    name: 'Server',
    hours: 20.72,
    laborCost: 186.46,
    percent: ''
  },
  {
    id: 2,
    name: 'Cook',
    hours: 7.12,
    laborCost: 92.56,
    percent: ''
  },
  {
    id: 3,
    name: 'Manager',
    hours: 11.23,
    laborCost: 0.00,
    percent: ''
  }
];

const PrimeCostData: any[] = [
  {
    id: 1,
    primeCost: '62%',
    name: 'Food',
    inventoryValue: '$45,785.00',
    inventoryRotation: '6 days'
  },
  {
    id: 2,
    primeCost: '$85,748.00',
    name: 'Bar',
    inventoryValue: '$74,589.00',
    inventoryRotation: '15 days'
  },
  {
    id: 3,
    primeCost: '',
    name: 'Other',
    inventoryValue: '$15,000.00',
    inventoryRotation: ''
  }
];

const StarData: any[] = [
  {
    id: 1,
    name: 'Domestic Bottle',
    value: 155.48,
    color: 'primary'
  },
  {
    id: 2,
    name: 'Imported Bottle',
    value: 155.48,
    color: 'lightprimary'
  },
  {
    id: 3,
    name: 'Wet Burrito',
    value: 155.48,
    color: 'lightsuccess'
  },
  {
    id: 4,
    name: 'C21. One Cheese Enchilada...',
    value: 83.94,
    color: 'success'
  },
  {
    id: 5,
    name: '7 Mares',
    value: 71.96,
    color: 'lightwarning'
  },
  {
    id: 6,
    name: 'Draft Beer',
    value: 68.88,
    color: 'warning'
  },
  {
    id: 7,
    name: 'Open Food',
    value: 66.95,
    color: 'error'
  },
  {
    id: 8,
    name: 'Michelada',
    value: 55.93,
    color: 'lighterror'
  },
];

const VoidAlertsData: any[] = [
  {
    id: 1,
    name: 'Ana Esquivel',
    value: '$0.00',
    color: 'primary'
  },
  {
    id: 2,
    name: 'EPOS OLO',
    value: '$0.00',
    color: 'lightprimary'
  },
  {
    id: 3,
    name: 'Maria',
    value: '$0.00',
    color: 'success'
  },
  {
    id: 4,
    name: 'Melaye',
    value: '$0.00',
    color: 'lightsuccess'
  },
  {
    id: 5,
    name: 'Nefer Serna',
    value: '$0.00',
    color: 'warning'
  },
];

const DiscountsAlertsData: any[] = [
  {
    id: 1,
    name: 'Ana Esquivel',
    value: '$0.00',
    color: 'primary'
  },
  {
    id: 2,
    name: 'EPOS OLO',
    value: '$0.00',
    color: 'lightprimary'
  },
  {
    id: 3,
    name: 'Maria',
    value: '$0.00',
    color: 'success'
  },
  {
    id: 4,
    name: 'Melaye',
    value: '$0.00',
    color: 'lightsuccess'
  },
  {
    id: 5,
    name: 'Nefer Serna',
    value: '$0.00',
    color: 'warning'
  },
];

const StarEmployeesData: any[] = [
  {
    id: 1,
    name: 'Ana Esquivel',
    value: '$0.00',
    color: 'primary'
  },
  {
    id: 2,
    name: 'EPOS OLO',
    value: '$0.00',
    color: 'lightprimary'
  },
  {
    id: 3,
    name: 'Maria',
    value: '$0.00',
    color: 'success'
  },
  {
    id: 4,
    name: 'Melaye',
    value: '$0.00',
    color: 'lightsuccess'
  },
  {
    id: 5,
    name: 'Nefer Serna',
    value: '$0.00',
    color: 'warning'
  },
];

export {
  RevenueProjectsData, BlogCardData, DailyActivitiesData,
  ProductsData, NetSalesData, NetSalesDayPartData, OrderData,
  MethodOfPayments, LaborData, PrimeCostData, StarData, VoidAlertsData,
  DiscountsAlertsData, StarEmployeesData
}