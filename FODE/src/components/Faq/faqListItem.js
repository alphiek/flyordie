import React, { Component } from "react"
import { graphql, StaticQuery } from 'gatsby'
import { FaqWrapper, FaqItem, FaqHeading, InfoButton, FaqText } from './faqStyles'

class FaqListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: 0,
        isHidden: true,
    };

    this.toggleHidden = this.toggleHidden.bind(this);
  }


  toggleHidden (event) {
    console.log('clicked');
    let targetId = event.target.id;

     console.log(`EventID ${event.target.id}`);
     console.log(`TargetID ${targetId}`);

       this.setState({
           id: targetId,
           isHidden: !this.state.isHidden
       });

      console.log(this.state.id, this.state.isHidden);
     }

   render () {
     console.log(this.props)
     return (
       <FaqWrapper>
         {this.props.faqs.edges.map((faq, index) => {
           return (
             <FaqItem key={faq.node.id} >
               <div>
                 <InfoButton id={index} onClick={this.toggleHidden}>View Info</InfoButton>
                 <FaqHeading>{faq.node.title}</FaqHeading>
                 {!this.state.isHidden && (<FaqText>{faq.node.help}</FaqText>)}
               </div>
              </FaqItem>
           );
         })}
         </FaqWrapper>
     )
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
    render={(data) => (
      <FaqListItem faqs={data.allDatoCmsFaq} />
    )}
    />
  )
