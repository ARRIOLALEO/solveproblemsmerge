import {AxiosRequestConfig} from 'axios';

export interface ErrorConfig extends AxiosRequestConfig {
    retry?: boolean
}
