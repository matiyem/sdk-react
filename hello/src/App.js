import React from 'react';
import './App.css';
import MySDK from './dist/mysdk';
import ReactDOM from 'react-dom/client';
export default class App extends React.Component {


    render() {
        return (

            <div>
                <MySDK>

                </MySDK>
            </div>
        );
    }
}


// export default function App() {
//     return (
//         <div>
//             {/*<ErrorBoundary>*/}
//                 <MySDK>
//                 </MySDK>
//             {/*</ErrorBoundary>*/}
//         </div>
//
//     );
// }