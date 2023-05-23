
const validateData = (data) => {
    const errros = [];
    const { name, email, phone, comments } = data;
    if (!name || !email || !phone || !comments) {
        errros.push("Some data is missing");
    } else {
        if (!isEmail(email)) {
            errros.push("Email is invalid");
        }
        if (!isNumber(phone)) {
            errros.push("Phone is invalid");
        }
    }
    return errros;
}

const isNumber = (number) => {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

const isEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export { validateData };