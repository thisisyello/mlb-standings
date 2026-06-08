import { Division, DIVISION_NAMES } from "@/type";

export default async function Home() {
  const response = await fetch("https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2024&standingsType=regularSeason");
  const data = await response.json();
  const records: Division[] = await data.records;

  return (
    <div className="">
      {
        records.map(item => (
          <div key={item.division.id}>
            <h2>{DIVISION_NAMES[item.division.id]}</h2>
            {item.teamRecords.map(itemRec => (
              <p key={itemRec.team.id}>{itemRec.team.name}</p>
            ))}
          </div>
        ))
      }
    </div>
  );
}