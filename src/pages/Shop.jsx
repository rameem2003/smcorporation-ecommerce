import React, { useState } from "react";
import BreadCrums from "../components/common/BreadCrums";
import Container from "../components/common/Container";
import Flex from "../components/common/Flex";
import PaginationForGrid from "../components/common/ProductPaginationForGrid";

const Shop = () => {
  // state for item show number
  const [itemShow, setItemShow] = useState(12);
  return (
    <section className="my-10">
      <Container>
        <BreadCrums location="Shop" />

        <div className="mt-[100px]">
          <Flex className=" flex-col md:flex-row items-center justify-between gap-2">
            <div className="w-full md:w-4/12">
              <h2 className=" font-semibold text-lg mb-1 text-black">
                Category
              </h2>
              <select
                className=" w-full p-3 rounded-xl border-[1px] border-red-500"
                name=""
                id=""
              >
                <option disabled value="">
                  Choose Category
                </option>
                <option value="">Pipe Fetings</option>
                <option value="">Pipe Fetings</option>
              </select>
            </div>
            <div className="w-full md:w-4/12">
              <h2 className=" font-semibold text-lg mb-1 text-black">
                Filter Price
              </h2>
              <select
                className=" w-full p-3 rounded-xl border-[1px] border-red-500"
                name=""
                id=""
              >
                <option disabled value="">
                  Choose Category
                </option>
                <option value="">Low to High</option>
                <option value="">High to Low</option>
              </select>
            </div>

            <div className="w-full md:w-4/12">
              <h2 className=" font-semibold text-lg mb-1 text-black">Show</h2>
              <select
                onChange={(e) => setItemShow(parseInt(e.target.value))}
                className=" w-full p-3 rounded-xl border-[1px] border-red-500"
                name=""
                id=""
              >
                <option value={12}>12</option>
                <option value={24}>24</option>
                <option value={36}>36</option>
              </select>
            </div>
          </Flex>

          <div className="mt-10">
            <PaginationForGrid itemsPerPage={itemShow} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
