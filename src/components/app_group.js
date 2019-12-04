import React, { Component } from "react";
import get_icon from "../images/get_icon.png";
class AppGroup extends Component {
    render() {
        const { category_heading, main_heading, item_list } = this.props;
        return (
            <div>
                <section className="wrapper">
                    <main className="main-container">
                        <h1 className="category-heading">{category_heading}</h1>
                        <h1 className="heading-2">{main_heading}</h1>
                        <div className="w-dyn-list">
                            <div className="collection-list-2 w-dyn-items">
                                {item_list.map((item, i) => (
                                    <div key={i} className="collection-item-2 w-dyn-item">
                                        <a href={item.link} className="link-item w-inline-block">
                                            <div className="icon-wrapper">
                                                <div
                                                    style={{
                                                        backgroundImage: `url('${item.image}')`,
                                                    }}
                                                    className="icon"
                                                ></div>
                                            </div>
                                            <div className="app-info">
                                                <h1 className="app-name">{item.app_name}</h1>
                                                <h2 className="app-descrip">
                                                    {item.app_description}
                                                </h2>
                                            </div>
                                            <div className="get-wrapper">
                                                <img src={get_icon} width="40" alt="Get" />
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>
                </section>
            </div>
        );
    }
}

export default AppGroup;
