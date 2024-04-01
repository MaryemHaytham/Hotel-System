import { Component } from '@angular/core';
import { HomeService } from '../../services/home-service/home.service';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  // testChart: any = [];
  // userData: any;
  // country: string = '';
  // creationDate: any;
  // modificationDate: any;
  // email: string = '';
  // roleInSystem: string = '';
  // imagePath: string = '';
  // phoneNumber: number = 0;
  // userName: string = '';
  // message: string = '';
  // usersCounter: any;
  // userCounter: any = [];
  // chart: any = [];
  // newChart: any = [];
  // allDataNewChart: any = [];
  // activatedEmployee: number = 0;
  // NotActivatedEmployee: number = 0;
  // allEmployee: number = 0;
  // rols: any = `${localStorage.getItem('role')}`;
  // allTasks: number = 0;
  // toDoTasks: number = 0;
  // inProgressTasks: number = 0;
  // doneTasks: number = 0;
  // constructor(private _HomeService:HomeService) { }

  ngOnInit(): void {
    
    // this.showChartsData();
    // this.getUserInfo();
    // this.userCount();
    // setTimeout(() => {
    //   this.allDataInfo();
    // }, 1000);
  }

  // showChartsData() {
  //   this._HomeService.getTasksCount().subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       const usersData = response.data.users;
  
  //       this.chart = new Chart('canvas', {
  //         type: 'bar',
  //         data: {
  //           labels: ['Users', 'Admins'],
  //           datasets: [{
  //             label: 'Number of Users and Admins',
  //             data: [usersData.user, usersData.admin],
  //             backgroundColor: ['#d8cfbe', '#ef9b28'],
  //             borderWidth: 1
  //           }]
  //         },
  //         options: {
  //           scales: {
  //             y: {
  //               beginAtZero: true,
  //               ticks: {
  //                 stepSize: 1
  //               }
  //             }
  //           }
  //         }
  //       });
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //       console.log('Chart creation complete');
  //     }
  //   });
  // }

  // getUserInfo() {
  //   this._HomeService.currentUser().subscribe({
  //     next: (response) => {
  //       console.log(response);
  //       this.userData = response;
  //       this.userName = response.rooms;
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }

  // userCount() {
  //   this._HomeService.getUserCount().subscribe({
  //     next: (respones) => {
  //       console.log(respones)
  //       this.userCounter = respones;
  //       this.activatedEmployee = respones.activatedEmployeeCount;
  //       console.log(this.activatedEmployee);
  //       this.NotActivatedEmployee = respones.deactivatedEmployeeCount;
  //       this.allEmployee = respones.activatedEmployeeCount + respones.deactivatedEmployeeCount;
  //     }, error: (error) => {
  //       console.log(error)
  //     }, complete: () => {
  //       this.newChart = new Chart('newCanvas', {
  //         type: 'bar',
  //         data: {
  //           labels: ['Activated Employee Count', 'No Activated Employee Count'],
  //           datasets: [{
  //             label: 'Employee statuse',
  //             data: [this.userCounter.activatedEmployeeCount, this.userCounter.deactivatedEmployeeCount],
  //             backgroundColor: [
  //               '#0e3826',
  //               '#d8cfbe'
  //             ],
  //             borderColor: [
  //               '#0e3826',
  //               '#d8cfbe'
  //             ],
  //             borderWidth: 2
  //           }]
  //         },
  //         options: {
  //           elements: {
  //             line: {
  //               borderWidth: 3
  //             }
  //           }
  //         },
  //       });
  //     }
  //   })
  // }



  // allDataInfo() {
  //   console.log(this.allEmployee);

  //   this.allDataNewChart = new Chart('allData', {
  //     type: 'radar',
  //     data: {
  //       labels: ['activated Employee', 'No activated Employee', 'All Employee', 'All Tasks', 'toDo Tasks', 'inProgress Tasks', 'done Tasks'],
  //       datasets: [{
  //         label: 'Employee statuse',
  //         data: [this.activatedEmployee,
  //         this.NotActivatedEmployee,
  //         this.allEmployee, 0, 0, 0, 0],
  //         fill: true,
  //         backgroundColor: '#ef9c2853',
  //         borderColor: '#ef9b28',
  //         pointBackgroundColor: '#ef9b28',
  //         pointBorderColor: '#fff',
  //         pointHoverBackgroundColor: '#fff',
  //         pointHoverBorderColor: '#ef9b28'
  //       },
  //       {
  //         label: 'Tasks statuse',
  //         data: [0, 0, 0, this.allTasks, this.toDoTasks, this.inProgressTasks, this.doneTasks],
  //         fill: true,
  //         backgroundColor: '#0e382653',
  //         borderColor: '#0e3826',
  //         pointBackgroundColor: '#0e3826',
  //         pointBorderColor: '#fff',
  //         pointHoverBackgroundColor: '#fff',
  //         pointHoverBorderColor: '#0e3826'
  //       }
  //       ]
  //     },
  //   });
  // }

  
}

