import { createFileRoute } from '@tanstack/react-router';
import { ReviewsPage } from '@/components/guesthouse-pages';
import { pageHead } from '@/lib/guesthouse';
export const Route = createFileRoute('/reviews')({ head: () => pageHead('Guest Reviews', 'Discover guest experiences with Doss City Guest House, rated 4.3 on Google and 4.4 on Tripadvisor.'), component: ReviewsPage });
