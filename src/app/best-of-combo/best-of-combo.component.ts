import { Component } from '@angular/core';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-best-of-combo',
  templateUrl: './best-of-combo.component.html',
  styleUrls: ['./best-of-combo.component.scss']
})
export class BestOfComboComponent {
  rupees = faIndianRupee;
  orderList =[
    {
      image:'../../assets/Best Of Combo image/burger combo 1.png',
      headerText:'CLASSIC COMBO',
      footerText:'Classic combo 1 Burger with extra cheese | 1 Pack of fries | 1 pepsi, yumm.',
      price:'349'
    },
    {
      image:'../../assets/Burgers Image/burger 2.jpg',
      headerText:'FIRE ME UP',
      footerText:'1 crispy Burger with doubble patty and extra cheese | 1 Cheese Frise',
      price:'259'
    },
    {
      image:'../../assets/Best Of Combo image/burger combo 3.png',
      headerText:'CLASSIC DUO - VEG',
      footerText:'1 Crispy veg Burger | 1 med Frise | 1 large Chicken Nugget',
      price:'499'
    },
    
  ]
}
