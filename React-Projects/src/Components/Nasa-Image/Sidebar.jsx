function Sidebar({showSidebar, data}) {
    return (
        <div className="sidebar">
            <div className="bg-overlay"></div>
            <div className="sidebar-content">
            <h2>{data?.title}</h2>

            <div>
                <h3>Description</h3>
                <p>{data?.explanation}</p>
            </div>
            
            </div>

            <button onClick={showSidebar}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    )
}

export default Sidebar;
