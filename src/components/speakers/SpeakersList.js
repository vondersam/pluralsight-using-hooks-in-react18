import React from 'react';
import SpeakerDetail from './SpeakerDetail';
import { useContext } from 'react';
import { SpeakersDataContext } from '../themecontexts/SpeakersDataContext';

export default function SpeakersList() {
  const { speakerList, loadingStatus } = useContext(SpeakersDataContext);
  if (loadingStatus === 'loading') {
    return <div className="card">Loading</div>;
  }

  return (
    <>
      {speakerList.map(function (speakerRec) {
        return (
          <SpeakerDetail
            key={speakerRec.id}
            speakerRec={speakerRec}
            showDetails={false}
          />
        );
      })}
    </>
  );
}
