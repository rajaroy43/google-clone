import "./SearchPage.css";
// import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
// import Response from "./response";
import { Link, useParams } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
import BookIcon from "@material-ui/icons/Book";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
function SearchPage() {
  // const [{ term }] = useStateValue();
  const { searchTerm } = useParams();
  const { data } = useGoogleSearch(searchTerm);

  //Fake Response
  // const data = Response;
  // console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search />
          <div className="searchPage__options">
            <div className="searchPageOptions__left">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/All">All</Link>
              </div>
              <div className="searchPage__option">
                <BookIcon />
                <Link to="/Books">Books</Link>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <Link to="/map">Maps</Link>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>
            </div>
            <div className="searchPageOptions__right">
              <div className="searchPage__option">
                <Link to="/setting">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data &&
        (data.searchInformation.totalResults > 0 ? (
          <div className="searhPage__results">
            <p className="searchPage__resultCount">
              About {data?.searchInformation?.formattedTotalResults} results (
              {data.searchInformation.formattedSearchTime} secounds)
            </p>
            {data?.items.map((item) => (
              <div className="searchPage__result" key={item.cacheId}>
                <a href={item.link} className="searchPage__resultSite">
                  {item.displayLink}
                </a>
                <a className="searchPage__resultTitle" href={item.link}>
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage__resultSnippet">{item.snippet}</p>
              </div>
            ))}
          </div>
        ) : (
          ""
        ))}
    </div>
  );
}

export default SearchPage;
