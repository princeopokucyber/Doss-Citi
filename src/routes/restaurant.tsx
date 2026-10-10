import { createFileRoute } from '@tanstack/react-router';
import { RestaurantPage } from '@/components/guesthouse-pages';
import { pageHead } from '@/lib/guesthouse';
export const Route = createFileRoute('/restaurant')({ head: () => pageHead('Pub & Restaurant', 'Enjoy local and global cuisine at the welcoming casual pub and restaurant at Doss City Guest House.'), component: RestaurantPage });
