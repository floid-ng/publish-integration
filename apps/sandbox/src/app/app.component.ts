import { Component, OnInit } from '@angular/core';
import {
  createStructureInfo,
  EntityService,
  StructureServiceFactory
} from '@floid-ng/rhetos';
import { Adresar } from './rhetos-model';

@Component({
  selector: 'flo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private drzavaEntityService: EntityService<Adresar.Drzava>;
  constructor(private structureServiceFactory: StructureServiceFactory) {
    const drzavaInfo = createStructureInfo<Adresar.Drzava>(Adresar.DrzavaKey);
    this.drzavaEntityService = this.structureServiceFactory.createEntityService(
      drzavaInfo
    );
  }

  ngOnInit(): void {
    this.drzavaEntityService.getAll().subscribe(res => console.log(res));
  }
}
