import { DocumentReference } from "@angular/fire/compat/firestore";
import { CategoryModel } from "./Category.model";

/**
 * パーツ
 */
export interface PartsModel {
    uid: string;
    PartsName: string;
    ProductName: string;
    Category: DocumentReference<CategoryModel>;
    Code: string;
    Memo: string;
}