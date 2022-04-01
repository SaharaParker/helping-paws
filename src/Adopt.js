
function Adopt({pet_name, image, age, breed, location}) {
    return(
        <div className="text-center border-4 border-powder-blue-500">
            <div className="adoptable">
               <img src={image} alt={pet_name} className="md:h-72 md:w-72 p-2 bg-sandwisp-50" />
                <h1 className="font-bold text-3xl text-atomic-tangerine-500">{pet_name}</h1>
                <p>{age} | {breed} | {location}</p>
                <button className="bg-powder-blue-500 hover:bg-foam-500 border-4 border-biscay-500">Apply to Adopt</button>
            </div>
        </div>
    );
}

export default Adopt;

