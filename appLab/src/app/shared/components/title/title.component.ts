import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMenu, MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'lab-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  path:IMenu

  constructor(private menuService:MenuService, private activatedrouter:ActivatedRoute) { 
    const currentPath = '/'+this.activatedrouter.snapshot.pathFromRoot[1].routeConfig?.path
    this.path = menuService.getMenuByUrl(currentPath)
  }

  ngOnInit(): void {
  }

}
