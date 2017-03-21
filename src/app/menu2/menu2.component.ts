import { Component, OnInit } from '@angular/core';
import{MenuLink} from './menulinks.component';

@Component({
  
  selector: 'menu2-comp',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.scss'],
  
})

export class MenuComponent2 implements OnInit {
menulinks: MenuLink[];
MenuName: string = "MenuLink";
Color:string = "green";
FontSize:number = 12;
Border:string;
BorderTop:string;
BorderBottom:string;
BorderLeft:string;
BorderRight:string;
TextShadow:string;
MarginLeft:number;
MarginRight:number;
MarginTop:number;
MarginBottom:number;
PaddingLeft:number;
PaddingRight:number;
PaddingTop:number;
PaddingBottom:number;  

  constructor() {
  

   
  }

  AddLinks(numoflinks:number){
    this.menulinks=[];
    var i;
    for(i=0;i<numoflinks;i++){
        var newlink = new MenuLink();
        this.menulinks.push(newlink);
    }
  }

  /*FontSize(size:number){
    console.log("returned "+ size );
    return size;
  }

  changeFontSize(fontSize:number){
    console.log("changed to "+ fontSize );
    this.FontSize(fontSize);
  }*/

  changeTab(tab:string){
    event.preventDefault();
    let tabPage = document.getElementById(tab);
   
    let elements : HTMLCollectionOf<Element> = document.getElementsByClassName("tab-pane");
    let elementsArr = Array.prototype.slice.call(elements);
   
    let i;
    for( i=0;i< elements.length;i++){

      if(tabPage == elementsArr[i]){
          elementsArr[i].style.display="block";
      }else{
          elementsArr[i].style.display="none";
      }
    }

  }

  ngOnInit() {
    console.log('Hello Menu2');
  }

}