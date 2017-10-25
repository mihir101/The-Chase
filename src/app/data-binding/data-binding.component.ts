import { Component } from '@angular/core';

@Component({

selector: 'app-databinding',
templateUrl: './data-binding.component.html',


})

export class DataBindingComponent{
    username: string;
    resetButtonEnabled: boolean;
    EnableButton() {
        this.resetButtonEnabled = true;
    }
    
    ClearUserName(){
        this.username="";
    }
    constructor(){
        this.username ="";
        this.resetButtonEnabled = false;   
    }
}
