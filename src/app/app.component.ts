import { Component, OnInit } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { HttpService } from './http.service';
import { NgFor } from '@angular/common';
// import {GalleryService} from './galleryService';
import { Picture } from './picture';
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common"; 


@Component({
    selector: 'my-app', // Определяется селектор-css для HTML-элемента, который будет представлять компонент.
    standalone: true, // указывает, что компонент будет независимым, то есть для него не нужно создавать дополнительных модулей
    imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault,
        HttpClientModule],
    providers: [HttpService],
    templateUrl: './app.component.html',
    styleUrl: './style.component.css' 
})
   

// Экспортируется класс компонента AppComponent, в котором определяется модель name.
export class AppComponent {

    pictures: Picture[] = [];
    error: any;
    constructor(public httpService: HttpService) {}
    
    ngOnInit(){
        this.httpService.getData().subscribe(
            {
                next:(data:Picture[])=>this.pictures=data
            }
        );
    }
    

    toShow = "";
    myInfo2(num:number):void{
        this.toShow = "show" + num;
    }

    pictureInfo(num:number):string{
        return this.pictures[num].name + ", " +
                this.pictures[num].author + ", " +
                this.pictures[num].year;
    }

    numArr:number[] = [0,1,2,3,4,5,6,7,8,9];

    condition:boolean;
    myCond(x,y):boolean{
        if(x==y) return true;
    }
}