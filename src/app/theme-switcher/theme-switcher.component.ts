import { Component } from '@angular/core';
import { ThemeSwitherService } from '../services/theme-switcher.service';

@Component({
    selector: 'theme-switcher',
    styleUrls: ['./theme-switcher.component.scss'],
    templateUrl: './theme-switcher.component.html',
})
export class ThemeSwitcherComponent {
    public themes: Array<string>;
    public activeTheme: string;

    constructor(private themeService: ThemeSwitherService) {
        this.themes = this.themeService.getThemes();
        this.activeTheme = this.themeService.getActiveTheme();
    }

    changeTheme($event) {
        const newTheme = $event.target.value;
        this.themeService.changeTheme(newTheme);
    }
}
