import { API_URLS } from "./../../../../../assets/constants/API_URLS";
import { ActivatedRoute, Router } from "@angular/router";
import { OverrideService } from "./../../../../../@override/utils/override.service";
import { EntityService } from "./../../../../../@override/utils/entity.service";
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
    selector: "reset-password",
    templateUrl: "./reset-password.component.html",
    styleUrls: ["./reset-password.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
    resetPasswordForm: FormGroup;
    email: string;
    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private enitiy: EntityService,
        private override: OverrideService,
        private router: Router,
        private acroute: ActivatedRoute
    ) {
        this.email = this.acroute.snapshot.paramMap.get("email");
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
            code: ["", Validators.required],
            email: [this.email, [Validators.required, Validators.email]],
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

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    onSubmit() {
        let data = this.resetPasswordForm.value;
        this.enitiy
            .save(
                API_URLS.auth.resetPasswordbyCode.replace("{code}", data.code),
                data,
                this.override.AuthHeaders
            )
            .subscribe((res: any) => {
                console.log("res", res);
                if (res.status == 201) {
                    this.router.navigate(["/pages", "auth", "login"]);
                } else {
                    this.router.navigate([
                        "/pages/auth/reset-password",
                        this.email,
                    ]);
                    this.enitiy.showErrorToast();
                }
            });
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
