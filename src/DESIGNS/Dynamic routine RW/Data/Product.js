import shoe from '../images/shoe1.jpg';
import shoe1 from '../images/shoe1.jpg';
import shoe2 from '../images/shoe2.jpg';
import shoe3 from '../images/shoe3.jpg';

import heel from '../images/heel.jpg';
import heel1 from '../images/heel1.jpg';
import heel2 from '../images/heel2.jpg';
import heel3 from '../images/heel3.jpg';


export const products = [
    {
        id: 1,
        image:shoe,
        title: "Men's Shoe DN 23x, New Product",
        category: "LIFSTYLE",
        price: 4690,
        oldPrice: 5999,
        rating: 3,
        offer: 25,
        discription: "This is high quality mens's shoe perfect for everyday use.",
        gallery: [shoe1,shoe2, shoe3]
    },
    {
        id: 2,
        image:heel ,
        title: "women's heel DN 23x, New Product",
        category: "LIFSTYLE",
        price: 2999,
        oldPrice: 3450,
        rating: 5,
        offer: 20,
        discription: "Stylish women's shoe designed for comfort and elegance.",
        gallery: [heel1, heel2, heel3]
    }
]