import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RegistryEqRoutingModule } from "./registry-eq-routing.module";
import { RegistryEqPage } from "./registry-eq.page";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ReactiveFormsModule,
        RegistryEqRoutingModule,
    ],
    declarations: [RegistryEqPage]
})
export class RegistryEqModule { }