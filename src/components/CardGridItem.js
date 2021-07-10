import React from 'react'
import './CardGridItem.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const CardGridItem = ( {id, name, url} ) => {

    return (
        <div className="col-md-3">
            <div className="tcg-card pb-4" key={name}>
                <LazyLoadImage
                className="w-100"
                effect="blur"
                src={url} alt={name}
                />
            </div>
        </div>
    )
}
