import ContactCard from './components/ContactCard.jsx';
import { render, screen } from '@testing-library/react';
import JobCard from './components/JobCard.jsx';

it('Verify contact details', () => {
  render(
    <ContactCard/>
  );

  expect(screen.getByTestId("email").innerHTML).toBe("johnsmith@cloudaeye.com");
  expect(screen.getByTestId("phone").innerHTML).toBe("+1 12345678");
});


it('Verify Job department', () => {
  render(
    <JobCard/>
  );

  expect(screen.getByTestId("department").innerHTML).toBe("Engineering");
});