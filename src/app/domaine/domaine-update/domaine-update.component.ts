import { Component, OnInit } from '@angular/core';
import { Domaine } from 'src/app/modele/domaine';
import { ActivatedRoute, Router } from '@angular/router';
import { DomaineService } from 'src/app/_services/domaine.service';
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-domaine-update',
  templateUrl: './domaine-update.component.html',
  styleUrls: ['./domaine-update.component.css']
})
export class DomaineUpdateComponent implements OnInit {

 showAdminBoard = false;
  id:any;
  domaine: any;

  //user = new User();
  //user = new User();
  constructor(private service:DomaineService,
              private route: ActivatedRoute,
              private router: Router,
              private tokenStorageService: TokenStorageService) { }



 ngOnInit(): void {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');


    }

    if (this.showAdminBoard)
    {

      this.id = this.route.snapshot.params['id'];

      this.service.getDomaineById(this.id).subscribe(data => {
        this.domaine = data;
        console.log(data);
      }, error => console.log(error));
    }
    else
    {
      this.router.navigate(['/home']);
    }

  }

  onSubmit(){
    this.service.updateDomaine(this.id).subscribe( data =>{
        this.getAllDomaines();
      }
      , error => console.log(error));
  }

  getAllDomaines(){
    this.router.navigate(['/domaines']);
  }

}
