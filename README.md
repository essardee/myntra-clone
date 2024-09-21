    <header>
        <Link to="/"><img id="logo" src={logo} /></Link>
        <nav className="nav1">
            <a href="" className="men">Men</a>
            <a href="" className="women">Women</a>
            <a href="" className="kids">Kids</a>
            <a href="" className="hnl">Home&nbsp;&&nbsp;Living</a>
            <a href="" className="beauty">Beauty</a>
            <a href="" className="studio">Studio<sup>&nbsp;New&nbsp;</sup></a>
        </nav>
        <span id="search">
            <span className="material-symbols-outlined">search</span>
            <input id="inpp"
            type="text" placeholder="Search for products, brands and more"/>
        </span>
        <nav className="nav2">
            <Link to="" className="ab">
                <img className="navicons" src={propic} />
                Profile
            </Link>
            <Link to="" className="ab">
                <img className="navicons" src={wishli} />
                Wishlist
            </Link>
            <Link to="/bag" className="ab">
                <img className="navicons" src={bag} />
                Bag{{inBag} && <sup className="bagsup">{inBag}</sup>}
            </Link>
        </nav>
    </header>