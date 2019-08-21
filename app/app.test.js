import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { exportAllDeclaration } from '@babel/types';

import Header from './components/header';
import SignUp from './components/signup';
import StorageUtilization from './components/storageUtilization';
import ReplicationStatus from './components/replicationStatus';
import Accordion from './components/accordion/accordion';


configure({ adapter: new Adapter() });

describe('Header Component', () => {
    it('It should render without errors', () => {
       const wrapper = shallow(<Header />)
       expect(wrapper.find('ul.navbar-nav').children().length).toEqual(4);
    });
});

describe('SignUp Component', () => {
    it('It should render without errors', () => {
       shallow(<SignUp />)
    });
});

describe('StorageUtilization Component', () => {
    it('It should render without errors', () => {
       shallow(<StorageUtilization />)
    });
});
