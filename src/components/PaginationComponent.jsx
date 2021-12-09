import React, { useContext } from "react";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import AlbumContext from "../context/AlbumContext";
import { PER_PAGE_DEFAULT } from "../config";

function PaginationComponent() {
  const { setCurrentPage, currentPage, totalResults } =
    useContext(AlbumContext);
  const totalPages = Math.ceil(totalResults / PER_PAGE_DEFAULT);
  let pages = [];
  let pagesForShow = [];

  for (let page = 1; page <= totalPages; page++) {
    pages.push(page);
  }

  for (let page = currentPage; page <= currentPage + 2; page++) {
    if (currentPage !== totalPages) {
      pagesForShow.push(page);
    }
  } // mostra apenas 3 páginas na paginação

  for (let page = currentPage - 2; page <= totalPages; page++) {
    if (currentPage === totalPages) {
      pagesForShow.push(page);
    }
  } // para mostrar a última página e duas anteriores

  const firstPage = () => {
    // volta pra primeira página
    setCurrentPage(1);
  };

  const prevPage = () => {
    // volta uma página
    currentPage !== 1 && setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    // avança uma página
    currentPage !== 1 && setCurrentPage(currentPage + 1);
  };

  const lastPage = () => {
    // vai para a última página
    setCurrentPage(pages.length);
  };

  const currPage = (page) => {
    // página atual
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      <Pagination size="lg" pageNeighbours={1}>
        <Pagination.First onClick={firstPage} disabled={currentPage === 1} />
        <Pagination.Prev onClick={prevPage} disabled={currentPage === 1} />
        {currentPage !== 1 && <Pagination.Ellipsis />}
        {pagesForShow.map((page, index) => (
          <Pagination.Item
            key={page}
            active={page === currentPage}
            index={index}
            onClick={() => currPage(page)}
          >
            {page}
          </Pagination.Item>
        ))}
        {currentPage !== totalPages && <Pagination.Ellipsis />}
        <Pagination.Next
          onClick={nextPage}
          disabled={currentPage === totalPages}
        />
        <Pagination.Last
          onClick={lastPage}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
}

export default PaginationComponent;
