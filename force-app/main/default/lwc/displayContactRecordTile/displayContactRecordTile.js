import { LightningElement, api } from 'lwc';

export default class DisplayContactRecordTile extends LightningElement {
    @api conRecord;

    handleClick(event) {
        const contactEvent = new CustomEvent('contactselected', {
            detail: this.conRecord
        });
        console.log('Contact Record Tile clicked: ', JSON.stringify(this.conRecord));

        // accessing the contact record ID passed from HTML in form of dataset of the clicked element
        let contactId = event.currentTarget.dataset.contactRecordId; 
        console.log('Contact ID from dataset: ', contactId);
        
        this.dispatchEvent(contactEvent);
    }
}