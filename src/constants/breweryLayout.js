import breweryLayout from '../assets/img/brewery-layout.png'

import { addHtml } from './utils';

export const BREWERY_LAYOUT = {
    modalInfo: [
        {
            keyReplace: 'bmil1',
            prevSteps: [
                'Improve our brewery layout'
            ],
            prevStepsBlock: [
                'In this exercise we will continue working with the redux brewery exercise'
            ],
        },
        {
            keyReplace: 'bmil2',
            prevStepsBlock: [
                {
                    text: {
                        __html: `Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/b20867de89a64347600c86e35ba9786e1b54e698" target="_blank" rel="noopener noreferrer">here</a>`
                    }
                }
            ],
        }
    ],
    guideInfo: [
        {
            keyReplace: 'bgil1',
            prevSteps: [
                'Improve current brewery layout'
            ],
            prevStepsBlock: [
                'Our brewery page should match below image'
            ],
            imageFragment: breweryLayout,
        },
    ],
    resolutionInfo: [
        {
            keyReplace: 'bril1',
            prevSteps: [
                'Brewery.js'
            ],
            fragment: (
`import React, { PureComponent } from 'react';

import Pagination from 'eventbrite_design_system/pagination/Pagination';
import ProgressIndicator from 'eventbrite_design_system/progressIndicator/ProgressIndicator';
import BreweryTableHeader from './BreweryTableHeader';
import BreweryTableBody from './BreweryTableBody';

export default class Brewery extends PureComponent {
    state = {
        breweryList: [],
        currentPage: 1,
        isLoading: true,
    }
    
    componentDidMount() {
        this.handleFetchData();
    }

    handleFetchData = (page = 1) => {
        const {
            onLoadBrewery,
        } = this.props;

        this.setState({ isLoading: true});

        onLoadBrewery(page).then(
            (breweryList) => this.setState({ breweryList, currentPage: page, isLoading: false })
        );
    }
    
    render() {
        const {
            breweryList,
            currentPage,
            isLoading,
        } = this.state;

        return (
            <section className="eds-l-pad-top-10">
                <BreweryTableHeader />
                {isLoading
                    ? <ProgressIndicator shape="linear" style="gradient" />
                    : (
                        <>
                            <BreweryTableBody breweryList={breweryList} />
                            <Pagination
                                pageNumber={currentPage}
                                resultsPerPage={5}
                                pageCount={10}
                                size="small"
                                onSelected={this.handleFetchData}
                            />
                        </>
                    )
                }
            </section>
        );
    }
}
`
            )
        },
        {
            keyReplace: 'bril2',
            prevSteps: [
                'BreweryTableBody.js'
            ],
            fragment: (
`import React from 'react';

import EditListItem from 'eventbrite_design_system/editListItem/EditListItem';
import Icon from 'eventbrite_design_system/icon/Icon';

import StatusDotChunkySvg from 'eventbrite_design_system/iconography/icons/StatusDotChunky';


const StatusLabel = ({ url }) => (
    <div
        className="eds-l-pad-right-2"
    >
        <span className="eds-text-color--grey-900">
            <Icon type={<StatusDotChunkySvg />} color="ui-green" />
            {url}
        </span>
    </div>
);

const Venue = ({ city, street }) => (
    <div
        className="eds-l-mar-vert-1"
    >
        <p>{city}</p>
        <p>{street}</p>
    </div>
);

const TertiaryContent = ({ websiteUrl }) => (
    <StatusLabel url={websiteUrl} />
);

const BreweryTableBody = ({ breweryList }) => {
    const items = breweryList.map(({
        id,
        name,
        websiteUrl,
        logoUrl,
        street,
        city,
    }) => (
        <EditListItem
            key={id}
            content={name}
            secondaryContent={<Venue city={city} street={street} />}
            tertiaryContent={
                <TertiaryContent websiteUrl={websiteUrl} />
            }
            imageUrl={logoUrl}
            isSquareImage={true}
            actionItems={[]}
            noWrap={true}
        />
    ));

    return (
        <section>
            {items}
        </section>
    );
};

export default BreweryTableBody;
`
            )
        },
        {
            keyReplace: 'bril3',
            prevSteps: [
                'BreweryTableHeader.js'
            ],
            fragment: (
`import React from 'react';

import EditListItem from 'eventbrite_design_system/editListItem/EditListItem';

const BreweryTableHeader = () => (
    <EditListItem
        __containerClassName="eds-g-group eds-bg-color--grey-100 eds-l-pad-hor-6 eds-l-pad-vert-4"
        content={
            <span className="eds-text-bm eds-text-weight--heavy">
                Brewery
            </span>
        }
        actionItems={[]}
        noWrap={true}
    >
    </EditListItem>
);

export default BreweryTableHeader;
`
            )
        },
        {
            keyReplace: 'bril4',
            prevSteps: [
                'Transformations brewery.js'
            ],
            fragment: (
`export const transformBreweries = (breweriesList = []) => (
    breweriesList.map(
        ({
            id,
            name,
            website_url: websiteUrl,
            street,
            city,
        }) => ({
            id,
            name,
            websiteUrl,
            street,
            city,
            logoUrl: 'https://i.picsum.photos/id/' + id + '/200/300.jpg\\'
        })
    )
);
`
            )
        },
    ]
};

