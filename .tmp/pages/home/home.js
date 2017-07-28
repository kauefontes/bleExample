import { Component } from '@angular/core';
import { BLE } from 'ionic-native';
import { NavController, ToastController } from 'ionic-angular';
export var HomePage = (function () {
    function HomePage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    HomePage.prototype.funcionou = function () {
        BLE.connect(this.deviceAddress).subscribe(function (peripheralData) {
            console.log(peripheralData);
        }, function (error) {
            console.log('disconnected');
        });
    };
    HomePage.prototype.bleConnect = function () {
        var _this = this;
        BLE.scan([], 5).subscribe(function (device) {
            console.log(JSON.stringify(device));
            _this.deviceAddress = device.id.toString();
            BLE.connect(device.id).subscribe(function (peripheralData) {
                console.log("Deu certo=>" + JSON.stringify(peripheralData.services[2]));
                _this.deviceData = JSON.stringify(peripheralData);
                console.log(_this.deviceData);
                BLE.startNotification(device.id, peripheralData.services[2], "2a37").subscribe(function (buffer) {
                    var value = new Uint8Array(buffer);
                    console.log(value[1]);
                    _this.heartRate = value[1].toString();
                    _this.toastTestSim();
                }, function (error) {
                    console.log("Deu ruim=>  " + error.toString());
                });
            }, function (error) {
                console.log("Deu ruim=>   " + error.toString());
            });
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.toastTestSim = function () {
        var toast = this.toastCtrl.create({
            message: this.heartRate,
            duration: 1000,
            showCloseButton: false,
        });
        toast.present();
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
        { type: ToastController, },
    ];
    return HomePage;
}());
//# sourceMappingURL=home.js.map