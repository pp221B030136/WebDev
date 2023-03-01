export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  kaspi: string;
  category: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 14 Pro Max',
    price: 920000,
    description: 'The always-on display and Dynamic Island are two of the main upgraded features on the iPhone 14 Pro and Pro Max.',
    image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F265330_1v.jpg&w=3840&q=85',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-iphone-14-pro-1tb-fioletovyi-106363323/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXSTZDQaj59qIKPVBCOi8M1ZExKs1gZ4cHJnEuii1CXKKDJK_kVnGjoaAlUKEALw_wcB#!/item",
    category: "phone",
    likes: 0
  },
  {
    id: 2,
    name: 'Phone 13 Pro Max',
    price: 882290,
    description: 'Brighter display, longer battery life and powerful cameras.',
    image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F252998_1.jpg&w=3840&q=85',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-iphone-13-pro-max-1tb-goluboi-102298881/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXSTZDQaj59qIKPVBCOi8M1ZExKs1gZ4cHJnEuii1CXKKDJK_kVnGjoaAlUKEALw_wcB#!/item",
    category: "phone",
    likes: 0
  },
  {
    id: 3,
    name: 'Phone 12 Pro Max',
    price: 698590,
    description: 'The phone which is powered by the new Apple A14 Bionic processor, comes with a 6.7 inche Super Retina XDR OLED capacitive touchscreen and 2778 x 1284 p resolution.',
    image: 'https://d1eh9yux7w8iql.cloudfront.net/product_images/418120_98f32291-8c1e-452f-b0cb-2bcad0652b2f.jpg',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-iphone-12-pro-max-512gb-sinii-100658114/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXSTZDQaj59qIKPVBCOi8M1ZExKs1gZ4cHJnEuii1CXKKDJK_kVnGjoaAlUKEALw_wcB#!/item",
    category: "phone",
    likes: 0
  },
  {
    id: 4,
    name: 'MacBook Pro 13\'\' silver',
    price: 674800,
    description: 'The new M2 chip makes the 13‑inch MacBook Pro more capable than ever.',
    image: 'https://gadgetstore.kz/wa-data/public/shop/products/57/04/457/images/1702/1702.970.jpeg',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-macbook-pro-13-myd82-seryi-100797630/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXSTZDQaj59qIKPVBCOi8M1ZExKs1gZ4cHJnEuii1CXKKDJK_kVnGjoaAlUKEALw_wcB#!/item",
    category: "laptop",
    likes: 0
  },
  {
    id: 5,
    name: 'iPad Pro',
    price: 846895,
    description: 'It includes an A9X processor, 2732 x 2048 resolution Retina display and a four-speaker audio system.',
    image: 'https://185504.selcdn.ru/static/almajuice.reshop.kz/catalog/90/6026994806381ef4653a54_original.jpg',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-ipad-pro-2022-12-9-512gb-wi-fi-cellular-serebristyi-107283849/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXSTZDQaj59qIKPVBCOi8M1ZExKs1gZ4cHJnEuii1CXKKDJK_kVnGjoaAlUKEALw_wcB#!/item",
    category: "other",
    likes: 0
  },
  {
    id: 6,
    name: 'Apple Watch Series 8',
    price: 234450,
    description: 'Apple Watch Series 8 has an innovative new sensor that tracks your temperature while you sleep, so you can see changes over time.',
    image: 'https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/220908083235262838/220915160029850244.png@webp',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXSTZDQaj59qIKPVBCOi8M1ZExKs1gZ4cHJnEuii1CXKKDJK_kVnGjoaAlUKEALw_wcB#!/item",
    category: "other",
    likes: 0
  },
  {
    id: 7,
    name: 'AirPods 3',
    price: 97640,
    description: 'The third-generation AirPods are Apple\'s main wireless earbuds, featuring a streamlined design, force sensor controls, Adaptive EQ, spatial audio with dynamic head tracking, a MagSafe charging case, and more.',
    image: 'https://www.mechta.kz/export/1cbitrix/import_files/1b/1bbb746c-3640-11ec-a23f-005056b6dbd7-286.webp',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-airpods-3-belyi-102667744/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXSTZDQaj59qIKPVBCOi8M1ZExKs1gZ4cHJnEuii1CXKKDJK_kVnGjoaAlUKEALw_wcB#!/item",
    category: "headphones",
    likes: 0
  },{
    id: 8,
    name: 'AirTag',
    price: 28400,
    description: 'The small circular tag is designed to be attached to items like keys and wallets to allow these accessories to be tracked using Bluetooth right alongside Apple devices in the Find My app.',
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airtag-double-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617761672000',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-airtag-belyi-101522198/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXSTZDQaj59qIKPVBCOi8M1ZExKs1gZ4cHJnEuii1CXKKDJK_kVnGjoaAlUKEALw_wcB#!/item",
    category: "other",
    likes: 0
  },
  {
    id: 9,
    name: 'Apple TV 4k',
    price: 169990,
    description: 'Apple TV is a set-top box that allows a television to become a display screen for Internet content.',
    image: 'https://www.mechta.kz/export/1cbitrix/import_files/8b/8b3bb18f-dba9-11eb-a23f-005056b6dbd7.png',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-tv-4k-mp7p2rs-a64gb-3-64gb-22300004/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXSTZDQaj59qIKPVBCOi8M1ZExKs1gZ4cHJnEuii1CXKKDJK_kVnGjoaAlUKEALw_wcB#!/item",
    category: "other",
    likes: 0
  },{
    id: 10,
    name: 'HomePod',
    price: 72000,
    description: 'Jam-packed with innovation, HomePod mini delivers unexpectedly big sound for a speaker of its size.',
    image: 'https://img.mta.ua/image/cache/data/foto/z229/229703/photos/Apple-HomePod-mini-White-Dark-Gray-01-600x600.jpg',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-homepod-mini-chernyi-100983175/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=Cj0KCQiArsefBhCbARIsAP98hXSTZDQaj59qIKPVBCOi8M1ZExKs1gZ4cHJnEuii1CXKKDJK_kVnGjoaAlUKEALw_wcB#!/item",
    category: "other",
    likes: 0
  }, {
    id: 11,
    name: 'iPhone 11 Pro',
    price: 599300,
    description: 'The iPhone 11 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle.',
    image: 'https://www.technodom.kz/_next/image?url=https%3A%2F%2Fapi.technodom.kz%2Ff3%2Fapi%2Fv1%2Fimages%2F800%2F800%2F228936_1.jpg&w=3840&q=85',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-iphone-11-pro-64gb-seryi-1005129/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIpbtc3iWeDV8JzZyz_l-PvDPE9Sh64KIoxJdU8OD1WiCaLIAmZTZsRoCQy8QAvD_BwE#!/item",
    category: "phone",
    likes: 0
  },
  {
    id: 12,
    name: 'iPhone Xr',
    price: 305000,
    description: 'The iPhone XR is one of the best cheap iPhones you can buy in 2023.',
    image: 'https://cdn1.it4profit.com/brd2/q:68/g:sm/plain/s3://app/public/models/MH7L3/large/j/210104170048825947.jpg',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-iphone-xr-64gb-slim-box-belyi-100692571/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIpbtc3iWeDV8JzZyz_l-PvDPE9Sh64KIoxJdU8OD1WiCaLIAmZTZsRoCQy8QAvD_BwE#!/item",
    category: "phone",
    likes: 0
  },
  {
    id: 13,
    name: 'MacBook Pro 14\'\'',
    price: 986760,
    description: 'An enlarged casing and narrower edges create space for the almost 36-centimetre display.',
    image: 'https://www.mechta.kz/images/product/19634/17000001104_1-286.webp',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIpbtc3iWeDV8JzZyz_l-PvDPE9Sh64KIoxJdU8OD1WiCaLIAmZTZsRoCQy8QAvD_BwE#!/item",
    category: "laptop",
    likes: 0
  },
  {
    id: 14,
    name: 'MacBook Pro 16\'\'',
    price: 1272140,
    description: 'The Apple 16" MacBook Pro features a 16" Retina Display, a Magic Keyboard with a redesigned scissor mechanism, a six-speaker high-fidelity sound system, and an advanced thermal design.',
    image: 'https://www.mechta.kz/export/1cbitrix/import_files/33/33ae7602-9de9-11ed-a254-005056b6dbd7-286.webp',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-macbook-pro-16-mk193-seryi-102866164/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIpbtc3iWeDV8JzZyz_l-PvDPE9Sh64KIoxJdU8OD1WiCaLIAmZTZsRoCQy8QAvD_BwE#!/item",
    category: "laptop",
    likes: 0
  },
  {
    id: 15,
    name: 'Macbook 13\'\' black',
    price: 623055,
    description: 'The same compact design supports up to 20 hours of battery life 1 and an active cooling system to sustain enhanced performance.',
    image: 'https://www.mechta.kz/export/1cbitrix/import_files/9c/9c826903-445b-11ed-a24b-005056b6dbd7-480.webp',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIpbtc3iWeDV8JzZyz_l-PvDPE9Sh64KIoxJdU8OD1WiCaLIAmZTZsRoCQy8QAvD_BwE#!/item",
    category: "laptop",
    likes: 0
  },
  {
    id: 16,
    name: 'MacBook 13\'\' gold',
    price: 629042,
    description: 'It\'s our most portable pro laptop with all-day battery life and a gorgeous Retina display.',
    image: 'https://img.mvideo.ru/Pdb/30064148b.jpg',
    rating: 5,
    kaspi: "https://kaspi.kz/shop/p/apple-macbook-air-13-mly13-zolotistyi-105933751/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiAjPyfBhBMEiwAB2CCIpbtc3iWeDV8JzZyz_l-PvDPE9Sh64KIoxJdU8OD1WiCaLIAmZTZsRoCQy8QAvD_BwE#!/item",
    category: "laptop",
    likes: 0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/