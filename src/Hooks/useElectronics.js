import { useEffect, useState } from "react";

const useElectronics = () => {
    const [electronics, setElectronics] = useState([]);
    useEffect(() => {
        fetch("https://fast-dawn-06225.herokuapp.com/product")
            .then((res) => res.json())
            .then((data) => setElectronics(data));
    }, []);
    return [electronics, setElectronics];
};

export default useElectronics;
