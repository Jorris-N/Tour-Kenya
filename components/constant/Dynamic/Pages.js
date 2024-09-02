import * as React from "react";
import { usePagination, ELLIPSIS } from "./Pagination";
import classnames from "classnames"

const Pages = (props) => {
    const {onPageChange, totalCount, siblingCount = 1, currentPage, pageSize, className} = props;
    const paginationRange = usePagination({currentPage, totalCount, siblingCount, pageSize});


    if(currentPage === 0 || paginationRange.length < 2){
        return  null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };
    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul className={classnames(' flex items-center space-x-6', {[className]: className})} id="pagination-container">
        {/*    left navigation arrow*/}
            <li  className={classnames(' rounded-lg flex items-center justify-center cursor-pointer')} onClick={onPrevious} id="pagination-item">    
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </li>

            {paginationRange.map(pageNumber => {
                if(pageNumber === ELLIPSIS){
                    return <li className={" ellipsis"} id="pagination-item">&#8230;</li>
                }

                return(
                    <li className={classnames(' hover:cursor-pointer', {
                        selected: pageNumber === currentPage

                    })}  onClick={() => onPageChange(pageNumber) } id="pagination-item">
                        {pageNumber}
                        
                    </li>
                );
            })}

            <li className={classnames(' rounded-lg flex items-center justify-center cursor-pointer', {
                disabled: currentPage === lastPage
            })} onClick={onNext} id="pagination-item">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </li>
        </ul>
    )
}
export default Pages