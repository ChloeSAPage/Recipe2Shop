import styles from "./SiteFooter.module.css";

function SiteFooter() {
    return (
        <div className={styles.wrapper}>
            <p>FAQs</p>
            <p>Pricing</p>
            <p>©ChloePage</p>
        </div>
    );
}

export default SiteFooter;
