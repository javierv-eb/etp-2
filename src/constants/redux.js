const REDUX_BASIC = {
    modalInfo: [
        {
            keyReplace: 'mi1',
            prevSteps: [
                'Create our first reducer',
            ],
            prevStepsBlock: [
                'The goal of this exercise is to create a new reducer and update our component props via an an action creator',
            ],
        },
        {
            keyReplace: 'mi4',
            prevStepsBlock: [
                {
                    text: {
                        __html: `Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/0620316462231d8bfb3a8b4c37418d6bace06e54" target="_blank" rel="noopener noreferrer">here</a>`
                    }
                }
            ],
        }
    ],
    guideInfo: [
        {
            keyReplace: 'girb1',
            prevSteps: [
                'Create a new class based component',
            ],
            prevStepsBlock: [
                'The goal of this exercise is to create a new class based component',
            ],
            postSteps: [
                'Add a new route called redux-basic',
                'Add a new class component with a button. Whenever the button is clicked a new label with current date should be displayed. Use component state to save this data',
            ],
        },
        {
            keyReplace: 'girb2',
            prevSteps: [
                'Update the new component to use redux',
            ],
            prevStepsBlock: [
                'The goal of this exercise is to update previously added component to use redux store',
            ],
            postSteps: [
                'Create a new reducer',
                'Create an action creator',
                'Create a connected component',
                'Remove state from your component and use props passed from redux store to show exactly the same',
            ],
        },
    ],
    resolutionInfo: [
        {
            keyReplace: 'rirb1',
            prevSteps: [
                'Class component',
            ],
            fragment: (
`
import React from 'react';

export default class ReduxBasic extends React.Component {
    state = {
        currentDate: 'No date',
    }

    handleNewDate = () => {
        this.setState({currentDate: new Date().toString()})
    }

    render () {
        const {
            currentDate,
        } = this.state;

        return (
            <section>
                <button onClick={this.handleNewDate}>New Date</button>
                <p>{currentDate}</p>
            </section>
        )
    }
};
`
            ),
            postSteps: [
                'The component should be created under components/redux folder',
            ]
        },
        {
            keyReplace: 'rirb2',
            prevSteps: [
                'Update routes',
            ],
            fragment: (
`
import ReduxBasic from './components/redux/ReduxBasic';

<Route path="exercises" component={SiteStructure}>
    <Route path ="redux-basic" component={ReduxBasic} />
</Route>
`
            ),
        },
        {
            keyReplace: 'rirb3',
            prevSteps: [
                'Update Exercises list',
            ],
            prevStepsBlock: [
                'Add a new item to items list'
            ],
            fragment: (
`
{
    content: 'Redux Basic',
    value: 'exercises/redux-basic',
    iconType: <ReactChunkySvg />,
},
`
            ),
            postStepsBlock: [
                'Please test your component'
            ]
        },
        {
            keyReplace: 'rirb4',
            prevSteps: [
                'Create a new connector under a new folder called redux',
            ],
            prevStepsBlock: [
                'This will modify above steps in order to add redux'
            ],
            fragment: (
`
import { connect } from 'react-redux';

import { setDate } from '../../actions/redux';

const mapStateToProps = ({
    dateReducer,
}) => ({
    currentDate: dateReducer,
});

const mapDispatchToProps = {
    setDate,
};

export default connect(mapStateToProps, mapDispatchToProps);

`
            ),
        },
        {
            keyReplace: 'rirb5',
            prevSteps: [
                'Update your component to be a funcional one',
            ],
            fragment: (
`
import React from 'react';

const ReduxBasic = ({
    currentDate,
    setDate,
}) => (
    <section>
        <button onClick={setDate}>New Date</button>
        <p>{currentDate}</p>
    </section>
);

export default ReduxBasic;
`
            ),
        },
        {
            keyReplace: 'rirb6',
            prevSteps: [
                'Create an action folder and add reduxBasic.js component inside it',
            ],
            fragment: (
`
export const SET_DATE = 'SET_DATE';

export const setDate = () => ({
    type: SET_DATE,
    payload: new Date().toString(),
});
`
            ),
        },
        {
            keyReplace: 'rirb7',
            prevSteps: [
                'Add a new reducer in the reducer/index.js file',
            ],
            fragment: (
`
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import { SET_DATE } from '../actions/redux';

const dateReducer = (state = 'No data', { type, payload }) => {
    let nextState = state;

    if (type === SET_DATE) {
        nextState = payload;
    }

    return nextState;
};

export default combineReducers({
    routing,
    dateReducer,
});
`
            ),
        },
        {
            keyReplace: 'rirb8',
            prevSteps: [
                'Update your routes',
            ],
            fragment: (
`
import connectReduxBasic from './containers/redux/connectReduxBasic';
...
<Route path ="redux-basic" component={connectReduxBasic(ReduxBasic)} />
....
`
            ),
        }
    ],
};

