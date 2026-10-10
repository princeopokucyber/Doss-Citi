import blogExterior from '@/assets/guesthouse.jpg';
import heroPool from '@/assets/hero-pool.jpg.asset.json';
import heroPoolGuests from '@/assets/hero-pool-guests.jpg.asset.json';
import blogConference from '@/assets/conference.jpg';
import exteriorAsset from '@/assets/property-building.jpg.asset.json';
import roomAsset from '@/assets/property-room-grey.jpg.asset.json';
import greyCard from '@/assets/property-room-grey-card.jpg.asset.json';
import patternedCard from '@/assets/property-room-patterned-card.jpg.asset.json';
import redCard from '@/assets/property-room-red-card.jpg.asset.json';
import patternedRoom from '@/assets/property-room-patterned.jpg.asset.json';
import redRoom from '@/assets/property-room-red.jpg.asset.json';
import stripedRoom from '@/assets/property-room-striped.jpg.asset.json';
import courtyard from '@/assets/property-courtyard.jpg.asset.json';
import hallway from '@/assets/property-hallway.jpg.asset.json';
import pool from '@/assets/property-pool.jpg.asset.json';
import poolside from '@/assets/property-poolside.jpg.asset.json';
import poolSocial from '@/assets/property-pool-social.jpg.asset.json';
import poolWalkway from '@/assets/property-pool-walkway.jpg.asset.json';
import restaurantAsset from '@/assets/property-pub-original.jpg.asset.json';
import conferenceAsset from '@/assets/property-conference-original.jpg.asset.json';
import pubDetail from '@/assets/property-pub-detail.jpg.asset.json';
import pubCloseup from '@/assets/property-pub-closeup.jpg.asset.json';
import conferenceDetail from '@/assets/property-conference-detail.jpg.asset.json';
import conferenceCloseup from '@/assets/property-conference-closeup.jpg.asset.json';
import countryside from '@/assets/countryside.jpg';
import food from '@/assets/food.jpg';
import { Wifi, CarFront, Waves, Snowflake, Accessibility, Presentation, Lightbulb, Utensils } from 'lucide-react';
const restaurant = restaurantAsset.url;
const conference = conferenceAsset.url;
export const images = { exterior: exteriorAsset.url, room: roomAsset.url, restaurant, conference, countryside, food, pool: pool.url, pubDetail: pubDetail.url, conferenceDetail: conferenceDetail.url };
export const blogImages = { exterior: blogExterior, conference: blogConference };
export const heroSlides = [
  { src: images.exterior, alt: 'Doss Citi Guest House building with a paved courtyard and blue canopy.' },
  { src: heroPool.url, alt: 'Blue swimming pool between stone-clad guest-house buildings.' },
  { src: heroPoolGuests.url, alt: 'Guests swimming and relaxing beside the guest-house pool.' },
];
export const propertyPhotoAlt: Record<string, string> = {
  [images.exterior]: 'Doss Citi Guest House building with a paved courtyard and blue canopy.',
  [courtyard.url]: 'Courtyard beside an orange building, with pool rules and a blue canopy.',
  [hallway.url]: 'Guest-room corridor with illuminated ceiling and tiled floor.',
  [images.room]: 'Guest room with grey bedding, a wooden bed and a bedside table.',
  [greyCard.url]: 'Wooden bed with grey bedding and patterned pillows.',
  [patternedRoom.url]: 'Guest room with floral bedding, a wooden headboard and a ceiling fan.',
  [patternedCard.url]: 'Bed with floral bedding and a curved wooden headboard.',
  [redRoom.url]: 'Guest room with red curtains, a wooden bed and red-and-white bedding.',
  [redCard.url]: 'Wooden bed with red-and-white bedding beside red curtains.',
  [stripedRoom.url]: 'Guest room with striped bedding, a wooden headboard and air conditioner.',
  [pool.url]: 'Blue swimming pool bordered by tiled decking and guest-house buildings.',
  [poolside.url]: 'Guests sitting at the pool edge beside a stone wall.',
  [poolSocial.url]: 'Guests in the swimming pool beside the guest-house building.',
  [poolWalkway.url]: 'Tiled poolside walkway with metal railings and a blue canopy.',
  [restaurant]: 'Pub interior with a counter, bottle shelves and wall displays.',
  [pubDetail.url]: 'Pub counter with bottle shelves and framed wall displays.',
  [pubCloseup.url]: 'Close-up of the pub bottle shelves and wall displays.',
  [conference]: 'Conference space with woven armchairs, tables and large windows.',
  [conferenceDetail.url]: 'Woven armchairs and tables in the window-lit conference space.',
  [conferenceCloseup.url]: 'Close-up of woven seating and tables in the conference space.',
};
export function photoAlt(src: string, fallback: string) {
  return propertyPhotoAlt[src] ?? fallback;
}
export const propertyGallery: string[][] = [
 ['The guest house',images.exterior,'Exterior'],
 ['The courtyard',courtyard.url,'Exterior'],
  ['Guest-room corridor',hallway.url,'Rooms'],
 ['A comfortable retreat',images.room,'Rooms'],
 ['Patterned bedding',patternedRoom.url,'Rooms'],
 ['Red-accented guest room',redRoom.url,'Rooms'],
 ['Striped bedding',stripedRoom.url,'Rooms'],
 ['Poolside moments',pool.url,'Pool'],
 ['Relaxing by the water',poolside.url,'Pool'],
 ['Time at the pool',poolSocial.url,'Pool'],
 ['Poolside walkway',poolWalkway.url,'Pool'],
 ['The drinking pub',restaurant,'Dining'],
 ['The bar counter',pubDetail.url,'Dining'],
 ['Pub details',pubCloseup.url,'Dining'],
 ['A taste of Ghana (illustrative)',food,'Dining'],
 ['Meetings made easy',conference,'Conference'],
 ['Conference seating',conferenceDetail.url,'Conference'],
 ['Conference-room details',conferenceCloseup.url,'Conference'],
];
// Wide frames retain the entire exterior; portrait frames avoid aggressive room crops.
const landscapePhotos = new Set([images.exterior, courtyard.url, restaurant, pubDetail.url, pubCloseup.url, food, conference, conferenceDetail.url, conferenceCloseup.url]);
const lowerSubjects = new Set([images.room, patternedRoom.url, redRoom.url, stripedRoom.url, pool.url, poolside.url, poolSocial.url]);
export function galleryPresentation(src: string) {
  return {
    orientation: landscapePhotos.has(src) ? 'landscape' as const : 'portrait' as const,
    position: lowerSubjects.has(src) ? 'lower' as const : 'center' as const,
  };
}
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
export const rooms = [ { name: 'Standard Room', price: 200, guests: '1–2 guests', description: 'Simple comforts for a restful stay.', image: greyCard.url }, { name: 'Deluxe Room', price: 225, guests: '1–2 guests', description: 'A little more space to make yourself at home.', image: patternedCard.url }, { name: 'Family Room', price: 250, guests: 'Family stays', description: 'Comfortable accommodation for time together.', image: redCard.url } ];
export const navigation = [['Home','/'],['About','/about'],['Rooms','/rooms'],['Amenities','/amenities'],['Dining','/restaurant'],['Conference','/conference'],['Gallery','/gallery'],['Reviews','/reviews'],['News','/news'],['Contact','/contact']] as const;
export const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Doss+City+Guest+House+Dompoase+Ghana';
export const bookingWidgetUrl: string = ''; // Set to the owner's HTTPS booking provider embed URL.
export function pageHead(title: string, description: string) { return { meta: [{ title: `${title} | Doss Citi Guest House` },{ name:'description',content:description },{ property:'og:title',content:`${title} | Doss Citi Guest House` },{ property:'og:description',content:description },{ property:'og:type',content:'website' },{ name:'twitter:card',content:'summary_large_image' }] }; }
