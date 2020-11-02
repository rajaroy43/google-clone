import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Search({ hideButtons = false }) {
  const [input, setinput] = useState("");
  const [, dispatch] = useStateValue();
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    if (input.replaceAll(" ", "")) {
      dispatch({
        type: "SET_SEARCH_TERM",
        term: input,
      });
      history.push(`/search/${input}`);
    }
    // HERE ARE RESUlT
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <MicIcon />
      </div>
      {hideButtons ? (
        <div className="search__buttons">
          <Button variant="outlined" onClick={search} type="submit">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            variant="outlined"
            onClick={search}
            style={{ display: "none" }}
            type="submit"
          ></Button>
        </div>
      )}
    </form>
  );
}

export default Search;
