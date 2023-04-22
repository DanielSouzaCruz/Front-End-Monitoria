import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.page.html',
  styleUrls: ['./placeholder.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PlaceholderPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
