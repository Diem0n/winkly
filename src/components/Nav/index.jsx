const Nav = ({handler , downloadData , enableDownload})=>{
    return (
        <nav>
            <h1 className="logo">
                Winkly
            </h1>
            <div className="controls">
            <button onClick={handler} className="btnPrimary">
                Add
            </button>
            {enableDownload && <button onClick={downloadData} className="btnDownload">
                Download Data
            </button>}
            </div>
        </nav>
    )
}

export default Nav;