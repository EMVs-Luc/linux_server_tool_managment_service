import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../basic-services/token-service/token.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

  constructor( private tokenService: TokenService ,private router: Router) {}
  ngOnInit(): void {

    //TODO:
    //if(this.tokenService.getToken() == "") this.router.navigate(["/login"])
  }

}
