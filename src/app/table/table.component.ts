import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 
  @Input() formValueArray: any[] = [];
  isEditing: boolean[] = [];
  save: any;
  sortOrder!: number;
// searchText: any;
searchTerm!: string;
  filteredNames!: any[];
// filteredArray: any[] = [];
  constructor() { }

  ngOnInit(): void {


    
    this.isEditing = new Array(this.formValueArray.length);
    // this.filteredArray = this.formValueArray;
  }

  Edit(index: number) {
    
    this.isEditing[index] = !this.isEditing[index];
  }
  deleteRow(index: number) {
    this.formValueArray.splice(index, 1);
  }
  saveEdit(index: number) {
    this.Edit(index);
    
  }

  sort1(field: string) {
    const sortedArray = this.formValueArray.sort((a, b) => b[field] - a[field]);
    const largestValue = sortedArray[0][field];
    console.log( largestValue);
    
  }
  sort2(field: string) {
    const sortedArray = this.formValueArray.sort((a, b) => a[field] - b[field]);
    const smallestValue = sortedArray[0][field];
    console.log(smallestValue);
    
    }


  //   search() {
  //     if (this.searchTerm !== '') {
  //     this.formValueArray = this.formValueArray.filter((formValue) => {
  //     return formValue.UserName.toLowerCase().match(this.searchTerm.toLowerCase());
  //     });
  //   }
  //   else {
  //      this. formValueArray =this.formValueArray
  //   }
  // }


  // set searchText(value: string) {
  //   this.searchText = value;
  //   if (value.length >= 3) {
  //     this.filteredNames = this.formValueArray.filter(name => name.toLowerCase().includes(value.toLowerCase()));
  //   } else {
  //     this.filteredNames = this.formValueArray;
  //   }
  // }
  
}


























// ngOnInit(): void {
//   // this.dataSource.data = this.formValueArray;
//   // console.log(this.dataSource);
//   // this.dataSource = new MatTableDataSource(this.formValueArray);
// }