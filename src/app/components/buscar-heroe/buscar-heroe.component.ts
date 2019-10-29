import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { HeroeService } from '../../services/heroe.service';


@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styles: []
})
export class BuscarHeroeComponent implements OnInit {

  private termino: string = "";

  public HeroesFiltrados: any = {}

  public loading:boolean=true;

  constructor(private router:Router, private ActivatedRoute: ActivatedRoute, private _heroeService: HeroeService) {
    this.ActivatedRoute.params.subscribe((terminoURL) => {
      this.termino = terminoURL.termino
      // console.log(this.termino);

      this.HeroesFiltrados= this._heroeService.BuscarHeroes(this.termino);
      this.loading=false;
      // console.log(this.HeroesFiltrados);


    })

    
    
  }

  ngOnInit() {
  }

  public MandarInformacion(idHero){

    this.router.navigate(['InformacionHeroe',idHero])

    // console.log(idHero);

    
  }

}
