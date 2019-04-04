import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { SearchComponent } from './components/shared/header/search.component';
import { SiComponent } from './components/shared/concepts/data-binding/si/si.component';
import { PbComponent } from './components/shared/concepts/data-binding/pb/pb.component';
import { EbComponent } from './components/shared/concepts/data-binding/eb/eb.component';
import { TwbComponent } from './components/shared/concepts/data-binding/twb/twb.component';
import { CpbbComponent } from './components/shared/concepts/data-binding/cpbb/cpbb.component';
import { CvbComponent } from './components/shared/concepts/data-binding/cvb/cvb.component';
import { SdComponent } from './components/shared/concepts/directives/sd/sd.component';
import { ConceptsComponent } from './components/shared/concepts/concepts.component';
import { ContactsComponent } from './components/shared/contacts/contacts.component';
import { AboutComponent } from './components/shared/about/about.component';
import { ContactDetailsComponent } from './components/shared/contacts/contact-details/contact-details.component';
import { AddContactComponent } from './components/shared/contacts/add-contact/add-contact.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SearchComponent,
    SiComponent,
    PbComponent,
    EbComponent,
    TwbComponent,
    CpbbComponent,
    CvbComponent,
    SdComponent,
    ConceptsComponent,
    ContactsComponent,
    AboutComponent,
    ContactDetailsComponent,
    AddContactComponent,
    EllipsisPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
