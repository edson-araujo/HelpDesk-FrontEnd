import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.router.navigate(['home'])
  }

  logout() {
    this.router.navigate(['login'])
    this.authService.logout();
    this.toast.info('Logout realizado com sucesso', 'Logout')
  }
  
  fillerNav = Array .from({ length : 50 }, ( _, i ) =>  `Item de navegação ${i + 1 } ` );

  fillerContent = Array .from(
    { length : 50 },
     () => 
      'vuhvhuhjvghvjg'
  );
  
  mobileQuery : MediaQueryList;
  private _mobileQueryListener: () =>  void ;

  construtor ( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ) {
     this .mobileQuery = media.matchMedia( '(max-width: 600px)' );
    this ._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this .mobileQuery.addListener( this ._mobileQueryListener);
  }


  
}
