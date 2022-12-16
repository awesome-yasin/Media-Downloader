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
            </form>
        </>) 
}

export default SearchForm;