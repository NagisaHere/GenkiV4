'use client'

import Container from "../Container";
import Logo from "./Logo";
import UserMenu from "./UserMenu";

// gap is used to control spacing between flex elements. gap-3 == 0.75 rem
const Navbar = () => {
    return(
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div
                        className="
                            flex
                            flex-row
                            items-center
                            justify-between
                            gap-3
                            md:gap-0"
                    >
                        <Logo/>
                        <UserMenu/>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar