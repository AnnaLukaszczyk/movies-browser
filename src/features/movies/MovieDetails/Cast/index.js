import { toPeopleDetails } from "../../../../core/routes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectMovieCredits, setStatus } from "../movieCreditsSlice";
import { ListItem, StyledLink } from "../../../people/PeopleList/styled";
import { Section } from "../../../../common/Section";
import { SectionTitle } from "../../../../common/Section";
import { List } from "../../../people/PeopleList/styled";
import { PeopleTile } from "../../../../common/Tile";


export const Cast = () => {
  const dispatch = useDispatch();
  const cast = useSelector(selectMovieCredits);

  useEffect(() => {
    dispatch(setStatus());
  }, []);

  return (
    <>
      <Section>
        <SectionTitle>Cast</SectionTitle>
        <List>
          {cast.map(({id, credit_id, profile_path, name, character}) => (
            <StyledLink to={toPeopleDetails()}>
              <ListItem key={id}>
                <PeopleTile
                  key={credit_id}
                  id={id}
                  photo={profile_path}
                  title={name}
                  subtitle={character}
                />
              </ListItem>
            </StyledLink>
          ))}
        </List>
      </Section>
    </>
  ) 
};
