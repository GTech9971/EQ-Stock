import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistryEqPage } from "./registry-eq.page";

const routes: Routes = [
    {
        path: '',
        component: RegistryEqPage,
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistryEqRoutingModule { }