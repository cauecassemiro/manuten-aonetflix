import React from 'react';
import './FeaturedMovie.css';

export default ({item}) => {
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(filme.show.image.original${item.backdrop_path})`
        }}>
            <div>{item.origal.name}</div>
        </section>
    );
}