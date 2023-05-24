import React from "react";
import styles from "./app.module.css";
import { ReactComponent as Iconstar } from './images/icon-star.svg'
import PictureColton from './images/image-colton.jpg'
import { Title } from "./title";
import { Description } from "./description";
import { Rate } from "./rate"
import { Comment } from "./comment"

/*
- header
  -title
  -desctption
-list of Rate Card
-list of Comment
*/
/*
-header
  -avatar
  -username
  -verified
-comment

console.log(PictureColton); 他是base64的URL，下去放去image tag
*/


function App() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Title />
        <Description />
        <ul className={styles.list}>
          <li>
            <Rate count={4} text ={'elea'}/>
          </li>
          <li>
            <Rate count={100} text ={'no~~~~~'}/>
          </li>
          <li>
            <Rate />
          </li>
        </ul>

        <ul className={styles.list}>
          <li>
            <Comment namee={'eleanore'} text2={'auto auto auto auto auto auto auto'}/>
          </li>
          <li>
            <Comment namee={'AAA'} text2={'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'}/>
          </li>
          <li>
            <Comment />
          </li>
        </ul>
      </header>
    </main>
  );

}
export default App;
