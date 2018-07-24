import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { User } from '../models/Expense';
import { SettingsService, AppSettings } from './settings.service';

@Injectable()
export class UserService {


    private userAPIBaseUrl: string;
    private _appSettings: AppSettings;
    constructor(private httpClient: HttpClient, private settingsService: SettingsService) {
        this._appSettings = this.settingsService.GetSettings();
        this.userAPIBaseUrl = `${this._appSettings.APIBaseUrl}/users`;
    }

    GetUsers(): Promise<User[]> {
        return this.httpClient.get<User[]>(`${this.userAPIBaseUrl}`)
            .toPromise<User[]>();
    }

    GetUser(userId: string): Promise<User> {
        return this.httpClient.get<User>(`${this.userAPIBaseUrl}/${userId}`)
            .toPromise<User>();
    }

    AddUser(userPayload: any): Promise<User> {
        return this.httpClient.post<User>(`${this.userAPIBaseUrl}/create`, userPayload)
            .toPromise<User>();
    }
}
