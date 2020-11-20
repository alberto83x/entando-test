import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import 'components/__mocks__/i18n';
import conferenceMocks from 'components/__mocks__/conferenceMocks';
import ConferenceTable from 'components/ConferenceTable';

describe('ConferenceTable', () => {
  it('shows conferences', () => {
    const { getByText } = render(<ConferenceTable items={conferenceMocks} />);
    expect(
      getByText(
        'Sunt quia aliquid dolorem nisi voluptatem tempore. Esse unde fugiat veniam aperiam accusamus voluptatibus molestiae. Doloribus voluptas iste qui animi. Non aliquam recusandae est laborum accusamus.'
      )
    ).toBeInTheDocument();
    expect(
      getByText(
        'Ut commodi temporibus voluptas nam quia. Et repudiandae velit deleniti aut et. Sit necessitatibus officia ipsum aliquid nihil. Sit doloribus perspiciatis impedit explicabo error ipsa. Consequatur quas quo nostrum maiores tenetur pariatur nisi.'
      )
    ).toBeInTheDocument();
  });

  it('shows no conferences message', () => {
    const { queryByText } = render(<ConferenceTable items={[]} />);
    expect(
      queryByText(
        'Sunt quia aliquid dolorem nisi voluptatem tempore. Esse unde fugiat veniam aperiam accusamus voluptatibus molestiae. Doloribus voluptas iste qui animi. Non aliquam recusandae est laborum accusamus.'
      )
    ).not.toBeInTheDocument();
    expect(
      queryByText(
        'Ut commodi temporibus voluptas nam quia. Et repudiandae velit deleniti aut et. Sit necessitatibus officia ipsum aliquid nihil. Sit doloribus perspiciatis impedit explicabo error ipsa. Consequatur quas quo nostrum maiores tenetur pariatur nisi.'
      )
    ).not.toBeInTheDocument();

    expect(queryByText('entities.conference.noItems')).toBeInTheDocument();
  });

  it('calls onSelect when the user clicks a table row', () => {
    const onSelectMock = jest.fn();
    const { getByText } = render(
      <ConferenceTable items={conferenceMocks} onSelect={onSelectMock} />
    );
    fireEvent.click(
      getByText(
        'Sunt quia aliquid dolorem nisi voluptatem tempore. Esse unde fugiat veniam aperiam accusamus voluptatibus molestiae. Doloribus voluptas iste qui animi. Non aliquam recusandae est laborum accusamus.'
      )
    );
    expect(onSelectMock).toHaveBeenCalledTimes(1);
  });
});
