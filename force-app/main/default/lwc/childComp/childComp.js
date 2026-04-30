import { LightningElement, api } from 'lwc';

export default class ChildComp extends LightningElement {
    @api personName = '';

    @api
    displayMessage() {
        const event = new CustomEvent('messagefromchild', {
            detail: {
                msg: 'I am an event from child component'
            },
            bubbles:true,
            composed:false
        });
        console.log(JSON.stringify(event));
        this.dispatchEvent(event);
        return 'I am from child component method returning message to parent component';
    }


}