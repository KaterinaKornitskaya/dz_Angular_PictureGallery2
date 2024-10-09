import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Picture} from "./picture";
import { Observable } from "rxjs";
import {map, catchError} from "rxjs/operators";

@Injectable()
export class HttpService{
    errorMessage: string = "";
    constructor (private http:HttpClient) {}

    getData() : Observable<Picture[]>{
        return this.http.get("assets/picturesList.json").pipe(map((data:any)=>{
            let pictList = data["picturesList"];
            return pictList.map(function(pict:any): Picture{
                return new Picture(pict.pictureImage, pict.pictureName, pict.pictureAuthor, pict.pictureYear, pict.pictureDescription );
            });
        }),
        catchError(err=>{
            console.log(err);
            this.errorMessage = err.message;
            return[];
        }));
    }
}