export const UserLoadingSelector = state => state.auth.isLoading;
export const UserErrorSelector = state => state.auth.error;
export const UserDataSelector = state => state.auth.userData;
export const TokenSelector = state => state.auth.token;
export const authentificatedSelector = state => state.auth.authentificated;
