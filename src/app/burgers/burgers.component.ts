import { Component } from '@angular/core';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.scss']
})
export class BurgersComponent {
  rupees = faIndianRupee;
  orderList =[
    {
      image:'../../assets/Burgers Image/burger 1.png',
      headerText:'TWISTED WHOPPER VEG',
      footerText:'It’s sweet yet spicy, spicy yet sweet.out Limited time',
      price:'199'
    },
    {
      image:'../../assets/Burgers Image/burger 2.jpg',
      headerText:'Veg Burger With Extra Cheese',
      footerText:'Save Rs 99 | Veg Burger with extra cheese regular meal',
      price:'299'
    },
    {
      image:'../../assets/Burgers Image/burger 3.png',
      headerText:'VEG BURGER WITH EXTRA CHEESE',
      footerText:'chilli cheese patty, spicy sause, soft masala buns, it’s cheezy & spicy',
      price:'299'
    },
    {
      image:'../../assets/Burgers Image/burger 4.png',
      headerText:'REGULAR BURGER',
      footerText:'It’s sweet yet spicy, spicy yet sweet.out Limited time',
      price:'99'
    },
    {
      image:'../../assets/Burgers Image/burger 5.png',
      headerText:'VET BURGER',
      footerText:'It’s sweet yet spicy, Veg Burger loaded with vegetable and sause',
      price:'199'
    },
    {
      image:'../../assets/Burgers Image/burger 6.png',
      headerText:'Veg Burger With Extra VEGATABLE',
      footerText:'Our signature Burger with 7 layer between th buns.',
      price:'399'
    },
    {
      image:'../../assets/Burgers Image/burger 7.png',
      headerText:'TWISTED BURGER VEG',
      footerText:'It’s sweet yet spicy, spicy yet sweet.out Limited time',
      price:'99'
    },
    {
      image:'../../assets/Burgers Image/burger 8.png',
      headerText:'FIERY CHICKEN BURGER',
      footerText:'Spicy fried chicken, loads of sauces in soft buns',
      price:'249'
    },
    {
      image:'../../assets/Burgers Image/burger 9.jpg',
      headerText:'MUTTON BURGER',
      footerText:'Flame grilled signature mutton party burger',
      price:'399'
    },
    
  ]
}
