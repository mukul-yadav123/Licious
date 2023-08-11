const categories = [
      {
        name: 'WOW Weekends', img: 'images/categories/Wow_Weekend.png'
       },
       {
        name: 'Chicken', img: 'images/categories/Chicken.png'
       },
       {
        name: 'Fish & Seafood', img: 'images/categories/Fish.png'
       },
       {
        name: 'Mutton', img: 'images/categories/Mutton.png'
       },
       {
        name: 'Ready to Cook', img: 'images/categories/Ready.png'
       },
       {
        name: 'Prawns', img: 'images/categories/Prawns.png'
       },
       {
        name: 'Eggs', img: 'images/categories/Eggs.png'
       },
       {
        name: 'Cold Cuts', img: 'images/categories/Coldcuts.png'
       },
       {
        name: 'Kebab & Biryani', img: 'images/categories/Kebabs.png'
       },
       {
        name: 'Spreads', img: 'images/categories/spreads.png'
       },
       {
        name: 'Plant Based Meat', img: 'images/categories/plant.png'
       },
       {
        name: 'Meat Masal', img: 'images/categories/Masala.png'
       }
]

const bestsellers = [
  {
    img: 'images/Bestsellers/chicken curry.webp',
    name: 'Chicken Curry Cut - Small Pieces',
    weight: '500g',
    Serves: '4',
    pieces: '',
    discount_price: '180',
    price: '189',
    discount: '5% off' 
  },{
    img: 'images/Bestsellers/kebab.webp',
    name: 'Afghani Murgh Seekh Kebab',
    weight: '',
    Serves: '',
    pieces: '4',
    discount_price: '269',
    price: '',
    discount: '' 
  },{
    img: 'images/Bestsellers/farm fresh.webp',
    name: 'Farm Fresh Classic Eggs - Pack of 12',
    weight: '',
    Serves: '',
    pieces: '12',
    discount_price: '136',
    price: '160',
    discount: '15% off' 
  },{
    img: 'images/Bestsellers/chicken breast.webp',
    name: 'Chicken Breast Boneless',
    weight: '500g',
    Serves: '4',
    pieces: '',
    discount_price: '299',
    price: '',
    discount: '' 
  },{
    img: 'images/Bestsellers/chicken boneless.webp',
    name: 'Chicken Boneless - Mini Bites',
    weight: '250g',
    Serves: '4',
    pieces: '',
    discount_price: '209',
    price: '',
    discount: '' 
  }
]

const combos = [
  {
    img: 'images/combos/chicken curry cut.webp',
    name: 'Chicken Curry Cut(Small Pcs)- 500 gms and Chicken Curry Cut(Large pcs)- 500 gms',
    weight: '',
    Serves: '',
    pieces: '',
    discount_price: '333',
    price: '378',
    discount: '12% off' 
  },
  {
    img: 'images/combos/kebab platter.webp',
    name: 'Assorted Kebab Platter | Ready to Cook',
    weight: '720g',
    Serves: '',
    pieces: '',
    discount_price: '939',
    price: '1043',
    discount: '10% off' 
  },
  {
    img: 'images/combos/kebab and biryani.webp',
    name: 'Chicken Kebab & Biryani Combo',
    weight: '',
    Serves: '',
    pieces: '5',
    discount_price: '412',
    price: '468',
    discount: '12% off' 
  },
  {
    img: 'images/combos/hot and chunky.webp',
    name: 'Hot & Chunky Chicken Combo',
    weight: '',
    Serves: '',
    pieces: '1',
    discount_price: '418',
    price: '',
    discount: '' 
  },
  {
    img: 'images/combos/eggs.webp',
    name: 'Classic Eggs - Pack of 24 ( Combo ) ',
    weight: '',
    Serves: '',
    pieces: '24',
    discount_price: '282',
    price: '320',
    discount: '12% off' 
  }
]

const topRated = [
  {
    img: 'images/Top-rated/boneless.webp',
    name: 'Chicken Boneless - Mini Bites',
    weight: '250g',
    Serves: '4',
    pieces: '',
    discount_price: '209',
    price: '',
    discount: '' 
  },
  {
    img: 'images/Top-rated/afghani.webp',
    name: 'Afghani Murgh Seekh Kebab',
    weight: '',
    Serves: '',
    pieces: '4',
    discount_price: '269',
    price: '',
    discount: '' 
  },
  {
    img: 'images/Top-rated/breast.webp',
    name: 'Chicken Breast Boneless (Large Pack)',
    weight: '1000g',
    Serves: '6',
    pieces: '',
    discount_price: '585',
    price: '',
    discount: '' 
  },
  {
    img: 'images/Top-rated/tangdi.webp',
    name: 'Premium Chicken Tangdi Biryani Cut',
    weight: '550g',
    Serves: '2-3',
    pieces: '',
    discount_price: '359',
    price: '399',
    discount: '' 
  },
  {
    img: 'images/Top-rated/basa.webp',
    name: 'Basa - Boneless Cubes',
    weight: '400g',
    Serves: '4',
    pieces: '',
    discount_price: '479',
    price: '',
    discount: '' 
  }

]