const REDUX_THUNK = {
    modalInfo: [
        {
            keyReplace: 'mi2',
            prevSteps: [
                'Use redux thunk to call a paginated api',
            ],
            prevStepsBlock: [
                'The goal of this exercise is to fetch a paginated api and save its response in a reducer'
            ],
        },
        {
            keyReplace: 'mi5',
            prevStepsBlock: [
                {
                    text: {
                        __html: `Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/f25c93f33cfca495e26e401810671606ec68568e" target="_blank" rel="noopener noreferrer">here</a>`
                    }
                }
            ],
        }
    ],
    guideInfo: [
        {
            keyReplace: 'girt1',
            prevSteps: [
                'Build our Brewery page'
            ],
            prevStepsBlock: [
                'We are going to fetch a paginated API and render it\'s results in a dummy component. Page layout and components will be covered later',
                // {
                //     text: {
                //         __html:
                //             `We will display our date using an <a href="https://eds-docs.evbhome.com/edit-list-item" target="_blank" rel="noopener noreferrer">edit-list-item</a> component.`,
                //     }
                // },
            ],
            postSteps: [
                'Create a new class component called Brewery.js under the redux folder whith an unordered list and a button to change page',
                'Create a new connector called connectBrewery.js',
                'Add a new Reducer',
            ],
        },
        {
            keyReplace: 'girt2',
            prevSteps: [
                'Fetch brewery API',
            ],
            prevStepsBlock: [
                {
                    text: {
                        __html:
                            `We will use a public api to retrieve <a href="https://api.openbrewerydb.org/breweries" target="_blank" rel="noopener noreferrer">brewery</a> data. This API accepts per_page & page query string parameters which will be used to paginate it',
                            <a href="https://api.openbrewerydb.org/breweries?per_page=5&page=1" target="_blank" rel="noopener noreferrer">https://api.openbrewerydb.org/breweries?per_page=5&page=1</a> data`,
                    }
                },
            ],
            fragment: (
`
[
    {
        "id": 247,
        "name": "Lost Forty Brewing",
        "brewery_type": "micro",
        "street": "501 Byrd St",
        "city": "Little Rock",
        "state": "Arkansas",
        "postal_code": "72202",
        "country": "United States",
        "longitude": "-92.260019",
        "latitude": "34.742845",
        "phone": "5013197275",
        "website_url": "http://www.lost40brewing.com/",
        "updated_at": "2018-08-23T23:23:24.018Z",
        "tag_list": []
    },
]
`                
            ),
            postStepsBlock: [
                'Only the following properties will be used from the JSON response'
            ],
            postSteps: [
                'id',
                'name',
                'website_url',
                'street',
                'city'
            ],
        },
        {
            keyReplace: 'girt3',
            prevSteps: [
                'Building our API layer',
            ],
            prevStepsBlock: [
                'Create a file called brewery.js under API folder',
                {
                    text: {
                        __html:
                            `Add <a href="https://www.npmjs.com/package/url-lib" target="_blank" rel="noopener noreferrer">url-lib</a> to the project (run <strong> yarn add url-lib</strong>).`,
                    }
                },
                'Add the following code to the new brewery.js file'
            ],
            fragment: (
`
import { formatUrl } from 'url-lib';

const BREWERY_URL = 'https://api.openbrewerydb.org/breweries';

const sdkRequestBuilder = (url, params) => {
    if (!params) {
        return url;
    }
    return formatUrl(url, params);
};

const sdkRequest = async (page) => {
    const fetchResult = await fetch(
        sdkRequestBuilder(BREWERY_URL, {'per_page': 5, page})
    );

    return await fetchResult.json();
} 

export const fetchBreweries = (page = 1) => sdkRequest(page);

`                
            ),
        },
    ],
    resolutionInfo: [
        {
            keyReplace: 'rirt1',
            prevSteps: [
                'Brewery.js'
            ],
            fragment: (
`
import React, { PureComponent } from 'react';
import isEmpty from 'lodash/isEmpty';

export default class Brewery extends PureComponent {
    handleFetchData = () => {
        const {
            onLoadBrewery,
        } = this.props;

        onLoadBrewery();
    }
    
    render() {
        const {
            breweryList,
        } = this.props;

        if (isEmpty(breweryList)) {
            return (
                <section>
                    <div> No Data </div>
                    <button onClick={this.handleFetchData}> Fetch data now!!!</button>
                </section>
            )
        }
        return (
            <section>
                <h1>Brewery List</h1>
                <ul>
                    {breweryList.map(
                        ({ name, id }) => (<li key={id}>{name}</li>)
                    )}
                </ul>
            </section>
        );
    }
}
`                
            ),
            postStepsBlock: [
                'Our dummy list component will only display data whenever `breweryList` is not empty',
                'The `handleFetchData` function will trigger a function provided from the `connectBrewery` connector that will fetch breweries'
            ]
        },
        {
            keyReplace: 'rirt2',
            prevSteps: [
                'connectBrewery.js'
            ],
            fragment: (
`
import { connect } from 'react-redux';

import { fetchBreweries } from '../../actions/redux';

const mapStateToProps = ({ breweriesReducer }) => {

    return {
        breweryList: breweriesReducer,
    };
};
const mapDispatchToProps = (dispatch) => ({
    onLoadBrewery: () => dispatch(fetchBreweries()),
});

export default connect(mapStateToProps, mapDispatchToProps);
`
            ),
            postStepsBlock: [
                'The connector picks breweryReducer data from redux store and inject it as prop from the underlying component',
                {
                    text: {
                        __html: 
                            `The 'onLoadBrewery' function, defined in 'mapDispatchToProps', dispatches an async action (please check <a href="https://redux.js.org/advanced/middleware/" target="_blank" rel="noopener noreferrer">middleware</a>) because the 'fetchBreweries' function is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" taget="_blank" rel="noopener" noreferrer">clousure</a>.
                            The <a href="https://github.com/reduxjs/redux-thunk#why-do-i-need-this" target="_blank" rel="noopener" noreferrer">Thunk middleware</a> will handle the async dispatching action that we will cover later`,
                    }
                },
            ]
        },
        {
            keyReplace: 'rirt3',
            prevSteps: [
                'Add `fetchBreweries` thunk in redux.js actions file'
            ],
            fragment: (
`
import { fetchBreweries as fetchBreweriesApi } from '../api/brewery';
import { transformBreweries } from '../transformations/brewery';

export const SET_DATE = 'SET_DATE';
export const SET_BREWERIES = 'SET_BREWERIES';

export const setDate = () => ({
    type: SET_DATE,
    payload: new Date().toString(),
});

export const setBreweries = (transformedBreweries) => ({
    type: SET_BREWERIES,
    payload: transformedBreweries,
});


export const fetchBreweries = (page = 1) => (dispatch) =>{
    fetchBreweriesApi(page).then(
        (breweryResult) => {
            const transformedBreweries = transformBreweries(breweryResult);

            dispatch(
                setBreweries(transformedBreweries)
            );
        }
    )
};
`
            ),
            postStepsBlock: [
                'The thunk middleware provide a way to dispatch sync/async actions and get current redux store data',
                {
                   text: {
                        __html:
                            `As we mentioned earlier <strong>fetchBreweries</strong> is a clouser, but <strong>thunk</strong> middleware it injects two arguments to the inner function
                            <ul>
                                <li><strong>dispatch</strong> which is provided from the store and used to dispatch sync or async actions</li>
                                <li><strong>getState</strong> which is a function that returns the complete redux store</li>
                            </ul>`
                   } 
                },
            ],
            postSteps: [
                'Note that, after fetching the API we invoke a transformation function to format the response',
                'Finally we dispatch a sync action creator to save the data in redux store'
            ],
        },
        {
            keyReplace: 'rirt4',
            prevSteps: [
                'Add a new reducer'
            ],
            fragment: (
`
...
import { SET_DATE, SET_BREWERIES } from '../actions/redux';
....

const breweriesReducer = (state = [], { type, payload }) => {
    let nextState = state;

    if (type === SET_BREWERIES) {
        nextState = payload;
    }

    return nextState;
};

export default combineReducers({
    routing,
    dateReducer,
    breweriesReducer,
});
`
            ),
        },
        {
            keyReplace: 'rirt5',
            prevStepsBlock: [
                {
                    text: {
                        __html: 
                            `Please remember to update your <strong>routes</strong>, to implement your <strong>transformation</strong> function and, finally, to update your <strong>ExercisesList</strong>.`
                    }
                }
            ]
        }
    ],
};

