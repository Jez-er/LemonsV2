import {api} from "../index.ts";
import {MiniNews} from "../interface/news.interface.ts";
import {AxiosResponse} from "axios";

class NewsService {
    async getMiniNews(pageId: string): Promise<AxiosResponse<MiniNews>> {
        return api.get<MiniNews>(`/news/page/${pageId}`);
    }
}

export default new NewsService()