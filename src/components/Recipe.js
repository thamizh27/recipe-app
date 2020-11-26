import { useState, useEffect } from "react";
import Loader from "./Loader";

const API_KEY = "e35855ae46802bdf5eed11304b734403	";
const API_ID = "921ac74d";

function Recipe() {
  const [value, setValue] = useState("");
  const [ingrediants, setIngrediants] = useState([]);
  const [query, setQuery] = useState("chicken");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let url = `search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;
    setLoading(true);
    // If cors error appears, you've to set proxy in package.json
    // And set mode in fetch
    fetch(url, { mode: "no-cors" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.hits);
        setIngrediants(data.hits);
        setLoading(false);
      });
  }, [query]);

  const handleChange = (q) => {
    setValue(q);
    setQuery(q);
  };

  return (
    <div className="App">
      <div className="first">
        <input
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search for recipe..."
        />
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div className="wrapper">
          {ingrediants.map((list) => {
            return (
              <div
                className="ingredients"
                key={Math.floor(Math.random() * 100000)}
              >
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
      )}
    </div>
  );
}
export default Recipe;
