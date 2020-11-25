import { useState, useEffect } from "react";

const API_KEY = "e35855ae46802bdf5eed11304b734403	";
const API_ID = "921ac74d";

function App() {
  const [value, setValue] = useState("");
  const [ingrediants, setIngrediants] = useState([]);
  //const [query, setQuery] = useState("");

  useEffect(() => {
    let url = `search?q=egg&app_id=${API_ID}&app_key=${API_KEY}`;

    fetch(url, { mode: "no-cors" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return setIngrediants(data.hits);
      });
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleClick = () => {
    //setQuery(value);
  };

  return (
    <div className="App">
      <header>
        <div className="first">
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Search for recipe..."
          />
          <button onClick={handleClick}>search</button>
        </div>
        <div className="wrapper">
          {ingrediants.map((list) => {
            return (
              <div className="ingredients" key={list.recipe.label}>
                <h2>{list.recipe.label}</h2>
                <img
                  className="image"
                  src={list.recipe.image}
                  alt="recipe images"
                />
                <div className="steps">
                  {list.recipe.ingredientLines.map((steps, index) => {
                    return <p key={index}>{steps}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}
export default App;
