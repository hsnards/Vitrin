import React from 'react';
import fetchData from "../../utils/fetchData";
import {baseURL} from "../../utils/baseURL";
import Link from "next/link"
const Products = ({data}) => {
    return (
          <div className={"flex flex-wrap gap-10 mt-5 justify-center"}>
              {data && data.map((item)=>(
                    <Link key={item.id} href={`/products/${item.id}`} passHref>
                    <div className={"p-5 flex flex-col border"}>
                       <p>product id {item.id}</p>
                    <button className=" mt-5 transition uppercase shadow bg-blue-50 hover:bg-blue-500 hover:text-white focus:shadow-outline focus:outline-none text-blue-500 text-xs   py-3 px-10 rounded">
                        show product
                    </button>
                    </div>
                    </Link>
              ))}
          </div>
    );
};

export default Products;

export async function getServerSideProps() {
    const data = await fetchData(`${baseURL}/products`)
    return {
        props: {data}
    };
}