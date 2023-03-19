import {useContext} from "react";
import {AuthContext} from "./AuthContext";

export default function Header() {
    const {username, setUsername} = useContext(AuthContext);

    function onLogout(e) {
        setUsername(null);
    }

    return (
        <div>
            {username} | <a onClick={onLogout} href="/">Log out</a>
        </div>
    )
}
