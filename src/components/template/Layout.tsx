import AuthValidation from "../auth/AuthValidation"

interface LayoutProps {
    children?: any
    title: string
}

export default function Layout(props: LayoutProps) {
    return (
        <AuthValidation>
            <div>
                {props.title}
                {props.children}
            </div>
        </AuthValidation>
    )
};
