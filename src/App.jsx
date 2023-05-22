import React from "react";
import styles from "./app.module.css";
import { ReactComponent as Iconstar} from'./images/icon-star.svg'
import PictureColton from './images/image-colton.jpg'
/*
- header
  -title
  -desctption
-list of Rate Card
-list of Comment
*/
function Title(){

  return <h className={styles.title}>10,000+ of our users love our products.</h>;
}

function Description(){
  return <p className={styles.description}> We only provide great products combined with excellent customer service.
  See what our satisfied customers are saying about our services.</p>
}

function Rate(){
  return (
    <div className={styles.rate}>
      <dl>
         <dt><Iconstar /></dt>
          <dt><Iconstar /></dt>
         <dt><Iconstar /></dt>
         <dt><Iconstar /></dt>
         <dt><Iconstar /></dt>
      </dl>
     <strong>Rates Star in Revuiws</strong>
   </div>
  );
}

/*
-header
  -avatar
  -username
  -verified
-comment

console.log(PictureColton); 他是base64的URL，下去放去image tag
*/
function Comment() {
  return (
    <div className={styles.comment}>
      <header>
      <img src={PictureColton} alt="someone's avatars" />
      <div>Picture</div>
      
        <div>
         <strong>Coltion Smith</strong>
        <span>Verified Buyer</span>
        </div>
    </header>
    <p>
    “ We needed the same printed design as the one we had ordered a week
        prior. Not only did they find the original order, but we also received
        it in time. Excellent! ”    
    </p>

    </div>
  );
}

function App() {
  return (
    <main className={styles.main}>
     <header className={styles.hrader}>
      <Title />
      <Description />
      <ul>
        <li>
          <Rate />
        </li>
        <li>
          <Rate />
        </li> 
        <li>
          <Rate />
        </li>
      </ul> 

      <ul>
        <li>
          <Comment />
        </li>
        <li>
          <Comment />
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
