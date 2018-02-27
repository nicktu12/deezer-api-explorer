import React from 'react';

const ReleaseDetails = (props) => (
  <table>
    <img src={props.albumDetails.albumCover}/>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Artist</th>
      <th>Time</th>
      <th>Released</th>
    </tr>
    {
      props.albumDetails.albumTracks.map((track, index) => (
        <tr>
          <td>{index + 1}</td>
          <td>{track.trackTitle}</td>
          <td>{track.trackArtist}</td>
          <td>{track.trackDuration}</td>
          <td>{props.albumDetails.albumRelease}</td>
        </tr>
      ))
    }
  </table>
);

export default ReleaseDetails;
