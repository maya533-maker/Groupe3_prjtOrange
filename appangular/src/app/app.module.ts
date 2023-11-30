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
import { PageServiceComponent } from './Dashboard/client/pageService/page-service/page-service.component';
import { DashboardClientComponent } from './Dashboard/client/dashboardClient/dashboard-client/dashboard-client.component';
import { DashboardAdminComponent } from './Dashboard/admin/dashboardAdmin/dashboard-admin/dashboard-admin.component';
import { GestionOffreComponent } from './Dashboard/admin/gestionOffre/gestion-offre/gestion-offre.component';
import { GestionProfilComponent } from './Dashboard/admin/gestionProfil/gestion-profil/gestion-profil.component';
import { GestionBoutiqueComponent } from './Dashboard/admin/gestionBoutique/gestion-boutique/gestion-boutique.component';
import { GestionProduitComponent } from './Dashboard/admin/gestionBoutique/gestion-produit/gestion-produit.component';
import { GestionCategorieComponent } from './Dashboard/admin/gestionBoutique/gestion-categorie/gestion-categorie.component';
import { GestionCommandeComponent } from './Dashboard/admin/gestionCommande/gestion-commande/gestion-commande.component';

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
    FibreComponent,
    PageServiceComponent,
    DashboardClientComponent,
    DashboardAdminComponent,
    GestionOffreComponent,
    GestionProfilComponent,
    GestionBoutiqueComponent,
    GestionProduitComponent,
    GestionCategorieComponent,
    GestionCommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
