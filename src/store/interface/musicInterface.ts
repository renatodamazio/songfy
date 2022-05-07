interface musicTrackInterface {
  track: [
    {
      name?: string;
      album?: string;
      timer?: string;
      image?: string;
    }
  ];

  playTrack: {
    name?: string;
    image?: string;
    url?: string;
    timer?: string;
  };
}

export type { musicTrackInterface };
