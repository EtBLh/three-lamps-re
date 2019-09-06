import React, {useState} from 'react';
import './stores.scss';

let Stores = () => {

    let [storesList, setStoresList] = useState([]);

    /**
     * TODO:
     * fetch data using fetch api
     * create a slider
     */

    return (
        <section id='stores'>
                {storesList.toString()}
        </section>
    )
}

export default Stores;