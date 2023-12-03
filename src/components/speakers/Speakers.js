import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import React from 'react';
import SpeakerMenu from './SpeakerMenu';
import SpeakersList from './SpeakersList';
import { SpeakersDataProvider } from '../contexts/SpeakersDataContext';
import { SpeakerMenuProvider } from '../contexts/SpeakerMenuContext';

function Speakers() {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <div className={darkTheme ? 'theme-dark' : 'theme-light'}>
      <SpeakerMenuProvider>
        <SpeakerMenu />
        <div className="container">
          <div className="row g-4">
            <SpeakersDataProvider>
              <SpeakersList />
            </SpeakersDataProvider>
          </div>
        </div>
      </SpeakerMenuProvider>
    </div>
  );
}

export default Speakers;
