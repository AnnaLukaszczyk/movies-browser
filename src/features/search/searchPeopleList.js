import { select } from "redux-saga/effects"
import { StyledMain } from "../../common/Main/styled"
import { searchPageNumberFromURL, selectSearchData } from "../../common/Navigation/SearchBar/searchSlice"
import { Pagination } from "../../common/Pagination"
import { Section, SectionTitle } from "../../common/Section"
import { PeopleTile } from "../../common/Tile"
import { toPeopleDetails } from "../../core/routes"
import { List, ListItem, StyledLink } from "../people/PeopleList/styled"
import { useSelector } from "react-redux"


export const SearchPeopleList = ({searchResults}) => {

    const searchPeople = searchResults;
   
    return (
        <StyledMain>
        <Section>
            <SectionTitle>Popular people</SectionTitle>
            {searchPeople && (
            <List>
                {searchPeople.map(({ id, profile_path, name }) => (
                    <ListItem key={id}>
                        <StyledLink to={toPeopleDetails({ id: id })}>
                            <PeopleTile
                                profilePath={profile_path}
                                name={name} />
                        </StyledLink>
                    </ListItem>
                ))}
            </List>
            )}
        </Section>
        <Pagination />
    </StyledMain>
    )
}