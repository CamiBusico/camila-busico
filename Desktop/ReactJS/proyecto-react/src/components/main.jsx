const Main  = () => {

    const agregar = () => {alert("Has añadido el producto al carrito")}
    let estiloBotones = {backgroundColor: "var(--colorTres)",
                        color:"var(--colorCuatro)",
                        border: "black",
                         }

    let estiloCards = {width:"18rem",
                        margin:"2%", 
                        backgroundColor:"var(--colorCinco)", 
                        color:"white"

                    }

    return(

        <div className="main"> 
            <h1>Descrubí la mejor cerveza artesanal</h1>

            <div className="cardsCervezas">
                         <div className="card" style={estiloCards}>
                            <img src={"images/fotos-birras/dobleipafoto.png"} className="card-img-top" alt="..."/>
                            <div className="card-body" >
                                <h5 className="card-title">Doble IPA Catedral</h5>
                                <p className="card-text">La especialidad de la casa. Fuerte e intensamente lupulada, pero limpia y seca, sin asperezas.</p>
                                <a href="#" className="btn btn-primary" onClick={agregar} style={estiloBotones}>Añadir</a>
                            </div>
                         </div>

                         <div className="card" style={estiloCards}>
                            <img src={"images/fotos-birras/ipafoto.png"} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">American IPA Leñas</h5>
                                <p className="card-text">Cerveza lupulada y amarga, moderadamente fuerte. Perfil limpio y final seco.</p>
                                <a href="#" className="btn btn-primary" onClick={agregar} style={estiloBotones} >Añadir</a>
                            </div>
                         </div>

                         <div className="card" style={estiloCards}>
                            <img src={"images/fotos-birras/goldenfoto.png"} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Golden Ale Castor</h5>
                                <p className="card-text">Es ligera, de carácter maltoso dulce, con poca presencia del lúpulo en el que tendrá básicamente caracteres frutales. No es demasiado amarga.</p>
                                <a href="#" className="btn btn-primary" onClick={agregar} style={estiloBotones} >Añadir</a>
                            </div>
                         </div>

                         <div className="card" style={estiloCards}>
                            <img src={"images/fotos-birras/blondealefoto.png"} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Blonde Ale Caviahue</h5>
                                <p className="card-text">Fácil de beber y accesible, con interesantes notas a fruta, lúpulo o carácter de malta. Bien balanceada y limpia, es una pinta refrescante sin sabores agresivos. Amargor medio, balanceando al alcohol.  </p>
                                <a href="#" className="btn btn-primary" onClick={agregar} style={estiloBotones} >Añadir</a>
                            </div>
                         </div>

                         <div className="card" style={estiloCards}>
                            <img src={"images/fotos-birras/scottishheavyfoto.png"} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Scottish Heavy Chapelco</h5>
                                <p className="card-text">Cerveza tostada y acaramelada. De cuerpo medio, Los lúpulos sólo son utilizados para balancear y apoyar la malta. </p>
                                <a href="#" className="btn btn-primary" onClick={agregar} style={estiloBotones}>Añadir</a>
                            </div>
                         </div>

                         <div className="card" style={estiloCards}>
                            <img src={"images/fotos-birras/negrafoto.png"} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">American Porter Bayo</h5>
                                <p className="card-text">Maltosa, oscura y sustancial, con carácter complejo y lleno de sabor a malta oscura. 
                                                            Su sabor moderado a pan, bizcocho y malta tostada incluye una sensación torrefacta entre suave y moderada, con reminiscencias al chocolate, y también con un carácter de caramelo, nuez y toffee. </p>
                                <a href="#" className="btn btn-primary" onClick={agregar} style={estiloBotones}>Añadir</a>
                            </div>
                         </div>
             </div>
        
        </div>
    )
}

export default Main