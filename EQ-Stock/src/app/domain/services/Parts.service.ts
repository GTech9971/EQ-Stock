import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PartsModel } from "../model/resource/Parts.model";
import { PartsRepository } from "../repository/Parts.repository";

@Injectable({
    providedIn: 'root'
})
export class PartsService {
    constructor(private repository: PartsRepository) {
    }

    fetchParts(uid: string): Promise<PartsModel> {
        return this.repository.fetchParts(uid);
    }

    fetchAllParts(): Observable<PartsModel[]> {
        return this.repository.fetchAllParts();
    }

    registryParts(model: PartsModel): Promise<void> {
        return this.repository.registryParts(model);
    }

    deleteParts(uid: string): Promise<void> {
        return this.repository.deleteParts(uid);
    }

    updateParts(model: PartsModel): Promise<void> {
        return this.repository.updateParts(model);
    }
}