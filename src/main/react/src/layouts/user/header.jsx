import { memo } from "react";
import Menu from "../../components/header/Menu";
import Nav from "../../components/header/Nav";

const header = memo(() => {
    return (
        <header id="header">
            <Nav />
            <Menu />
        </header>
    );
});

export default header;