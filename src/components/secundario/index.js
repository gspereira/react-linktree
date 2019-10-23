import React from 'react';

const Secundario = ({Sub}) => {
    return (
        <li className='subcat-items-content'>
            <div>
                <a href={Sub.url}>{Sub.name}</a>
            </div>
        </li>
    );
}

export default Secundario;