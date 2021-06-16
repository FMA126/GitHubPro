import { cleanup, render } from '@testing-library/react';
import TextBox from './TextBox';

afterEach(cleanup);

test('renders Select', () => {
    const { queryByText } = render(<TextBox
        label="Test"
        id="test-1"
        name="Test"
        defaultValue=""
        helperText="test helper"
        error={false}
    />);
    expect(queryByText('Test')).toBeTruthy();
  });