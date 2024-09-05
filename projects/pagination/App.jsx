 import { useState } from "react";
import Pagination from './Pagination'

function App() {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

    const dummyData=Array.from({length:100},(_,index)=>({
        id:index+1,
        name:`Products ${index+1}`
    }))
    
    const indexOfLastItems=currentPage*itemsPerPage
    const indexOfFirstItems = indexOfLastItems - itemsPerPage
    const currentListOfItems = dummyData.slice(indexOfFirstItems, indexOfLastItems)
    
function handlePageChange(currentPage){
    setCurrentPage(currentPage)
  }
    
    
     return (
    <div>
        <h1>Pagination</h1>
        <ul>
            {
                currentListOfItems.map(list=>
                    <li key={list.id}>{list.name}</li>)
            }    
        </ul>
      <Pagination 
       currentPage={currentPage}
           totalPages={Math.ceil(dummyData.length / itemsPerPage)}
      onPageChange={handlePageChange}
      />

          {/* {dummyData} */}
    </div>
  );
}

export default App
