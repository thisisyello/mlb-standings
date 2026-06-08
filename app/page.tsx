import { Division } from "@/type";
import StandingTable from "./components/StandingTable";

export default async function Home() {
  const response = await fetch("https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2024&standingsType=regularSeason");
  const data = await response.json();
  const records: Division[] = data.records;

  return (
    <StandingTable records={records}/>
  );
}