import { Component } from '@angular/core';
import {BLE} from 'ionic-native';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public deviceAddress:string;
  public deviceData:string;
  public heartRate:string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  }
  funcionou(){
    BLE.connect(this.deviceAddress).subscribe(peripheralData => {
      console.log(peripheralData);
    },error => {
      console.log('disconnected');
    });
  }
  bleConnect(){
    BLE.scan([], 5).subscribe(device => {
      console.log(JSON.stringify(device));
      this.deviceAddress = device.id.toString();
      BLE.connect(device.id).subscribe(peripheralData => {
        console.log("Deu certo=>"+JSON.stringify(peripheralData.services[2]));
        this.deviceData = JSON.stringify(peripheralData);
        console.log(this.deviceData);



        BLE.startNotification(device.id, peripheralData.services[2], "2a37").subscribe(buffer => {
          var value = new Uint8Array(buffer);

          console.log(value[1]);
          this.heartRate = value[1].toString();
          this.toastTestSim();


        },error =>{
          console.log("Deu ruim=>  "+ error.toString());
        });
      },error => {
        console.log("Deu ruim=>   " + error.toString());
      });
    }, error => {
      console.log(error);
    });
  }
  toastTestSim(){
    let toast = this.toastCtrl.create({
    message: this.heartRate,
    duration: 1000,
    showCloseButton: false,
  });
    toast.present();
  }
}
