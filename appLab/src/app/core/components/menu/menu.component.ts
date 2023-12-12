import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMenu, MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'lab-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() onToggleExpanded:EventEmitter<boolean> = new EventEmitter<boolean>()

  listMenu:IMenu[]
  expanded=true
  text=true
  hover=false

  constructor(private menuService:MenuService) { 
    this.listMenu = menuService.getMenu()
  }

  toggleExpanded(hover:boolean){
    this.expanded = hover
    this.text = hover
    this.onToggleExpanded.emit(this.expanded)
  }

  ngOnInit(): void {
  }

}
