import React, { Component } from "react";
import "./App.css";
//import { Document, Page } from "react-pdf";
import { Document, Page } from "react-pdf/dist/entry.webpack";
import "react-pdf/dist/Page/AnnotationLayer.css";
import _ from "lodash";
import sample from "./Mt Gambier_TEST6_with_links.pdf";
//import "react-virtualized/styles.css";
//import { Collection } from "react-virtualized";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1 /*,
      list: [
        { name: "Brian Vaughn", x: 13, y: 34, width: 123, height: 234 },
        { name: "Brian Vaughn", x: 26, y: 68, width: 123, height: 234 },
        { name: "Brian Vaughn", x: 39, y: 102, width: 123, height: 234 }
      ]*/
    };
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  /*cellRenderer({ key, index, style }) {
    const pageNumber = index + 1;

    return <Page pageNumber={pageNumber} scale={1.2} />;
  }*/

  /*cellRenderer({ index, key, style }) {
    return (
      <div key={key} style={style}>
        {this.state.list[index].name}
        <Page pageNumber={this.state.pageNumber} />
      </div>
    );
  }

  cellSizeAndPositionGetter({ index }) {
    const datum = this.state.list[index];

    return {
      height: datum.height,
      width: datum.width,
      x: datum.x,
      y: datum.y
    };
  }*/

  renderEachPage() {
    return _.times(16, i => {
      console.log(i);
      return (
        <div className="page">
          <Page
            id={i}
            scale={window.innerHeight / 841}
            pageNumber={i + 1}
            renderAnnotations={true}
            onLoadSuccess={page => {
              //alert("success load");
            }}
          />
        </div>
      );
    });
  }

  renderTwoPage(currentPageIndex) {
    return (
      <Page
        pageNumber={currentPageIndex}
        scale={window.innerHeight / 841}
        renderAnnotations={true}
        loading={<div>Please wait PAGE!</div>}
      />
    );
  }
  render() {
    return (
      <div className="container">
        <iframe
          className="iframe-container"
          src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=f1unwn99d&bgcolor=EEEEEE&t=1532668421"
          seamless="seamless"
          scrolling="no"
          frameBorder="0"
          allowFullScreen="true"
        />
      </div>
    );
  }
  /*render() {
    return (
      <div className="container">
        <iframe
          className="iframe-container"
          src="https://drive.google.com/file/d/1NkHGpCavNHkQ42nmGHXC6zKa1i9Kkrm9/preview"
        />
      </div>
    );
  }*/

  /*render() {
    const { pageNumber, numPages } = this.state;
    console.log(window.innerWidth);
    console.log(window.innerHeight);

    return (
      <div className="container">
        <Document
          file={sample}
          loading={<div>Please wait DOCUMENT!</div>}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <div className="documentContainer">{this.renderEachPage()}</div>
        </Document>
        <div className="button previous_page">
          <span
            style={{ fontSize: "28px" }}
            onClick={() => {
              console.log("MINUS");
              this.setState({ pageNumber: pageNumber - 2 });
            }}
          >
            Previous
          </span>
        </div>
        <div className="button next_page">
          <span
            style={{ fontSize: "28px" }}
            onClick={() => {
              console.log("PLUS");
              this.setState({ pageNumber: pageNumber + 2 });
            }}
          >
            Next
          </span>
        </div>
      </div>
    );
  }*/
}

export default App;
