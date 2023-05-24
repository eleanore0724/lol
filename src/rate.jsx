import React from "react";
import styles from "./app.module.css";
import { ReactComponent as Iconstar } from './images/icon-star.svg'

function Rate({ count=3, text='haha'}) {
    function Icons() {
        let arr = []
        for (let i = 0; i < count; i++) {
            arr.push(<li><Iconstar /></li>)
        }
        return arr
    }


    return (
        <div className={styles.rate}>
            <ul>
                { Icons()}
            </ul>
            <strong>
                { text } 
            </strong>
        </div>
    );
}
export { Rate };
