import LoginPageComponent from "@/components/login/loginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Login',
    description: 'Overview',
};
const LoginPage: React.FC = () => {
    return (<LoginPageComponent />)
};

export default LoginPage;
