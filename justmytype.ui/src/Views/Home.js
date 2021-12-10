import React, { useEffect, useState } from 'react'
import { getCategoryFonts, getUserCategories } from '../data/categoryData';

var WebFont = require('webfontloader');

WebFont.load({
  google: {
    families: ['Lobster']
  }
});


export default function Home({user}) {
  const [resp, setResp] = useState([]);

  useEffect(() => {
    getCategoryFonts("81988b62-bea6-4600-b9c9-95b5d150541c").then(setResp);
  }, []);

console.warn(resp);

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
};
