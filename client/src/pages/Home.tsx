import { useEffect, useState } from 'react';
import { api } from '../lib/api';
import BookCard from '../components/BookCard';

export default function Home() {
  const [data, setData] = useState<any>({ items: [] });
  const [q, setQ] = useState('');

  useEffect(() => { api.get('/books').then(r => setData(r.data)); }, []);
  const search = async () => setData((await api.get('/books', { params: { q } })).data);
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-2 mb-4">
        <input className="border p-2 flex-1" placeholder="Search books" value={q} onChange={e => setQ(e.target.value)} />
        <button className="border px-4" onClick={search}>Search</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.items.map((b: any) => <BookCard key={b._id} book={b} />)}
      </div>
    </div>
  );
}