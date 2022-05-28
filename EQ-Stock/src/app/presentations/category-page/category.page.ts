import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { Observable } from "rxjs";
import { CategoryModel } from "src/app/domain/model/resource/Category.model";
import { CategoryService } from "src/app/domain/services/Category.service";

@Component({
    selector: 'eqs-category-page',
    templateUrl: './category.page.html',
    styleUrls: ['./category.page.scss']
})
export class CategoryPage implements OnInit {

    readonly categoryList$: Observable<CategoryModel[]>;

    constructor(private categoryService: CategoryService,
        private alertCtrl: AlertController) {
        this.categoryList$ = this.categoryService.fetchAllCategory();
    }


    ngOnInit(): void {
    }

    async onClickAddCategoryBtn() {
        const alert: HTMLIonAlertElement = await this.alertCtrl.create({
            header: 'カテゴリの追加',
            inputs: [
                {
                    type: 'text',
                    name: 'name',
                    placeholder: 'カテゴリー名',
                },
            ],
            buttons: [
                {
                    text: '決定',
                    role: 'Ok',
                    handler: async (data: { name: string }) => {
                        const category: CategoryModel = {
                            CategoryName: data.name,
                            uid: '',
                            CategoryCount: 0,
                        };
                        await this.categoryService.registryCategory(category);
                    }
                }
            ]
        });

        await alert.present();
    }

}