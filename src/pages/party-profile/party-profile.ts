import { Component, ViewChild, forwardRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HeaderViewComponent } from '../../components/header-view/header-view';

/**
 * Generated class for the PartyProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-party-profile',
	templateUrl: 'party-profile.html',
})
export class PartyProfilePage {
	public party;

	@ViewChild(forwardRef(() => HeaderViewComponent)) headerview: HeaderViewComponent;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.party = navParams.get('party');
	}

	ionViewDidLoad() {
		this.headerview.isGranularityEnabled = false;
	}

	sourceUrl(url) {
		return "http://dev.electiondata.io" + url;
	}

	colorFilter(color) {
		var default_color = "#999";
		var colors = ["Pink", "Orange", "Green", "Red", "Blue", "Purple", "Yellow"];
		if (!color) return default_color;
		if (color.split(', ').length > 1) {
			return color.split(', ')[0];
		}
		if (colors.indexOf(color.charAt(0).toUpperCase() + color.slice(1)) > -1) {
			return color;
		}
		return "#" + color;
	}
}
