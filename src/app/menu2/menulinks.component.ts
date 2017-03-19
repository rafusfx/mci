import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'menu2-link',
  templateUrl: './menulinks.component.html',
  styleUrls: ['./menulinks.component.scss'],
 
})
export class MenuLink implements OnInit {
@Input() menulink: MenuLink;
@Input('font-size') size:number;
@Input() color:string;
/*border:string;
corpo:string;*/

    constructor(/*fontSize:string,color:string,border:string*/){
        this.color = 'pink';
        this.size = 16;
        /*this.fontSize = fontSize;
        this.color = color;
        this.border = border;*/

    }

 

  ngOnInit() {
    console.log('Hello Menulinks');
  }

}