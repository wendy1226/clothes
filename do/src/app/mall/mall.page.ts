import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-mall',
  templateUrl: './mall.page.html',
  styleUrls: ['./mall.page.scss'],
})
export class MallPage implements OnInit {

  title = '日系';
  subtitle = '75%';
  percent = 75;
  title2 = '韓系';
  subtitle2 = '50%';
  percent2 = 50;

  private selectedSegment: string = 'RECOMMEND'

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

  goGoodtail(){
    this.router.navigate(['goodtail'])
  }

  ngOnInit() {
  }

}
