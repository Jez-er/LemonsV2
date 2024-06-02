import {AxiosResponse} from "axios";
import {api} from "../index.ts";
import {IAllShopItems} from "../interface/shop.interface.ts";

class ShopService {
    async getAllSopItems(pageId: string): Promise<AxiosResponse<IAllShopItems>> {
        return api.get<IAllShopItems>(`/shop/item/page/${pageId}`);
    }
}

export default new ShopService()