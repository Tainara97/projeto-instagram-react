import Body from "./Body";
import NavBar from "./NavBar";
import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";
import User from "./User";
import Suggestions from "./Suggestions";


export default function App() {
    return (
        <>
            <NavBar />
            <Body>
                <div className="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <SideBar>
                    <User />
                    <Suggestions />
                </SideBar>
            </Body>

        </>
    )
}

