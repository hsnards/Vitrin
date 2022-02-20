import axios from "axios";
export default async function fetchData(url)  {
    const { data } = await axios.get(url);
    return data;
}