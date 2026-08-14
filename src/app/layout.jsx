import '../index.css';

export const metadata = {
  title: 'Mouad Wahidi | Portfolio',
  description: 'Portfolio of Mouad Wahidi, Quant & AI Engineer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
