import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cadastrobasico',
  templateUrl: './cadastrobasico.page.html',
  styleUrls: ['./cadastrobasico.page.scss'],
})
export class CadastrobasicoPage implements OnInit {

  constructor(private apiService: ApiService) {
    this.createData();
   }
  
  ngOnInit() {
  }

}
