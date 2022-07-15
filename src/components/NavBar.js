import React from "react";
import CartWidget from "./CartWidget";
import ProductosEjemplo from "./ItemListContainer"

function NavBar() {
    return (
        <div>
            <ul className="navBar">
                <li><h3 className="logo">Todo Computación!</h3></li>
                <li><a href="#" className="a">Procesadores</a></li>
                <li><a href="#" className="a">Motherboards</a></li>
                <li><a href="#" className="a">Memorias Ram</a></li>
                <li><a href="#" className="a">GPU</a></li>
                <li><a href="#" className="a cart"><CartWidget /></a></li>
            </ul>
        </div>
        
        
    )
    
};
export default NavBar;
