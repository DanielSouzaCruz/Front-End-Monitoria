import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  userType : any;

  goTeste(userType:any){
    console.log(userType)
  }
  
  goHome(){
    this.navCtrl.navigateForward('home')
  }


  ngOnInit() {
  }

}

