function telephoneCheck(str) {
    var phone_number = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return phone_number.test(str);
}
telephoneCheck("555-555-5555");