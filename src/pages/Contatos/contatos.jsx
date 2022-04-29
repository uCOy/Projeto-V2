import React from 'react';
import Contatos from '../../Components/Fundoimg/Contatos';
import CorpoContato from '../../Components/CorpoContato/Corpo';
import ParteDebaixoCorpo from '../../Components/ParteDebaixoCorpo/CorpoBaixo';

const PageContatos = () => {
    return (
        <div>
        <Contatos/>
        <CorpoContato/>
        <ParteDebaixoCorpo/> 
        </div>
     );
}
 
export default PageContatos;