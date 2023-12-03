import React from 'react';
import SpeakerDetail from './SpeakerDetail';
import { useContext } from 'react';
import { SpeakersDataContext } from '../contexts/SpeakersDataContext';
import useSpeakerSortAndFilter from '../hooks/useSpeakerAndSortFilter';

export default function SpeakersList() {
  const { speakerList, loadingStatus } = useContext(SpeakersDataContext);
  const speakersListFiltered = useSpeakerSortAndFilter(speakerList);
  if (loadingStatus === 'loading') {
    return <div className="card">Loading</div>;
  }

  return (
    <>
      {speakersListFiltered.map(function (speakerRec) {
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
