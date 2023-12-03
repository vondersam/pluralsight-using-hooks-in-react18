import SpeakerDetail from './SpeakerDetail';
import { useContext } from 'react';
import { ThemeContext } from '../themecontexts/themeContext';
import {
  SpeakersDataContext,
  SpeakersDataProvider
} from '../themecontexts/SpeakersDataContext';

function Inner({ id }) {
  const { darkTheme } = useContext(ThemeContext);
  const { speakerList, loadingStatus } = useContext(SpeakersDataContext);
  const speakerRec = speakerList?.find((rec) => rec.id === id);

  if (loadingStatus === 'loading') return <div>Loading...</div>;
  return speakerRec ? (
    <div className={darkTheme ? 'theme-dark' : 'theme-light'}>
      <SpeakerDetail speakerRec={speakerRec} showDetails={true} />
    </div>
  ) : (
    <h2 className="text-danger">Speaker {id} not found</h2>
  );
}

export default function Speaker(props) {
  return (
    <SpeakersDataProvider>
      <Inner {...props} />
    </SpeakersDataProvider>
  );
}
