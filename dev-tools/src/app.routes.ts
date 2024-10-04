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
import { NumericSystemsConverterPageComponent } from './pages/conversors/numeric-systems-converter-page/numeric-systems-converter-page.component';
import { UpperToLowerLettersConversorPageComponent } from './pages/conversors/upper-to-lower-letters-conversor-page/upper-to-lower-letters-conversor-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },

    {
        path: 'conversores', children: [
            { path: 'tempo', component: TimeConverterPageComponent, title: "Conversor de Tempo" },
            { path: 'csv-2-json', component: Csv2JsonPageComponent, title: "Conversor de CSV para JSON" },
            { path: 'sistemas-numericos', component: NumericSystemsConverterPageComponent, title: "Conversor de Sistemas Numéricos" },
            { path: 'maiusculas-e-minusculas', component: UpperToLowerLettersConversorPageComponent, title: "Conversor de Maiúscula e MInúsculas" },
        ]
    },

    {
        path: 'geradores', children: [
            { path: 'cpf', component: CpfGeneratorPageComponent, title: "Gerador de CPF" },
            { path: 'cnpj', component: CnpjGeneratorPageComponent, title: "Gerador de CNPJ" },
        ]
    },

    {
        path: 'utilitarios', children: [
            { path: 'contador-letras', component: LetterCounterComponent, title: "Contador de letras" },
            { path: 'remover-acentuacao', component: RemoverAcentoTextoPageComponent, title: "Remover Acentuação" },
            // { path: 'cryptografia', component: CryptoPageComponent },
            // { path: 'formatador-sql', component: SqlFormatterPageComponent },
        ]
    },

    {
        path: 'validadores', children: [
            { path: 'cpf', component: CpfValidatorPageComponent, title: "Validador de CPF" },
            { path: 'cnpj', component: CnpjValidatorPageComponent, title: "Validador de CNPJ" },
        ]
    },

    { path: '**', component: NotFoundPageComponent, title: "Página não existe" },
];