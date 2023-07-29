import { Component } from '@angular/core';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-our-menu',
  templateUrl: './our-menu.component.html',
  styleUrls: ['./our-menu.component.scss']
})
export class OurMenuComponent {
  rupees = faIndianRupee;

orderList =[
  {
    image:'../../assets/Deal Of The Day Image/Deal Of The Day Image One.png',
    headerText:'TWISTED WHOPPER VEG',
    footerText:'It’s sweet yet spicy, spicy yet sweet.out Limited time',
    price:'199'
  },
  {
    image:'../../assets/Deal Of The Day Image/Deal Of The Day Image Two.jpg',
    headerText:'Veg Burger With Extra Cheese',
    footerText:'Save Rs 99 | Veg Burger with extra cheese regular meal',
    price:'299'
  },
  {
    image:'../../assets/Deal Of The Day Image/Deal Of The Day Image Three.jpg',
    headerText:'Pepsi Large',
    footerText:'Pepsi',
    price:'99'
  },
  
]
}