const lower = [
  {
    img: 'images/199 or lower/curry cut.webp',
    name: 'Chicken Curry Cut - Large Pieces',
    weight: '500g',
    Serves: '4',
    pieces: '',
    discount_price: '189',
    price: '',
    discount: '' 
  }, {
    img: 'images/199 or lower/eggs.webp',
    name: 'Farm Fresh Classic Eggs - Pack of 12',
    weight: '',
    Serves: '',
    pieces: '12',
    discount_price: '160',
    price: '',
    discount: '' 
  }, {
    img: 'images/199 or lower/curry cut small pieces.webp',
    name: 'Chicken Curry Cut - Small Pieces',
    weight: '500g',
    Serves: '4',
    pieces: '',
    discount_price: '189',
    price: '',
    discount: '' 
  }, {
    img: 'images/199 or lower/eggs-6.webp',
    name: 'Farm Fresh Classic Eggs - Pack of 6',
    weight: '',
    Serves: '',
    pieces: '6',
    discount_price: '79',
    price: '',
    discount: '' 
  }, {
    img: 'images/199 or lower/cage free eggs.webp',
    name: 'Cage Free Country Eggs - Pack of 6',
    weight: '',
    Serves: '',
    pieces: '6',
    discount_price: '109',
    price: '',
    discount: '' 
  }
]

const breakfast = [

   {
    img: 'images/breakfast/butter chicken.webp',
    name: 'Chunky Butter Chicken Spread',
    weight: '',
    Serves: '',
    pieces: '1',
    discount_price: '219',
    price: '',
    discount: '' 
  }, 
  {
    img: 'images/breakfast/salami.webp',
    name: 'Peppery Chicken Salami',
    weight: '200gm',
    Serves: '',
    pieces: '',
    discount_price: '325',
    price: '',
    discount: '' 
  },
  {
    img: 'images/breakfast/eggs-6.webp',
    name: 'Farm Fresh Classic Eggs - Pack of 6',
    weight: '',
    Serves: '',
    pieces: '6',
    discount_price: '70',
    price: '79',
    discount: '12% off' 
  },
  {
    img: 'images/breakfast/shawarma.webp',
    name: 'Chunky Shawarma Chicken Spread',
    weight: '',
    Serves: '',
    pieces: '1',
    discount_price: '219',
    price: '',
    discount: '' 
  },
  {
    img: 'images/breakfast/chorizo.webp',
    name: 'Chicken Chorizo Frankfurter',
    weight: '',
    Serves: '',
    pieces: '4',
    discount_price: '239',
    price: '299',
    discount: '20% off' 
  }
]

const boneless = [

  {
    img: 'images/boneless cuts/mini bites.webp',
    name: 'Chicken Boneless - Mini Bites',
    weight: '250g',
    Serves: '4',
    pieces: '',
    discount_price: '209',
    price: '',
    discount: '' 
  },
  {
    img: 'images/boneless cuts/basa.webp',
    name: 'Basa - Boneless Cubes',
    weight: '400g',
    Serves: '4',
    pieces: '',
    discount_price: '479',
    price: '',
    discount: '' 
  },
  {
    img: 'images/boneless cuts/jalebi.webp',
    name: 'Tilapia (Jalebi) Large - Fillet',
    weight: '250g',
    Serves: '2',
    pieces: '',
    discount_price: '242',
    price: '255',
    discount: '' 
  },
  {
    img: 'images/boneless cuts/thigh.webp',
    name: 'Premium Chicken Thigh Boneless',
    weight: '450g',
    Serves: '5',
    pieces: '',
    discount_price: '359',
    price: '',
    discount: '' 
  },
  {
    img: 'images/boneless cuts/medium jalebi.webp',
    name: 'Tilapia (Jelabi) Medium - Fillet',
    weight: '250g',
    Serves: '2-3',
    pieces: '',
    discount_price: '229',
    price: '',
    discount: '' 
  }

]

const cities = ['Bengaluru','NCR','Hyderabad','Chandigarh','Panchukla','Mohali',
              'Mumbai','Pune','Chennai','Coimbatore','Jaipur','Cochin','Vijaywada',
              'Visakhapatnam','Kolkata','Lucknow','Kanpur','Nagpur'
]

export {categories,bestsellers,combos,topRated,lower,breakfast,boneless,cities};