import { Routes } from '@angular/router';
import { CnpjGeneratorPageComponent } from './pages/generators/cnpj-generator-page/cnpj-generator-page.component';
import { CpfGeneratorPageComponent } from './pages/generators/cpf-generator-page/CpfGeneratorPageComponent';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TimeConverterPageComponent } from './pages/time-converter-page/time-converter-page.component';
import { CnpjValidatorPageComponent } from './pages/validators/cnpj-validator-page/cnpj-validator-page.component';
import { CpfValidatorPageComponent } from './pages/validators/cpf-validator-page/cpf-validator-page.component';
import { LetterCounterComponent } from './pages/letter-counter/letter-counter.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { Csv2JsonPageComponent } from './pages/csv2-json-page/csv2-json-page.component';
import { RemoverAcentoTextoPageComponent } from './pages/remover-acento-texto-page/remover-acento-texto-page.component';

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
            { path: 'csv-2-json', component: Csv2JsonPageComponent },
            { path: 'remover-acentuacao', component: RemoverAcentoTextoPageComponent },
            // { path: 'cryptografia', component: CryptoPageComponent },
            // { path: 'formatador-sql', component: SqlFormatterPageComponent },
        ]
    },

    {
        path: 'validadores', children: [
            { path: 'cpf', component: CpfValidatorPageComponent },
            { path: 'cnpj', component: CnpjValidatorPageComponent },
        ]
    },

    { path: '**', component: NotFoundPageComponent },
];