import React, { useRef } from "react";
import { usePost } from "hooks";

interface HomeProps {
  changePage: (page: "home" | "detail") => void;
}

const Home: React.FC<HomeProps> = ({ changePage }) => {
  const inputEl = useRef<HTMLInputElement | null>(null);
  const { error, searchPostById, loading } = usePost();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await searchPostById(parseInt(inputEl.current?.value as string));
      changePage("detail");
    } catch (error) {}
  };

  return (
    <div className="wrapper">
      {error && <p className="error">{error}</p>}
      <form className="search" onSubmit={handleSubmit}>
        <input
          ref={inputEl}
          type="number"
          className="search__bar"
          placeholder="Please Enter ID"
        />
        <input
          type="submit"
          className="search__btn"
          value={loading ? "loading..." : "GO"}
        />
      </form>
    </div>
  );
};

export default Home;
