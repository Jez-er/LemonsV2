import {api} from "../index.ts";
import {FullNews, MiniNews} from "../interface/news.interface.ts";
import {AxiosResponse} from "axios";

class NewsService {
    async getMiniNews(pageId: string): Promise<AxiosResponse<MiniNews[]>> {
        return api.get<MiniNews[]>(`/news/page/${pageId}`);
    }
    async getFullNews(Id: string): Promise<AxiosResponse<FullNews>> {
        return api.get<FullNews>(`/news/id/${Id}`);
    }
}

export default new NewsService()