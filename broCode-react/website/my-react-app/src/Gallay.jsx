function getImageUrl(imageId, size = "s") {
    return "https://i.imgur.com/" + imageId + size + ".jpg";
}

// eslint-disable-next-line react/prop-types
function Profile({name = "Manik Maity",imageID = "",profession = "",awards = [],discovered = "",
}) {
    return (
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src={getImageUrl(imageID)}
                alt={name}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>Awards: {awards.length} </b>({awards.join(", ")})
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovered}
                </li>
            </ul>
        </section>
    );
}

export default function Gallery() {
    const data = [
        {
            name: "Maria Skłodowska-Curie",
            imageID: "szV5sdG",
            profession: "physicist and chemist",
            awards: [
                "Nobel Prize in Physics",
                "Nobel Prize in Chemistry",
                "Davy Medal",
                "Matteucci Medal",
            ],
            discovered: "polonium (chemical element)",
        },
        {
            name: "Katsuko Saruhashi",
            imageID: "YfeOqp2",
            profession: "geochemist",
            awards: [
                "Miyake Prize for geochemistry", "Tanaka Prize"
            ],
            discovered: "a method for measuring carbon dioxide in seawater",
        },
    ];
    
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile {...data[0]} />
            <Profile {...data[1]} />
        </div>
    );
}
