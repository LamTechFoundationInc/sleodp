import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular/index';
import { DataProvider } from '../../providers/data/data';
import { PartyProfilePage } from '../../pages/party-profile/party-profile';
import { CandidateProfilePage } from '../../pages/candidate-profile/candidate-profile';

/**
 * Generated class for the TableViewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'table-view',
  templateUrl: 'table-view.html'
})
export class TableViewComponent {

  @Input('year') year;
  @Input('region') region;
  @Input('type') type;

  Parties: any;
  Candidates: any;
  total_results;
  Results: any;
  Boundaries: any;
  isNation: boolean;
  Boundary: number;

  constructor(public dataService: DataProvider, public navCtrl: NavController) {
    this.Results = [];
    this.Boundaries = [];
    this.Parties = {};
    this.Candidates = {};
    this.Boundary = 0;
  }

  ngAfterViewInit() {
  }
  
  candidatesEnable() {
    return this.Results.length > 0;
  }

  gotoPartyDetail(acronym) {
    var party = this.Parties[acronym];
    this.navCtrl.push(PartyProfilePage, { party: party });
  }

  gotoCandidateDetail(candidate_id) {
    this.navCtrl.push(CandidateProfilePage, { candidate: this.Candidates[candidate_id] });
  }

  drawTable(boundary) {
    if (boundary != "")
      this.Boundary = boundary;

    var fields = {
      year: this.year,
      type: this.type,
      region: this.region
    }

    this.isNation = this.region == 'nation';

    var vm = this;
    this.dataService.loadResultsByFields(fields).then(data => {
      this.Parties = data['Parties'];
      this.Candidates = data['Candidates'];
      if (data['Boundaries'].length > 0) {
        vm.Boundaries = [];
        vm.total_results = data['Boundaries'];
        vm.Results = data['Boundaries'][0].candidates;
        for (let row of data['Boundaries']) {
          vm.Boundaries.push(row.name);
        }
      }
    });
  }

  onSelectChange(selectedValue: any) {
    var Boundary = selectedValue;
    if (this.total_results[Boundary])
      this.Results = this.total_results[Boundary].candidates;
  }
}