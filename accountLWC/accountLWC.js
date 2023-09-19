import { LightningElement,wire } from 'lwc';

import getAccount from '@salesforce/apex/AccountControllerLWC.getAccount'

export default class AccountLWC extends LightningElement {
    accountList
    rating='Hot'
    @wire(getAccount,{Rating:'$rating'})
    accountHandler({data,error}){
        if(data){
            this.accountList=data;
        }
        if(error){
            console.log(error.message);
        }
    }

}