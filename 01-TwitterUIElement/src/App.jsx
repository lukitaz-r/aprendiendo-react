import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

function App() {
    return (
        <>
            <h1>Twitter  UI Element: A Quién Seguir</h1>
            <p>(Basado en una tarjeta real)</p>
            <div id="card">
                <div id="card__header">
                    <h2>A quién seguir</h2>
                </div>
                <div id="card__content">
                    <TwitterFollowCard
                        username="lukitaz_r"
                        name="Lukita"
                    />
                    <TwitterFollowCard
                        username="midudev"
                        name="Miguel Ángel Durán"
                        isVerified
                    />
                    <TwitterFollowCard
                        username="riverplate"
                        name="River Plate"
                        isVerified
                    />
                </div>
                <div id="card__footer">
                    <a href="#">Monstrar más</a>
                </div>
            </div>
        </>
    );
}

export default App;
