import { Component, OnInit } from '@angular/core';
import {
    NavigationService,
    Page,
} from '../../services/navigation/navigation.service';
import { NavRoute } from '../../../nav-routing';
import { AuthService } from '../../../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
declare var gapi: any;

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    isOpen = true;

    constructor(
        private navigationService: NavigationService,
        private authService: AuthService,
        private router: Router,
    ) {}

    ngOnInit() {}

    public toggleSideNav() {
        this.isOpen = !this.isOpen;
    }

    public getNavigationItems(): NavRoute[] {
        return this.navigationService.getNavigationItems();
    }

    public getActivePage(): Page {
        return this.navigationService.getActivePage();
    }

    public logout() {
        this.authService.logout();
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
        this.router.navigate(['login'], { replaceUrl: true });
    }

    public getPreviousUrl(): string[] {
        return this.navigationService.getPreviousUrl();
    }
}
