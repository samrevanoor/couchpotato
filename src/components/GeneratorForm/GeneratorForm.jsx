import { React, Component } from "react";
import "../GeneratorForm/GeneratorForm.css";
import yearRange from "../../utils/yearArray";

class GeneratorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      startYear: "",
      endYear: "",
      performers: [],
      director: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlePerformersChange = (e) => {
    let performerArray = e.target.value.replace(/\s*,\s*/g, ",").split(",");
    this.setState({
      performers: performerArray,
    });
  };

  isFormInvalid() {
    return !(this.state.startYear < this.state.endYear);
  }

  //   handleSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await userService.signup(this.state);
  //       this.props.handleSignupOrLogin();
  //       this.props.history.push('/');
  //     } catch (err) {
  //       this.props.updateMessage(err.message);
  //     }
  //   }

  render() {
    return (
      <div className="GeneratorForm-body">
        <form>
          <div className="GeneratorForm-form">
            {/* onSubmit={this.handleSubmit}> */}
            <div>
              <label>genre </label>
              <select name="genre" onChange={(e) => this.handleChange(e)}>
                <option key="emptyGenre" value=""></option>
                <option value="comedy">comedy</option>
                <option value="romance">romance</option>
                <option value="drama">drama</option>
                <option value="action">action</option>
                <option value="fantasy">fantasy</option>
                <option value="horror">horror</option>
                <option value="documentary">documentary</option>
              </select>
            </div>
            <div>
              <label>year </label>
              <select name="startYear" onChange={(e) => this.handleChange(e)}>
                <option key="emptyStart" value=""></option>
                {yearRange()}
              </select>
              &nbsp;
              <label>to</label>
              <select name="endYear" onChange={(e) => this.handleChange(e)}>
                <option key="emptyEnd" value=""></option>
                {yearRange()}
              </select>
              <span className="GeneratorForm-instruction">
                leave blank if you don't mind any year
              </span>
            </div>
            <div>
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
            </div>
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
