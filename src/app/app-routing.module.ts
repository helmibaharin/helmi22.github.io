import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDisplayComponent} from './table-display/table-display.component';
import { BarDisplayComponent} from './bar-display/bar-display.component';
import { PieDisplayComponent} from './pie-display/pie-display.component';
import { DataInsertComponent } from './data-insert/data-insert.component';
import { AllTimeComponent } from './all-time/all-time.component';

const routes: Routes = [
  {path: '' , component: TableDisplayComponent},
  {path: 'table' , component: TableDisplayComponent},
  {path: 'bar' , component: BarDisplayComponent},
  {path: 'pie' , component: PieDisplayComponent},
  {path: 'data' , component: DataInsertComponent},
  {path: 'alltime' , component: AllTimeComponent},
  {path: 'data/:id' , component: DataInsertComponent},
  {path: 'table/:id' , component: TableDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TableDisplayComponent, BarDisplayComponent, PieDisplayComponent, DataInsertComponent]
