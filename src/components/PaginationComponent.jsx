import React, { useContext } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlbumContext from '../context/AlbumContext';
import { PER_PAGE_DEFAULT } from '../config';

const PaginationComponent = function PaginationFunc() {
  const { setCurrentPage, currentPage, totalResults } = useContext(AlbumContext);
  const totalPages = Math.ceil(totalResults / PER_PAGE_DEFAULT);
  const pages = [];
  const pagesForShow = [];

  for (let page = 1; page <= totalPages; page += 1) {
    pages.push(page);
  }

  for (let page = currentPage; page <= currentPage + 2; page += 1) {
    if (currentPage !== totalPages) {
      pagesForShow.push(page);
    }
  } // mostra apenas 3 páginas na paginação

  for (let page = currentPage - 2; page <= totalPages; page += 1) {
    if (currentPage === totalPages) {
      pagesForShow.push(page);
    }
  } // para mostrar a última página e duas anteriores

  const firstPage = () => setCurrentPage(1);

  const prevPage = () => currentPage !== 1 && setCurrentPage(currentPage - 1);

  const nextPage = () => currentPage !== 1 && setCurrentPage(currentPage + 1);

  const lastPage = () => setCurrentPage(pages.length);

  const currPage = (page) => setCurrentPage(page);

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
};

export default PaginationComponent;
