import { createSlice } from '@reduxjs/toolkit';
import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number] & { route: string };

const initialState: {
    loginMenu: MenuItem[];
    authorizedMenu: MenuItem[];
    justLoggedOut: boolean;
} = {
    loginMenu: [],
    authorizedMenu: [],
    justLoggedOut: false,
};

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        setLoginNavigation: (state, action) => {
            state.loginMenu = action.payload;
        },
        setAuthorizedMenu: (state, action) => {
            state.authorizedMenu = action.payload;
        },
        setAuthorizedAction: (state, action) => {
            state.justLoggedOut = action.payload;
        },
    },
});

export const { setLoginNavigation, setAuthorizedMenu, setAuthorizedAction } =
    navigationSlice.actions;

export default navigationSlice.reducer;
