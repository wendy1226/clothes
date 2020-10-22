import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  private selectedSegment: string = 'MODIFY'

  constructor(private router: Router) { }

  segmentChanged(event:any) {
    this.selectedSegment = event.target.value
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
