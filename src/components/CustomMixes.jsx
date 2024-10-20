import React from 'react'
import styles from '../styles/CustomMixes.module.css'

export default function CustomMixes() {
    //crear un array con los nombres de las listas
    const mixNames = [
        {
            name: "Mix 1",
            image: "https://res.cloudinary.com/ddnkevlzw/image/upload/v1729403885/Linkin_Park_From_Zero_xs1khd.png",
            origin: "Kodigo Music"
        },
        {
            name: "Mix 2",
            image: "https://res.cloudinary.com/ddnkevlzw/image/upload/v1729403884/zedd_clarity_fmwkkp.jpg",
            origin: "Kodigo Music"
        },
        {
            name: "Mix 3",
            image: "https://res.cloudinary.com/ddnkevlzw/image/upload/v1729403884/David_Guetta_rivnfn.jpg",
            origin: "Kodigo Music"
        },
        {
            name: "Mix 4",
            image: "https://res.cloudinary.com/ddnkevlzw/image/upload/v1729403884/armin_van_buuren_igx5mz.jpg",
            origin: "Kodigo Music"
        },
        {
            name: "Mix 5",
            image: "https://res.cloudinary.com/ddnkevlzw/image/upload/v1729403884/Showtek_blue_360_m0hwwk.jpg",
            origin: "Kodigo Music"
        },
        {
            name: "Mix 6",
            image: "https://res.cloudinary.com/ddnkevlzw/image/upload/v1729403884/rebels_never_die_uvllta.jpg",
            origin: "Kodigo Music"
        },
    ];

    const renderMixes = () => {
        return mixNames.map((mix, index) => {
            console.log(mix);
            
            return (
                <div key={index} className={styles.card_mix}>
                    <div className={styles.card_header}>
                        <img src={mix.image} alt={`mix ${index}`} />
                        <p>My {mix.name}</p>
                    </div>
                    <div className={styles.card_body}>
                        <h3>{mix.name}</h3>
                        <p>{mix.origin}</p>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className={styles.content_container}>
            <h1>Mixes Personalizados</h1>
            <div className={styles.mixes_container}>
                {renderMixes()}
            </div>
        </div>
    )
}
