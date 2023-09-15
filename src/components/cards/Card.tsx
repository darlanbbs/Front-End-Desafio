import * as C from "./styles";

type Props = {
  subject: string;
  grade: number;
  onDelete: () => void;
  TrashIcon: any;
  AiOutlineBarChart: any;
};

const getBackgroundColor = (subject: string) => {
  switch (subject) {
    case "Sociologia":
      return "#9B19C2";
    case "Biologia":
      return "#CC4090";
    case "Geografia":
      return "#C26719";
    case "Artes":
      return "#05A2C2";
    default:
      return "#333";
  }
};

const Card = ({
  subject,
  grade,
  onDelete,
  TrashIcon,
  AiOutlineBarChart,
}: Props) => {
  return (
    <C.MiniCardContainer color={getBackgroundColor(subject)}>
      <TrashIcon onClick={onDelete} />
      <C.Title>Title</C.Title>
      <C.SubTitle>Subtítulo Acizentado</C.SubTitle>
      <C.EndSection>
        <C.IconAndNote>
          <AiOutlineBarChart />
          {/* @ts-ignore */}
          <C.Note grade={grade}>{grade}</C.Note>
        </C.IconAndNote>
      </C.EndSection>
    </C.MiniCardContainer>
  );
};

export default Card;
