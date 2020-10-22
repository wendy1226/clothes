import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private router: Router) { }

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
