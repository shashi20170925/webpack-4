import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
import Heading from './components/heading/heading.js';
import _ from 'lodash';

import addImage from './add-image';
const heading=new Heading();
heading.render(_.upperFirst('Hello World page'));

const helloWorldButton =new HelloWorldButton();
helloWorldButton.render();

if(process.env.NODE_ENV==='production'){
    console.log(" production build");

}
else if(process.env.NODE_ENV==='development'){
    console.log(" development mode build");

}
//helloWorldButton.crazymethod();
//addImage();