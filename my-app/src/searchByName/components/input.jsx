const Input = (props) => {
  return (
    <>
      <label htmlFor="search">Search for State</label>
      <input
        type="text"
        id="search"
        placeholder="Enter a State name"
        onChange={props.handleChange}
        value={props.inputValue}
      />
    </>
  );
};

export default Input;
