import  { useEffect, useState } from 'react'

export function LocalStorageData(key, defaultValue) {

    const [value, setValue] = useState(() => {
        let currenetValue;

        try {
            currenetValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));

        } catch (error) {
            console.log(error);
            currenetValue = defaultValue;
        }
        return currenetValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])

    return [value, setValue];
}
