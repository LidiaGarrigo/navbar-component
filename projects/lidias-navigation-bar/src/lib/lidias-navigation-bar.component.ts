import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'lidias-navigation-bar',
  template: `
  <nav class="navbar is-info is-fixed-top"
  role="navigation"
  aria-label="main navigation">
  <div class="navbar-brand">
  <a class="navbar-item" id="logo" href="">
  <img src="https://lidiagarrigo.com/assets/logo.png" width="60">
  </a>
  <div class="navbar-start" id="inicio">
    <a class="navbar-item has-text-white" routerLink="/home">
      Inicio
    </a>
  </div>
  <a role="button"
    class="navbar-burger"
    aria-label="menu"
    aria-expanded="false"
    data-target="navMenu"
    onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');
              document.querySelector('.navbar-burger').classList.toggle('is-active');">
  <span aria-hidden="true "></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  </a>
  </div>
  <div id="navMenu" class="navbar-menu" >
  <div class="navbar-start">
  <a class="navbar-item" routerLink="/about">
    Sobre mí
  </a>
  <a class="navbar-item" routerLink="/contact">
    Contacto
  </a>
  </div>
  </div>
  </nav>
  `,
  styles: [`
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
  nav{
    width: 100%;
    font-size: 18px;
    }
    img{
      margin-left: 2vh;
    }
    #inicio{
      display: flex;
    }
  .navbar-menu{
  padding: 0 1vh;
  }
  `
  ]
})
export class LidiasNavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
