import React from 'react';
import {render} from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

const renderWithRouter = (ui, {route = '/'} = {}) => {
    window.history.pushState({}, 'Test page', route)
  
    return render(ui, {wrapper: BrowserRouter})
  }

export default renderWithRouter;