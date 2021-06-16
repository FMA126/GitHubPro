import { cleanup, render } from '@testing-library/react';
import Select from './Select';

const options = [{
    term: 'Option 1',
    value : '1' }, 
{
    term: 'Option 2',
    value: '2',
}
]

afterEach(cleanup);

test('renders Select', () => {
    const { queryByText } = render(<Select 
        name='example'
        labelId={'example-label'}
        id={'example'}
        value={''}
        options={options}
    />);
    expect(queryByText('example')).toBeTruthy();
  });
