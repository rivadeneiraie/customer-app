import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from './../helpers/setPropsAsInitial';
import CustomersActions from './CustomersActions';
import { Prompt } from 'react-router-dom';

const validate = values => {
    const error = {};

    if (!values.name ){
        error.name = "El campo nombre es requerido";
    }

    if (!values.dni)
    {
        error.dni = "El Dni es un campo obligatorio";
    }

    return error;
};

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser un número"
);

const MyField = ({ input, meta, type, label, name }) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input {...input} type={ !type ? "text" : type }></input>
        {
            meta.touched && meta.error && <span>{meta.error}</span> 
        }
    </div>
);

const toNumber = value => ( value && Number(value) )
const toUpper = value => ( value && value.toUpperCase()  )
const toLower = value => ( value && value.toLowerCase() )
const onlyGrow = (value, previousValue, values) => ( 
    value && (!previousValue ? value : (value > previousValue ? value : previousValue) )
)


/** las propuedades pasadas como parametros son de redux-form tiene que lamarse así */
const CustomerEdit = ({name, dni, age, handleSubmit, submitting, onBack, pristine, SubmitSucceeded}) => {
    return (
        <div>
            <h2>Edición del cliente</h2>
            <form onSubmit={handleSubmit}> 
                <Field
                    name="name"
                    component={MyField}
                    type="text"
                    label="Nombre:"
                    parse={toUpper} //ambos de complementan
                    format={toLower} //el primero es para guardar el otro para mostrar
                ></Field>
                <Field
                    name="dni"
                    component={MyField}
                    type="text"
                    label="Dni:"
                ></Field>
                <Field
                    name="age"
                    component={MyField}
                    type="number"
                    validate={isNumber}
                    label="Edad:"
                    parse={toNumber}
                    normalize={onlyGrow} //funcion que se ejcuta posterior a parse
                ></Field>
                <CustomersActions>
                    <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                    <button type="button" disabled={submitting} onClick={onBack}>Cancelar</button>
                </CustomersActions>
                <Prompt
                    when={!pristine && !SubmitSucceeded} //el primero indica si el formulario cambio en algo y el segundo  si yua no se envió el formulario
                    message={"Se perderán los datos si continúa"}
                ></Prompt>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name:PropTypes.string,
    dni:PropTypes.string,
    age:PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm(
    { 
            form: 'CustomerEdit',
            validate 
    }
)(CustomerEdit);


export default  setPropsAsInitial(CustomerEditForm) ;