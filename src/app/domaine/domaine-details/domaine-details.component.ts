import { Domaine } from 'src/app/modele/domaine';
import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { DomaineService } from 'src/app/_services/domaine.service';
import { DomaineListComponent } from 'src/app/domaine/domaine-list/domaine-list.component';
import {TokenStorageService} from "../../_services/token-storage.service";
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-domaine-details',
  templateUrl: './domaine-details.component.html',
  styleUrls: ['./domaine-details.component.css']
})
export class DomaineDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
