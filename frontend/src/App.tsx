import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components';


import Home from "./pages/Home";



function App() {
    return (
        <>
            <BrowserRouter>
                 <Home/>

            </BrowserRouter>
        </>
    );
}

export default App;
