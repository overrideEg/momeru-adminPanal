import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { API_URLS } from 'assets/constants/API_URLS';
import { Router } from '@angular/router';
import { ApiDataService } from '@override/utils/api-data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'login-2',
    templateUrl: './login-2.component.html',
    styleUrls: ['./login-2.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class Login2Component implements OnInit, OnDestroy {
    loginForm: FormGroup;
    subscrubtion: Subscription;
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private data: ApiDataService,
        private router: Router
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        let lang = localStorage.getItem('language');
        if (!lang || lang === null) {
            localStorage.setItem('language', 'en');
        }
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login() {

        this.subscrubtion = this.data.login(API_URLS.auth.auth, this.loginForm.value).subscribe(data => {
            // console.log(data);
            sessionStorage.setItem(btoa('email'), btoa(data['body'].user.email));
            // let authorities = '';
            // if (data['authorities']) {

            //     data['authorities'].forEach(record => {
            //         if (authorities != '')
            //             authorities += ', ' + record.authority;
            //         else
            //             authorities += record.authority;
            //     });
            // }
            sessionStorage.setItem(btoa('userType'), btoa(data['body'].user.userType));
            sessionStorage.setItem(btoa('user.id'), btoa(data['body'].user.id));
            sessionStorage.setItem(btoa('email'), btoa(data['body'].user.email));
            sessionStorage.setItem('token', data['body'].token);

            // sessionStorage.setItem('token', 'JHro6wFO4j0GtXcAPfSjd8mlzGSHm2jUzB6tXz5PHVjYIlolo4us3FBsbhXm944wt0NgnITUu3J0cXcrQuHJZ8Z1eMbdE5yYTb26KMR2DoSD9UUPdpm2m9RqJSreLP2u');
            if (data['body'].user.userType === 'admin' || data['body'].user.userType === 'employee'|| data['body'].user.userType === 'company') {
                this.data.showToast('Logged In Successfully');
                setTimeout(() => {
                    this.router.navigate(['/apps/dashboards/project']);
                }, 500);
            } else {
                this.data.showToast('You are not Admin');
            }
           
        });

    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        console.log('loginDestroy')
        if (this.subscrubtion) {
            this.subscrubtion.unsubscribe()
        }
    }
}
