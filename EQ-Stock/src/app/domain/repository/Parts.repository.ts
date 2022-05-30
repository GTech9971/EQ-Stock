import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PartsModel } from "../model/resource/Parts.model";

@Injectable({
    providedIn: 'root'
})
export abstract class PartsRepository {
    abstract fetchParts(uid: string): Promise<PartsModel>;

    abstract fetchAllParts(): Observable<PartsModel[]>;

    abstract registryParts(model: PartsModel): Promise<void>;

    abstract deleteParts(uid: string): Promise<void>;

    abstract updateParts(model: PartsModel): Promise<void>;
}