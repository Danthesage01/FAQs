import React from "react";
import data from "./faqs";
import SingleFAQs from "./SingleFAQs";

function App() {
  return (
    <main>
      <div className="container">
        <div className="title">
          <h3>Miracles - Facts and all</h3>
        </div>
        {data.map(quest =>{
          return <SingleFAQs key={quest.id} {...quest}/>
        })
        }
      </div>
    </main>
  )
}

export default App;
