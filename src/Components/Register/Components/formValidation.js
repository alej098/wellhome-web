export function formValidation(form) {
    let errors = {}
    if (!form.name || !form.name.trim().length) {
        errors = { ...errors, name: 'Campo incompleto' }
    }
    if (!form.lastname || !form.lastname.trim().length) {
        errors = { ...errors, lastname: 'Campo incompleto' }
    }
    if (!form.dni || !form.dni.trim().length) {
        errors = { ...errors, dni: 'Campo incompleto' }
    }
    if (!form.phone || !form.phone.trim().length) {
        errors = { ...errors, phone: 'Campo incompleto' }
    }
    if (!form.email || !form.email.trim().length) {
        errors = { ...errors, email: 'Campo incompleto' }
    }
    if (form.email || form.email.trim().length) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!regex.test(form.email)) {
            errors = { ...errors, email: 'Correo inválido' }
        }
    }
    if (!form.password || !form.password.trim().length) {
        errors = { ...errors, password: 'Campo incompleto' }
    }
    if (!form.repeat_password || !form.repeat_password.trim().length) {
        errors = { ...errors, repeat_password: 'Campo incompleto' }
    }
    if (!(form.password === form.repeat_password)) {
        errors = { ...errors, repeat_password: 'Las contraseñas no coinciden' }
    }
    if (!form.checkbox_confirm) {
        errors = { ...errors, checkbox_confirm: 'Tienes que confirmar este campo' }
    }
    const passwordValidation = password_validation(form.password);
    return { errors, passwordValidation }
}

export function password_validation(password) {
    let password_regex = {
        largo: false,
        letters: false,
        numbers: false,
    };
    if (password || password.trim().length) {
        const regexLongitud = /^.{6,10}$/;
        const regexLetra = /[a-zA-Z]/;
        const regexNumero = /[1-9]/;
        if (regexLongitud.test(password)) {
            password_regex = { ...password_regex, largo: true }
        }
        if (regexLetra.test(password)) {
            password_regex = { ...password_regex, letters: true }
        }
        if (regexNumero.test(password)) {
            password_regex = { ...password_regex, numbers: true }
        }
    }
    return password_regex;
}

export function validationCondo(params) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const errors = {
        name: params?.name?.trim().length > 0,
        country: params?.country,
        state: params?.state?.trim().length > 0,
        district: params?.district?.trim().length > 0,
        city: params?.city?.trim().length > 0,
        phone: params?.phone?.trim().length > 0,
    }
    return errors;
}