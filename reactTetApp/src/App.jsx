import myFoto from '/images/Бро.jpg'
import './App.css'
import {CardOne} from "./components/CardOne.jsx";

function App() {

    return (
        <>
            <div>
                <h1>Харин Дмитрий Евгеньевич</h1>
                <img src={myFoto} className="logo" alt="Vite logo"/>
            </div>
            <div className="card">
                <div className="cardNew">
                    <CardOne/>
                    <CardOne/>
                </div>
                <div className="cardNew">
                    <CardOne/>
                    <CardOne/>
                </div>

            </div>
        </>
    )
}

export default App
