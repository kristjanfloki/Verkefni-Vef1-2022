import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://fotbolti.net/" target="_blank">
      <img src="/315525016_518634279975871_7048136757821504818_n.jpg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://filadelfia.is/" target="_blank">
      <img src="/316050073_898575871553619_6361205239174072804_n.jpg" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>the Free Gylfi trustfund!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Cash is King!
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
