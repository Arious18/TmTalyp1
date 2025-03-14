import React from 'react';
import './CardsGrid.css';
import image1 from'../../../public/hero-image.jpg';

const cardsData = [
    {
        id: 1,
        image: image1,
        title: 'Card Title 1',
        description: 'This is a sample description for card 1. Tailored for responsive designs using Tailwind CSS.'
    },
    {
        id: 2,
        image: image1,
        title: 'Card Title 2',
        description: 'This is a sample description for card 2. The card adjusts well across different screen sizes.'
    },
    {
        id: 3,
        image:image1,
        title: 'Card Title 3',
        description: 'This is a sample description for card 3. Styled using Tailwind CSS for an elegant look.'
    },
    {
        id: 4,
        image: image1,
        title: 'Card Title 4',
        description: 'This is a sample description for card 4. Flexbox ensures the layout remains clean and organized.'
    },
    {
        id: 5,
        image: image1,
        title: 'Card Title 5',
        description: 'This is a sample description for card 5. Mobile-first design approach for better responsiveness.'
    },
    {
        id: 6,
        image: image1,
        title: 'Card Title 6',
        description: 'This is a sample description for card 6. Built with hardcoded HTML and Tailwind CSS classes.'
    },
    {
        id: 7,
        image: image1,
        title: 'Card Title 7',
        description: 'This is a sample description for card 7. Built with hardcoded HTML and Tailwind CSS classes.'
    },
    {
        id: 8,
        image: image1,
        title: 'Card Title 8',
        description: 'This is a sample description for card 8. Built with hardcoded HTML and Tailwind CSS classes.'
    },
    {
        id: 10,
        image: image1,
        title: 'Card Title 8',
        description: 'This is a sample description for card 8. Built with hardcoded HTML and Tailwind CSS classes.'
    },
    {
        id: 9,
        image: image1,
        title: 'Card Title 8',
        description: 'This is a sample description for card 8. Built with hardcoded HTML and Tailwind CSS classes.'
    }
];

function CardsList() {
    return (
        <div className="cg-cards-list-container">
            <header className="cg-cards-header">
                <div className="cg-header-content">
                    <h1 className="cg-main-title">In mesgur universitetler</h1>
                    <button className="cg-see-more-btn">See More</button>
                </div>
            </header>

            <div className="cg-component-container">
                <h2 className="cg-section-title">Featured Components</h2>
                <div className="cg-cards-grid">
                    {cardsData.map(card => (
                        <div key={card.id} className="cg-card">
                            <img src={card.image} alt={card.title} className="cg-card-image" />
                            <div className="cg-card-content">
                                <h3 className="cg-card-title">{card.title}</h3>
                                <p className="cg-card-description">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardsList;
