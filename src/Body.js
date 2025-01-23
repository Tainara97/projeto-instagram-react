import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";
import User from "./User";
import Suggestions from "./Suggestions";

export default function Body() {
    return (
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Posts />
            </div>
            <SideBar>
                <User />
                <Suggestions />
            </SideBar>
        </div>
    )
}
