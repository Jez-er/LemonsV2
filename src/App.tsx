import {useQuery} from "@tanstack/react-query";
import NewsService from "./https-api/service/news.service.ts";
import {useEffect} from "react";

function App() {
    const {data} = useQuery({
        queryKey: ['News'],
        queryFn: () => NewsService.getFullNews("33").then((res) =>
            res.data,
        ),

    });

    useEffect(()=>{
        console.log(data)
    }, [data])
  return (
    <>
        { data?.Header }

    </>
  )
}

export default App
