import NavBar from "./NavBar";
import Stories from "./Stories";

export default function App() {
    return (
        <>
            <NavBar />
            <div class="corpo">
                <div class="esquerda">
                    <Stories/>
                </div>
            </div>
        </>
    )
}

