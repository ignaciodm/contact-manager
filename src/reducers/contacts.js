import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT
} from '../constants/ActionTypes'

import asset1 from '../assets/faces/1.jpg';
import asset2 from '../assets/faces/2.jpg';
import asset3 from '../assets/faces/3.jpg';
import asset4 from '../assets/faces/4.jpg';
import asset5 from '../assets/faces/5.jpg';
import asset6 from '../assets/faces/6.jpg';

const initialState = [
  {
    id: 1,
    name : 'Terrence S. Hatfield',
    tel: '651-603-1723',
    email: 'TerrenceSHatfield@rhyta.com',
    avatarUrl: asset1
  },
  {
    id: 2,
    name : 'Chris M. Manning',
    tel: '513-307-5859',
    email: 'ChrisMManning@dayrep.com',
    avatarUrl: asset2
  },
  {
    id: 3,
    name : 'Ricky M. Digiacomo',
    tel: '918-774-0199',
    email: 'RickyMDigiacomo@teleworm.us',
    avatarUrl: asset3
  },
  {
    id: 4,
    name : 'Michael K. Bayne',
    tel: '702-989-5145',
    email: 'MichaelKBayne@rhyta.com',
    avatarUrl: asset4
  },
  {
    id: 5,
    name : 'John I. Wilson',
    tel: '318-292-6700',
    email: 'JohnIWilson@dayrep.com',
    avatarUrl: asset5
  },
  {
    id: 6,
    name : 'Rodolfo P. Robinett',
    tel: '803-557-9815',
    email: 'RodolfoPRobinett@jourrapide.com',
    avatarUrl: asset6
  }
]

export default function contacts(state = initialState, action) {
  let contact = action.contact;

  switch (action.type) {

    case ADD_CONTACT:
      return [
        ...state,
        {
          id: state.reduce((maxId, c) => Math.max(c.id, maxId), -1) + 1,
          name: contact.name,
          tel: contact.tel,
          email: contact.email
        }
      ]

    case DELETE_CONTACT:
      return state.filter(c =>
        c.id !== action.id
      )

    case EDIT_CONTACT:
      return state.map(c =>
        c.id === action.id ?
          { ...c, name: contact.name,  tel: contact.tel, email: contact.email} :
          c
      )

    default:
      return state
  }
}
