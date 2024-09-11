import { StyledMain } from "../../common/Main/styled"
import { Pagination } from "../../common/Pagination"
import { SearchResults } from "../../common/SearchResults"
import { Section } from "../../common/Section"
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
                <SearchResults
                    searchQuery={searchQuery}
                    searchTotalResults={searchTotalResults}
                />
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