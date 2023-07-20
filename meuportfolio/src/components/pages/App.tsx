import { Suspense } from 'react';
import Frontend from '../templates/Frontend';


function App() {
  return (
  <Frontend/>
  
  );
};

export default function WrappedApp () {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
};
