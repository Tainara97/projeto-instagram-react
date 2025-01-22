import NavBar from "./NavBar";
import Stories from "./Stories";
import Posts from "./Posts";

export default function App() {
    return (
        <>
            <NavBar />
            <div class="corpo">
                <div class="esquerda">
                    <Stories/>
                    <Posts/>
                </div>
            </div>
        </>
    )
}

