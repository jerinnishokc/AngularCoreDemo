import { OnInit, Injectable, Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
    selector: "app-products",
    templateUrl: "./products.component.html"
})

export class ProductsComponent implements OnInit {

    public products: any = [];
    public fruits: string[] = ["Apple","Orange"]; 

    constructor(private http: HttpClient) { }

    ngOnInit() {
        //this.http.get("/api/products")
        //    .pipe(
        //        map((data: any[]) => {
        //            this.products = data;
        //        })
        //    );               
        this.http.get("/api/products")
            .pipe(
                map((data: any[]) => {
                    this.products = data;
                    return data;
                })
            )
            .subscribe(data => {
                //if (success) {
                    console.log("Success");
                    console.log(data);
                    console.log(this.products);
                //this.products = res;
                //}
            });
    }
        
    
}