import "./SearchBarComponent.styles.scss";

export const SearchBarComponent = () => {
  return (
    <form className="form-inline">
      <input
        className="form-control mr-sm-2 search-input"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0 search-btn" type="submit">
        Search
      </button>
    </form>
  );
};
