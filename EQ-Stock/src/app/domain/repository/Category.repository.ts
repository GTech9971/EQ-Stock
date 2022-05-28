import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryModel } from "../model/resource/Category.model";

/**
 * カテゴリのレポジトリ
 */
@Injectable({
    providedIn: 'root'
})
export abstract class CategoryRepository {

    abstract fetchCategory(uid: string): Promise<CategoryModel>;

    abstract fetchAllCategory(): Observable<CategoryModel[]>;

    abstract registryCategory(model: CategoryModel): Promise<void>;

    abstract deleteCategory(uid: string): Promise<void>;

    abstract updateCategory(model: CategoryModel): Promise<void>;
}