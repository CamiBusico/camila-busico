import './App.css';
import React from "react";
import Header from './components/header';
import ItemListContainer from './components/ItemListComntainer';
import Footer from './components/footer';

function App() {
        return (
          <div>
            <body className='body'>
            
                <Header/>
                <ItemListContainer slogan={"Más que una IPA"} />
                <Footer legal={"Producto exclusivo para mayores de 18 años"} />
            </body>
          </div>
        
        )
}

export default App;