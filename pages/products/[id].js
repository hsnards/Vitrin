import fetchData from "../../utils/fetchData";
import {baseURL} from './../../utils/baseURL';
import Card from "../../components/Card";
import Head from "next/head";


const InnerProduct = ({data}) => {

    return (<>
              {data ? (
                    <>
                        <Head>
                            <title>{data.title}</title>
                            <meta name="description" content={data.description}/>
                        </Head>

                            <Card src={data.image} rating={data.rating} title={data.title}
                                  description={data.description} price={data.price} category={data.category}/>
                    </>) : "داده ای وجود ندارد"}

          </>
    );
}

export default InnerProduct;


export async function getServerSideProps({params}) {
    const data = await fetchData(`${baseURL}/products/${params.id}`)
    return {
        props: {data}
    };
}