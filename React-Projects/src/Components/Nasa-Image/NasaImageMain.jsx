
function NasaImageMain({showSidebar, data}) {
    return (
        <div className="image-container" onClick={showSidebar}>
            <img className="nasa-image" src={data?.url} alt="" />
        </div>
    )
}

export default NasaImageMain;
