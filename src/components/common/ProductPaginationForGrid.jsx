import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Flex from "./Flex";
import ItemCardProtrait from "./ItemCardProtrait";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const PaginationForGrid = ({ itemsPerPage, products }) => {
  // Example items, to simulate fetching from another resources.
  const items = products;

  function Items({ currentItems }) {
    return (
      <>
        {currentItems.length == 0 && (
          <Flex className="gap-5 flex-wrap lg:flex-nowrap">
            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>

            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>

            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>

            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>
            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>
            <div className="w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]">
              <Skeleton height={350} />
            </div>
          </Flex>
        )}
        <Flex className="flex-wrap gap-[12px] items-center justify-between">
          {currentItems &&
            currentItems.map((item, i) => (
              <ItemCardProtrait
                data={item}
                className=" w-full md:w-[49%] lg:w-[32.5%] xl:w-[19%] 2xl:w-[16%]"
                key={i}
              />
            ))}
        </Flex>
      </>
    );
  }

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  // console.log(typeof endOffset);
  return (
    <>
      <Items currentItems={currentItems} />
      <Flex className=" my-16 lg:mt-[50px] lg:mb-[140px] flex-col md:flex-row gap-5 lg:gap-0 items-center justify-between">
        <ReactPaginate
          breakLabel="..."
          className=" flex gap-4 ml-[-15px] justify-center "
          activeClassName="bg-red-500 text-white"
          pageClassName=" p-5 border-[1px] border-[#F0F0F0] font-dm font-normal text-base text-secondary"
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
        />

        <p className=" font-dm font-normal text-[14px] text-secondary leading-[30px]">
          Products from {itemOffset} to {endOffset} of {items.length}
        </p>
      </Flex>
    </>
  );
};

export default PaginationForGrid;
