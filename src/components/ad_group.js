import React, { Component } from "react";

class AdGroup extends Component {
    render() {
        const { item_list } = this.props;
        return (
            <section className="wrapper">
                <div className="main-container main-containter-transparent">
                    <div className="columns w-row">
                        {item_list.map((item, i) => {
                            var class_string = "column-1 w-col w-col-4";
                            if (i === 2) class_string = class_string + " column2";
                            return (
                                <div key={i} className={class_string}>
                                    <a
                                        href={item.link}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="blog-item w-inline-block"
                                    >
                                        <div
                                            className="blog-header-img"
                                            style={{
                                                backgroundImage: `url('${item.image}')`,
                                            }}
                                        ></div>
                                        <div className="div-block-4">
                                            <h1 className="category-heading">
                                                {item.category_heading}
                                            </h1>
                                            <h1 className="heading-4">{item.main_heading}</h1>
                                            <p className="descrip">
                                                {item.description}
                                                <br />
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default AdGroup;
