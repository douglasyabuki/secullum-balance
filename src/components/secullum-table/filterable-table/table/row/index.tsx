import { List } from '../../../../../interfaces/table-data';
export interface RowProps {
  id: number;
  item: List;
}

export default function Row({ item, id }: RowProps) {
  const batidas = item.batidas
  const date = new Date(item.data);
  const fullDate = date.toLocaleDateString('pt-BR');
  const entranceA = item.batidas[0].valor ? item.batidas[0].valor : `00:00`
  const leavingA = item.batidas[1].valor ? item.batidas[1].valor : `00:00`
  const entranceB = item.batidas[2].valor ? item.batidas[2].valor : `00:00`
  const leavingB = item.batidas[3].valor ? item.batidas[3].valor : `00:00`
  const entranceC = item.batidas[4].valor ? item.batidas[4].valor : `00:00`
  const leavingC = item.batidas[5].valor ? item.batidas[5].valor : `00:00`

  const hoursToMinutes = (value: string) => {
    const originalValue = value.split(':');
    const minutes = Number(originalValue[0]) * 60 + Number(originalValue[1]);
    return minutes;
  };

  const minutesToHours = (value: number) => {
    const hours = Math.floor(value/60);
    const minutes = Math.floor(value%60);
    const stringifiedValue = `${hours}:${`${minutes}`.length === 1 ? `0${minutes}` : minutes}`
    return stringifiedValue;
  }

  const isTimeFormat = (value: string) => {
    const stringArr = value.split(':');
    return !isNaN(Number(stringArr[0])) && !isNaN(Number(stringArr[1]))
  }

  const calculateBalance = (e1: string, e2: string, e3:string, l1:string, l2:string, l3:string) => {
    const e1minutes = isTimeFormat(e1) ? hoursToMinutes(e1) : 0
    const e2minutes = isTimeFormat(e2) ? hoursToMinutes(e2) : 0
    const e3minutes = isTimeFormat(e3) ? hoursToMinutes(e3) : 0
    const l1minutes = isTimeFormat(l1) ? hoursToMinutes(l1) : 0
    const l2minutes = isTimeFormat(l2) ? hoursToMinutes(l2) : 0
    const l3minutes = isTimeFormat(l3) ? hoursToMinutes(l3) : 0
    const total = l1minutes + l2minutes + l3minutes - (e1minutes + e2minutes + e3minutes)
    const totalTime = minutesToHours(total)
    return totalTime;
  }

  const total = calculateBalance(entranceA, entranceB, entranceC, leavingA, leavingB, leavingC)

  return (
    <>
      <td className={`text-center`}>
        {fullDate}
      </td>
      <td className={`text-center`}>
        {entranceA}
      </td>
      <td className={`text-center`}>
        {leavingA}
      </td>
      <td className={`text-center`}>
        {entranceB}
      </td>
      <td className={`text-center`}>
        {leavingB}
      </td>
      <td className={`text-center`}>
        {entranceC}
      </td>
      <td className={`text-center`}>
        {leavingC}
      </td>
      <td className={`text-center`}>{total}</td>
    </>
  );
}
