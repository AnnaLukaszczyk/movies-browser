import { StyledMain } from "../../common/Main/styled"
import { Pagination } from "../../common/Pagination"
import { Section, SectionTitle } from "../../common/Section"
import { PeopleTile } from "../../common/Tile"
import { toPeopleDetails } from "../../core/routes"
import { List, ListItem, StyledLink } from "../people/PeopleList/styled"


export const SearchPeopleList = (
    {
        searchQuery,
        searchResults,
        searchTotalResults,
        totalPages
    }) => {

    const searchPeople = searchResults;

    return (
        <StyledMain>
            <Section>
                <SectionTitle>Search results for {`"${searchQuery}"(${searchTotalResults})`}</SectionTitle>
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
            <Pagination
                totalPages={totalPages}
            />
        </StyledMain>
    )
}