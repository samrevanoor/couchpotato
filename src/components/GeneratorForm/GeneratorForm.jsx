import { React, Component } from "react";
import "../GeneratorForm/GeneratorForm.css";
import yearRange from "../../utils/yearArray";

class GeneratorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      year: "",
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
    let performerArray = e.target.value
      .trim()
      .replace(/\s*,\s*/g, ",")
      .split(",");
    this.setState({
      performers: performerArray,
    });
  };

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
          {/* onSubmit={this.handleSubmit}> */}
          <div>
            <div>
              <label>genre </label>
              <select name="genre" onChange={(e)=>this.handleChange(e)}>
                <option value="comedy">comedy</option>
                <option value="romance">romance</option>
                <option value="drama">drama</option>
                <option value="action">action</option>
                <option value="fantasy">fantasy</option>
                <option value="horror">horror</option>
                <option value="documentary">documentary</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label>year </label>
              <select name="year" onChange={(e)=>this.handleChange(e)}>
                {yearRange()}
              </select>
              &nbsp;
              <label>to</label>
              <select name="year" onChange={(e)=>this.handleChange(e)}>
                {yearRange()}
              </select>
            </div>
          </div>
          <div>
            <div>
              <label>performers </label>
              <input
                type="text"
                placeholder="separate with commas"
                value={this.state.performers}
                name="performers"
                onChange={(e)=>this.handlePerformersChange(e)}
              />
            </div>
          </div>
          <div>
            <div>
              <label>director </label>
              <input
                type="text"
                value={this.state.director}
                name="director"
                onChange={(e)=>this.handleChange(e)}
              />
            </div>
          </div>
          <div>
            <div className="col-sm-12 text-center">
              <button className="btn btn-default GeneratorForm-button">
                {" "}
                generate!
              </button>
              &nbsp;&nbsp;
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default GeneratorForm;
