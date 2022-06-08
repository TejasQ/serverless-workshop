import { buildClient, BaseClientOptions, XataRecord } from "@xata.io/client";

export interface User {
  name?: string | null;
  email?: string | null;
  age?: string | null;
  avatarUrl?: string | null;
  nickname?: string | null;
  pronouns?: string | null;
  team?: TeamRecord | null;
}

export type UserRecord = User & XataRecord;

export interface Team {
  name?: string | null;
  picture?: string | null;
}

export type TeamRecord = Team & XataRecord;

export type DatabaseSchema = {
  users: User;
  teams: Team;
};

const links = { users: [["team", "teams"]], teams: [] };

const tables = ["users", "teams"];

const DatabaseClient = buildClient();

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super(
      {
        databaseURL: "https://xata-learning-fvmet3.xata.sh/db/home",
        ...options,
      },
      links,
      tables
    );
  }
}
