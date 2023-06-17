import React from 'react';


function NavBar() {
    return (
        <div>
            <button className="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <i className="fas fa-bars"></i>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    {/* <h5 id="offcanvasRightLabel">MENU</h5> */}
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/signup">SignUp</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/listing">Listing</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default NavBar