import React, { useState } from "react";
import ItemList from "./ItemList"

const Cart =({initial, stock, onAdd})=>{
    const [cantidad, setRates]=useState(initial)
    const Aumentar =()=>{
        if(cantidad<stock){
        setRates(cantidad+1)
        }
    }
    const Disminuir =()=>{
        if(cantidad>initial){
        setRates(cantidad-1)
        }
    }
    return(
        <div>
            <div className="button">
                <button onClick={Disminuir}>-</button>
                <p className="cantidad">{cantidad}</p>
                <button onClick={Aumentar}>+</button>
            </div>
                <p className="buttonCart">
                    <button onClick={()=>onAdd(cantidad)}>Añadir al Carrito</button>
                </p>
        </div>
    )
}

export default Cart