import { Division, DIVISION_NAMES } from "@/type";

export default async function StandingTable({ records }: { records: Division[] }) {
  return (
    <div className="">
        {records.map(item => (
            <div key={item.division.id}>
                <h2>{DIVISION_NAMES[item.division.id]}</h2>
                {item.teamRecords.map(itemRec => (
                <p key={itemRec.team.id}>
                    {itemRec.team.name} | {itemRec.wins}승 {itemRec.losses}패 ({itemRec.winningPercentage})
                </p>
                ))}
            </div>
        ))}
    </div>
  );
}