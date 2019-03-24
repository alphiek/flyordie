import React from 'react'
import Masonry from "react-masonry-component";
import {
    MasonryWrapper,
    ShopItem,
    InfoWrapper,
    ProductDesc,
    Divider,
    ShopperLink
} from './shopStyles'

const Gallery = (props) => {
   const childElements = props.galleryItems.map((item) => {
     let selected = props.selected
     let filter = item.node.itemtype

     if (filter === selected ) {
       console.log(filter, selected)
       return (
         <ShopItem key={item.node.id}>
           <div>
             <InfoWrapper>
               <ProductDesc>{item.node.shopdescription}</ProductDesc>
               <Divider />
               <ShopperLink href={`http://localhost:8000/${item.node.slug}`}>SHOP</ShopperLink>
             </InfoWrapper>
             <a href={`http://localhost:8000/${item.node.slug}`}>
               <img src={item.node.image.url} alt={item.node.image.alt} />
             </a>
           </div>
         </ShopItem>
       )} else if (!selected) {
         return (
           <ShopItem key={item.node.id}>
             <div>
               <InfoWrapper>
                 <ProductDesc>{item.node.shopdescription}</ProductDesc>
                 <Divider />
                 <ShopperLink href={`http://localhost:8000/${item.node.slug}`}>SHOP</ShopperLink>
               </InfoWrapper>
               <a href={`http://localhost:8000/${item.node.slug}`}>
                 <img src={item.node.image.url} alt={item.node.image.alt} />
               </a>
             </div>
           </ShopItem>
         )
       }
     }
   )


  return (
    <MasonryWrapper>
      <Masonry>
        {childElements}
      </Masonry>
    </MasonryWrapper>
  )
}

 export default Gallery
