import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CategoryRoutingModule } from "./category-routing.module";
import { CategoryPage } from "./category.page";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        CategoryRoutingModule,
    ], declarations: [
        CategoryPage
    ]
})
export class CategoryPageModule { }