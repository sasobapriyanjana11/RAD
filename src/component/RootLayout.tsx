import {Navigation} from "./Navigation.tsx";
import {Outlet} from "react-router";

export const RootLayout = () => {
    return (
        <>
            <Navigation/>
            <Outlet>

            </Outlet>
        </>
    );
};