import { configure } from 'enzyme';
import Enzyme from  'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
})
