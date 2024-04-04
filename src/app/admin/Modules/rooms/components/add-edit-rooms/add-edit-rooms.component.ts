import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomsService } from 'src/app/admin/services/rooms/rooms.service';
import { HelperService } from 'src/app/core/service/helper.service';
import { FacilitiesService } from '../../../../services/facilities/facilities.service';

@Component({
  selector: 'app-add-edit-rooms',
  templateUrl: './add-edit-rooms.component.html',
  styleUrls: ['./add-edit-rooms.component.scss']
})

export class AddEditRoomsComponent {

  constructor(private _HelperService: HelperService, private _RoomsService: RoomsService, private dialog: MatDialog, private _Router: Router, private _ActivatedRoute: ActivatedRoute, private _FacilitiesService: FacilitiesService) {
    this.recipeId = _ActivatedRoute.snapshot.params['id'];
  }

  pageSize = 5;
  pageIndex = 1;
  recipeId: number = 0;
  tags: any[] = [];
  Categories: any[] = [];
  tagId: number = 0;
  ids: number | any = 0;
  categoriesIds: number = 0;
  files: File[] = [];
  imgSrc: any;
  onAddRecipeMessag: string = '';
  recipeData: any;


  ngOnInit(): void {
    this.gitAllFacilities();
    if (this.recipeId > 0) {
      this.getRecipeById(this.recipeId);
    }
  }

  roomForm = new FormGroup({
    id: new FormControl(null),
    name: new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
    description: new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.minLength(3)]),
    price: new FormControl(null, [Validators.required]),
    tagId: new FormControl(null, [Validators.required]),
    recipeImage: new FormControl(null, [Validators.required]),
    categoriesIds: new FormControl(null, [Validators.required]),
  })


  gitAllFacilities() {
    let paramsApi = {
      pageSize: this.pageSize,
      pageNumber: this.pageIndex,
    }
    this._FacilitiesService.gitAllFacilities(paramsApi).subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }


  onSelect(event: any) {
    console.log(event);
    this.imgSrc = event.addedFiles[0];
    console.log(this.imgSrc)
    this.files.push(...event.addedFiles)
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1)
  }


  goToRecipe() {
    this._Router.navigate(['/dashboard/admin/recipes'])
  }

  onSubmit(recipeData: FormGroup) {
    console.log(recipeData.value)
    recipeData.value.id = this.recipeId
    let myData = new FormData();
    myData.append('name', recipeData.value.name)
    myData.append('description', recipeData.value.description)
    myData.append('price', recipeData.value.price)
    myData.append('tagId', recipeData.value.tagId)
    myData.append('categoriesIds', recipeData.value.categoriesIds)
    myData.append('recipeImage', this.imgSrc)

    if (this.recipeId) {
      myData.append('id', recipeData.value.id)
      this.editeRecipe(myData);
    } else {
      this.addRecipe(myData)
    }
  }

  editeRecipe(myData: any) {

    this._RoomsService.EditeRoom(this.recipeId, myData).subscribe({
      next: (response) => {
        this.onAddRecipeMessag = response.message;
        console.log(response.message)
      }, error: (err) => {
        // this._ToastrService.error('error !')
      }, complete: () => {
        // this._ToastrService.success(`${this.onAddRecipeMessag}`);
        this._Router.navigate(['/dashboard/admin/recipes']);
      },
    })
  }

  addRecipe(myData: any) {
    this._RoomsService.AddRoom(myData).subscribe({
      next: (response) => {
        this.onAddRecipeMessag = response.message;
        console.log(response.message)
      }, error: (err) => {
        // this._ToastrService.error('error !')
      }, complete: () => {
        // this._ToastrService.success(`${this.onAddRecipeMessag}`);
        this._Router.navigate(['/dashboard/admin/recipes']);
      },
    })
  }


  getRecipeById(id: number) {
    this._RoomsService.gitRoomById(id).subscribe({
      next: (res: any) => {
        this.recipeData = res
      }, error: () => {
      }, complete: () => {
        let arr: any[] = [...this.recipeData.category]
        this.ids = arr.map(x => x.id);


        this.roomForm.patchValue({
          name: this.recipeData.name,
          description: this.recipeData.description,
          price: this.recipeData.price,
          tagId: this.recipeData.tag.id,
          recipeImage: this.recipeData.recipeImage,
          categoriesIds: this.recipeData.category.map((x: any) => x.id),
        })
      }
    })
  }
}