export const BREWERY_LAYOUT_2 = {
    modalInfo: [
        {
            keyReplace: 'bmil21',
            prevSteps: [
                'Iterate over the new layout to include our own brewery list'
            ],
            prevStepsBlock: [
                'In this exercise we will continue working with previous exercise'
            ],
        },
        {
            keyReplace: 'bmil22',
            prevStepsBlock: [
                addHtml(`Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/eea119a7cd924ae12b8eec7ee14ed284705b75fb" target="_blank" rel="noopener noreferrer">here</a>`)
            ],
        }
    ],
    guideInfo: [
        {
            keyReplace: 'bgil21',
            prevSteps: [
                'Add a new component called BreweryLayout.js'
            ],
            postStepsBlock: [
                'Follow the next steps:'
            ],
            postSteps: [
                addHtml('Add a EDS <strong>Tab</strong> component with two items, <strong>Online Breweries</strong> & <strong>Our Breweries</strong>'),
                addHtml('Use previously created <strong>Brewery</strong> component. Take in consideration that you should provide a different set of props based on the brewery type.')
            ]
        },
        {
            keyReplace: 'bgil22',
            prevSteps: [
                'Edit Brewery.js component'
            ],
            postStepsBlock: [
                addHtml('This component should render an EDS <strong>EmptyState</strong> component whenever if there are no breweries and if is a custom brewery list.'),
            ],
            postSteps: [
                addHtml('Add a new property <strong>onAddBrewery</strong> to the <strong>EmptyState</strong> action')
            ]
        },
        {
            keyReplace: 'bgil23',
            prevSteps: [
                'Create a new component called BreweryTableFooter.js'
            ],
            prevStepsBlock: [
                addHtml('The component should render an EDS <strong>Pagination</strong> component when there is more than one page (pageCounty > 1)')
            ],
        },
        {
            keyReplace: 'bgil24',
            prevSteps: [
                'Edit your route to connect BreweryLayout.js instead of Brewery'
            ],
            prevStepsBlock: [
                addHtml('<strong>Note that</strong> you might edit your connector instead of the route')
            ],
        },
    ],
    resolutionInfo: [
        {
            keyReplace: 'bril21',
            prevSteps: [
                'Brewery.js'
            ],
            fragment: (
`import React, { PureComponent } from 'react';
import isEmpty from 'lodash/isEmpty';
import noop from 'lodash/noop';

import ProgressIndicator from 'eventbrite_design_system/progressIndicator/ProgressIndicator';
import EmptyState from 'eventbrite_design_system/emptyState/EmptyState';
import GhostGraphicSvg from 'eventbrite_design_system/iconography/icons/GhostGraphic';

import BreweryTableHeader from './BreweryTableHeader';
import BreweryTableBody from './BreweryTableBody';
import BreweryTableFooter from './BreweryTableFooter';

const BreweryTable = ({
    breweryList,
    currentPage,
    onSelected,
    onAddBrewery,
    pageCount
}) => (
    <>
        {
            isEmpty(breweryList)
                ? 
                    <div className="eds-l-pad-top-20">
                        <EmptyState
                            graphicType={<GhostGraphicSvg />}
                            title="No Breweries!!!"
                            primaryText="Add Breweries"
                            onPrimaryAction={onAddBrewery}
                        />
                    </div>
                :
                    <>
                        <BreweryTableBody breweryList={breweryList} />
                        <BreweryTableFooter currentPage={currentPage} onSelected={onSelected} pageCount={pageCount} />
                    </>
        }
    </>
);

export default class Brewery extends PureComponent {
    state = {
        breweryList: [],
        currentPage: 1,
        isLoading: true,
    }

    static defaultProps = {
        onAddBrewery: noop,
        pageCount: 10,
    }
    
    componentDidMount() {
        this.handleFetchData();
    }

    handleFetchData = (page = 1) => {
        const {
            onLoadBrewery,
        } = this.props;

        this.setState({ isLoading: true});

        onLoadBrewery(page).then(
            (breweryList) => this.setState({ breweryList, currentPage: page, isLoading: false })
        );
    }
    
    render() {
        const {
            breweryList,
            currentPage,
            isLoading,
        } = this.state;
        const {
            onAddBrewery,
            pageCount,
        } = this.props;

        return (
            <section>
                <BreweryTableHeader />
                {isLoading
                    ? <ProgressIndicator shape="linear" style="gradient" />
                    : (
                        <BreweryTable
                            breweryList={breweryList}
                            onSelected={this.handleFetchData}
                            currentPage={currentPage}
                            onAddBrewery={onAddBrewery}
                            pageCount={pageCount}
                        />
                    )
                }
            </section>
        );
    }
}
`
            )
        },
        {
            keyReplace: 'bril22',
            prevSteps: [
                'BreweryTableFooter.js'
            ],
            fragment: (
`import React from 'react';

import Pagination from 'eventbrite_design_system/pagination/Pagination';

const BreweryTableFooter = ({
    currentPage,
    pageCount,
    onSelected
}) => (
        pageCount > 1
            ? (
                <Pagination
                    pageNumber={currentPage}
                    resultsPerPage={5}
                    pageCount={pageCount}
                    size="small"
                    onSelected={onSelected}
                />
            )
            : null
    );

export default BreweryTableFooter;
`
            )
        },
        {
            keyReplace: 'bril3',
            prevSteps: [
                'BreweryTableLayout.js'
            ],
            fragment: (
`import React from 'react';

import Tabs from 'eventbrite_design_system/tabs/Tabs';
import Brewery from './Brewery';

export default class BreweryLayout extends React.PureComponent {
    render() {
        const {
            onLoadBrewery,
            onAddBrewery,
        } = this.props;

        return (
            <>
                <Tabs
                    items={
                        [
                            {
                                value: 0,
                                displayName: 'Online Breweries',
                                content: (
                                    <Brewery
                                        key={0}
                                        onLoadBrewery={onLoadBrewery}
                                    />
                                )
                            },
                            {
                                value: 1,
                                displayName: 'Our Breweries',
                                content: (
                                    <Brewery
                                        key={1}
                                        onLoadBrewery={() => Promise.resolve()}
                                        onAddBrewery={onAddBrewery}
                                    />
                                )
                            },
                        ]
                    }
                />
            </>
        );
    }
};
`
            )
        },
    ]
};
