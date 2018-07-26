import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../../core/services/datashare.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {

  private dataEvents: Subscription;
  public drawerIsOpened: boolean;

  constructor(private sharedDataService: DataShareService) {
    this.dataEvents = sharedDataService.getData()
                        .subscribe(data => {
                          console.log('data received -> ', data);
                          this.drawerIsOpened = data as boolean;
                        });
  }


  ngOnInit() {
    this.drawerIsOpened = true;
  }

}
