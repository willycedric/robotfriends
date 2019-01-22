import React from 'react';

//Receiving the props and destructuring the object
const Card = ({name, email, id}) => {  
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div id={name.toLowerCase().replace(/\s/g,'')+'-'+id}>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;