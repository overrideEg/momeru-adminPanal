import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DatePipe, DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FuseConfigService } from '@fuse/services/config.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';

import { navigation } from 'app/navigation/navigation';
// import { locale as navigationEnglish } from 'app/navigation/i18n/en';
// import { locale as navigationArabic } from 'app/navigation/i18n/ar';

import { Validators } from '@angular/forms';
import { EntitiesService } from '@override/utils/entities.service';
import { UtilsService } from '@override/utils/utils.service';
import { FieldType } from '@override/utils/interfaces/FieldType.enum';
import { AllEntities } from './all-entities';
import { OverrideService } from '../@override/utils/override.service';
import { environment } from '../environments/environment.prod';
import { Router } from '@angular/router';
import { LoaderServiceService } from '../@override/utils/loader-service.service';
import { AfterViewInit } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

    fuseConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseNavigationService} _fuseNavigationService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {FuseSplashScreenService} _fuseSplashScreenService
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     * @param {Platform} _platform
     * @param {TranslateService} _translateService
     */
    constructor(
        @Inject(DOCUMENT) private document: any,
        private _fuseConfigService: FuseConfigService,
        private _fuseNavigationService: FuseNavigationService,
        private _fuseSidebarService: FuseSidebarService,
        private _fuseSplashScreenService: FuseSplashScreenService,
        private _fuseTranslationLoaderService: FuseTranslationLoaderService,
        private _translateService: TranslateService,
        private _platform: Platform,
        private _entities: EntitiesService,
        private utils: UtilsService,
        private datePipe: DatePipe,
        private override: OverrideService,
        private router: Router,
        private loaderService: LoaderServiceService, 
        private renderer: Renderer2
    ) {

        // set generic entities

        this.setEntities();

        // Get default navigation
        this.navigation = navigation;

        // Register the navigation to the service
        this._fuseNavigationService.register('main', this.navigation);

        // Set the main navigation as our current navigation
        this._fuseNavigationService.setCurrentNavigation('main');

        // Add languages
        this._translateService.addLangs(['en', 'ar','ms']);

        let lang = localStorage.getItem('language') ?localStorage.getItem('language') :  this._translateService.getBrowserLang()==='ar'||this._translateService.getBrowserLang() === 'en' || this._translateService.getBrowserLang() === 'ms' ? this._translateService.getBrowserLang() : 'ar'
        // Set the default language
        this._translateService.setDefaultLang(lang);

        
        // console.log('lang', lang)
        this.override.switchLanguage(lang)

        // Set the navigation translations
        // this._fuseTranslationLoaderService.loadTranslations(navigationEnglish, navigationArabic);

        // Use a language

        /**
         * ----------------------------------------------------------------------------------------------------
         * ngxTranslate Fix Start
         * ----------------------------------------------------------------------------------------------------
         */

        /**
         * If you are using a language other than the default one, i.e. Turkish in this case,
         * you may encounter an issue where some of the components are not actually being
         * translated when your app first initialized.
         *
         * This is related to ngxTranslate module and below there is a temporary fix while we
         * are moving the multi language implementation over to the Angular's core language
         * service.
         */

        // Set the default language to 'en' and then back to 'tr'.
        // '.use' cannot be used here as ngxTranslate won't switch to a language that's already
        // been selected and there is no way to force it, so we overcome the issue by switching
        // the default language back and forth.
        /**
         * setTimeout(() => {
         * this._translateService.setDefaultLang('en');
         * this._translateService.setDefaultLang('tr');
         * });
         */

        /**
         * ----------------------------------------------------------------------------------------------------
         * ngxTranslate Fix End
         * ----------------------------------------------------------------------------------------------------
         */

        // Add is-mobile class to the body if the platform is mobile
        if (this._platform.ANDROID || this._platform.IOS) {
            this.document.body.classList.add('is-mobile');
        }

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }
    ngAfterViewInit(): void {
        this.loaderService.httpProgress().subscribe((status: boolean) => {
            if (status) {
            //   this.renderer.addClass(document.body, 'cursor-loader');
            //   this.renderer.setAttribute(document.body,'id', 'fuse-splash-screen');
            } else {
            //   this.renderer.removeAttribute(document.body,'id', 'fuse-splash-screen');

            //   this.renderer.removeClass(document.body, 'cursor-loader ');
            }
          });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void { 
        // console.log('is auth', this.utils.isAuth())
        
        if (environment.production) {
            if (location.protocol === 'http:') {
              window.location.href = location.href.replace('http', 'https');
            }
          }

        // Subscribe to config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                // console.log(config);
                
                this.fuseConfig = config;

                // Boxed
                if (this.fuseConfig.layout.width === 'boxed') {
                    this.document.body.classList.add('boxed');
                }
                else {
                    this.document.body.classList.remove('boxed');
                }

                // Color theme - Use normal for loop for IE11 compatibility
                for (let i = 0; i < this.document.body.classList.length; i++) {
                    const className = this.document.body.classList[i];

                    if (className.startsWith('theme-')) {
                        this.document.body.classList.remove(className);
                    }
                }
              
                this.document.body.classList.add(this.fuseConfig.colorTheme);
                
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar open
     *
     * @param key
     */
    toggleSidebarOpen(key): void {
        this._fuseSidebarService.getSidebar(key).toggleOpen();
    }


     
     entities = new AllEntities(this._translateService,this.utils, this.datePipe,this.override,this.router);    
    setEntities() {
        this._entities.allEntities  = this.entities.entities;
    }
}
