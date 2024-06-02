import {IShop} from "../../../../https-api/interface/shop.interface.ts";
import {FC} from "react";
import {Pen} from "lucide-react";

interface ItemListProps {
    data: IShop[] | undefined
}

const ItemList: FC<ItemListProps> = ({data}) => {
    return (<div>
        {data?.map(item => (<div key={item.id} className={'flex max-h-17 items-center bg-white dark:bg-black dark:text-white m-5 p-4 rounded-xl'}>
            <span>{item.id}</span>
            <span className={'mx-5 w-40'}>{item.displayName}</span>
            <span className={'w-40 max-h-14 max-w-40'}>{item.description}</span>
            <span className={'ml-5 mr-2'}>{item.price}</span>
            <span>{item.currency}</span>
            <span className={'mx-5'}>{item.server}</span>
            <div className={'bg-orange-500 ml-auto mr-10 w-10 h-10 flex justify-center items-center rounded-xl cursor-pointer'}>
                <Pen color={'White'} />
            </div>
        </div>))}
    </div>)
}

export default ItemList