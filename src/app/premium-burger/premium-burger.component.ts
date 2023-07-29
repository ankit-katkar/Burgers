import { Component } from '@angular/core';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-premium-burger',
  templateUrl: './premium-burger.component.html',
  styleUrls: ['./premium-burger.component.scss']
})
export class PremiumBurgerComponent {
  rupees = faIndianRupee;
  orderList =[
    {
      image:'../../assets/Burgers Image/burger 1.png',
      headerText:'HOT & CHEEZY BURGER',
      footerText:'Chilli cheese party, spicy sause and soft masala buns.',
      price:'299'
    },
    {
      image:'../../assets/Burgers Image/burger 2.jpg',
      headerText:'PANNER ROYALE BURGER',
      footerText:'It’s sweet yet spicy with extra panner & cheese and soft masala buns.',
      price:'249'
    },
    {
      image:'../../assets/Burgers Image/burger 3.png',
      headerText:'FIERY CHICKEN BURGER',
      footerText:'chilli cheese patty, spicy sause, soft masala buns, it’s cheezy & spicy',
      price:'299'
    },
    {
      image:'../../assets/Burgers Image/burger 9.jpg',
      headerText:'CHICKEN TANDOORI BURGER',
      footerText:'Flame Grilled tandoori chicken, veg khurchan, soft masala buns.',
      price:'399'
    },
    
    
  ]
}
