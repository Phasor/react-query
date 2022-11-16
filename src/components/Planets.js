import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Planet from './Planet';

const fetchPlanets = async (page) => {
    const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
    return await res.json();
  }

export default function Planets() {
    const [page, setPage] = useState(1);
    const { data, status } = useQuery({queryKey:['planets', page], queryFn: () => fetchPlanets(page), staleTime: 10000, cacheTime:300000});    
    // console.log(data);
    
  return (
    <div>
        <h2>Planets</h2>
        <button onClick={() => setPage(prev => Math.max(prev - 1,1))}>Down</button>
        { page }
        <button onClick={() => setPage(prev => !data.next ? prev : prev + 1)}>Up</button>
        {status === 'loading' && <div>Loading data...</div>}
        {status === 'error' && <div>Error fetching the data</div>}
        {status === 'success' && (
            <div>
                {data.results.map(planet => (
                    <Planet planet={planet} key={planet.name}/>
                ))}
            </div>
        )}

        <h2>Planets</h2>
    </div>
  )
}
