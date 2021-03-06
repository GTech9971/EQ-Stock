import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from "@firebase/util";
import { Observable } from "rxjs";

import { CategoryModel } from "../domain/model/resource/Category.model";
import { CategoryRepository } from "../domain/repository/Category.repository";

@Injectable({
    providedIn: 'root'
})
export class CategoryImplRepository extends CategoryRepository {

    constructor(private firestore: AngularFirestore) {
        super();
    }

    fetchCategory(uid: string): AngularFirestoreDocument<CategoryModel> {
        return this.firestore.collection<CategoryModel>('categories').doc(uid);
    }

    fetchAllCategory(): Observable<CategoryModel[]> {
        return this.firestore.collection<CategoryModel>('categories').valueChanges();
    }

    registryCategory(model: CategoryModel): Promise<void> {
        const uid: string = this.firestore.createId();
        model.uid = uid;
        return this.firestore.collection<CategoryModel>('categories').doc(uid).set(model);
    }

    deleteCategory(uid: string): Promise<void> {
        return this.firestore.collection<CategoryModel>('categories').doc(uid).delete();
    }

    updateCategory(model: CategoryModel): Promise<void> {
        throw new Error("Method not implemented.");
    }

}