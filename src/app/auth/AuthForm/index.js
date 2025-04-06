"use client"

import { StateObjInput } from "@/app/bestie/[username]/pieces/PieceForm"

const AuthForm = ({endpoint}) => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    return(
        <form>
            <label>
                <span>Username</span>
                <StateObjInput name="username" data={credentials} setData={setCredentials} />
            </label>
            <label>
                <span>Password</span>
                <StateObjInput name="password" data={credentials} setData={setCredentials} />
            </label>
            <label>
                <span>Confirm password</span>
                <StateObjInput name="confirmPassword" data={credentials} setData={setCredentials} />
            </label>
        </form>
    )
}

export default AuthForm