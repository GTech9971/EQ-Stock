import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { PartsModel } from "../domain/model/resource/Parts.model";
import { PartsRepository } from "../domain/repository/Parts.repository";

@Injectable({
    providedIn: 'root'
})
export class PartsImplRepository extends PartsRepository {

    constructor(private firestore: AngularFirestore) {
        super();
    }

    fetchParts(uid: string): Promise<PartsModel> {
        throw new Error("Method not implemented.");
    }

    fetchAllParts(): Observable<PartsModel[]> {
        return this.firestore.collection<PartsModel>('parts').valueChanges();
    }

    registryParts(model: PartsModel): Promise<void> {
        const uid: string = this.firestore.createId();
        model.uid = uid;
        return this.firestore.collection<PartsModel>('parts').doc(uid).set(model);
    }

    deleteParts(uid: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    updateParts(model: PartsModel): Promise<void> {
        throw new Error("Method not implemented.");
    }

}