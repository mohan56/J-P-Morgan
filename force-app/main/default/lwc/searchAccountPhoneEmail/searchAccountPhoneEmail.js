import { LightningElement,wire,api} from 'lwc';
import fetchAccountData from '@salesforce/apex/AccountProvider.fetchAccountData';
const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Rating', fieldName: 'Rating' },
    { label: 'Type', fieldName: 'Type'},
    { label: 'Phone', fieldName: 'Phone'},
    { label: 'Email', fieldName: 'Email'},
];
export default class SearchAccountPhoneEmail extends LightningElement {

    accountList = [] ;
    columns = columns;
    Searchtext='';
    ratingValue = "";
    Account = {};

    get optionRating() {
        return [
            { label: 'Hot', value: 'Hot' },
            { label: 'Cold', value: 'Cold' },
            { label: 'Warm', value: 'Warm' },
        ];
    }

    get optionType() {
        return [
            { label: 'Prospect', value: 'Prospect' },
            { label: 'Customer - Direct', value: 'Customer - Direct' },
            { label: 'Customer - Channel', value: 'Customer - Channel' },
            { label: 'Channel Partner / Reseller', value: 'Channel Partner / Reseller' },
            { label: 'Installation Partner', value: 'Installation Partner' },
            { label: 'Technology Partner', value: '	Technology Partner' },
            { label: 'Other', value: 'Other' },
        ];
    }

    get leadsourceOption() {
        return [
            { label: 'Web', value: 'Web' },
            { label: 'Phone Inquiry', value: 'Phone Inquiry' },
            { label: 'Partner Referral', value: 'Partner Referral' },
            { label: 'Purchased List', value: 'Purchased List' },
            { label: 'Other', value: 'Other' },
        ];
    }

    get levelOption() {
        return [
            { label: 'Primary', value: 'Primary' },          
            { label: 'Secondary', value: 'Secondary' },
            { label: 'Tertiary', value: 'Tertiary' },
        ];
    }

    handleLeadSourceChange(){

    }

    handleRatingChange(event){
      this.ratingValue = event.detail.value;
    }

    handlePhone(){

    }

    handleTypeChange(){
        
    }
    
    handleSearchText(event) {
        this.Searchtext = event.target.value;
    }

    handlesearch(){
        console.log('Inside of Search Text');
        
        fetchAccountData({searchText : this.Searchtext})
        .then((result)=>{
          console.log('Result==>'+JSON.stringify(result));
          this.accountList = result;
        })
        .catch((error)=>{
         console.log(error);
        });
    }

    handleRowSelection(event){
        const selectedRows  =   event.detail.selectedRows;
        console.log("Selected Rows = "+selectedRows)
        alert('selectedRows=>'+JSON.stringify(selectedRows));
        this.selectedRecordsCount = event.detail.selectedRows.length;
  
        if (selectedRows.length > 0) {
            const selectedAccount = selectedRows[0];
            this.Account = {
                Name: selectedAccount.Name,
                Rating: selectedAccount.Rating,
                Phone: selectedAccount.Phone,
                Email: selectedAccount.Email,
                Type: selectedAccount.Type
            };
        } else {
            this.Account = {};
        }
    }
}