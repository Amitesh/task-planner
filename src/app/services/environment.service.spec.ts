import { async } from '@angular/core/testing';
import { IEnvironment } from '../modal/environment';
import { EnvironmentService } from './environment.service';

describe('EnvironmentService', () => {
    let environmentService: IEnvironment;

    beforeEach(() => {
        environmentService = new EnvironmentService();
    });

    it('should be using the configured test environment settings and url', async(() => {
        const url = 'http://mytesturl/tasks-list';
        expect(environmentService.apiUrl).toBe(url);
    }));

    it('should not use localhost api url', async(() => {
        const url = 'http://localhost:3000';
        expect(environmentService.apiUrl).not.toBe(url);
    }));

    it('should not use production api url', async(() => {
        const url = 'http://myprodurl.com/task-list';
        expect(environmentService.apiUrl).not.toBe(url);
    }));
});
