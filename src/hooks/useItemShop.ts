import {useQuery} from "@tanstack/react-query";
import ShopService from "../https-api/service/shop.service.ts";

const useItemShop = (pageID: string) => {
    const {data, isLoading, refetch} = useQuery({
        queryKey: ['ItemsForShop'],
        queryFn: () => ShopService.getAllSopItems(pageID)
    })

    return {data, isLoading, refetch}
}

export default useItemShop