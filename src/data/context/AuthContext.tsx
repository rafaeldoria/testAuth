import User from "@/model/User";
import Cookies from 'js-cookie'
import { createContext, useEffect, useState } from "react";
import config from '../../../tailwind.config';
import Router from "next/router";

interface AuthContextProps {
    user?: User
}

const AuthContext = createContext<AuthContextProps>({})

async function normalizeUser(): Promise<User> {
    return {
        email: 'teste'
    }
}

export function AuthProvider(props: any){
    const [user, setUser] = useState<User>()
    console.log('PROVIDER')

    async function configSession() {
        const user = await normalizeUser()
        console.log('user' + user)
        // const user = {email:'teste'}
        if(user){
            setUser(user)
            return user.email
        }else {
            setUser(undefined)
            return false
        }
    }

    useEffect(() => {
        console.log('EFFECT PROVIDER')
        if(Cookies.get('admin')){
            const ret = configSession()
        }else{
            Router.push('/authentication')
        }
    }, [])

    return (
        <AuthContext.Provider value={{user}}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContext