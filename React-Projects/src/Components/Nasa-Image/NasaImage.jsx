import Fotter from './Fotter.jsx';
import NasaImageMain from './NasaImageMain.jsx';
import Sidebar from './Sidebar.jsx';
import './NasaImage.css'
import { useEffect, useState } from 'react';

function NasaImage() {

    const [showSidebar, setShowSideBar] = useState(false);
    const [data, setData] = useState(null);


    useEffect(() => {
        async function fetchAPIData (){
            const nasaAPI = import.meta.env.VITE_NASA_API_KEY;
            const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${nasaAPI}`;
            const today = new Date().toLocaleDateString();
            const localKey = `NASA-${today}`;
            if (localStorage.getItem(localKey)){
                const apiData = JSON.parse(localStorage.getItem(localKey));
                setData(apiData);
                console.log("Found");
                return;
            }
            localStorage.clear();

            try{
                const response = await fetch(url);
                const apiData = await response.json();
                setData(apiData);
                localStorage.setItem(localKey, JSON.stringify(apiData))
                console.log("Set to lS");

            }
            catch(err){
                console.error(err);
            }

        }

        fetchAPIData();
    }, [])


    function showSidebarfnc (){
        setShowSideBar(!showSidebar);
    }

    function closeSideBarfnc (){
        setShowSideBar(false);
    }


    return (
        <>
        {data ? <NasaImageMain showSidebar={closeSideBarfnc} data={data}/> : <div className='loadingState'>
        <i className="fa-solid fa-gear"></i>
            </div>}
        {showSidebar && <Sidebar showSidebar={showSidebarfnc} data={data}/>}
        {data && <Fotter showsidebar={showSidebarfnc} data={data}/>}
        </>
    )
}

export default NasaImage;
