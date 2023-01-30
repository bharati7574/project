import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  demoOfBinding = '';

  isDisabled = true;
  username = "Ajinkya Katre";

  fullname = "Ajinkya Katre";
  count:number = 0;
  // isDisabled = true
  isupdate : any;
  isArr:string[] = [];
  indCurrencyValueShow = false;

  imgsrc = "https://images.unsplash.com/photo-1672167631481-8b1171d2aad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1128&q=80"
  indCurrencyValue: any;
  newResult:[] = [];
  arrayValue: any;
  display: any;

  isClicked(){
    // alert("Clicked")
    this.demoOfBinding = "Welcome to Shark Tank";
    this.isDisabled = false

  }

  isCount(){
      this.count += 1
  }
  
  onUpdate(event:Event){
    // console.log(event.target)
   this.isupdate = (<HTMLInputElement>event.target).value;
   this.indCurrencyValue = this.isupdate * 84
  }  
  
  onClicked(){
    // console.log(this.indCurrencyValue);
    this.indCurrencyValueShow = true
    this.isArr.push(this.indCurrencyValue)
    this.isArr.forEach(arr =>{
        this.arrayValue = arr;
    })
}

isNotifyHandler(e:any){
    this.display = e;
}

}
