import React, { Fragment } from "react";

import "./App.css";
import logo from "./images/title_logo.png";
import AppGroup from "./components/app_group.js";
import data from "./data";
const {
    first_app_group,
    second_app_group,
    third_app_group,
    fourth_app_group,
    fifth_app_group,
} = data;

function App() {
    return (
        <Fragment>
            <div
                data-collapse="none"
                data-animation="default"
                data-duration="400"
                className="logo-wrapper w-nav"
            >
                <div className="w-nav-overlay" data-wf-ignore=""></div>
            </div>
            <section className="main-wrapper">
                <main className="container top-container">
                    <a href="/submit" className="link-block w-inline-block">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNCpWvNxgSDx7Yepg4_v8znTOet8a0OFzFYrPsRzrVBDugKVj&s"
                            width="31"
                            alt=""
                        />
                    </a>
                    <h1 className="link-block w-inline-block">
                        <img src={logo} height="60" alt="" />
                    </h1>
                    <a href="/about" className="link-block w-inline-block">
                        <img
                            src="https://www.netclipart.com/pp/m/24-248220_file-zhwp-question-mark-svg-wikimedia-commons-google.png"
                            width="31"
                            alt=""
                        />
                    </a>
                </main>
            </section>
            <AppGroup {...first_app_group} />
            <AppGroup {...second_app_group} />
            <section className="wrapper">
                <div className="main-container main-containter-transparent">
                    <div className="columns w-row">
                        <div className="column-1 w-col w-col-4">
                            <a
                                href="https://techwiser.com/airpods-apps-for-android/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="blog-item w-inline-block"
                            >
                                <div className="blog-header-img"></div>
                                <div className="div-block-4">
                                    <h1 className="category-heading">How To</h1>
                                    <h1 className="heading-4">Experience Airpods On Android</h1>
                                    <p className="descrip">
                                        Best Airpods Apps for Android to Get iPhone Like Experience
                                        <br />
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="column-1 w-col w-col-4">
                            <a
                                href="https://www.macrumors.com/guide/airpods-pro-tips-and-tricks/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="blog-item w-inline-block"
                            >
                                <div className="blog-header-img airpods-pro-image"></div>
                                <div className="div-block-4">
                                    <h1 className="category-heading">Tips &amp;&nbsp;Tricks</h1>
                                    <h1 className="heading-4">
                                        Top 14 AirPods Pro Tips and Tricks
                                    </h1>
                                    <p className="descrip">
                                        Best Airpods Apps for Android to Get iPhone Like Experience
                                        <br />
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="column-1 column2 w-col w-col-4">
                            <a
                                href="https://techwiser.com/airpods-apps-for-android/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="blog-item w-inline-block"
                            >
                                <div className="blog-header-img"></div>
                                <div className="div-block-4">
                                    <h1 className="category-heading">How To</h1>
                                    <h1 className="heading-4">Experience Airpods On Android</h1>
                                    <p className="descrip">
                                        Best Airpods Apps for Android to Get iPhone Like Experience
                                        <br />
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <AppGroup {...third_app_group} />
            <AppGroup {...fourth_app_group} />
            <section className="wrapper">
                <div className="main-container main-containter-transparent">
                    <div className="columns w-row">
                        <div className="column-1 w-col w-col-6">
                            <a
                                href="https://techwiser.com/airpods-apps-for-android/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="blog-item w-inline-block"
                            >
                                <div className="blog-header-img"></div>
                                <div className="div-block-4">
                                    <h1 className="category-heading">How To</h1>
                                    <h1 className="heading-4">Experience Airpods On Android</h1>
                                    <p className="descrip">
                                        Best Airpods Apps for Android to Get iPhone Like Experience
                                        <br />
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="column-1 column2 w-col w-col-6">
                            <a
                                href="https://www.macrumors.com/guide/airpods-pro-tips-and-tricks/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="blog-item w-inline-block"
                            >
                                <div className="blog-header-img airpods-pro-image"></div>
                                <div className="div-block-4">
                                    <h1 className="category-heading">Tips &amp;&nbsp;Tricks</h1>
                                    <h1 className="heading-4">
                                        Top 14 AirPods Pro Tips and Tricks
                                    </h1>
                                    <p className="descrip">
                                        Best Airpods Apps for Android to Get iPhone Like Experience
                                        <br />
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <AppGroup {...fifth_app_group} />

            <footer className="wrapper">
                <div className="container-copy">
                    <a
                        href="https://twitter.com/huntermoonshot"
                        className="twitter-link w-inline-block"
                    >
                        <img
                            src="https://uploads-ssl.webflow.com/5dbe53da15cb7fb363a3264c/5dcb89ad90ed86c5db33d654_iconmonstr-twitter-1.png"
                            width="37"
                            alt=""
                            className="image-5"
                        />
                    </a>
                    <a
                        href="https://www.producthunt.com/posts/airpods-app-store"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="w-inline-block"
                    >
                        <img
                            src="https://uploads-ssl.webflow.com/5dbe53da15cb7fb363a3264c/5ddc328858529f6521152296_Screen%20Shot%202019-11-25%20at%202.58.29%20PM.png"
                            width="299"
                            alt=""
                            className="image-40"
                        />
                    </a>
                </div>
            </footer>
        </Fragment>
    );
}
export default App;
