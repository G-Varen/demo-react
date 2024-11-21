import { useEffect, useState } from "react";

const RandomImg = () => {

    const [count, setCount] = useState(10);
    const [imgLinks, setImgLinks] = useState(() => Array.from({ length: 10 }, (_, i) => `https://picsum.photos/200/300?random=${i + 1}`));

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

            if (clientHeight + scrollTop >= scrollHeight-5 ) {
                const newTab = Array.from({ length: 10 }, (_, i) => {
                    const link = `https://picsum.photos/200/300?random=${Math.floor(Math.random()*(500+1))}`
                    setCount(count + 1);
                    console.log('count', count);                    
                    return link;
                })
                
                setImgLinks([...imgLinks,...newTab]);
                console.log(imgLinks)
            }

        })
    }, [count])

    return (
        <>
            <h1>Random Images</h1>
            <div className="container-images">
                {
                    imgLinks.map((item, index) => (
                        <img key={index} src={item} alt={`image ${index}`} />
                    ))
                }
            </div>
        </>
    )

}

export default RandomImg;