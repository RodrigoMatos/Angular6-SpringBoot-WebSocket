import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './componentes/chat/chat/chat.component';
import { GameComponent } from './componentes/game/game/game.component';
// tslint:disable-next-line:max-line-length

const APP_ROUTES: Routes = [
    { path: '', component: ChatComponent },
    { path: 'chat', component: ChatComponent },
    { path: 'game', component: GameComponent },
    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true });
