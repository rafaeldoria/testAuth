import useAuthData from "@/data/hook/userAuthData";
import Head from "next/head";
import Router from "next/router";

export default function AuthValidation(props: any) {
    const { user } = useAuthData()
    console.log('VALIDATION')

    function renderContent() {
            return (
                <>
                   
                    {props.children}
                </>
            )
    }

    console.log(user)
    if(user?.email) {
        return renderContent()
    }else {
        Router.push('/authentication')
        return <h1>LOGIN</h1>
    }
};
