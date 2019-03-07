import React from "react";
import { graphql, StaticQuery } from "gatsby";
import {
  RangeFlex,
  InfoContainer,
  Blurb,
  OptionsText,
  OptionsFlex,
  RangeSelector,
  RangeIcon
} from "./rangeSearchStyles";
import { Subheading } from "../../GlobalCss/other";

const RangeSearch = () => (
  <StaticQuery
    query={graphql`
      query RangeQuery {
        allDatoCmsProduct {
          edges {
            node {
              id
              icon {
                alt
                url
              }
              range
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <OptionsText>Select range to see options available</OptionsText>
        <RangeFlex>
          <OptionsFlex>
            {data.allDatoCmsProduct.edges.map(({ node: product }) => (
              <RangeSelector key={product.id}>
                <RangeIcon src={product.icon.url} alt={product.icon.alt} />
                <Subheading>{product.range}</Subheading>
              </RangeSelector>
            ))}
          </OptionsFlex>
          <InfoContainer>
            <Blurb>
              All our products are made and designed in the UK, Created from Eco
              Friendly Fabrics and Materials. We support Mind UK and are
              committed that with every purchase a portion of the proceeds are
              donated to this amazing charity to help others.
            </Blurb>
          </InfoContainer>
        </RangeFlex>
      </React.Fragment>
    )}
  />
);

export default RangeSearch;
