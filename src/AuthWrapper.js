import {useMemo, useState} from "react";
import {AuthContext} from "./AuthContext";

export default function AuthWrapper({children}) {
    // https://dmitripavlutin.com/react-context-and-usecontext/
    const [username, setUsername] = useState("");
    const authState = useMemo(
        () => ({username, setUsername}),
        [username]
    );

    function onLogin(name) {
        setUsername((name));
    }

    return (
        <AuthContext.Provider value={authState}>
            {username ? children : <LoginPage onLogin={onLogin}/>}
        </AuthContext.Provider>
    );
}

function LoginPage({onLogin}) {
    const [value, setValue] = useState("");

    function onChange(e) {
        setValue(e.target.value);
    }

    function onClick() {
        if (value) {
            onLogin(value);
        }
    }

    return (
        <div>
            <div>Please log in</div>
            <input onChange={onChange}/>
            <button onClick={onClick}>Log in</button>
        </div>
    );
}
