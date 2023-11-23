import Header from './components/header/header.js'
import Content from './components/content/content.js'

const header = new Header();
const content = new Content();

    header.render();
    content.render();

import ('helloButtonApp/helloButton')
   .then(HelloButtonModule => {
    const HelloButton =  HelloButtonModule.default;
    const helloButton = new HelloButton();
    helloButton.render()
   })

   