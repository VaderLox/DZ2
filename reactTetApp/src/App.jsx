import myFoto from '/images/Бро.jpg'
import './App.css'
import {CardOne} from "./components/CardOne.jsx";
import {CardTwo} from "./components/CardTwo.jsx";
import {CardThree} from "./components/CardThree.jsx";
import {CardFour} from "./components/CardFour.jsx";
import {CardNewOne} from "./components/CardNewOne.jsx";

function App() {

    return (
        <>
            <div>
                <h1>Харин Дмитрий Евгеньевич</h1>
                <img src={myFoto} className="logo" alt="Vite logo"/>
            </div>
            <h2>Мои компетенции</h2>
            <div className="card">
                <div>
                    <CardOne/>
                    <CardTwo/>
                </div>
                <div>
                    <CardThree/>
                    <CardFour/>
                </div>

            </div>
            <h2>Плановое изучение</h2>
                <CardNewOne/>
        </>
    )
}

export default App
