import React from 'react';
import Card from './Card';
const CardList = ({ robots }) => {    
    return (
        <div>
            {
                robots.map(({ id, name, email }) => {
                    return (
                        <Card
                            id={id}
                            name={name}
                            email={email}
                            key={id} />
                    );
                })
            }

        </div>
    );
}

export default CardList;