import { Column } from "@first/shared/ui";

export function Home() {
  return (
    <div className="flex justify-between gap-2">
      <Column state="PLANNED"/>
      <Column state="ONGOING"/>
      <Column state="DONE"/>
    </div>
  );
}

export default Home;
