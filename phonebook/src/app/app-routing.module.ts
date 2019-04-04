import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConceptsComponent } from './components/shared/concepts/concepts.component';
import { AboutComponent } from './components/shared/about/about.component';
import { ContactsComponent } from './components/shared/contacts/contacts.component';
import { AddContactComponent } from './components/shared/contacts/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/shared/contacts/contact-details/contact-details.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: ConceptsComponent},
  {path: 'about', component:AboutComponent, canActivate: [AuthGuard]}, // here guard is false, so not action here
  {path: 'contacts', component:ContactsComponent},
  {path: 'new',component: AddContactComponent},
  {path: ':id', component: ContactDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
