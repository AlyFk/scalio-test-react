import Spinner from "components/spinner";
import React, { Suspense, useState } from "react";
import Home from "./Home";
const Details = React.lazy(() => import("./Details"));

type page = "home" | "detail";
const Index = () => {
  const [page, setPage] = useState<page>("home");
  const changePage = (page: page) => {
    setPage(page);
  };
  return page === "home" ? (
    <Home changePage={changePage} />
  ) : (
    <Suspense fallback={<Spinner />}>
      <Details changePage={changePage} />
    </Suspense>
  );
};
export default Index;
