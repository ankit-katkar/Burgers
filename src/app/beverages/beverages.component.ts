import { Component } from '@angular/core';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.scss']
})
export class BeveragesComponent {
  rupees = faIndianRupee;
  orderList =[
    {
      image:'../../assets/Beverages/Menu Beverage image.png',
      headerText:'PEPSI (MEDIUM)',
      footerText:'Pepsi',
      price:'99'
     
    },
    {
      image:'../../assets/Beverages/Mountan Dew.jpg',
      headerText:'MOUNTAN DEW (MEDIUM)',
      footerText:'Mountan Dew',
      price:'99'
    },
    {
      image:'../../assets/Beverages/Menu Beverage image.png',
      headerText:'PEPSI (LARGE)',
      footerText:'Pepsi',
      price:'129'
    },
    {
      image:'../../assets/Beverages/Mountan Dew.jpg',
      headerText:'MOUNTAN DEW (LARGE)',
      footerText:'Mountan Dew',
      price:'129'
    },
    {
      image:'../../assets/Beverages/7UP.jpg',
      headerText:'7UP (MEDIUM)',
      footerText:'7UP',
      price:'99'
    },
    {
      image:'../../assets/Beverages/7UP.jpg',
      headerText:'7UP (LARGE)',
      footerText:'7UP',
      price:'129'
    },    
  ]
}
