import { Routes } from '@angular/router';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { TimeConverterPageComponent } from '../pages/time-converter-page/time-converter-page.component';
import { CnpjGeneratorPageComponent } from '../pages/generators/cnpj-generator-page/cnpj-generator-page.component';
import { CpfGeneratorPageComponent } from '../pages/generators/cpf-generator-page/cpf-generator-page.component';
import { CnpjValidatorPageComponent } from '../pages/validators/cnpj-validator-page/cnpj-validator-page.component';
import { CpfValidatorPageComponent } from '../pages/validators/cpf-validator-page/cpf-validator-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'conversores/conversor-tempo', component: TimeConverterPageComponent },

    { path: 'validadores/cpf', component: CpfValidatorPageComponent },
    { path: 'validadores/cnpj', component: CnpjValidatorPageComponent },

    { path: 'geradores/cpf', component: CpfGeneratorPageComponent },
    { path: 'geradores/cnpj', component: CnpjGeneratorPageComponent },
];