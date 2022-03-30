
function Adopt({pet_name, image, age, breed, location}) {
    return(
        <div className="border-4 border-powder-blue-500">
            <div>
               <img src={image} alt={pet_name} className="w-72 h-72" />
                <h1 className="font-bold text-3xl text-atomic-tangerine-500">{pet_name}</h1>
                <p>{age} | {breed} | {location}</p>
            </div>
        </div>
    );
}

export default Adopt;

