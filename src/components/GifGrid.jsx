import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category );
    
    return (
        <>
            {isLoading&&(<h2>Cargando...</h2>)}
            <div>
                <h3>{category}</h3>
                <div className='card-grid'>
                    {
                        images.map((images) => 
                            <GifGridItem 
                                key={images.id} 
                                {...images}/>
                        )
                    }
                </div>
            </div>
        </>
    )
}
