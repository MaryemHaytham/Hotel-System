import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users-service/users.service';
import { PageEvent } from '@angular/material/paginator';
import { ViewCommentsComponent } from '../comments/components/view-comments/view-comments.component';
import { MatDialog } from '@angular/material/dialog';
import { ViewuserComponent } from './view/viewuser/viewuser.component';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  constructor(private _UsersService:UsersService,private dialog:MatDialog){}
  length = 50;
  pageSize = 5;
  pageIndex =1;
  pageSizeOptions = [5,10,15];
  pageEvent :PageEvent|any;
  tableUsersData:any[]=[];
  tableData: any;
  ngOnInit(): void {
    this.getllUsers()
  }
getllUsers(){
  let params = {
  pageSize:this.pageSize,
  pageIndex:this.pageIndex
  }
  this._UsersService.getAllUsers(params).subscribe({
    next:(res)=>{
      console.log(res);
      this.tableUsersData=res;
      this.tableData=res.data;
      console.log(this.tableUsersData)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
openViewUserDialog(){
  const dialogRef = this.dialog.open(ViewuserComponent, {
    
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result)
    if(result){
      
    }

    
  });
}

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

}
