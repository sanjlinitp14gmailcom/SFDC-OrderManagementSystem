import { LightningElement } from 'lwc';

export default class UserInputLwc extends LightningElement {
    name = '';
    email = '';
    phone = '';
    street = '';
    city = '';
    country = '';
    province = '';
    postalCode = '';
    formattedAddress = '';
    gender = 'male';

    get options() {
        return [
            {label: 'Male', value: 'male'},
            {label: 'Female', value: 'female'}
        ];
    }

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handlePhoneChange(event) {
        this.phone = event.target.value;
    }

    handleGenderChange(event) {
        this.gender = event.target.value;
    }
    handleAddressChange(event) {
        const address = event.detail;
        this.street = address.street;
        this.city = address.city;
        this.country = address.country;
        this.province = address.province;
        this.postalCode = address.postalCode;
        this.formattedAddress = [
            this.street,
            this.city,
            this.province,
            this.country,
            this.postalCode
        ].filter(part => part && part.trim()).join(', ');  
    }
}