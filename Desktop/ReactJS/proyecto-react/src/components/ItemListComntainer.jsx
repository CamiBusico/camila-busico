import React from "react";
import Cards from './cards';

const ItemListContainer  = ({slogan} ) => {
    return(
        <div className="container-fluid">

            <h2 className="estiloSlogan">{slogan} </h2>
            <Cards/>
        </div>
    )
}

export default ItemListContainer