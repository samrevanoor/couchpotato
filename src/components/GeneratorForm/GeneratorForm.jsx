import { React, Component } from "react";
import "../GeneratorForm/GeneratorForm.css";
import yearRange from "../../utils/yearArray";
// import { search } from "../../utils/randomizer"

class GeneratorForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     genre: "",
  //     startYear: "",
  //     endYear: "",
  //     // performers: [],
  //     // director: "",
  //   };
  // }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // handlePerformersChange = (e) => {
  //   let performerArray = e.target.value.replace(/\s*,\s*/g, ",").split(",");
  //   this.setState({
  //     performers: performerArray,
  //   });
  // };

  isFormInvalid() {
    if (this.props.startYear && this.props.endYear) {
      return this.props.startYear > this.props.endYear;
    }
  }

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     console.log(this.state);
  //     await search(this.state);
  //     this.props.history.push("/result")
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  render() {
    return (
      <div className="GeneratorForm-body">
        <form onSubmit={(e)=>this.props.handleGeneratorFormSubmit(e)}>
          <div className="GeneratorForm-form">
            <div>
              <label>genre </label>
              <select name="genre" onChange={(e) => this.props.handleGeneratorFormChange(e)}>
                <option key="emptyGenre" value=""></option>
                <option value="28">action</option>
                <option value="12">adventure</option>
                <option value="16">animation</option>
                <option value="35">comedy</option>
                <option value="80">crime</option>
                <option value="99">documentary</option>
                <option value="18">drama</option>
                <option value="10751">family</option>
                <option value="14">fantasy</option>
                <option value="36">history</option>
                <option value="27">horror</option>
                <option value="10402">music</option>
                <option value="9648">mystery</option>
                <option value="10749">romance</option>
                <option value="878">science fiction</option>
                <option value="53">thriller</option>
                <option value="10770">tv movie</option>
                <option value="10752">war</option>
                <option value="37">western</option>
              </select>
            </div>
            <div>
              <label>year </label>
              <select name="startYear" onChange={(e) => this.props.handleGeneratorFormChange(e)}>
                <option key="emptyStart" value=""></option>
                {yearRange()}
              </select>
              &nbsp;
              <label>to</label>
              <select name="endYear" onChange={(e) => this.props.handleGeneratorFormChange(e)}>
                <option key="emptyEnd" value="2021"></option>
                {yearRange()}
              </select>
              <span className="GeneratorForm-instruction">
                leave blank if you don't mind any year
              </span>
            </div>
            {/* <div>
              <label>performers </label>
              <input
                type="text"
                placeholder="separate with commas"
                value={this.state.performers}
                name="performers"
                onChange={(e) => this.handlePerformersChange(e)}
              />
            </div>
            <div>
              <label>director </label>
              <input
                type="text"
                value={this.state.director}
                name="director"
                onChange={(e) => this.handleChange(e)}
              />
            </div> */}
          </div>
          <div>
            <button
              className="btn btn-default GeneratorForm-button"
              disabled={this.isFormInvalid()}
            >
              generate!
            </button>
            &nbsp;&nbsp;
          </div>
        </form>
      </div>
    );
  }
}

export default GeneratorForm;
