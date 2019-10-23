import React, { useState } from 'react';
import './index.css';
import Secundario from '../secundario';

const Primario = ({ Cat, Sub }) => {
    const [showSub, setShowSub] = useState(false);

    const btnShowSub = () => {
        showSub ? setShowSub(false) : setShowSub(true);
    }

    return (
        <div className='list-content'>
            <li>
                <div onClick={btnShowSub} id='primary' className='items-body-content'>
                    {Cat}
                </div>
            </li>
            {showSub &&
                <ul>
                    {Sub.map(subCat =>
                        <Secundario Sub={subCat} key={subCat.name} />
                    )}
                </ul>
            }
        </div>
    );
};

export default Primario;