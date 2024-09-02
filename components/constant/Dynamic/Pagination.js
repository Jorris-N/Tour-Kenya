import * as React from 'react'
import { useMemo } from "react";

export const ELLIPSIS = '...';

const range = (start, end) => {
    let length = end - start + 1;

    return Array.from ({length}, (_, idx) => idx + start);

};

export const usePagination = ({totalCount, pageSize, siblingCount = 1, currentPage}) => {

    const paginationRange = useMemo (()=>{
        const totalPageCount = Math.ceil(totalCount / pageSize);    

        const totalPageNumbers  = siblingCount + 5;



        //    case 1:
        if(totalPageNumbers >= totalPageCount){
            return range(1, totalPageCount);
        }



        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

        const shouldShowLeftEllipsis = leftSiblingIndex > 2;
        const shouldShowRightEllipsis = rightSiblingIndex < totalPageCount - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;


    //    case 2:
        if(!shouldShowLeftEllipsis && shouldShowRightEllipsis){
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, ELLIPSIS, totalPageCount];
        }

    //    case 3:
        if(shouldShowRightEllipsis && !shouldShowRightEllipsis){
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);


            return [firstPageIndex, ELLIPSIS, ...rightItemCount];
        }

    //    case 4:
        if(shouldShowLeftEllipsis && shouldShowRightEllipsis){
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return  [firstPageIndex, ELLIPSIS, ...middleRange, ELLIPSIS, lastPageIndex];
        }

    }, [totalCount, pageSize, siblingCount, currentPage]);

    
    return paginationRange;
}