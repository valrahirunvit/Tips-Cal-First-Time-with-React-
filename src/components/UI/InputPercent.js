function InputPercent(props) {
  return (
    <>
      <input
        type="radio"
        value={props.value}
        id={props.id}
        name="radio"
        checked={props.checked}
        onChange={(e) => props.onChange(e.target.value)}
      />
      <label className="labelPercentText" htmlFor={props.label}>
        {props.labelText}
      </label>
    </>
  );
}

export default InputPercent;
