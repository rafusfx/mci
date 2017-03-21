import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'menu2-link',
  templateUrl: './menulinks.component.html',
  styleUrls: ['./menulinks.component.scss'],
 
})
export class MenuLink implements OnInit {
@Input() menulink: MenuLink;
@Input('MenuName') menuName:string;
@Input('Color') color:string;
@Input('FontSize') size:string;
@Input('FontWeight') weight:string;
@Input('Border') border:string;
@Input('BorderTop') borderTop:string;
@Input('BorderBottom') borderBottom:string;
@Input('BorderLeft') borderLeft:string;
@Input('BorderRight') borderRight:string;
@Input('TextShadow') textShadow:string;
@Input('MarginLeft') marginLeft:number;
@Input('MarginRight') marginRight:number;
@Input('MarginTop') marginTop:number;
@Input('MarginBottom') marginBottom:number;
@Input('PaddingLeft') paddingLeft:number;
@Input('PaddingRight') paddingRight:number;
@Input('PaddingTop') paddingTop:number;
@Input('PaddingBottom') paddingBottom:number;



    constructor(/*fontSize:string,color:string,border:string*/){
        /*this.color = 'pink';
        this.size = 16;
        this.fontSize = fontSize;
        this.color = color;
        this.border = border;*/

    }

 

  ngOnInit() {
    console.log('Hello Menulinks');
  }

}