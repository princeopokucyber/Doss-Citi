import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/guesthouse-pages';
import { pageHead } from '@/lib/guesthouse';
export const Route=createFileRoute('/contact')({validateSearch:(search:Record<string,unknown>)=>Object.fromEntries(['arrival','departure','guests','room','period'].map(k=>[k,typeof search[k]==='string'?String(search[k]).slice(0,100):''])),head:()=>pageHead('Contact & Booking Inquiries','Contact Doss Citi Guest House in Dompoase. Call 0553653424 or 0200521800, or send a booking and group inquiry.'),component:Contact});
function Contact(){const initial=Route.useSearch();return <ContactPage initial={initial}/>}
