import { createFileRoute } from '@tanstack/react-router';
import { GalleryPage } from '@/components/guesthouse-pages';
import { pageHead } from '@/lib/guesthouse';
export const Route = createFileRoute('/gallery')({ head: () => pageHead('Gallery', 'Explore illustrative photographs of guest rooms, dining, poolside spaces, and conference facilities.'), component: GalleryPage });
