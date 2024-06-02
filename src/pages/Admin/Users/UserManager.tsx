import React, { useState } from 'react';
import Userlist from "../../../components/userlist/Userlist";
import { useQuery } from "@tanstack/react-query";
import UserService from "../../../https-api/service/user.service";
import { IAllUser } from "../../../https-api/interface/user.interface";
import {AtSign, Search, User} from "lucide-react";
import Loader from "../../../components/ui/loader";
import {useTranslation} from "react-i18next";

const UserManager: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [searchData, setSearchData] = useState<string>('');
    const [searchType, setSearchType] = useState<'NIK' | 'EMAIL'>('NIK')

    const {t} = useTranslation()

    const { data, refetch, isLoading } = useQuery<IAllUser>({
        queryKey: ['Users', searchData, currentPage],
        queryFn: () => searchData
            ? UserService.searchUser(searchData, currentPage, searchType)
            : UserService.allUsers(currentPage),
    });

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber - 1);
    };

    const elements = [];
    if (data?.totalPages) {
        for (let i = 1; i <= data.totalPages; i++) {
            elements.push(
                <div key={i} className={'flex bg-orange-500 text-white w-8 h-8 hover:w-10 hover:h-10 mx-auto rounded-xl mb-2 justify-center items-center cursor-pointer'} onClick={() => handlePageClick(i)}>
                    <span>{i}</span>
                </div>
            );
        }
    }

    const SwapSearchType = () => {
        if(searchType === "NIK" ) {
            setSearchType("EMAIL")
        }
        if(searchType === "EMAIL") {
            setSearchType("NIK")
        }
    }

    return (
        <div className={'flex flex-col h-full w-full'}>
            <div className={'flex w-11/12 h-16 bg-white dark:bg-black mt-5 ml-12 items-center rounded-xl'}>
                <form className={'flex items-center w-2/5 h-2/3 ml-4 bg-gray dark:bg-dark-gray rounded-xl pl-2'}>
                    <div className={'dark:text-white'}>
                        <Search/>
                    </div>
                    <input
                        type="text"
                        className={'pl-3.5 dark:text-white border-transparent outline-none outline-transparent bg-transparent h-full w-11/12 placeholder:opacity-80 placeholder:text-black dark:placeholder:text-white'}
                        placeholder={t('main.search')}
                        onChange={(e) => {
                            setSearchData(e.target.value);
                            setCurrentPage(0);
                            refetch();
                        }}
                    />
                    <div onClick={() => SwapSearchType()} className={'mr-3 cursor-pointer dark:text-white'}>
                        {(searchType === "EMAIL") ? <AtSign /> : <User/>}
                    </div>
                </form>
            </div>
            <div className={'flex mt-5 w-full h-full overflow-auto'}>
                <div className={'mx-7 mt-5 w-14 flex flex-col overflow-y-auto scroll-m-0'}>
                {elements}
                </div>
                {isLoading ? <Loader/> : <div className={'w-full mx-auto'}>
                    {data && data.data.length > 0 ? (
                        <Userlist data={data.data}/>
                    ) : (
                        'Нет данных'
                    )}
                </div>}
            </div>
        </div>
    );
};

export {UserManager};
