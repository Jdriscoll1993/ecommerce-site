const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className='group'>
            {/* apply shrink className to otherProps labels when user types in field */}
            <label className={`${otherProps.value.length ? 'shrink': null} form-input-label`}>{label} </label>
            <input className='form-input' {...otherProps} />
        </div>)
}

export default FormInput;