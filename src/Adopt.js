

function Adopt() {
    return(
        <div>
            <div>
                <h2 className="text-2xl font-bold text-atomic-tangerine-500">Adoptable Animals</h2>
            </div>
            <div>
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>{age}</p>
            </div>
        </div>
    );
}

export default Adopt;

