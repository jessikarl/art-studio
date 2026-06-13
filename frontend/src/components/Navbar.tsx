export const Navbar = () => {
    return (<>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="/">Camilla Karin Studio</a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className   ="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Gallery</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/category">The Collections</a></li>
                                    <li><a className="dropdown-item" href="/category">Original Paintings</a></li>
                                    <li><a className="dropdown-item" href="/category">Print Editions</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            <li><a className="nav-link" href="/about">The process</a></li>
                            <li><a className="nav-link" href="/about">Contact</a></li>
                        </ul>
                        
                        <form className="d-flex">
                            <a href="/cart" className="btn btn-outline-dark" type="submit">
                                <i className="bi-cart-fill me-1"></i>
                                Cart
                                <span className="badge bg-dark text-white ms-1 rounded-pill">
                                </span>
                            </a>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
};