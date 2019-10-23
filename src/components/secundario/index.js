import React from 'react';

const Secundario = ({Sub}) => {
    
    const redirect = () => {
        window.location.href = Sub.url;
    }

    return (
        <li className='subcat-items-content' onClick={redirect}>
            <div>
                <b> > </b>{Sub.name}
            </div>
        </li>
    );
}

export default Secundario;