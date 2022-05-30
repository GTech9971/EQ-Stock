import { Injectable } from "@angular/core";
import { AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { CategoryModel } from "../model/resource/Category.model";

/**
 * カテゴリのレポジトリ
 */
@Injectable({
    providedIn: 'root'
})
export abstract class CategoryRepository {

    abstract fetchCategory(uid: string): AngularFirestoreDocument<CategoryModel>;

    abstract fetchAllCategory(): Observable<CategoryModel[]>;

    abstract registryCategory(model: CategoryModel): Promise<void>;

    abstract deleteCategory(uid: string): Promise<void>;

    abstract updateCategory(model: CategoryModel): Promise<void>;
}