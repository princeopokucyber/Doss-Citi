import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/guesthouse-pages';
import { pageHead } from '@/lib/guesthouse';
export const Route = createFileRoute('/about')({ head: () => pageHead('About Us', 'Meet Doss City Guest House, your welcoming home away from home in Dompoase, Ashanti, Ghana.'), component: AboutPage });
