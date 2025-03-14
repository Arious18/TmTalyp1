import React from 'react';

export const StarryBackground = () => {
    return (
        <div className="starry-background">
            {[...Array(100)].map((_, i) => (
                <div
                    key={i}
                    className="star"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 5 + 3}s`
                    }}
                />
            ))}
        </div>
    );
};