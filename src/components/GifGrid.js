import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'; 

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <div className='card-grid'>
            <h3>{category}</h3>

            { loading && <p className='animate__animated animate__flash'>Cargando...</p> }

            {
                images.map(img => {
                    return (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                })
            }
        </div>
    )
}
