import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AdminService} from "./admin.service";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {AdminActions} from "../store/admin/admin.actions";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [AdminPanelComponent],
  imports: [CommonModule, RouterModule, SharedModule, FormsModule],
  providers: [AdminService, AdminActions],
  exports: [AdminPanelComponent]
})

export class AdminModule {
}
