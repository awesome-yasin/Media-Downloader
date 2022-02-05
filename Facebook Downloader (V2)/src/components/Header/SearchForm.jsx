import '../Styles/SearchForm.css';

const SearchForm = (props) => {
    return (
        <>
            <form action="" className="input-form" onSubmit={props.submitHandler}>
                <input
                    type="text"
                    className="inputBox"
                    onChange={props.onChangehandler}
                    placeholder={props.placeholder}
                />
                <input type="submit" className="submitBtn" value="Search" />
                <br/>
               
            </form>
            <p className='instruction'>Note : Paste link in this format "https://www.facebook.com/watch/?v=242112374761587"</p>
        </>) 
}

export default SearchForm;