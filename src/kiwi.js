import Heading from './components/heading/heading';
import KiwiImage from './components/kiwi-image/kiwi-image';
import _ from 'lodash';


const heading=new Heading();
heading.render(_.upperFirst('kiwi page'));


const kiwiImage=new KiwiImage();
kiwiImage.render();
