import { createFileRoute } from '@tanstack/react-router';
import { GalleryPage } from '@/components/guesthouse-pages';
import { pageHead } from '@/lib/guesthouse';
export const Route = createFileRoute('/gallery')({ head: () => pageHead('Gallery', 'Explore Doss City Guest House photographs of the buildings, guest rooms, drinking pub, pool, and conference facilities.'), component: GalleryPage });
