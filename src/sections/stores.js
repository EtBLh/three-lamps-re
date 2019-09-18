import React, {useState, useEffect} from 'react';
import './stores.scss';
import Store from '../components/store';
import scrollConverter from '@bchteam/scroll-converter'

let Stores = () => {

    let [storesList, setStoresList] = useState([]);

    useEffect(() => {
        let el = document.querySelector('#stores')
        window.addEventListener('wheel', ev => {
            if (window.scrollY > el.scrollTop){
                console.log(ev.deltaY);
                el.scrollLeft+=ev.deltaY;

            }

                // if (ev.deltaY < 0)
                // {
                // document.getElementById('status').textContent= 'scrolling up';
                // }
                // else if (ev.deltaY > 0)
                // {
                // console.log('scrolling down');
                // document.getElementById('status').textContent= 'scrolling down';
                // }
        })    
    })

    /**
     * TODO:
     * create a slider
     */

    let fetchAPI = () => {
        fetch('https://mobile-web-design-skill-competition.netlify.com/shops.json')
            .then(res => res.json())
            .then(data => {
                setStoresList(data);
        })
        .catch(e => console.log('Error:', e))
    }

    fetchAPI();

    return (
        <section id='stores'>
            {storesList.forEach(val => 
                <Store info={val}/>
            )}
        </section>
    )
}

export default Stores;