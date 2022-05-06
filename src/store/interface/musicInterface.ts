interface playing {
  name: string;
  image?: string;
  url: string;
  timer: string;
}

interface musicTrackInterface {
  track: [
    {
      name?: string;
      album?: string;
      timer?: string;
      image?: string;
    }
  ];
}

export type { musicTrackInterface, playing };
