import { Section } from "../../../common/Section";
import { PeopleDetailsTile } from "../../../common/Tile";

export const PeopleDetails = () => {
  return (
    <Section>
      <PeopleDetailsTile
        name="Liu Yifei"
        date="25.08.1987"
        pleace="Wuhan, Hubei, China"
        description="Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, 
        dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years."
      />
    </Section>
  );
};
