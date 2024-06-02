import useItemShop from "../../../hooks/useItemShop.ts";
import Loader from "../../../components/ui/loader";
import ItemList from "./component/ItemList.tsx";
import {useState} from "react";
import {t} from "i18next";




const ShopManager = () => {

    const ShopItem = useItemShop('0')

    const [title, setTitle] = useState<string>(t('admin.ShopPage.CreateItem'))

    return (<div className={'grid grid-cols-2 h-full'}>
        <div className={'flex dark:bg-black dark:text-white bg-white m-5 rounded-xl'}>
            <h1 className={'mx-auto mt-5 text-xl font-semibold'}>{title}</h1>
        </div>
        <div>
            {ShopItem.isLoading ? <Loader /> : <ItemList data={ShopItem.data?.data.data} />}
        </div>
    </div>)
}

export default ShopManager