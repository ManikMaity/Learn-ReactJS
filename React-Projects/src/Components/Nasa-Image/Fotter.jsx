


function Fotter({showsidebar, data}) {
    return (
        <footer>
            <div className="bg-gradient"></div>
            <div>
                <h2>{data?.title}</h2>
            </div>
            <button onClick={showsidebar}>
                <i className="fa-solid fa-info"></i>
            </button>
        </footer>
    )
}

export default Fotter;
