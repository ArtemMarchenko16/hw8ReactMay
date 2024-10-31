import React from 'react';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={"home"}>home page</Link></li>
                <li><Link to={"users"}>users page</Link></li>
                <li><Link to={"posts"}>posts page</Link></li>
                <li><Link to={"comments"}>comments page</Link></li>
                <li><Link to={"totalPage"}>posts with comments page</Link></li>
            </ul>
        </div>
    );
};

export default Menu;