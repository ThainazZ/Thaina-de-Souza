import * as S from './styles';
import { Suspense } from 'react';
import Frontend from '../templates/Frontend';

const locales = {
  en: { title: 'English'},
  pt: { title: 'Portuguese'}
};

function App() {
  return (
  <Frontend>
  </Frontend>
  );
};

export default function WrappedApp () {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
};
