import {NgModule} from '@angular/core';
import {SearchComponent} from "./search.component";
import {CommonModule} from "@angular/common";
import {SearchActions} from "../store/search/search.actions";
import {SearchService} from "./search.service";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  providers: [SearchActions, SearchService],
  exports: [SearchComponent]
})

export class SearchModule { }
