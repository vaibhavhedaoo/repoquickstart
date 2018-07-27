import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isOn: boolean = false;
  constructor(public navCtrl: NavController, public flashlight: Flashlight) {
  }
  async isAvailable():Promise<any>{
    try{
      return await this.flashlight.available();
    }catch(e){
      console.log(e);
    }
  }
  async toggleFlash():Promise<any>{
    try{
      let available = await this.isAvailable();
      if(available){
        await this.flashlight.toggle();
        this.isOn = !this.isOn;
      }else{
        alert("Flash not available...");
      }
    }catch(e){
      console.log(e);
    }
  }
}