export type Team = {
    id: number;
    name: string;
};

export type TeamRecord = {
    team: Team;
    wins: number;
    losses: number;
    winningPercentage: string;
    gamesBack: string;
};

export type Division = {
    division: {
        id: number;
        name: string;
        nameShort: string;
    };
    teamRecords: TeamRecord[];
};

export const DIVISION_NAMES: Record<number, string> = {
    201: "AL East",
    202: "AL Central",
    200: "AL West",
    204: "NL East",
    205: "NL Central",
    203: "NL West",
};