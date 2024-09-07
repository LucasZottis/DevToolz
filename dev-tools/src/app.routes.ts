import { Routes } from '@angular/router';
import { CnpjGeneratorPageComponent } from './pages/generators/cnpj-generator-page/cnpj-generator-page.component';
import { CpfGeneratorPageComponent } from './pages/generators/cpf-generator-page/cpf-generator-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TimeConverterPageComponent } from './pages/time-converter-page/time-converter-page.component';
import { CnpjValidatorPageComponent } from './pages/validators/cnpj-validator-page/cnpj-validator-page.component';
import { CpfValidatorPageComponent } from './pages/validators/cpf-validator-page/cpf-validator-page.component';
import { LetterCounterComponent } from './pages/letter-counter/letter-counter.component';
import { CryptoPageComponent } from './pages/crypto-page/crypto-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },

    {
        path: 'conversores', children: [
            { path: 'tempo', component: TimeConverterPageComponent },
        ]
    },

    {
        path: 'geradores', children: [
            { path: 'cpf', component: CpfGeneratorPageComponent },
            { path: 'cnpj', component: CnpjGeneratorPageComponent },
        ]
    },

    {
        path: 'utilitarios', children: [
            { path: 'contador-letras', component: LetterCounterComponent },
            { path: 'cryptografia', component: CryptoPageComponent },
        ]
    },

    {
        path: 'validadores', children: [
            { path: 'cpf', component: CpfValidatorPageComponent },
            { path: 'cnpj', component: CnpjValidatorPageComponent },
        ]
    },
];