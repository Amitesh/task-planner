import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeSwitherService {
    /** Reference to render-instance */
    public renderer: Renderer2;
    private activeTheme: string;

    constructor(private rendererFactory2: RendererFactory2) {
        this.renderer = this.rendererFactory2.createRenderer(null, null);
        this.activeTheme = 'default-theme';
    }

    public getThemes(): Array<string> {
        // It can come from some configuration
        return ['default-theme', 'light-theme', 'dark-theme'];
    }

    public getActiveTheme(): string {
        return this.activeTheme;
    }

    private setActiveTheme(theme: string) {
        this.activeTheme = theme;
    }

    public changeTheme(newTheme: string) {
        newTheme = newTheme || '';

        this.renderer.removeClass(document.body, this.activeTheme);
        this.setActiveTheme(newTheme);
        this.renderer.addClass(document.body, this.activeTheme);
    }
}
