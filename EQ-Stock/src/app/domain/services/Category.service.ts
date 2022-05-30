import { Injectable } from "@angular/core";
import { AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { CategoryModel } from "../model/resource/Category.model";
import { CategoryRepository } from "../repository/Category.repository";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(private repository: CategoryRepository) {
    }

    fetchCategory(uid: string): AngularFirestoreDocument<CategoryModel> {
        return this.repository.fetchCategory(uid);
    }

    fetchAllCategory(): Observable<CategoryModel[]> {
        return this.repository.fetchAllCategory();
    }

    registryCategory(model: CategoryModel): Promise<void> {
        return this.repository.registryCategory(model);
    }

    deleteCategory(uid: string): Promise<void> {
        return this.repository.deleteCategory(uid);
    }

    updateCategory(model: CategoryModel): Promise<void> {
        return this.repository.updateCategory(model);
    }

}