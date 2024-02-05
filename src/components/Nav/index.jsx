const Nav = ({handler})=>{
    return (
        <nav>
            <h1 className="logo">
                Winkly
            </h1>
            <button onClick={handler} className="btnPrimary">
                Add
            </button>
        </nav>
    )
}

export default Nav;