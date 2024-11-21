import { useState } from "react";

const ProgressBar = () => {

    const [progressValue, setProgressValue] = useState(30);

    const handleChange = (e) => {
        setProgressValue(e.target.value)
        console.log(e.target.value);
    }

    return (
        <div>
            <input type="range" value={progressValue} min={0} max={100} onChange={handleChange} />
            <span>${progressValue}</span>
        </div>
    )
}

export default ProgressBar;