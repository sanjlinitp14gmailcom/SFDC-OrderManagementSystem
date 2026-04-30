import { LightningElement } from 'lwc';

export default class GrandChildComp extends LightningElement {
    connectedCallback() {
        console.log('GrandChildComp connected');
        console.log('Parent element:', this.parentElement);
        console.log('Template content:', this.template.innerHTML);
    }
}