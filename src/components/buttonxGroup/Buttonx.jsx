import './buttonx.scss';
const Buttonx = () => {
  return (
    <div className="buttonx">
      <input type="radio" id="radio1" name="radios" value="all" />
      <label className="green" for="radio1">
        All
      </label>

      <input type="radio" id="radio2" name="radios" value="open" />
      <label className="green" for="radio2">
        Open
      </label>

      <input type="radio" id="radio4" name="radios" value="other" />
      <label className="green" for="radio4">
        Other
      </label>

      <input type="radio" id="radio3" name="radios" value="true" />
      <label className="red" for="radio3">
        Archived
      </label>
    </div>
  );
};
export default Buttonx;
