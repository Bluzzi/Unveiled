export interface ServerToClientEvents {
  "game:start": () => void;
  "game:player-eliminated": (userId: string) => void;
  "game:sendTime": (timeRemaining: number) => void;
}

export interface ClientToServerEvents {
  "game:create": (callback: (room: string | -1) => void) => void;
  "game:join": (room: string, callback: (succes: boolean) => void) => void;
  "game:start": (room: string) => void;
  "game:send-word": (word: string, callback: (succes: boolean) => void) => void;
  "game:vote": (userId: string) => void;
}

export interface InterServerEvents {
  ping: () => void;
}