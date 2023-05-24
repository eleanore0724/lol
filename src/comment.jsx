import styles from "./app.module.css";
import PictureColton from './images/image-colton.jpg'

function Comment({ namee='someone' , text2 =' We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!'}) {

    return (
        <div className={styles.comment}>
            <header>
                <img
                    className={styles.avatar}
                    src={PictureColton}
                    alt="someone's avatars"
                />

                <div className={styles.user}>
                    <strong>
                        { namee } 
                    </strong>
                    <span>Verified Buyer</span>
                </div>
            </header>
            <p>
                { text2 }
            </p>

        </div>
    );
}
export { Comment };
