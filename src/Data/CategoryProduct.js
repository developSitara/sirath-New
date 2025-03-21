
import panel_board_1 from "../assets/Products/CategoryProduct/holder.png";
import panel_board_2 from "../assets/Products/CategoryProduct/wire.png";
import wire_1 from "../assets/Products/CategoryProduct/wire_2.png";
import wire_2 from "../assets/Products/CategoryProduct/wire_3.png";
import fuse_1 from "../assets/Products/CategoryProduct/wire_4.png";
import fuse_2 from "../assets/Products/CategoryProduct/holder.png";
import cutout from "../assets/Products/CategoryProduct/cutout.png";
import box_1 from "../assets/Products/CategoryProduct/Mask group (7).png";
import box_2 from "../assets/Products/CategoryProduct/Mask group (12).png";
import box_3 from "../assets/Products/CategoryProduct/box_2.png";
import box_4 from "../assets/Products/CategoryProduct/box_3.png";
import box_5 from "../assets/Products/CategoryProduct/box_4.png";
import box_6 from "../assets/Products/CategoryProduct/box_8 (1).png";
import box_7 from "../assets/Products/CategoryProduct/box_8.png";
import box_8 from "../assets/Products/CategoryProduct/box_9.png";
const categoryProduct = [
  {
    id: "1",
    img: box_1,
    productName: "wire",
    price: "3500",
    des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
    delPrice: "5000",
    category: "lT distribution box", 
    tag: "30% Off" 
  },
  {
    id: "2",
    img: box_2,
    productName: "wire",
    price: "7500",
    delPrice: "12000",
    des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
    category: "drop out switch",
    tag: "New"
  },
  {
    id: "3",
    img: box_3,
    productName: "panel board",
    price: "95000",
    des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
    delPrice: "120000",
    category: "lT distribution box", 
  },
  {
    id: "4",
    img: box_4,
    productName: "Electrical Panel",
    price: "8500",
    des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
    delPrice: "15000",
    category: "earthing switch",
    tag: "New" 
  },
  {
    id: "5",
    img: box_5,
    productName: "Eaton",
    price: "8500",
    des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
    delPrice: "15000",
    category: "drop out switch",
  },
  {
    id: "6",
    img: box_6,
    productName: "Schneider Electric",
    price: "8500",
    des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
    delPrice: "15000",
    category: "wire & cables",
    tag: "30% Off" 
  },
  {
    id: "7",
    img: box_7,
    productName: "Clipsal",
    price: "95000",
    des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
    delPrice: "120000",
    category: "earthing switch",
  },
  {
    id: "8",
    img: box_8,
    productName: "Electrical Board",
    price: "8500",
    delPrice: "15000",
    des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
    category: "wire & cables",
    tag: "30% Off" 
  },
  {
    id: "9",
    img: panel_board_2,
    productName: "Schneider Electric",
    price: "8500",
    des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
    delPrice: "15000",
    category: "lT distribution box",
  },
  {
    id: "10",
    img: wire_1,
    productName: "Clipsal",
    price: "8500",
    delPrice: "15000",
    des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
    category: "wire & cables",
    tag: "New" 
  },
  {
    id: "11",
    img: wire_2,
    productName: "Electrical Panel",
    price: "8500",
    des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
    delPrice: "15000",
    category: "earthing switch",
  },
  {
    id: "12",
    img: panel_board_1,
    productName: "Schneider Electric",
    price: "3500",
    delPrice: "5000",
    des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
    category: "drop out switch",
    tag: "30% Off" // ✅ Category added
  },
  {
    id: "13",
    img: panel_board_2,
    productName: "Electrical Board",
    price: "95000",
    des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
    delPrice: "120000",
    category: "horn up fuse",
  },
  {
    id: "14",
    img: fuse_1,
    productName: "fuse",
    price: "95000",
    delPrice: "120000",
    des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
    category: "horn up fuse",
    tag: "30% Off" 
  },
  // {
  //   id: "15",
  //   img: fuse_2,
  //   productName: "Fuse 2",
  //   price: "95000",
  //   delPrice: "120000",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   category: "horn up fuse",
  //   tag: "New" 
  // },
  // {
  //   id: "16",
  //   img: wire_2,
  //   productName: "wire",
  //   price: "3500",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   delPrice: "5000",
  //   category: "wire & cables", // ✅ Category added
  //   tag: "30% Off" 
  // },
  // {
  //   id: "17",
  //   img: wire_1,
  //   productName: "wire",
  //   price: "7500",
  //   delPrice: "12000",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   category: "earthing switch",
  //   tag: "New" // ✅ Category added
  // },
  // {
  //   id: "18",
  //   img: panel_board_1,
  //   productName: "panel board",
  //   price: "95000",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   delPrice: "120000",
  //   category: "lT distribution box", // ✅ Category added
  // },
  // {
  //   id: "19",
  //   img: panel_board_2,
  //   productName: "Electrical Panel",
  //   price: "8500",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   delPrice: "15000",
  //   category: "wire & cables",
  //   tag: "New" 
  // },
  // {
  //   id: "20",
  //   img: panel_board_1,
  //   productName: "Eaton",
  //   price: "8500",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   delPrice: "15000",
  //   category: "earthing switch",
  // },
  // {
  //   id: "21",
  //   img: wire_1,
  //   productName: "Schneider Electric",
  //   price: "8500",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   delPrice: "15000",
  //   category: "wire & cables",
  //   tag: "30% Off" 
  // },
  // {
  //   id: "22",
  //   img: cutout,
  //   productName: "Clipsal",
  //   price: "95000",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   delPrice: "120000",
  //   category: "earthing switch",
  // },
  // {
  //   id: "23",
  //   img: panel_board_1,
  //   productName: "Electrical Board",
  //   price: "8500",
  //   delPrice: "15000",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   category: "drop-out-switch",
  //   tag: "30% Off" 
  // },
  // {
  //   id: "24",
  //   img: panel_board_2,
  //   productName: "Schneider Electric",
  //   price: "8500",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   delPrice: "15000",
  //   category: "lT distribution box",
  // },
  // {
  //   id: "25",
  //   img: wire_1,
  //   productName: "Clipsal",
  //   price: "8500",
  //   delPrice: "15000",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   category: "Electric Board",
  //   tag: "New" 
  // },
  // {
  //   id: "26",
  //   img: wire_2,
  //   productName: "Electrical Panel",
  //   price: "8500",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   delPrice: "15000",
  //   category: "wire & cables",
  // },
  // {
  //   id: "27",
  //   img: panel_board_1,
  //   productName: "Schneider Electric",
  //   price: "3500",
  //   delPrice: "5000",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   category: "wire & cables",
  //   tag: "30% Off" 
  // },
  // {
  //   id: "28",
  //   img: panel_board_2,
  //   productName: "Electrical Board",
  //   price: "95000",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   delPrice: "120000",
  //   category: "drop out switch",
  // },
  // {
  //   id: "29",
  //   img: fuse_1,
  //   productName: "fuse",
  //   price: "95000",
  //   delPrice: "120000",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   category: "horn up fuse",
  //   tag: "30% Off" 
  // },
  // {
  //   id: "30",
  //   img: fuse_2,
  //   productName: "Fuse 2",
  //   price: "95000",
  //   delPrice: "120000",
  //   des: 'High-conductivity electronic conductor with enhanced durability and efficiency.',
  //   category: "drop out switch",
  //   tag: "New" 
  // },
];

export default categoryProduct;
