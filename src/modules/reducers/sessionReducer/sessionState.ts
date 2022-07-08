export interface State {
    accessToken: string
    refreshToken: string
    permissions: string[]
}

export const initialState: State = {
    accessToken: '',
    refreshToken: '',
    permissions: [],
};
