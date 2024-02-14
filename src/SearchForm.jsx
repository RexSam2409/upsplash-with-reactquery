import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchItem } = useGlobalContext();
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log(e.target.elements.search.value);
          const search = e.target.elements.search.value;
          if (!search) return;
          setSearchItem(e.target.elements.search.value);
        }}
      >
        <input
          type="text"
          name="search"
          className="form-input search-input"
          placeholder="dog"
        />
        <button className="btn" type="submit">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
