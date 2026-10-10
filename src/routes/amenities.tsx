import { createFileRoute } from '@tanstack/react-router';
import { AmenitiesPage } from '@/components/guesthouse-pages';
import { pageHead } from '@/lib/guesthouse';
export const Route = createFileRoute('/amenities')({ head: () => pageHead('Amenities', 'Enjoy complimentary Wi-Fi, free parking, a pool, air conditioning, dining, and conference facilities.'), component: AmenitiesPage });
