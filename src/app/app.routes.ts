import { PayComponent } from "./pay/pay.component";
import { BewertungComponent } from "./bewertung/bewertung.component";
import { KontaktComponent } from "./kontakt/kontakt.component";
import { MenuComponent } from "./menu/menu.component";

export const appRoutes=[
    {
        path:'',
        redirectTo:'category',
        pathMatch:'full'
    },
    {
        path:'category',
        loadChildren:'./pages/category/category.module#CategoryModule'
    },
    {
        path:'product',
        loadChildren:'./pages/product/product.module#ProductModule'
    },
    {
        path:'cart',
        loadChildren:'./pages/cart/cart-page.module#CartPageModule'
    },
    { path: 'kontakt', component: KontaktComponent },

    { path: 'bewertung', component: BewertungComponent },
    { path: 'pay', component: PayComponent },
    { path: 'menu', component: MenuComponent },

];