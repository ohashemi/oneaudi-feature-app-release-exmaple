import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import enableHooks from 'jest-react-hooks-shallow';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// This package enables us to use the shallow rendering with useEffect hooks
// see https://github.com/enzymejs/enzyme/issues/2086
enableHooks(jest);
