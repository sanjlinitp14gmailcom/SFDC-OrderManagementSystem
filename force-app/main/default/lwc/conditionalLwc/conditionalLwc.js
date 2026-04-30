import { LightningElement } from 'lwc';

export default class ConditionalLwc extends LightningElement {
    button1Msg = '';
    button2Msg = '';
    defaultMsg = 'Click on any button to see the changes in UI';

    button1Clicked = false;
    button2Clicked = false;
    
    handleButton1Click() {
        this.button1Msg = 'Button 1 was clicked!';
        this.button2Msg = '';
        this.button1Clicked = true;
        this.button2Clicked = false;
    }

    handleButton2Click() {
        this.button2Msg = 'Button 2 was clicked!';
        this.button1Msg = '';
        this.button2Clicked = true;
        this.button1Clicked = false;
    }

}