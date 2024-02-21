import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ProviderComponent } from './provider/provider.component';

export const routes: Routes = [
    {path:'',redirectTo:'store',pathMatch: "full"},
    {path:'store',component:ShopComponent},
    {path:'phone/:id',component:PhoneDetailsComponent},
    {path:'cart',component:CartComponent},
    {path:'shipping',component:ShippingComponent},
    {path:'provider/:name', component:ProviderComponent}
];
