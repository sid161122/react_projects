
function Pagination({ currentPage, totalPages = 10, onPageChange }){

     function generateNoOfPages() {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  }
    
        return (  
            <div>
                <button  onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}>prev</button>
                

{generateNoOfPages().map((pageNo) => (
        <button 
          key={pageNo}
          onClick={() => onPageChange(pageNo)}
        >
          {pageNo}
        </button>
      ))}

  <button  onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}>next</button>
            </div>
        )
}
export default Pagination;
