const INITIAL_STATE={
    sections:[{
        title: 'Bags',
        imageUrl: 'https://i.ibb.co/4SMcqr7/pexels-matheus-bertelli-2905238.jpg',
        id: 1,
        linkUrl: 'shop/hats'
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
       
        id: 4,
        size:'large',
        linkUrl: 'shop/womens'
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
      }]
}

const directoryReducer=(state=INITIAL_STATE,action)=>{
  switch(action.type){
    default:
      return state;
  }
}

export default directoryReducer;