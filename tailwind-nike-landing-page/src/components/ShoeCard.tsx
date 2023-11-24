import React from 'react';


const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {
const handleClick = () => {
    if(bigShoeImage !== imgURL.bigShoe) {
        changeBigShoeImage(imgURL.bigShoe)
    }
}
    return (
        <div className={`
        border - 2 rounded-xl cursor-pointer max-sm:flex-1
            ${bigShoeImage === imgURL
                ? 'border-coral-red'
                : 'border-transparent'}
                `} onClick={handleClick}>
            ShoeCard
        </div>
    );
};

export default ShoeCard;