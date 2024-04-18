import {useQuery} from "@tanstack/react-query";
import NewsService from "./https-api/service/news.service.ts";

function App() {
    const {data} = useQuery({
        queryKey: ['News'],
        queryFn: () => NewsService.getMiniNews("0").then((res) =>
            res.data,
        )
    });
  return (
    <>
        <div>{data?.Header}</div>
    </>
  )
}

export default App
