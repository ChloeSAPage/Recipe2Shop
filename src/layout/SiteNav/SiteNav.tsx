import { NavLink, useNavigate } from "react-router-dom";
import styles from "./SiteNav.module.css";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

function SiteNav() {
    const navLinks = [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Recipes", url: "/recipes" },
    ];

    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    function handleClick() {
        setOpen(!open);
    }

    function onClick() {
        navigate("/signup")
    }

    return (
        <div className={styles.wrapper}>
            <h3>Recipe2Shop</h3>
            <nav
                className={
                    open ? `${styles.navMenu} ${styles.active}` : styles.navMenu
                }
            >
                {navLinks.map((navLink) => (
                    <NavLink
                        key={navLink.url}
                        to={navLink.url}
                        className={({ isActive }) =>
                            isActive ? styles.activeLink : styles.inactiveLink
                        }
                    >
                        {navLink.label}
                    </NavLink>
                ))}
                <button className={styles.button} onClick={() => onClick()}>Sign Up</button>
            </nav>
            <div className={styles.hamburger} onClick={handleClick}>
                {open ? (
                    <FaTimes size={40} style={{ color: "black" }} />
                ) : (
                    <HiMenu size={40} style={{ color: "black" }} />
                )}
            </div>
        </div>
    );
}

export default SiteNav;
