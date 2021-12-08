import React, { useContext } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import "bootstrap/dist/css/bootstrap.min.css";
import AlbumContext from '../context/AlbumContext';

function PaginationComponent(){
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { setCurrentPage, currentPage } = useContext(AlbumContext);

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
      <Pagination  size="lg">
        <Pagination.First onClick={firstPage} />
        <Pagination.Prev onClick={prevPage} />
          {pages.map((page, index) => (
        <Pagination.Item key={page} active={page === currentPage} index={index} onClick={() => currPage(page)}>
         {page}
        </Pagination.Item>
      ))}
        <Pagination.Next onClick={nextPage}/>
        <Pagination.Last onClick={lastPage}/>
      </Pagination>
    </div>
  )
}

export default PaginationComponent;