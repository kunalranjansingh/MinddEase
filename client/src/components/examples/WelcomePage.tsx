import WelcomePage from '../WelcomePage';
import { ThemeProvider } from '../ThemeProvider';

export default function WelcomePageExample() {
  return (
    <ThemeProvider>
      <WelcomePage />
    </ThemeProvider>
  );
}