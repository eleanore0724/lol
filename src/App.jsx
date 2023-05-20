import React from "react";
import styles from "./app.module.css";
/*
- header
  -title
  -desctption
-list of Rate Card
-list of Comment
*/
function Title(){

  return <h className={styles.title}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cupiditate,
     quo quisquam atque dolore officia ipsa veritatis tenetur voluptate consectetur, cul
     a ea quia aperiam quos! Ratione maiores quia sint facere.</h>;
}

function Description(){
  return <p className={styles.description}>This study uses the financial statements of Taiwan electronic game company "Game Orange" as an 
    example to investigate the impact of the performance of the six major components of financial statements 
    on the company's business performance.</p>
}

function Rate(){
  return (
    <div className={styles.rate}>
      <ul>
        <li>Star</li>
       <li>Star</li>
       <li>Star</li>
       <li>Star</li>
      <li>Star</li>
      </ul>
     <strong>Rates Star in Revuiws</strong>
   </div>
  );
}

function Comment(){
/*
-header
  -avatar
  -username
  -verified
-comment
*/
  return (
    <div>
      <header className={styles.comment}>
        <div>
         <strong>Coltion Smith</strong>
        <span>Verified Buyer</span>
        </div>
    </header>
    <p>
    his study uses the financial statements of Taiwan electronic game company "Game Orange" as an 
    example to investigate the impact of the performance of the six major components of financial statements 
    on the company's business performance.
    </p>

    </div>
  )
}

function App() {
  return (
    <main className={styles.main}>
     <header className={styles.hrader}>
      <Title />
      <Description />
      <ul className={styles.list}>
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

      <ul className={styles.list}>
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
