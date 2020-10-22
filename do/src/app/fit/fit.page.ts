import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-fit',
  templateUrl: './fit.page.html',
  styleUrls: ['./fit.page.scss'],
})
export class FitPage implements OnInit{
  
  myphoto:any;

  constructor(private router: Router , private camera: Camera) {}

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      //if (data.length == 1000) {
        //event.target.disabled = true;
      //}
    }, 500);
  }


  goCamera(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  goHome(){
    this.router.navigate(['home']);
  }

  goMall(){
    this.router.navigate(['mall']);
  }

  goFit(){
    this.router.navigate(['fit']);
  }

  goCart(){
    this.router.navigate(['cart']);
  }

  goPersonal(){
    this.router.navigate(['personal']);
  }
  
  ngOnInit() {
  }

}
