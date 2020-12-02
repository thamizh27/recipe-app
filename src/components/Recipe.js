import { useState, useEffect } from "react";
import Loader from "./Loader";
import Search from "./Search";

const API_KEY = "280f5890842a5f7eca205a3e14b5382b";
const API_ID = "921ac74d";

function Recipe() {
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
        console.log(data);
        setIngrediants(data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <div className="App">
      <Search searchText={(text) => setQuery(text)} />
      {query.length === 0 && setQuery("chicken")}
      {loading ? (
        <Loader />
      ) : (
        <div className="wrapper">
          {ingrediants.map((list) => (
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
          ))}
        </div>
      )}
    </div>
  );
}
export default Recipe;
