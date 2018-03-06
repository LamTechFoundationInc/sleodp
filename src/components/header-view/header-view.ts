import { Component, ElementRef, Renderer2, Input } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { RangeViewComponent } from '../range-view/range-view';
import { PresidentPage } from '../../pages/president/president';
import { ParliamentPage } from '../../pages/parliament/parliament';
import { MayorPage } from '../../pages/mayor/mayor';
import { ChairpersonPage } from '../../pages/chairperson/chairperson';
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

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public el: ElementRef, public rd: Renderer2) {
    this.isGranularityEnabled = true;
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

  selectedType(type) {
    switch (type) {
      case "electiondataplatform":
        location.href = "https://electiondata.io"
        break;
      case "president":
        this.navCtrl.setRoot(PresidentPage)
        break;
      case "parliament":
        this.navCtrl.setRoot(ParliamentPage)
        break;
      case "chairperson":
        this.navCtrl.setRoot(ChairpersonPage)
        break;
      case "councilor":
        this.navCtrl.setRoot(CouncilorPage)
        break;
      case "villageheadman":
        this.navCtrl.setRoot(VillageHeadmanPage)
        break;
      default:
        // code...
        break;
    }
  }
}