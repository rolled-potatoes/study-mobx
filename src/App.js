// import { observer, inject } from 'mobx-react';
// import React from 'react'
// import Counter from './components/counter';

// function App() {
//   return (
//     <div >
//       <Counter />
//     </div>
//   )
// };


// export default inject('counter')(observer(App));


import React from 'react';
import SuperMarket from './components/SuperMarket'
import DevTools from 'mobx-react-devtools';

function App() {
  return (
    <div>
      {/* <DevTools /> */}
      <SuperMarket />
    </div>
  )
}

export default App; 