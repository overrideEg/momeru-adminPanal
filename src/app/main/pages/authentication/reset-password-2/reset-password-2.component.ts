import { API_URLS } from "assets/constants/API_URLS";
import { EntityService } from "./../../../../../@override/utils/entity.service";
import { OverrideService } from "./../../../../../@override/utils/override.service";
import { Router } from "@angular/router";
import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import {
    AbstractControl,
    FormBuilder,
    FormGroup,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { FuseConfigService } from "@fuse/services/config.service";
import { fuseAnimations } from "@fuse/animations";

@Component({
    selector: "reset-password-2",
    templateUrl: "./reset-password-2.component.html",
    styleUrls: ["./reset-password-2.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class ResetPassword2Component implements OnInit, OnDestroy {
    resetPasswordForm: FormGroup;

    // Private
    private _unsubscribeAll: Subject<any>;

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

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.resetPasswordForm = this._formBuilder.group({
            email: ["", [Validators.required, Validators.email]],
            oldPassword: ["", Validators.required],
            password: ["", Validators.required],
            passwordConfirm: [
                "",
                [Validators.required, confirmPasswordValidator],
            ],
        });

        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.resetPasswordForm
            .get("password")
            .valueChanges.pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this.resetPasswordForm
                    .get("passwordConfirm")
                    .updateValueAndValidity();
            });
    }

    onSubmit() {
        let data = this.resetPasswordForm.value;
        this.enitiy
            .save(API_URLS.auth.changePassword, data)
            .subscribe((res: any) => {
                if (res.status == 201) {
                    this.enitiy.showSuccessToast(
                        "successfully Change password"
                    );
                    this.router.navigate(["/apps", "dashboards", "project"]);
                }
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const confirmPasswordValidator: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null => {
    if (!control.parent || !control) {
        return null;
    }

    const password = control.parent.get("password");
    const passwordConfirm = control.parent.get("passwordConfirm");

    if (!password || !passwordConfirm) {
        return null;
    }

    if (passwordConfirm.value === "") {
        return null;
    }

    if (password.value === passwordConfirm.value) {
        return null;
    }

    return { passwordsNotMatching: true };
};
