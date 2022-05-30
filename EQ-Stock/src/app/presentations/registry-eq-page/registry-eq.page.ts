import { Component } from "@angular/core";
import { AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { Observable } from "rxjs";
import { CategoryModel } from "src/app/domain/model/resource/Category.model";
import { PartsModel } from "src/app/domain/model/resource/Parts.model";
import { CategoryService } from "src/app/domain/services/Category.service";
import { PartsService } from "src/app/domain/services/Parts.service";

@Component({
    selector: 'eqs-registry-page',
    templateUrl: './registry-eq.page.html',
    styleUrls: ['./registry-eq.page.scss']
})
export class RegistryEqPage {

    formGroup: FormGroup = this.formBuilder.group({
        partsName: ['', Validators.required],
        productName: [''],
        categoryUid: ['', Validators.required],
        code: [''],
        memo: ['']
    });

    get partsName() { return this.formGroup.get('partsName'); }
    get productName() { return this.formGroup.get('productName'); }
    get categoryUid() { return this.formGroup.get('categoryUid'); }
    get code() { return this.formGroup.get('code'); }
    get memo() { return this.formGroup.get('memo'); }

    get valid(): boolean { return this.formGroup.valid; }

    readonly categoryList$: Observable<CategoryModel[]>;

    constructor(private categoryService: CategoryService,
        private toastCtrl: ToastController,
        private partsService: PartsService,
        private formBuilder: FormBuilder) {
        this.categoryList$ = this.categoryService.fetchAllCategory();
    }

    partsData = {

    }

    /**
     * パーツを登録する
     */
    async onClickRegistryBtn() {
        const category: AngularFirestoreDocument<CategoryModel> = this.categoryService.fetchCategory(this.categoryUid.value);
        const parts: PartsModel = {
            uid: '',
            PartsName: this.partsName.value,
            ProductName: this.productName.value,
            Category: category.ref,
            Code: this.code.value,
            Memo: this.memo.value
        };

        await this.partsService.registryParts(parts);

        const toast: HTMLIonToastElement = await this.toastCtrl.create({ header: 'パーツを登録しました', duration: 1500 });
        await toast.present();
    }

}