import { Component, ViewChild, forwardRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeaderViewComponent } from '../../components/header-view/header-view';

/**
 * Generated class for the CandidateProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-candidate-profile',
	templateUrl: 'candidate-profile.html',
})
export class CandidateProfilePage {
	public candidate;
	@ViewChild(forwardRef(() => HeaderViewComponent)) headerview: HeaderViewComponent;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.candidate = navParams.get('candidate');
	}

	ionViewDidLoad() {
		this.headerview.isGranularityEnabled = false;
	}

	sourceUrl(url) {
		return "http://dev.electiondata.io" + url;
	}

	getCandidateName() {
		return this.candidate.Prefix + " " + this.candidate.FirstName + " " + this.candidate.MiddleName + " " + this.candidate.SurName;
	}
}