const REDUX_THUNK_2 = {
    modalInfo: [
        {
            keyReplace: 'mi3',
            prevSteps: [
                'Paginate the API',
            ],
            prevStepsBlock: [
                'Iterate previous exercise to call paginate the API'
            ],
        },
        {
            keyReplace: 'mi6',
            prevStepsBlock: [
                {
                    text: {
                        __html: `Check current exercise <a href="https://github.com/javierv-eb/etp-fe-exercise-resolution/commit/eefada5efc9447ccebe8a5bd1a29146d65ff72ef" target="_blank" rel="noopener noreferrer">here</a>`
                    }
                }
            ],
        }
        
    ],
    guideInfo: [
        {
            keyReplace: 'girt21',
            prevSteps: [
                'Edit your brewery.js component',
            ],
            postStepsBlock: [
                'In this exercise we are going to iterate redux-thunk exercise in order to:'
            ],
            postSteps: [
                'Add a state prop to manage the current page',
                'Add pagination component',
                'Update the breweriesReducer to save new pages',
                'Read from the store a previously fetched page',
            ]
        },
        {
            keyReplace: 'girt22',
            prevSteps: [
                'EDS pagination component',
            ],
            postStepsBlock: [
                {
                    text: {
                        __html:
                            `We will fetch new pages using the <a href="https://eds-docs.evbhome.com/pagination" target="_blank" rel="noopener noreferrer">pagination</a> component.`,
                    }
                }
            ],
            fragment: (
`<Pagination
    pageNumber={1}
    resultsPerPage={5}
    pageCount={10}
    size="continuous"
/>`
            ),
            postSteps: [
                'Max result per page is set in 5',
                'Page count will be defaulted on 10',
            ]
        }
    ],
    resolutionInfo: [
        {
            keyReplace: 'rirt21',
            prevSteps: [
                'Edit Brewery.js component'
            ],
            fragment: (
`
import React, { PureComponent } from 'react';
import isEmpty from 'lodash/isEmpty';

import Pagination from 'eventbrite_design_system/pagination/Pagination';

export default class Brewery extends PureComponent {
    state = {
        breweryList: [],
        currentPage: 1,
    }
    
    componentDidMount() {
        this.handleFetchData();
    }

    handleFetchData = (page = 1) => {
        const {
            onLoadBrewery,
        } = this.props;

        onLoadBrewery(page).then(
            (breweryList) => this.setState({ breweryList, currentPage: page })
        );
    }
    
    render() {
        const {
            breweryList,
            currentPage,
        } = this.state;

        if (isEmpty(breweryList)) {
            return (
                <section>
                    <div> Loading Brewery </div>
                </section>
            )
        }
        return (
            <section>
                <h1>Brewery List</h1>
                <ul>
                    {breweryList.map(
                        ({ name, id }) => (<li key={id}>{name}</li>)
                    )}
                </ul>
                <Pagination
                    pageNumber={currentPage}
                    resultsPerPage={5}
                    pageCount={10}
                    size="continuous"
                    onSelected={this.handleFetchData}
                />
            </section>
        );
    }
}
`
            ),
            postStepsBlock: [
                'The component is updated to retrieve data via the resolution of the API call. In addition we have change the component in the following way:'
            ],
            postSteps: [
                'The breweryList prop is removed and now the component handles it value via its state',
                {
                    text: {
                        __html: 
                            `The <strong>componentDidMount</strong> react life cycle method is added to perform an initial call to the API
                            `
                    }
                },
                {
                    text: {
                        __html: 
                            `The <strong>currentPage</strong> and <strong>breweryList</strong> properties are added to the state. On every single time a new page is fetched the breweryList & page are updated.
                            `
                    }
                },
            ]
        },
        {
            keyReplace: 'rirt22',
            prevSteps: [
                'Edit your redux.js thunk action',
            ],
            fragment: (
`export const fetchBreweries = (page = 1) => (dispatch, getState) => {
    const {
        breweriesReducer,
    } = getState();

    if (!isEmpty(breweriesReducer[page])) {
        return Promise.resolve(breweriesReducer[page]);
    }

    return fetchBreweriesApi(page).then(
        (breweryResult) => {
            const transformedBreweries = transformBreweries(breweryResult);

            dispatch(
                setBreweries({[page] : transformedBreweries})
            );
            return transformedBreweries;
        }
    )
};`
            ),
            postStepsBlock: [
                'This thunk method has been updated in the following way:'
            ],
            postSteps: [
                {
                    text: {
                        __html: 
                        `The <strong>getState</strong> function (which was described in the previous exercise) is used to get current brewerie reducer state. If the information is available in the store, then no API fetch is need so we return a solved promise with requested page data`
                    }
                },
                'The payload of our action creator is updated to store everysingle API response',
            ]
        },
        {
            keyReplace: 'rirt23',
            prevSteps: [
                'Edit your reducer',
            ],
            fragment: (
`const breweriesReducer = (state = {}, { type, payload }) => {
    let nextState = state;

    if (type === SET_BREWERIES) {
        nextState = {
            ...nextState,
            ...payload,
        };
    }

    return nextState;
};`
            ),
            postStepsBlock: [
                'We have updated our reducer. Please check below changes:'
            ],
            postSteps: [
                'The initialization state is changed from an empty array to an empty object',
                'We append new page information and keep current using the spread property',
            ]
        }
    ],
};

export const MODAL_INFO = {
    'redux-basic': REDUX_BASIC.modalInfo,
    'redux-thunk': REDUX_THUNK.modalInfo,
    'redux-thunk-2': REDUX_THUNK_2.modalInfo,
};

export const GUIDE_INFO = {
    'redux-basic': REDUX_BASIC.guideInfo,
    'redux-thunk': REDUX_THUNK.guideInfo,
    'redux-thunk-2': REDUX_THUNK_2.guideInfo,
};


export const RESOLUTION_INFO = {
    'redux-basic': REDUX_BASIC.resolutionInfo,
    'redux-thunk': REDUX_THUNK.resolutionInfo,
    'redux-thunk-2': REDUX_THUNK_2.resolutionInfo,
};