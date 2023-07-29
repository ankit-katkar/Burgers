import { Component } from '@angular/core';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fires',
  templateUrl: './fires.component.html',
  styleUrls: ['./fires.component.scss']
})
export class FiresComponent {
  rupees = faIndianRupee;
  orderList =[
    {
      image:'../../assets/Fries image/menu fries image.jpg',
      headerText:'FRIES (SMALL)',
      footerText:'The perfect crispy partner',
      price:'90'
    },
    {
      image:'../../assets/Fries image/menu fries image.jpg',
      headerText:'FRIES (MEDIUM)',
      footerText:'The perfect crispy partner',
      price:'100'
    },
    {
      image:'../../assets/Fries image/menu fries image.jpg',
      headerText:'FRIES (LARGE)',
      footerText:'The perfect crispy partner',
      price:'119'
    },
    {
      image:'../../assets/Fries image/fries dip image.jpg',
      headerText:'FRIES GARLIC DIP',
      footerText:'Chefs special garlic sause with herbs',
      price:'29'
    },
    {
      image:'../../assets/Fries image/fries dip image 2.jpg',
      headerText:'FRIES HELL DIP',
      footerText:'Chefs special spicy sause',
      price:'29'
    },
    {
      image:'../../assets/Fries image/fries cheese image.jpg',
      headerText:'CHEESY FRIES',
      footerText:'Crispy french fries, loads of cheese',
      price:'129'
    },    
  ]
}
