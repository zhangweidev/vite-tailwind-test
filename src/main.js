import './style.css'
 
 
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<h1 className="text-3xl font-bold underline">
Hello world!
</h1>

<button class="btn">Button</button>
`

setupCounter(document.querySelector('#counter'))
