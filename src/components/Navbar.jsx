const Navbar = () =>{
    return(
        <header>
            <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl" href="/img-studio">Image Studio</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a href="/img-studio/upscale">Upscale</a></li>
                <li><a href="/img-studio/bgremove">Background removal</a></li>
                </ul>
            </div>
            </div>
        </header>
    )
}


export default Navbar