import { createFileRoute } from '@tanstack/react-router';
import { NewsPage } from '@/components/guesthouse-pages';
import { pageHead } from '@/lib/guesthouse';
export const Route = createFileRoute('/news')({ head: () => pageHead('Travel Notes & News', 'Discover travel ideas, local highlights, and group stay inspiration from Doss Citi Guest House.'), component: NewsPage });
