
const SingleCard = ({ singleBox }) => {
    const { id, title, image, credit, price, description } = singleBox;
    return (
        <div className="bg-white p-4 rounded-xl">
            <img src={image} alt="" />
            <h2 className="text-lg font-semibold text-[#1C1B1B] mt-4 mb-3">{title}</h2>
            <p className="text-sm text-[#1C1B1B99] font-normal mb-4">{description}</p>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#1C1B1B99] text-lg font-medium"><span className='text-2xl'>$</span> Price: <span>{price}</span></h3>
                <h4 className="text-[#1C1B1B99] text-lg font-medium pr-2"> Credit: <span>{credit}</span>hr</h4>
            </div>
            <button className="bg-[#2F80ED] px-28 py-2 rounded-lg text-white">Select</button>
        </div>
    );
};

export default SingleCard;