import { ADD_PROFILE } from './actions';

const initialState = {
    allUsers: [
        {
            name: "Matt",
            lastOnline: "2 hours",
            distance: '0.6 mi',
            photo: 'matt.jpg'
        },
        {
            name: "Steven",
            lastOnline: "6 hours",
            distance: '4.2 mi',
            photo: 'steven.jpg'
        },
        {
            name: "Jonathan",
            lastOnline: "2 days",
            distance: '.5 mi',
            photo: 'jon.jpg'
        }
    ]
};

export default (state = initialState, action) => {
    if (action.type === ADD_PROFILE) {
        //update this to update state in future
        return state;
    }

    return state;
}