import styles from "./SignUp.module.css";

function SignUp() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <form className={styles.form}>
                    <input
                        className={styles.input}
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <button type="button">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
