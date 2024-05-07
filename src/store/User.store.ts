import { persist } from 'zustand/middleware';

import {create} from "zustand";
import AuthService from "../https-api/service/auth.service.ts";
import {IUserStore} from "./interface/user.interface.ts";
import {IUserInfo} from "../https-api/interface/auth.interface.ts";

export const useUserStore = create<IUserStore>()(persist((set) => ({
    user: {} as IUserInfo,
    isAuth: false,
    isAdmin: false,
    login: async (username: string, password: string) => {
            const responseLogin = await AuthService.login(username, password);
        localStorage.setItem('session', responseLogin.data.accessToken);
        const responseUserData = await AuthService.getUserInfo();
        const admin: boolean = (responseUserData.data.groups.find(group => group.groupName === "ADMIN")) ? true : false;
        set(() => ({
            isAuth: true,
            user: responseUserData.data,
            isAdmin: admin
        }));
    },
    /*registration: async (login: string, email: string, password: string) => {
        try {
            const response = await AuthService.registration(login, email, password);
            localStorage.setItem('token', response.data.refreshToken);
            set(() => ({
                user: response.data.User,
                isAuth: true
            }));
        } catch (e) {
            console.log(e);
        }
    },
    logout: async () => {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
            set(() => ({
                user: {} as IUser,
                isAuth: false
            }));
        } catch (e) {
            console.log(e);
        }
    },*/
}), {
    name: 'userStore'
}));
