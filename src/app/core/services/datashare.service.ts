import {Injectable} from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataShareService {
    private subject = new Subject<any>();

    sendData(message: string) {
        this.subject.next(message);
    }

    clearData() {
        this.subject.next();
    }

    getData(): Observable<any> {
        return this.subject.asObservable();
    }
}
