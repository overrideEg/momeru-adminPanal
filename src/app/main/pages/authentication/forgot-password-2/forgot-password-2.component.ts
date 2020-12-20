import { API_URLS } from "assets/constants/API_URLS";
import { Router } from "@angular/router";
import { OverrideService } from "./../../../../../@override/utils/override.service";
import { EntityService } from "./../../../../../@override/utils/entity.service";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { FuseConfigService } from "@fuse/services/config.service";
import { fuseAnimations } from "@fuse/animations";

@Component({
    selector: "forgot-password-2",
    templateUrl: "./forgot-password-2.component.html",
    styleUrls: ["./forgot-password-2.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class ForgotPassword2Component implements OnInit {
    forgotPasswordForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private enitiy: EntityService,
        private override: OverrideService,
        private router: Router
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true,
                },
                toolbar: {
                    hidden: true,
                },
                footer: {
                    hidden: true,
                },
                sidepanel: {
                    hidden: true,
                },
            },
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.forgotPasswordForm = this._formBuilder.group({
            email: ["", [Validators.required, Validators.email]],
        });
    }
    onSubmit() {
        this.enitiy
            .save(
                API_URLS.auth.resetPassword.replace(
                    "{email}",
                    this.forgotPasswordForm.value.email
                ),
                this.forgotPasswordForm.value,
                this.override.AuthHeaders
            )
            .subscribe((res: any) => {
                console.log("res", res);
                let email = this.forgotPasswordForm.value.email;
                if (res.status == 201) {
                    this.router.navigate(["/pages/auth/reset-password", email]);
                } else {
                    console.log("errrrrror");
                }
            });
    }
}
