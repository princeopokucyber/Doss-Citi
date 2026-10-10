import { createFileRoute } from '@tanstack/react-router';
import { ConferencePage } from '@/components/guesthouse-pages';
import { pageHead } from '@/lib/guesthouse';
export const Route = createFileRoute('/conference')({ head: () => pageHead('Conference Room', 'Plan a meeting, workshop, or group gathering at Doss Citi Guest House in Dompoase.'), component: ConferencePage });
