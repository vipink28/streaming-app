import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { queryString } from '../features/common/commonSlice';
import { useDispatch } from 'react-redux';

function Navbar(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSearch = (e) => {
        let value = e.target.value;
        if (value.length > 2) {
            dispatch(queryString(value));
            navigate('/search');
        }
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Netflix</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/browse/tv">Tv Shows</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/browse/movie">Movies</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="browsebygenre/movie/28">Browse By Genre</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" onChange={handleSearch} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;