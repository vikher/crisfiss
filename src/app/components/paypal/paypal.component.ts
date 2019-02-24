import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})

      export class PaypalComponent implements OnInit {

        public payPalConfig?: PayPalConfig;

        constructor(
          private _router: Router ) { }
    
        ngOnInit(): void {
          this.initConfig();
        }
    
        private initConfig(): void {
          this.payPalConfig = new PayPalConfig(
            PayPalIntegrationType.ClientSideREST,
            PayPalEnvironment.Sandbox,
            {
              commit: true,
              client: {
                sandbox:
                  'AX55qYsdAkGCuoVccDI0jDAtZ1qMds0TV4B1ZOkXRvg7JwJyuBPBwrm9UfCIFMqhiPJg59b-KgxyOS8B'
              },
              button: {
                label: 'paypal',
                layout: 'vertical'
              },
              onAuthorize: (data, actions) => {
                console.log('Authorize');
                return of(undefined);
              },
              onPaymentComplete: (data, actions) => {
                console.log('OnPaymentComplete');
                this._router.navigate(['/careersList']);
              },
              onCancel: (data, actions) => {
                console.log('OnCancel');
              },
              onError: err => {
                console.log('OnError');
              },
              onClick: () => {
                console.log('onClick');
              },
              validate: (actions) => {
                console.log(actions);
              },
              experience: {
                noShipping: true,
                brandName: 'crisfiss PayPal'
              },
              transactions: [
                {
                  amount: {
                    total: 30.11,
                    currency: 'USD',
                    details: {
                      subtotal: 30.00,
                      tax: 0.07,
                      shipping: 0.03,
                      handling_fee: 1.00,
                      shipping_discount: -1.00,
                      insurance: 0.01
                    }
                  },
                  custom: 'Custom value',
                  item_list: {
                    items: [
                      {
                        name: 'suscripcion',
                        description: 'Suscripcion 1 mes.',
                        quantity: 1,
                        price: 30,
                        tax: 0.01,
                        sku: '1',
                        currency: 'USD'
                      }],
                    shipping_address: {
                      recipient_name: 'Cristofer Hernandez',
                      line1: '4th Floor',
                      line2: 'Unit #34',
                      city: 'San Jose',
                      country_code: 'US',
                      postal_code: '95131',
                      phone: '011862212345678',
                      state: 'CA'
                    },
                  },
                }
              ],
              note_to_payer: 'Contact us if you have troubles processing payment'
            }
          );
        }
      }
      