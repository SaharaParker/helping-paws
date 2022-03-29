import Adopt from "./Adopt.js";

function Animals() {
    const adoptAnimals = [
        {
            id: 2,
            created_at: "2022-03-22T22:28:08+00:00",
            pet_name: "Chester",
            age: "Young",
            breed: "Domestic Longhair",
            location: "Shelter C",
            image: "https://i.imgur.com/pkAmRra.jpg"
        },
        {
            id: 3,
            created_at: "2022-03-22T22:30:41+00:00",
            pet_name: "Courage",
            age: "Adult",
            breed: "Husky",
            location: "Shelter A",
            image: "https://i.imgur.com/TSH8DiG.jpg"
        },
        {
            id: 4,
            created_at: "2022-03-22T22:31:41+00:00",
            pet_name: "Dutchess",
            age: "Puppy",
            breed: "Husky & Shiba Inu Mix",
            location: "Shelter A",
            image: "https://i.imgur.com/MV3L9OS.jpg"
        },
        {
            id: 5,
            created_at: "2022-03-22T22:33:12+00:00",
            pet_name: "Hank",
            age: "Puppy",
            breed: "Husky & Collie Mix",
            location: "Shelter B",
            image: "https://i.imgur.com/OgxlgLr.jpg"
        },
        {
            id: 1,
            created_at: "2022-03-22T19:57:01+00:00",
            pet_name: "Athena",
            age: "Puppy",
            breed: " Australian Shepherd Mix ",
            location: "Shelter B",
            image: "https://i.imgur.com/q3k2YMs.jpg"
        },
        {
            id: 6,
            created_at: "2022-03-22T22:34:15+00:00",
            pet_name: "Mocha",
            age: "Adult",
            breed: "Ragdoll Mix",
            location: "Shelter A",
            image: "https://i.imgur.com/f5izjeD.jpg"
        },
        {
            id: 7,
            created_at: "2022-03-22T22:35:06+00:00",
            pet_name: "Nappers",
            age: "Senior",
            breed: "Abyssinian",
            location: "Shelter C",
            image: "https://i.imgur.com/u94R1Aa.jpg"
        },
        {
            id: 8,
            created_at: "2022-03-22T22:35:50+00:00",
            pet_name: "Ronan",
            age: "Adult",
            breed: "Saluki",
            location: "Shelter B",
            image: "https://i.imgur.com/T6dRPAD.jpg"
        },
        {
            id: 9,
            created_at: "2022-03-22T22:36:56+00:00",
            pet_name: "Sammy",
            age: "Puppy",
            breed: " Australian Shepherd & Pit Bull Terrier Mix ",
            location: "Shelter C",
            image: "https://i.imgur.com/majbrmO.jpg"
        },
        {
            id: 10,
            created_at: "2022-03-22T22:37:56+00:00",
            pet_name: "Smidge",
            age: "Kitten",
            breed: "Domestic Shorthair",
            location: "Shelter C",
            image: "https://i.imgur.com/7Y9MnSR.jpg"
        },
        {
            id: 11,
            created_at: "2022-03-22T22:39:07+00:00",
            pet_name: "Sno",
            age: "Adult",
            breed: "Ragdoll Mix",
            location: "Shelter A",
            image: "https://i.imgur.com/60aN700.jpg"
        },
        {
            id: 12,
            created_at: "2022-03-22T22:40:13+00:00",
            pet_name: "Waffles",
            age: "Kitten",
            breed: "Maine Coon Mix",
            location: "Shelter A",
            image: "https://i.imgur.com/Kgdgqyn.jpg"
        }
    ];
    return (
        <div>
            {adoptAnimals.map((adopt) => (
                <Adopt key={adopt.id} image={adopt.image} pet_name={adopt.pet_name} breed={adopt.breed} age={adopt.age} location={adopt.location} />
            ))}
        </div>
    );
}

export default Animals;