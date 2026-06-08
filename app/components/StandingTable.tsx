import { Division, DIVISION_NAMES } from "@/type";

export default async function StandingTable({ records }: { records: Division[] }) {
return (
    <div className="max-w-4xl mx-auto p-6">
    {records.map(item => (
        <div key={item.division.id} className="mb-8">
        <h2 className="text-xl font-bold mb-2">
            {DIVISION_NAMES[item.division.id]}
        </h2>
        <table className="w-full border-collapse">
            <thead>
            <tr className="bg-gray-100 text-left">
                <th className="p-2">팀</th>
                <th className="p-2">승</th>
                <th className="p-2">패</th>
                <th className="p-2">승률</th>
            </tr>
            </thead>
            <tbody>
            {item.teamRecords.map(itemRec => (
                <tr key={itemRec.team.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{itemRec.team.name}</td>
                <td className="p-2">{itemRec.wins}</td>
                <td className="p-2">{itemRec.losses}</td>
                <td className="p-2">{itemRec.winningPercentage}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    ))}
    </div>
);
}