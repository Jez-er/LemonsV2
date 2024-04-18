import {useQuery} from "@tanstack/react-query";
import NewsService from "./https-api/service/news.service.ts";

function App() {
    const {data} = useQuery({
        queryKey: ['News'],
        queryFn: () => NewsService.getFullNews("33").then((res) =>
            res.data,
        )
    });
  return (
    <>
        { data?.Header }
    </>
  )
}

export default App
