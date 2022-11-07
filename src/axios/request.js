import axios from 'axios';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';
import { useRefreshTokenStore } from '@/stores/auth/refreshTokenStore';

const requestAxios = axios.create({});

requestAxios.interceptors.request.use(async function (config) {
    config.baseURL = import.meta.env.BASE_URL + 'manager-api/v2/';

    config.headers = {
        Authorization: 'Bearer ' + localStorage.auth_token,
        'Content-Type': 'application/json'
    };

    const user = jwt_decode(localStorage.getItem('auth_token'));

    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) {
        return config;
    } else {
        console.log('token is expired');

        const refreshTokenStore = useRefreshTokenStore();

        refreshTokenStore.REFRESH();

        config.headers.Authorization =
            'Bearer ' + localStorage.getItem('auth_token');

        console.log('token is refreshed');

        return config;
    }
});

export default requestAxios;
