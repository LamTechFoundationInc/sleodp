import { Component, ElementRef, Renderer2 } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { RangeViewComponent } from '../range-view/range-view';
import { Platform } from 'ionic-angular';
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

  isTablet: boolean;
  isDesktop: boolean;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public plt: Platform, public el: ElementRef, public rd: Renderer2) {
    this.isTablet = this.plt.is('tablet');
    this.isDesktop = this.plt.is('core');
  }

  ngAfterViewInit() {
    if (this.isDesktop) {
      setTimeout((...args: any[]) => {
        let view = this.navCtrl.getActive();
        let selected = this.el.nativeElement.querySelector('ion-segment-button.' + view.component.name);
        this.rd.addClass(selected, 'active');
      }, 100);
    }
  }

  selectRange(event) {
  	let popover = this.popoverCtrl.create(RangeViewComponent);
    popover.present({
    	ev: event
    });
  }

  selectedType(type) {
    switch (type) {
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