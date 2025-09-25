'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import css from './noteDetails.module.css';

export default function NoteDetailsClient() {
  const params = useParams<{ id?: string | string[] }>();

  const idStr = Array.isArray(params?.id) ? params?.id[0] : params?.id;
  const id = idStr ? Number(idStr) : NaN;
  const enabled = Number.isFinite(id);

  const { data: note, isLoading, isError } = useQuery({
    queryKey: ['note', enabled ? id : 'unknown'],
    queryFn: () => fetchNoteById(id),
    enabled,  
    retry: false,
  });

  if (!enabled) return <p>Something went wrong.</p>;
  if (isLoading) return <p>Loading, please wait...</p>;
  if (isError || !note) return <p>Something went wrong.</p>;

  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{new Date(note.createdAt).toLocaleString()}</p>
      </div>
    </div>
  );
}
