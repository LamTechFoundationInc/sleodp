import { Component, ElementRef, Renderer2, Input } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { RangeViewComponent } from '../range-view/range-view';
import { PresidentPage } from '../../pages/president/president';
import { ParliamentPage } from '../../pages/parliament/parliament';
import { MayorPage } from '../../pages/mayor/mayor';
import { CouncilorPage } from '../../pages/councilor/councilor';
import { VillageHeadmanPage } from '../../pages/village-headman/village-headman';

/**
 * Generated class for the HeaderViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-view',
  templateUrl: 'header-view.html'
})
export class HeaderViewComponent {
  isGranularityEnabled: boolean;

  @Input('type') type;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public el: ElementRef, public rd: Renderer2) {
    this.isGranularityEnabled = true;

    this.pages = [
      { title: 'SLOEDP Platform', component: "" },
      { title: 'President', component: PresidentPage },
      { title: 'Member of Parliament', component: ParliamentPage },
      { title: 'Mayor/Chair', component: MayorPage },
      { title: 'Councilor', component: CouncilorPage },
      { title: 'VillageHeadman', component: VillageHeadmanPage }
    ];
  }

  ngAfterViewInit() {
    setTimeout((...args: any[]) => {
      let view = this.navCtrl.getActive();
      let selected = this.el.nativeElement.querySelector('ion-segment-button.' + view.component.name);

      if (selected)
        this.rd.addClass(selected, 'active');
    }, 100);
  }

  selectRange(event) {
  	let popover = this.popoverCtrl.create(RangeViewComponent, {type: this.type});
    popover.present({
    	ev: event
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.title == 'SLOEDP Platform')
      location.href = "https://electiondata.io"
    else
      this.navCtrl.setRoot(page.component);
  }
}