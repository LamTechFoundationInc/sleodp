#!/bin/bash
#This file is used to download results and resources from the sloedp
#

#Variables
fpresident=/Users/tamba.s.lamin/DEV/sloedp/src/assets/results/all-president-polling-centre-results-2018
ppresident=https://electiondata.io/api/results/presidential

fparliamentary=/Users/tamba.s.lamin/DEV/sloedp/src/assets/results/all-parliamentary-polling-centre-results-2018
pparliamentary=https://electiondata.io/api/results/parliamentary

fcouncillor=/Users/tamba.s.lamin/DEV/sloedp/src/assets/results/all-councillor-polling-centre-results-2018
pcouncillor=https://electiondata.io/api/results/councillor

fmayorchairperson=/Users/tamba.s.lamin/DEV/sloedp/src/assets/results/all-mayor-chair-polling-centre-results-2018
pmayorchairperson=https://electiondata.io/api/results/major-chair

fvillageheadman=/Users/tamba.s.lamin/DEV/sloedp/src/assets/results/all-village-headman-election-results
pvillageheadman=https://electiondata.io/api/results/

fcandidates=/Users/tamba.s.lamin/DEV/sloedp/src/assets/resources
pcandidates=

fparties=/Users/tamba.s.lamin/DEV/sloedp/src/assets/resources
pparties=

fpollingcentre=/Users/tamba.s.lamin/DEV/sloedp/src/assets/resources/polling-centres
ppollingcentre=

#Download Presidential results
wget -o $fpresident/all-president-polling-centre-results-01.json $ppresident/all-president-polling-centre-results-01.json
wget -o $fpresident/all-president-polling-centre-results-02.json $ppresident/all-president-polling-centre-results-02.json
wget -o $fpresident/all-president-polling-centre-results-03.json $ppresident/all-president-polling-centre-results-03.json
wget -o $fpresident/all-president-polling-centre-results-04.json $ppresident/all-president-polling-centre-results-04.json

#Download Parliamentary results
wget -o $fparliamentary/all-parliamentary-polling-centre-results-01.json $pparliamentary/all-parliamentary-polling-centre-results-01.json
wget -o $fparliamentary/all-parliamentary-election-results.json $pparliamentary/all-parliamentary-election-results.json

#Download Mayor/Chair results
wget -o $fmayorchairperson/all-mayor-chair-polling-centre-results-01.json $pmayorchairperson/all-mayor-chair-polling-centre-results-01.json
wget -o $fmayorchairperson/all-councillor-election-results.json $pmayorchairperson/all-councillor-election-results.json

#Download Councillor results
wget -o $fcouncillor/all-councillor-polling-centre-results-01.json $pcouncillor/all-councillor-polling-centre-results-01.json

#Download Polling Centres
all-polling-centres-02.json
all-polling-centres-01.json

#Download Candidates
all-candidates.json

#Download Political Parties
all-political-parties.json

#Download Wards
all-wards.json

#Download constituencies
all-constituency.json

#Download Districts
all-district.json

#Download Regions
all-regions.json
