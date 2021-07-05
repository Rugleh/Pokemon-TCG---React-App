import React from 'react'
import './CardGridItem.scss'

export const CardGridItem = ( {id, name, url} ) => {

    return (
        <div className="col-md-3">
            <div className="tcg-card pb-4" key={name}>
                <img className="w-100" src={url} alt={name} />
            </div>
        </div>
    )
}
