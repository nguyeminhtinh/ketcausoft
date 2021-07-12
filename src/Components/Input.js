import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import ClipLoader from 'react-spinners/ClipLoader';
import imgCheck from '../images/check.png';
import './Input.scss';

export const checkingStatus = {
    NONE: 'none',
    PENDDING: 'pendding',
    DONE: 'done',
};

const Input = ({
    prefix,
    children,
    className,
    invalid,
    checking,
    ...otherProps
}) => {
    console.log(invalid);
    return (
        <InputGroup
            className={`${className !== undefined ? className : ''} ${
                // eslint-disable-next-line no-sequences
                prefix ? 'with-pre' : '',
                invalid ? 'invalid' : 'noinvalid'
            }`}>
            {prefix && (
                <InputGroup.Prepend>
                    <InputGroup.Text>{prefix}</InputGroup.Text>
                </InputGroup.Prepend>
            )}
            <FormControl
                // className={invalid ? 'invalid' : 'noinvalid'}
                placeholder={children}
                {...otherProps}
            />
            {checking && (
                <div className='loading-check'>
                    {checking === checkingStatus.PENDDING && (
                        <ClipLoader size={20} color={'#9e9e9e'} />
                    )}
                    {checking === checkingStatus.DONE && !invalid && (
                        <img className='check' src={imgCheck} alt='checking' />
                    )}
                </div>
            )}
        </InputGroup>
    );
};

export default Input;
