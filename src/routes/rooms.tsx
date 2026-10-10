import { createFileRoute } from '@tanstack/react-router';
import { RoomsPage } from '@/components/guesthouse-pages';
import { pageHead } from '@/lib/guesthouse';
export const Route = createFileRoute('/rooms')({ head: () => pageHead('Rooms & Rates', 'Explore comfortable guest rooms with sample rates from GH₵200, Wi-Fi, air conditioning, and private bathrooms.'), component: RoomsPage });
