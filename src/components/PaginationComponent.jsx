import React, { useContext } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import "bootstrap/dist/css/bootstrap.min.css";
import AlbumContext from '../context/AlbumContext';

function PaginationComponent(){
  const { setCurrentPage, currentPage, totalResults, perPage } = useContext(AlbumContext);
  const totalPages = Math.ceil(totalResults/perPage);
  let pages = [];
  let pagesForShow = [];

  for (let page = 1; page <= totalPages; page ++) {
    pages.push(page);
  }

  for (let page = currentPage; page <= (currentPage +2); page ++) {
    if(currentPage !== totalPages) {
      pagesForShow.push(page);
    }
  } // mostra apenas 3 páginas na paginação

  for (let page = (currentPage - 2); page <= totalPages; page ++) {
    if(currentPage === totalPages) {
      pagesForShow.push(page);
    }
  } // para mostrar a última página e duas anteriores

  const firstPage = () => { // volta pra primeira página
    setCurrentPage(1);
    window.scrollTo(0, 0);
  }

  const prevPage = () => { // volta uma página
    currentPage !== 1 && setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
  }

  const nextPage = () => { // avança uma página
    currentPage !== 1 && setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
  }

  const lastPage = () => { // vai para a última página
    setCurrentPage(pages.length);
    window.scrollTo(0, 0);
  }

  const currPage = (page) => { // página atual
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }
  
  return (
    <div className="pagination">
      <Pagination  size="lg" pageNeighbours={1}>
        <Pagination.First onClick={firstPage} disabled={currentPage === 1}/>
        <Pagination.Prev onClick={prevPage} disabled={currentPage === 1}/>
        {currentPage !==1 && <Pagination.Ellipsis />}
          {pagesForShow.map((page, index) => (
            <Pagination.Item key={page} active={page === currentPage} index={index} onClick={() => currPage(page)}>
         {page}
        </Pagination.Item>
      ))}
        {currentPage !==totalPages && <Pagination.Ellipsis />}
        <Pagination.Next onClick={nextPage} disabled={currentPage === totalPages}/>
        <Pagination.Last onClick={lastPage} disabled={currentPage === totalPages}/>
      </Pagination>
    </div>
  )
}

export default PaginationComponent;