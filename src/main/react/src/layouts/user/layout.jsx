import { Outlet } from "react-router-dom";
import Header from "./header";

const layout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default layout;