import { GlobalStyles } from '@mui/material';

export default function GlobalStyle() {
  return (
    <GlobalStyles styles={{
      '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      body: {
        backgroundColor: '#f5f5f5',
        fontFamily: 'Roboto, sans-serif',
      },
      '.virtualized-table': {
        height: '70vh',
        width: '100%',
        border: '1px solid #e0e0e0',
        borderRadius: '4px',
        overflow: 'auto',
      },
      '.citizen-details': {
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      },
    }} />
  );
}