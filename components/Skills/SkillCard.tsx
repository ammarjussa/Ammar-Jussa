import { Card, Tags, Tag, Image, Title } from "./styles";

interface Props {
  image: string;
  title: string;
  skills: string[];
}

export const SkillCard: React.FC<Props> = ({ image, title, skills }) => {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Tags>
        {skills?.map((skill, index) => (
          <Tag key={index}>{skill}</Tag>
        ))}
      </Tags>
    </Card>
  );
};
