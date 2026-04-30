import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    name= 'Ravina Raj';

    showMessageFromChild() {
        const childComp = this.template.querySelector('c-child-comp');
        if (childComp) {
            const message = childComp.displayMessage();
            console.log('Message from child component:', message);
        } else {
            console.error('Child component not found');
        }
    }
    handleMessageFromChild(event) {
        console.log('Event Message from child component:', event.detail.msg);
    }
}