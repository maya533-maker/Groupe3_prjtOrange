import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './menu/header/header.component';
import { FooterComponent } from './menu/footer/footer.component';
import { BoutiqueComponent } from './Boutique/boutique/boutique.component';
import { PanierComponent } from './Boutique/panier/panier.component';
import { CategorieBoutiqueComponent } from './Boutique/categorie-boutique/categorie-boutique.component';
import { AcceuilComponent } from './Acceuil/acceuil/acceuil.component';
import { AProposComponent } from './A propos/a-propos/a-propos.component';
import { PolitiqueConfComponent } from './A propos-confidentialité/politique-conf/politique-conf.component';
import { PolitiqueVentComponent } from './A propos-confidentialité/politique-vent/politique-vent.component';
import { ConditionVenteComponent } from './A propos-confidentialité/condition-vente/condition-vente.component';
import { GestionCookiesComponent } from './A propos-confidentialité/gestion-cookies/gestion-cookies.component';
import { AuthComponent } from './login/auth/auth.component';
import { ServiceComponent } from './Services/service/service.component';
import { JamonoSchoolComponent } from './Services/jamono-school/jamono-school.component';
import { JamonoMaxComponent } from './Services/jamono-max/jamono-max.component';
import { FibreComponent } from './Services/fibre/fibre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BoutiqueComponent,
    PanierComponent,
    CategorieBoutiqueComponent,
    AcceuilComponent,
    AProposComponent,
    PolitiqueConfComponent,
    PolitiqueVentComponent,
    ConditionVenteComponent,
    GestionCookiesComponent,
    AuthComponent,
    ServiceComponent,
    JamonoSchoolComponent,
    JamonoMaxComponent,
    FibreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
