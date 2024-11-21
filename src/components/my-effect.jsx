import { useEffect, useState } from "react";

const MyEffect = () => {
    const catBreeds = ['abys', 'aege', 'abob', 'acur', 'bali', 'beng'];

    const [loading, SetLoading] = useState(true);
    const [data, setData] = useState([]);
    const [isActive, setIsActive] = useState('abys')

    const catApi = async (breed=catBreeds[0], activeBtn=catBreeds[0]) => {
        let url = `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breed}&api_key=live_AiiApEZit3tHIdnaiMsfOwkGeet2RbcJanUkrVFofUx1Cz1I0umD5aUKe26Q0945`
        console.log('Debut de la requete');
        setIsActive(activeBtn);
        SetLoading(true);
        try {
            const catBreed = await fetch(url);
            const data = await catBreed.json()
            console.log(data);
            setData(data);
        } catch (error) {
            console.error(error);
        } finally {
            console.log('Fin de la requete');
            SetLoading(false);
        }
    }

    useEffect(() => {

        catApi();
    }, [])

    return <>
        {/* {loading && <div className="loader"></div>} */}
        <div className="breed-container">
            {catBreeds.map((breed, index) => (
                <button className={`${isActive==breed && "active"}`} key={index} onClick={() => catApi(`${breed}`,`${breed}`)} >{breed}</button>
            ))}
        </div>
        <div className="cat-container">
            {loading ? <div className="loader"></div>
                : (
                    data.map((item, index) => (
                        <img className="cat-image" key={index} src={item.url} alt={`image ${index}`} />
                    ))
                )
            }

        </div>
    </>

}

export default MyEffect;