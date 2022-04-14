import { Component, OnDestroy, Inject, OnInit, AfterContentChecked } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {

  public navItems = navItems;

  public sidebarMinimized = true;
  public minimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  movSub: Subscription;
  usuarioLogado: any;
  mostraMenu: boolean = true;
  mostraMenuAside: boolean = false;
  private currentRoute: any;

  constructor(
    @Inject(DOCUMENT) _document?: any,
    private crudService?: CrudService,
    private router?: Router) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });

  }

  ngOnInit() {

  }

  ngOnDestroy(): void {

  }


}
