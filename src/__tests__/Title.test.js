import React, {Component} from 'react'
import { create } from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom'
import Title from '../Components/Title'

describe("Title component", () => {
    test('Title matches the snapshot', () => {
        const component = create(<BrowserRouter><Title /></BrowserRouter>);
        expect(component.toJSON()).toMatchSnapshot();
    });

    test("it shows the expected text when is rendered", () => {
      /*const component = create(<BrowserRouter><Title title="Photowall" /></BrowserRouter>);
      const instance = component.getInstance();
      expect(instance.props('title')).toBe("Photowall");*/
    });
  });