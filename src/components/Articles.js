import React, { useState } from "react";
import { dataServices } from "../services/data.services";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  React.useEffect(() => {
    getArticalsList(1);
  }, []);

  const getArticalsList = async (pageno) => {
    await dataServices.getArticalsList(pageno).then((response) => {
      setArticles(response.data);

      let paginstionArry = [];
      for (let i = 1; i < response.total_pages + 1; i++) {
        paginstionArry.push(i);
      }
      setPagination(paginstionArry);
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-auto mt-5">
          <div className="card" style={{ width: "25rem" }}>
            <div className="card-body">
              <h5 className="card-title">Articles List</h5>
              <ul className="list-group">
                {articles.map((data, index) =>
                  data && data.title ? (
                    <li key={index} className="list-group-item">
                      {data.title}
                    </li>
                  ) : (
                    ""
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-auto">
          <nav aria-label="...">
            <ul className="pagination">
              {pagination.map((data, index) => (
                <li
                  key={index}
                  class=""
                  className={
                    data === pageNo ? "page-item disabled" : "page-item"
                  }
                >
                  <button
                    onClick={(e) => {
                      getArticalsList(data);
                      setPageNo(data);
                    }}
                    className="page-link"
                  >
                    {data}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
