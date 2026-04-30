import { LightningElement } from 'lwc';

export default class CreateContact extends LightningElement {
    firstName = '';
    lastName = '';
    email = '';
    phone = '';
    department = '';
    title = '';
    contactList = [];
    conId = 1;

    handleFirstNameChange(event) {
        this.firstName = event.target.value;
    }
    handleLastNameChange(event) {
        this.lastName = event.target.value;
    }
    handleEmailChange(event) {
        this.email = event.target.value;
    }
    handlePhoneChange(event) {
        this.phone = event.target.value;
    }
    handleTitleChange(event) {
        this.title = event.target.value;
    }
    handleDepartmentChange(event) {
        this.department = event.target.value;
    }

    handleButtonClick(event) {
        const contact = {
            id: this.conId++,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phone: this.phone,
            title: this.title,
            department: this.department,
        };
        
        this.contactList = [...this.contactList, contact];
    }

}