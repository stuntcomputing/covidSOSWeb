import React, {useState} from "react";

const usePosition = props => {
    const [position,setPosition] = useState({});
    const [error,setError] = useState(null);

    const onChange = ({coords}) => {
        console.log(coords)
        setPosition({
            latitude: coords.latitude,
            longitude: coords.longitude,
        });
    };

    const onError = (error) => {
        setError(error.message);
    };

    const getPosition = () => {
        const geo = navigator.geolocation;
        if(!geo){
            setError('Geolocation is not supported');
            return;
        }

        geo.getCurrentPosition(onChange,onError);
    };

    return {position, error, getPosition}
}

export default usePosition;
