import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConfigComponent } from './header/config/config.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ContadorComponent } from './contador/contador.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[HeaderComponent, FooterComponent, SidebarComponent, ConfigComponent,  UsuarioComponent, ContadorComponent,FormularioComponent],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, ConfigComponent,  UsuarioComponent, ContadorComponent, FormularioComponent],
})
export class ComponenteModule { }
