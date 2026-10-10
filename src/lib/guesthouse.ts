import blogExterior from '@/assets/guesthouse.jpg';
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
import restaurant from '@/assets/pub-enhanced.jpg';
import conference from '@/assets/conference-enhanced.jpg';
import pubDetail from '@/assets/property-pub-detail.jpg.asset.json';
import pubCloseup from '@/assets/property-pub-closeup.jpg.asset.json';
import conferenceDetail from '@/assets/property-conference-detail.jpg.asset.json';
import conferenceCloseup from '@/assets/property-conference-closeup.jpg.asset.json';
import countryside from '@/assets/countryside.jpg';
import food from '@/assets/food.jpg';
import { Wifi, CarFront, Waves, Snowflake, Accessibility, Presentation, Lightbulb, Utensils } from 'lucide-react';
export const images = { exterior: exteriorAsset.url, room: roomAsset.url, restaurant, conference, countryside, food, pool: pool.url, pubDetail: pubDetail.url, conferenceDetail: conferenceDetail.url };
export const blogImages = { exterior: blogExterior, conference: blogConference };
export const propertyGallery: string[][] = [
 ['The guest house',images.exterior,'Exterior'],
 ['The courtyard',courtyard.url,'Exterior'],
 ['Guest-room corridor',hallway.url,'Exterior'],
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
export function pageHead(title: string, description: string) { return { meta: [{ title: `${title} | Doss City Guest House` },{ name:'description',content:description },{ property:'og:title',content:`${title} | Doss City Guest House` },{ property:'og:description',content:description },{ property:'og:type',content:'website' },{ name:'twitter:card',content:'summary_large_image' }] }; }
