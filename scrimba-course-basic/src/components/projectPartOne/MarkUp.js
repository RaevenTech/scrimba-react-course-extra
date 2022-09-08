import React from "react";
import styles from "../projectPartOne/MarkUp.module.css";

const MarkUp = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src="" alt="logo" />
            </div>
            <h1>Fun facts about React</h1>
            <ul className={styles.list}>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps.
                </li>
            </ul>
        </div>
    );
};

export default MarkUp;
