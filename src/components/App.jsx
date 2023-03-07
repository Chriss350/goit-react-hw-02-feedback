import { Feedback } from './Feedback/Feedback';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 18,
        color: '#010101',
      }}
    >
      <Feedback />
    </div>
  );
};
