export function formValidation(form) {
    let errors = {}
    //CONDOMINIO
    if (!form.name || !form.name.trim().length) {
        errors = { ...errors, name: 'Campo incompleto' }
    }
    if (!form.country || !form.country.trim().length) {
        errors = { ...errors, country: 'Campo incompleto' }
    }
    if (!form.state || !form.state.trim().length) {
        errors = { ...errors, state: 'Campo incompleto' }
    }
    if (!form.city || !form.city.trim().length) {
        errors = { ...errors, city: 'Campo incompleto' }
    }
    if (!form.district || !form.district.trim().length) {
        errors = { ...errors, district: 'Campo incompleto' }
    }
    if (!form.phone || !form.phone.trim().length) {
        errors = { ...errors, phone: 'Campo incompleto' }
    }

    //USUARIO
    if (!form.foreName || !form.foreName.trim().length) {
        errors = { ...errors, foreName: 'Campo incompleto' }
    }
    if (!form.lastName || !form.lastName.trim().length) {
        errors = { ...errors, lastName: 'Campo incompleto' }
    }
    if (!form.dni || !form.dni.trim().length) {
        errors = { ...errors, dni: 'Campo incompleto' }
    }
    if (!form.ownerPhone || !form.ownerPhone.trim().length) {
        errors = { ...errors, ownerPhone: 'Campo incompleto' }
    }
    if (!form.ownerEmail || !form.ownerEmail.trim().length) {
        errors = { ...errors, ownerEmail: 'Campo incompleto' }
    }
    if (form.ownerEmail || form.ownerEmail.trim().length) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!regex.test(form.ownerEmail)) {
            errors = { ...errors, ownerEmail: 'Correo inválido' }
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