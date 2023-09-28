import { Component } from '@angular/core';
import { CatogeryService } from '../services/catogery.service';
import { Catogery } from '../dtattype';

@Component({
  selector: 'app-catogery',
  templateUrl: './catogery.component.html',
  styleUrls: ['./catogery.component.css']
})
export class CatogeryComponent {
  constructor(private catogeryservice: CatogeryService){}
  addcat(val: Catogery){
     this.catogeryservice.addCatogery(val).subscribe((data)=>{
      console.log(data)
     })
  }
}
