function updatePhoneNumber(isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const previousPhoneNumber = parseInt(phoneNumberString);

    let newPhonneNumber;
    if (isIncrease) {
        newPhonneNumber = previousPhoneNumber + 1;
    }
    else {
        newPhonneNumber = previousPhoneNumber - 1;
    }
    phoneNumberField.value = newPhonneNumber;

    return newPhonneNumber
}