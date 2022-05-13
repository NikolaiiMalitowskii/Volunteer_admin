export const getErrorSelector = (state) => state.auth.error;
export const getIsAuth = (state) => state.auth.tokens.access.token;
export const getToken = (state) => state.auth.tokens.access.token;
export const getTokenExpiresAt = (state) => state.auth.tokens.access.expiresAt;
export const getRefreshToken = (state) => state.auth.tokens.refresh.token;
export const getRefreshTokenExpiresAt = (state) => state.auth.tokens.refresh.expiresAt;



