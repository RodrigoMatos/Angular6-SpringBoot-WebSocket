import { UsuarioEntity } from './usuario-entity';

export class MessageEntity {

    texto: string;
    data: any;
    usuario: UsuarioEntity;
    classeCss: string;

    constructor() {
        this.usuario = new UsuarioEntity();
    }

}
