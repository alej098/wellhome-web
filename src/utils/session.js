export const ROLE_INFO = {
    1: { key: 'admin', label: 'Presidente', title: 'Panel del Condominio' },
    2: { key: 'admin', label: 'Secretario', title: 'Panel del Condominio' },
    3: { key: 'admin', label: 'Tesorero', title: 'Panel del Condominio' },
    4: { key: 'admin', label: 'Administrador', title: 'Panel del Condominio' },
    5: { key: 'propietario', label: 'Propietario', title: 'Mi Hogar · Propietario' },
    6: { key: 'inquilino', label: 'Inquilino', title: 'Mi Hogar · Inquilino' },
};

export const saveSession = (token, user) => {
    if (token) localStorage.setItem('token', token);
    if (user) localStorage.setItem('user', JSON.stringify(user));
};

export const getSession = () => {
    const token = localStorage.getItem('token');
    let user = null;
    try {
        user = JSON.parse(localStorage.getItem('user') || 'null');
    } catch {
        user = null;
    }
    return { token, user };
};

export const clearSession = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    sessionStorage.clear();
};

export const getUserRole = (user) => {
    if (!user) return null;
    const types = user.userTypes || user.UserTypes;
    const typeId = Array.isArray(types) && types.length
        ? Number(types[0].id)
        : (user.userTypeId ? Number(user.userTypeId) : null);
    return ROLE_INFO[typeId] || null;
};