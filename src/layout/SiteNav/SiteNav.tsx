import { NavLink } from "react-router-dom";
import styles from "./SiteNav.module.css";

function SiteNav() {
    const navLinks = [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
    ];
    return (
        <div className={styles.wrapper}>
            <h4>Recipe2Shop</h4>
            <nav className={styles.links}>
                {navLinks.map((navLink) => (
                    <NavLink
                        key={navLink.url}
                        to={navLink.url}
                        className={({ isActive }) =>
                            `${styles.link} ${isActive ? styles.activeLink : styles.inactiveLink}`
                        }
                    >
                        {navLink.label}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}

export default SiteNav;
