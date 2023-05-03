import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.page.html',
  styleUrls: ['./placeholder.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlaceholderPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goPerfil(){
    this.navCtrl.navigateForward('perfil')
  }

  goMaterias(){
    this.navCtrl.navigateForward('materias')
  }

  ngOnInit() {
  }

}
