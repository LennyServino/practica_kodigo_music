import React from 'react'
import styles from '../styles/CardPlaylist.module.css'

export default function Card_Playlist() {
    const imageUrls = [
        'https://images.tidal.com/0/EIAFGIAF/CAEQCiICNDIqByNBOEY3QzIwBQ?token=90f05907a7604adc36432bef666ef43b1de2348c',
        'https://images.tidal.com/0/EIAFGIAF/CAEQCiICNDIqByNBOEY3QzIwBQ?token=90f05907a7604adc36432bef666ef43b1de2348c',
        'https://images.tidal.com/0/EIAFGIAF/CAEQCiICNDIqByNBOEY3QzIwBQ?token=90f05907a7604adc36432bef666ef43b1de2348c',
        'https://images.tidal.com/0/EIAFGIAF/CAEQCiICNDIqByNBOEY3QzIwBQ?token=90f05907a7604adc36432bef666ef43b1de2348c',
        'https://images.tidal.com/0/EIAFGIAF/CAEQCiICNDIqByNBOEY3QzIwBQ?token=90f05907a7604adc36432bef666ef43b1de2348c',
        'https://images.tidal.com/0/EIAFGIAF/CAEQCiICNDIqByNBOEY3QzIwBQ?token=90f05907a7604adc36432bef666ef43b1de2348c',
    ];

    const renderCards = () => {
        return imageUrls.map((url, index) => (
            <div
                key={index}
                className={styles.card}
                style={{ backgroundImage: `url(${url})` }}
            >
                <h3>Card {index + 1}</h3>
                <p>Por mi</p>
            </div>
        ));
    };

    return (
        <div className={styles.cardContainer}>
            {renderCards()}
        </div>
    );
}