import {Injectable} from '@angular/core';

@Injectable()
export class SettingsService {
    constructor() {}

    public GetSettings(): AppSettings {
        const appSettings = this.LoadAppSettings();
        if (appSettings['IsDev']) {
            return appSettings['dev'] as AppSettings;
        }
        if (appSettings['IsDev']) {
            return appSettings['prod'] as AppSettings;
        }
        return null;
    }


    private LoadAppSettings(): object {
        return {
            dev : {
                APIBaseUrl: 'http://localhost:12622/api'
            },
            prod: {
                APIBaseUrl: 'https://trackeryaexpenseapi.herokuapp.com/api'
            },
            IsDev: true,
            IsProd: false
        };
    }
}

export interface AppSettings {
    APIBaseUrl: string;
}
