import React, { Component } from "react";

class AddComponent extends Component {
    render() {
        return (
            <div className="module_wrap-4 contact_form main_contact">
                <a href="/" className="w-inline-block">
                    <img
                        src="https://uploads-ssl.webflow.com/5dbe53da15cb7fb363a3264c/5dd76499b9c85c4db47c076f_Airpods%20App%20Store%20256.png"
                        alt=""
                        className="form12_logo"
                    />
                </a>
                <div className="form12-2">
                    <div className="form12_block-2 contact_form less_space w-form">
                        <div className="form12_title_wrap-2">
                            <h1 className="main-heading submit-page">Airpods App&nbsp;Store</h1>
                        </div>
                        <form
                            id="wf-form-Website-Build-Form"
                            name="wf-form-Website-Build-Form"
                            data-name="Website Build Form"
                            className="form12_form"
                        >
                            <div className="form12_field_wrap-2">
                                <input
                                    type="text"
                                    className="form-input form-input-large w-input"
                                    maxLength="256"
                                    name="Name"
                                    data-name="Name"
                                    placeholder="Your Name"
                                    id="Name"
                                    required=""
                                />
                                <input
                                    type="email"
                                    className="form-input form-input-large w-input"
                                    maxLength="256"
                                    name="Email"
                                    data-name="Email"
                                    placeholder="Your Email"
                                    id="Email"
                                    required=""
                                />
                                <input
                                    type="text"
                                    className="form-input form-input-large w-input"
                                    maxLength="256"
                                    name="App-Name"
                                    data-name="App Name"
                                    placeholder="App Name"
                                    id="App-Name"
                                    required=""
                                />
                                <input
                                    type="text"
                                    className="form-input form-input-large w-input"
                                    maxLength="256"
                                    name="App-Website"
                                    data-name="App Website"
                                    placeholder="App Store URL"
                                    id="App-Website"
                                    required=""
                                />
                            </div>
                            <div className="form12_button_wrap-2">
                                <input
                                    type="submit"
                                    value="SUBMIT APP"
                                    data-wait="sending..."
                                    className="btn w-button"
                                />
                            </div>
                        </form>
                        <div className="f02_success_message w-form-done">
                            <div className="form_alert">
                                <div className="form_alert_wrap">
                                    <img
                                        src="https://uploads-ssl.webflow.com/5d94cb514cde5d4f5a6593ba/5d94cb514cde5d9d356595af_check-white.svg"
                                        width="14"
                                        alt=""
                                        className="form_alert_icon"
                                    />
                                    <div className="form_alert_line"></div>
                                    <div className="form_alert_text white-text">Success!</div>
                                </div>
                            </div>
                        </div>
                        <div className="error-message-4 w-form-fail">
                            <div className="form_error">
                                <div className="form_error_wrap">
                                    <img
                                        src="https://uploads-ssl.webflow.com/5d94cb514cde5d4f5a6593ba/5d94cb514cde5d45a56595ae_alert-circle-white.svg"
                                        width="16"
                                        alt=""
                                        className="form_error_icon"
                                    />
                                    <div className="form_error_line"></div>
                                    <div className="form_error_paragraph white-text">
                                        Looks like we're having trouble
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddComponent;
