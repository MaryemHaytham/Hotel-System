import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from '../../core/service/helper.service';

@Component({
  selector: 'app-userNavbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userData: any;
  roomId: any;
  userRole: any; // Define userRole and userName here
  userName: any;
  profileImage: any;
  notfoundImage: string = "../../../assets/images/avatar.png";

  constructor(private router: Router, private helperService: HelperService, private activatedRoute: ActivatedRoute) {
    this.userRole = localStorage.getItem('userRole'); // Initialize userRole and userName in constructor
    this.userName = localStorage.getItem('userName');
    this.roomId = localStorage.getItem('user_id');
  }

  login() {
    this.router.navigate(['/auth/login']);
  }

  ngOnInit(): void {
    console.log("Initializing...");
    this.getUserById(this.roomId);
  }

  getUserById(id: any) {
    this.helperService.gituserById(id).subscribe({
      next: (res: any) => {
        this.userData = res.data;
        this.profileImage = res.data.user.profileImage;
        console.log(res.data);
      },
      error: (err: any) => {
        console.error('Error:', err);
      },
      complete: () => {
        console.log("Request completed.");

      }
    });
  }
}
