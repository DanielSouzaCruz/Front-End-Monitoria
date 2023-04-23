import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {

  public dados =[{
    nome: 'Carls',
    cpf: 1111111111-1,
    turma: '3°A',
    telefone: '999999999',
    endereco: 'Rua Carls Varls Charls',
    senha:'**********'
  }]
  constructor() { }

  ngOnInit() {
  }

}
