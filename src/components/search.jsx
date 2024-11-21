import { useState } from "react";

const Search = () => {
    const nomsPrenoms = [
        "Alice Dupont",
        "Benoît Martin",
        "Camille Leroy",
        "David Moreau",
        "Émilie Bernard",
        "François Petit",
        "Géraldine Lefèvre",
        "Hugo Gauthier",
        "Isabelle Renault",
        "Julien Lambert",
        "Katherine Faure",
        "Laurent Caron",
        "Mélanie Roux",
        "Nicolas Fournier",
        "Océane Blanchard",
        "Pierre Dubois",
        "Quentin Chevalier",
        "Sophie Barbier",
        "Thomas Michel",
        "Valérie Simon"
    ];

    const [searchWord, setSearchWord] = useState("");
    const result = nomsPrenoms.filter((nomPrenom)=>nomPrenom.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()))

    return (
        <div className="search-box">
            <div className="search-input-box">
                <input onChange={(e)=>setSearchWord(e.target.value)} type="text" placeholder="Search name here..." />
            </div>
            <div className="search-list-box">
                <ul className="search-list">
                    {result.map((nomPrenom, index) => (
                        <li key={index} className={index % 2 == 0 ? "search-list-item-1" : "search-list-item-2"}>{nomPrenom}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Search;