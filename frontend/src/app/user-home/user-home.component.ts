import { Component } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {
  navItems = ['Home', 'My Props', 'Buy Props', 'Sell Props', 'Auction'];
  activeNavItem = 'Home';
  activeSection = 0;

  workItems = [
    {
      image: 'assets/img/work-victory.jpg',
      title: 'Victory',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
    },
    {
      image: 'assets/img/work-metiew-smith.jpg',
      title: 'Metiew & Smith',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
    },
    {
      image: 'assets/img/work-alex-nowak.jpg',
      title: 'Alex Nowak',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
    }
  ];

  introOptions = [
    {
      title: 'Metiew & Smith',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
    },
    {
      title: 'Fantasy interactive',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
    },
    {
      title: 'Paul & shark',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.'
    }
  ];

  setActiveNavItem(item: string, index: number) {
    this.activeNavItem = item;
    this.activeSection = index;
  }

  submitWorkRequest(event: Event) {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Work request submitted');
  }
}
