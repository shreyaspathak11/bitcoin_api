import React from 'react'
import ReactPaginate from 'react-paginate'  


const Pagination = () => {
    const [pageNumber, setPageNumber] = useState(0); //for pagination
    const pagesVisited = pageNumber * 10; //for pagination
    const pageCount = Math.ceil(coins.length / 10); //for pagination
    const changePage = ({ selected }) => {
        setPageNumber(selected);    
    };
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={changePage}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
  )
}

export default Pagination