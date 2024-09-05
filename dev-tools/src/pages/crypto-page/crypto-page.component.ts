import { Component, OnInit } from '@angular/core';
import { PageBase } from '../pageBase';
import { CryptoClient } from '../../client/cryptClient';
import { FormsModule } from '@angular/forms';
import { CryptProvider } from '../../enums/cryptProvider';

@Component({
  selector: 'crypto-page',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './crypto-page.component.html',
  styleUrl: './crypto-page.component.scss'
})

export class CryptoPageComponent extends PageBase implements OnInit {
  key?: string;
  encrypted?: string;
  decrypted?: string;

  constructor(
    private _cryptoClient: CryptoClient,
  ) {
    super();
  }

  onClickEncrypt() {
    this._cryptoClient.encrypt(this.decrypted ?? "", this.key ?? "", CryptProvider.RC2).subscribe({
      next: (res) => this.encrypted = res,
      error: (error) => console.error(error),
    });
  }

  onClickDecrypt() {
    this._cryptoClient.decrypt(this.encrypted ?? "", this.key ?? "", CryptProvider.RC2).subscribe({
      next: (res) => this.decrypted = res,
      error: (error) => console.error(error),
    });
  }

  ngOnInit(): void {
    this.addDescription("Ferramenta para criptografia de textos.");
    this.setTitle("Criptografia");
  }
}