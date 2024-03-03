import "./Form.css";
function Form() {
  return (
    <>
      <form className="form-contener"> 
      <div className="form-hills">
              <img src="images\full bg.PNG" alt="" />
       </div>
        <div className="row">
          <div className="form-main-text">
            <h2>WELCOME TO YOUTSPHIRE</h2>
            <p>sign up here</p>
          </div>

          <div className="form-one">
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                className="form-control"
                aria-label="First name"
              />
            </div>

            <div className="form-one">
              <div className="form-group">
                <label htmlFor="inputEmail4">USERNAME</label>
                <input
                  type="USERNAME"
                  className="form-control"
                  id="inputEmail4"
                  placeholder=""
                />
              </div>
            </div>
            <div className=" submit-desktop">
              <div className="form-group-checkbox">
                <input type="checkbox" id="FieldsetCheck" />
                <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                  Accept terms and condition*
                </label>
              </div>
              <button type="submit" id="destop-button">
                Submit
              </button>
            </div>
          </div>
          <div className="box-2">
            <div className="form-one">
              <div className="form-group">
                <label htmlFor="inputEmail4">EMAIL</label>
                <input
                  type="INTEREST"
                  className="form-control"
                  id="inputEmail4"
                  placeholder=""
                />
              </div>
            </div>
            <div className="form-one">
              <div className="form-group">
                <label htmlFor="inputEmail4">CREATE PASSWORD</label>
                <input
                  type="SKILLS"
                  className="form-control"
                  id="PASSWORD"
                  placeholder=""
                />
              </div>
            </div>
            <div className=" tift">
              <div className="form-group">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="FieldsetCheck"
                />
                <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                  Accept terms and condition*
                </label>
              </div>
              <button type="submit" className="mobile-button">
                Submit
              </button>
            </div>
          </div>
        </div>
       
      </form>

    </>
  );
}

export default Form;
