import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.page.html',
  styleUrls: ['./materias.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MateriasPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goHome(){
    this.navCtrl.navigateBack('home')
  }

}
