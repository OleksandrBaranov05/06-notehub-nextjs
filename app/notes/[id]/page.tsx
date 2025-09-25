import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import NoteDetailsClient from './NoteDetails.client';

export default async function NoteDetailsPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const qc = new QueryClient();
  if (Number.isFinite(id)) {
    try {
      await qc.prefetchQuery({
        queryKey: ['note', id],
        queryFn: () => fetchNoteById(id),
        retry: false,
      });
    } catch {
    }
  }

  return (
    <HydrationBoundary state={dehydrate(qc)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}
