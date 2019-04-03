import React, { Component } from "react";
import { graphql, StaticQuery } from "gatsby";
import { color } from "../../GlobalCss/variables";
import arrow from "../../images/openArrow.svg";

import {
  FaqWrapper,
  FaqItem,
  FaqHeading,
  InfoButton,
  FaqText
} from "./faqStyles";

class FaqListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    let targetId = Number(event.target.id);
    this.setState(
      {
        id: targetId
      },
      () => {
        console.log(this.state.id);
      }
    );
  }

  render() {
    const inactiveStyle = {
      color: color.primaryInactive
    };

    return (
      <FaqWrapper>
        {this.props.faqs.edges.map((faq, index) => {
          return (
            <FaqItem key={faq.node.id}>
              <div>
                <FaqHeading
                  style={this.state.id === index ? null : inactiveStyle}
                >
                  {faq.node.title}
                </FaqHeading>
                {this.state.id === index ? (
                  <FaqText>{faq.node.help} </FaqText>
                ) : (
                  <InfoButton
                    background={arrow}
                    id={index}
                    onClick={this.handleClick}
                  />
                )}
              </div>
            </FaqItem>
          );
        })}
      </FaqWrapper>
    );
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query FaqQuery {
        allDatoCmsFaq {
          edges {
            node {
              id
              title
              help
            }
          }
        }
      }
    `}
    render={data => <FaqListItem faqs={data.allDatoCmsFaq} />}
  />
);

{/*Add PropTypes*/}
