import kumasiPhoto from '@/assets/kumasi-manhyia-palace.jpg.asset.json';
import marketPhoto from '@/assets/kumasi-kejetia-market.jpg.asset.json';
import marketLicense from '@/assets/photo-license-gfdl-1.2.txt.asset.json';
import exterior from '@/assets/guesthouse.jpg';
import room from '@/assets/room.jpg';
import restaurant from '@/assets/restaurant.jpg';
import conference from '@/assets/conference.jpg';
import countryside from '@/assets/countryside.jpg';
import food from '@/assets/food.jpg';
import { Wifi, CarFront, Waves, Snowflake, Accessibility, Presentation, Lightbulb, Utensils } from 'lucide-react';
export const images = { exterior, room, restaurant, conference, countryside, food };
export const amenities = [
 { icon: Wifi, title: 'Free Wi-Fi', text: 'Stay connected throughout your stay.' },
 { icon: CarFront, title: 'Free parking', text: 'A convenient place to park, at no extra cost.' },
 { icon: Waves, title: 'Swimming pool', text: 'Take a refreshing dip and unwind.' },
 { icon: Snowflake, title: 'Air-conditioned rooms', text: 'Cool, comfortable spaces to relax.' },
 { icon: Utensils, title: 'Pub & restaurant', text: 'Local favourites and global flavours.' },
 { icon: Presentation, title: 'Conference room', text: 'A welcoming space to meet and connect.' },
 { icon: Accessibility, title: 'Accessible facilities', text: 'Contact us to discuss your accessibility needs.' },
 { icon: Lightbulb, title: 'Good lighting', text: 'Well-lit rooms and welcoming shared spaces.' },
];
export const rooms = [ { name: 'Standard Room', price: 200, guests: '1–2 guests', description: 'Simple comforts for a restful stay.', image: room }, { name: 'Deluxe Room', price: 300, guests: '1–2 guests', description: 'A little more space to make yourself at home.', image: room }, { name: 'Family Room', price: 450, guests: 'Family stays', description: 'Comfortable accommodation for time together.', image: room } ];
export const navigation = [['Home','/'],['About','/about'],['Rooms','/rooms'],['Amenities','/amenities'],['Dining','/restaurant'],['Conference','/conference'],['Gallery','/gallery'],['Reviews','/reviews'],['News','/news'],['Contact','/contact']] as const;
export const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Doss+City+Guest+House+Dompoase+Ghana';
export const bookingWidgetUrl: string = ''; // Set to the owner's HTTPS booking provider embed URL.
export function pageHead(title: string, description: string) { return { meta: [{ title: `${title} | Doss City Guest House` },{ name:'description',content:description },{ property:'og:title',content:`${title} | Doss City Guest House` },{ property:'og:description',content:description },{ property:'og:type',content:'website' },{ name:'twitter:card',content:'summary_large_image' }] }; }

export const areaPhotographs = [
 {name:'Kumasi',landmark:'Manhyia Palace Museum',text:'Discover royal Ashanti heritage and the character of the city.',image:kumasiPhoto.url,alt:'Real photograph of Manhyia Palace Museum in Kumasi',author:'Caupolicaningles',source:'https://commons.wikimedia.org/wiki/File:Manhyia_Palace_Museum,_Kumasi,_Ghana.jpg',license:'CC BY-SA 4.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/4.0/',year:'2018'},
 {name:'Local markets',landmark:'Kejetia Market, Kumasi',text:'Explore the colour and energy of Kumasi’s historic central market.',image:marketPhoto.url,alt:'Real archival photograph of the busy central market in Kumasi',author:'Torsten Müller',source:'https://rachel.core2learn.org/modules/en-wikipedia_for_schools-static/images/717/71746.jpg.htm',license:'GFDL 1.2+',licenseUrl:marketLicense.url,year:'2004'},
];
export const areaHighlights = [
 {name:'Fomena',text:'Discover the district capital and its local character.'},
 {name:'Obuasi',text:'Explore a town known for its gold-mining heritage.'},
 {name:'Adansi countryside',text:'Enjoy green landscapes and a slower pace.'},
 {name:'Dompoase community',text:'Get a feel for local life around your home away from home.'},
];
