import { DomaineDetailsComponent } from 'src/app/domaine/domaine-details/domaine-details.component';
import { Observable } from "rxjs";
import { DomaineService } from "src/app/_services/domaine.service";
import { Domaine } from "src/app/modele/domaine";
import { Component, OnInit } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Route, Router} from "@angular/router";
import {TokenStorageService} from "../../_services/token-storage.service";


@Component({
  selector: 'app-domaine-list',
  templateUrl: './domaine-list.component.html',
  styleUrls: ['./domaine-list.component.css']
})
export class DomaineListComponent implements OnInit {

 showAdminBoard = false;

  message:any;
  domaines: any;

  constructor(private service:DomaineService,
               private http: HttpClient,
               private router: Router,
               private tokenStorageService: TokenStorageService) {}



    ngOnInit(): void {
       this.isLoggedIn = !!this.tokenStorageService.getToken();

       if (this.isLoggedIn) {
         const user = this.tokenStorageService.getUser();
         this.roles = user.roles;

         this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
         this.reloadData();

       }
       else
       {
         this.router.navigate(['/home']);
       }

     }




     reloadData() {
       this.domaines =this.service.getAllDomaines();
       let resp=this.service.getAllDomaines();
       resp.subscribe ((data)=>this.domaines=data);;
     }

     deleteDomaine(id: number) {
       this.service.deletedomaine(id)
         .subscribe(
           data => {
             console.log(data);
             this.reloadData();
           },
           error => console.log(error));
     }
     addDomaine(id: number){
       this.router.navigate(['adddomaine',id]);
     }
     getDomaineById(id: number){
       this.router.navigate(['domaine', id]);
     }

     updateDomaine(id: number){
       this.router.navigate(['updateDomaine',id]);
     }

}
