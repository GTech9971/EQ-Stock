import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable } from "rxjs";

import * as auth from "firebase/auth";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    readonly user$;

    constructor(private firestore: AngularFireAuth) {
        this.user$ = this.firestore.user;
    }

    async login(): Promise<void> {
        const ret = await this.firestore.signInWithPopup(new auth.GoogleAuthProvider());
        console.log(ret);
    }

    logout(): Promise<void> {
        return this.firestore.signOut();
    }
}